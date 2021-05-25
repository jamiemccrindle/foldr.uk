---
slug: rotating-azure-credentials-in-github-with-terraform
title: How to rotate your AZURE_CREDENTIALS in GitHub with Terraform
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [terraform, azure, github]
---

If you're deploying your Azure infrastructure from GitHub, you'll need Azure service principal credentials stored as secret variables.
You may also want to rotate those credentials. This entry describes how you can use Terraform in your GitHub actions to configure
and rotate your Azure service principal credentials.

In a [previous post, I describe how to safely rotate credentials using Terraform](https://foldr.uk/terraform-rotate-secrets). This post
builds on that by showing you how to create client secrets for your Azure service principals and store them as secrets in GitHub.

First off, we'll create a Terraform module that will manage the secret rotation in Azure and GitHub. This stores everything you need
to be able to deploy from GitHub to Azure, including information about the credentials, service principal, tenant and subscription.

It stores them both as an AZURE_CREDENTIALS json block that matches the output of `az ad sp create-for-rbac --sdk-auth` which is
useful for the [Azure Login GitHub Action](https://github.com/marketplace/actions/azure-login) under the variable AZURE_CREDENTIALS
as well as broken out into ARM_CLIENT_ID, ARM_TENANT_ID, ARM_SUBSCRIPTION_ID and ARM_CLIENT_SECRET which is useful for running
Terraform in GitHub Actions.

The format of the sdk-auth that the Azure Login GitHub Action requires is as follows:

```json
{
  "clientId": "APPLICATION_ID",
  "clientSecret": "CLIENT_SECRET",
  "subscriptionId": "SUBSCRIPTION_ID",
  "tenantId": "TENANT_ID",
  "activeDirectoryEndpointUrl": "https://login.microsoftonline.com",
  "resourceManagerEndpointUrl": "https://management.azure.com/",
  "activeDirectoryGraphResourceId": "https://graph.windows.net/",
  "sqlManagementEndpointUrl": "https://management.core.windows.net:8443/",
  "galleryEndpointUrl": "https://gallery.azure.com/",
  "managementEndpointUrl": "https://management.core.windows.net/"
}
```

The following files will create a Terraform module that will allow you to safely rotate secrets in Azure and store the currently
active secret in GitHub secrets for use in GitHub Actions:

`provider.tf`

```hcl
provider "azurerm" {
  features {}
}
```

`variables.tf`

```hcl
variable "subscription_id" { type = string }
variable "tenant_id" { type = string }
variable "repository" { type = string }
variable "application_id" { type = string }
variable "application_object_id" { type = string }
variable "date" { type = string }
```

`main.tf`

```hcl
locals {
  date        = tonumber(var.date)
  odd_keeper  = floor((local.date + 1) / 2)
  even_keeper = floor(local.date / 2)
  use_even    = local.date % 2 == 0
}

resource "random_uuid" "odd" {
}

resource "azuread_application_password" "odd" {
  application_object_id = var.application_object_id
  description           = "odd"
  value                 = random_password.odd.result
  end_date_relative     = "1440h"
  key_id                = random_uuid.odd.result
}

resource "random_password" "odd" {
  keepers = {
    "date" = local.odd_keeper
  }
  length  = 64
}

resource "random_uuid" "even" {
}

resource "azuread_application_password" "even" {
  application_object_id = var.application_object_id
  description           = "even"
  value                 = random_password.even.result
  end_date_relative     = "1440h"
  key_id                = random_uuid.even.result
}

resource "random_password" "even" {
  keepers = {
    "date" = local.even_keeper
  }
  length  = 64
}

resource "github_actions_secret" "terraform" {
  repository      = var.repository
  secret_name     = "AZURE_CREDENTIALS"
  plaintext_value = <<-EOT
{
  "clientId": "${var.application_id}",
  "clientSecret": "${local.use_even ? random_password.even.result : random_password.odd.result}",
  "subscriptionId": "${var.subscription_id}",
  "tenantId": "${var.tenant_id}",
  "activeDirectoryEndpointUrl": "https://login.microsoftonline.com",
  "resourceManagerEndpointUrl": "https://management.azure.com/",
  "activeDirectoryGraphResourceId": "https://graph.windows.net/",
  "sqlManagementEndpointUrl": "https://management.core.windows.net:8443/",
  "galleryEndpointUrl": "https://gallery.azure.com/",
  "managementEndpointUrl": "https://management.core.windows.net/"
}
EOT
}

resource "github_actions_secret" "arm_client_id" {
  repository = var.repository
  secret_name = "ARM_CLIENT_ID"
  plaintext_value = var.application_id
}

resource "github_actions_secret" "arm_client_secret" {
  repository = var.repository
  secret_name = "ARM_CLIENT_SECRET"
  plaintext_value = local.use_even ? random_password.even.result : random_password.odd.result
}

resource "github_actions_secret" "arm_subscription_id" {
  repository = var.repository
  secret_name = "ARM_SUBSCRIPTION_ID"
  plaintext_value = var.subscription_id
}

resource "github_actions_secret" "arm_tenant_id" {
  repository = var.repository
  secret_name = "ARM_TENANT_ID"
  plaintext_value = var.tenant_id
}
```

## Using the module

```hcl
module "example_github_azure" {
  source                = "LOCATION_OF_MODULE"
  subscription_id       = AZURE_SUBSCRIPTION_ID
  tenant_id             = AZURE_TENANT_ID
  repository            = GITHUB_REPO_NAME
  application_id        = AZURE_APPLICATION_ID
  application_object_id = AZURE_APPLICATION_OBJECT_ID
  date                  = var.date
}
```

To see it in action, have a look at this repository [https://github.com/jamiemccrindle/azure-rotate-service-principal-github-secrets](https://github.com/jamiemccrindle/azure-rotate-service-principal-github-secrets)
