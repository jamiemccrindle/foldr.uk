---
slug: bootstrap-terraform-state-in-azure
title: Bootstrap terraform state in azure
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [terraform, azure]
---

It's a good idea to store your Terraform state in a remote backend because:

* Terraform state often contains sensitive information e.g. credentials, access tokens etc. so using a backend that has access control and encrypts the state at rest and in transit will keep it safter.
* Your Terraform state can be backed up
* You can retrieve your state when running scripts in CI / CD pipelines.

If you're using Terraform to configure Azure resources, you'll probably want to use the [azurerm terraform backend](https://www.terraform.io/docs/language/settings/backends/azurerm.html).

This stores your state in an Azure Storage Account. The following Terraform will create a storage account that can be used to store your Terraform state in Azure:

`main.tf`

```terraform
resource "azurerm_resource_group" "terraform_state" {
  name     = var.resource_group_name
  location = var.location
}

resource "azurerm_storage_account" "terraform_state" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.terraform_state.name
  location                 = azurerm_resource_group.terraform_state.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
  min_tls_version          = "TLS1_2"
}

resource "azurerm_storage_container" "terraform_state" {
  name                  = var.container_name
  storage_account_name  = azurerm_storage_account.terraform_state.name
  container_access_type = "private"
}

variable "resource_group_name" { type = string }
variable "storage_account_name" { type = string }
variable "container_name" { type = string }
variable "location" { type = string }
```

To run it, you'll need to supply a file with the following variables set:

`bootstrap.tfvars`

```
# the name of the resource group e.g. "rg-mytfstate-shared-001"
resource_group_name = ""

# the name of the storage account e.g. "sttfstate001"
storage_account_name = ""

# the name of the container e.g. "tfstate"
container_name = "tfstate"

# e.g. "West Europe"
location = "West Europe"
```

To apply the terraform run the following

```shell
# log into azure, this assumes you have sufficient privileges to create resource groups
az login

# initialise terraform
terraform init

# show a plan
terraform plan -var-file=bootstrap.tfvars

# apply the terraform
terraform apply -var-file=bootstrap.tfvars
```