---
slug: azure-bicep-app-service-custom-container
title: Building an Azure App Service with a custom container using Bicep
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [azure, bicep, app-service, docker]
---

Azure App Service with custom containers is a convenient way to host docker containers in Azure. While there
are a number of tutorials on how to do this with `az cli` there aren't too many that show how to do it with
ARM templates or Azure Bicep. Read on to see how to set up an Azure Container Registry, create scope maps and scope mapped tokens, build and push a custom image and finally use that custom image in your Azure App Service.

## First, a word on scope maps and tokens

Azure Container Registry has a number of authentication mechanisms for pulling docker images. The only one that lets you limit access to specific docker images are [scoped mapped tokens](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-repository-scoped-permissions) which is why I'm going to use them in this example.

:::info note

Scope Maps and Scope Map Tokens are currently in preview, so use with caution in production.
:::

## Setting up your ACR

You'll need a Container Registry to host your custom container. The following bicep sets up a Premium Azure Container Registry. The reason I'm using a Premium SKU is so that I can create scoped maps and scope mapped tokens.

```bicep
param location string = resourceGroup().location

resource acr 'Microsoft.ContainerRegistry/registries@2019-12-01-preview' = {
  name: acrName
  location: location
  sku: {
    name: 'Premium' // to support scope mapped tokens
  }
  properties: {
    adminUserEnabled: false
  }
}
```

You may also want to assign an owner to your ACR

```bicep
param ownerPrincipalId string

resource ownerRoleAssignment 'Microsoft.Authorization/roleAssignments@2018-01-01-preview' = {
  name: guid('${acr.id}/${ownerPrincipalId}/owner')
  scope: acr
  properties: {
    roleDefinitionId: '/subscriptions/${subscription().subscriptionId}/providers/Microsoft.Authorization/roleDefinitions/8e3af657-a8ff-443c-a75c-2fe8c4bcb635'
    principalId: ownerPrincipalId
  }
}
```

And set up your scope maps and scope mapped tokens

```bicep
// create a scope map for your repository
resource bicepAppServiceContainerScopeMap 'Microsoft.ContainerRegistry/registries/scopeMaps@2020-11-01-preview' = {
  parent: acr
  name: 'bicepAppServiceContainer'
  properties: {
    actions: [
      'repositories/bicep-app-service-container/content/read'
      'repositories/bicep-app-service-container/metadata/read'
    ]
  }
}

// create a token and associate it with your scope map
resource bicepAppServiceContainerToken 'Microsoft.ContainerRegistry/registries/tokens@2020-11-01-preview' = {
  parent: acr
  name: 'bicepAppServiceContainer'
  properties: {
    scopeMapId: bicepAppServiceContainerScopeMap.id
    status: 'enabled'
  }
}
```

## Generating passwords for your tokens

The bicep above will create the scope map tokens but will not generate the passwords. You'll need `az cli` for that.

```shell
ACR_PULL_TOKEN=$(az acr token credential generate -n bicepAppServiceContainer -r $ACR_NAME --expiration-in-days 30 --query passwords[0].value -o tsv)
```

This will generate the passwords and set ACR_PULL_TOKEN to be the value of one of the generated passwords.

## Setting up your App Service with a Custom Container

Use the bicep below to create a linux App Service plan and an App Service that uses your custom container.

```bicep
@description('The name of the app service that you wish to create.')
param siteName string

@description('The docker registry hostname.')
param dockerRegistryHost string

@description('The docker registry username.')
param dockerUsername string;

@secure()
@description('The docker registry password.')
param dockerPassword string

@description('The relative docker image name.')
param dockerImage string

var servicePlanName = 'plan-${siteName}-001'

resource servicePlan 'Microsoft.Web/serverfarms@2016-09-01' = {
  kind: 'linux'
  name: servicePlanName
  location: resourceGroup().location
  properties: {
    name: servicePlanName
    reserved: true
  }
  sku: {
    tier: 'Standard'
    name: 'S1'
  }
  dependsOn: []
}

resource siteName_resource 'Microsoft.Web/sites@2016-08-01' = {
  name: siteName
  location: resourceGroup().location
  properties: {
    siteConfig: {
      appSettings: [
        {
          name: 'WEBSITES_ENABLE_APP_SERVICE_STORAGE'
          value: 'false'
        }
        {
          name: 'DOCKER_REGISTRY_SERVER_URL'
          value: 'https://${dockerRegistryHost}'
        }
        {
          name: 'DOCKER_REGISTRY_SERVER_USERNAME'
          value: dockerUsername
        }
        {
          name: 'DOCKER_REGISTRY_SERVER_PASSWORD'
          value: dockerPassword
        }
      ]
      linuxFxVersion: 'DOCKER|${dockerRegistryHost}/${dockerImage}'
    }
    serverFarmId: servicePlan.id
  }
}
```

To see a working example, have a look at the following repository https://github.com/jamiemccrindle/bicep-app-service-container
