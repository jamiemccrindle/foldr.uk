---
slug: github-actions-schedule-to-delete-resources-from-resource-group
title: Keep your Azure Costs low by removing dev resources from resource groups on a schedule.
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [azure, github, github-actions]
---

I have a Visual Studio subscription that gives me £40.00 of Azure Credit each month to experiment in Azure. I find it relatively easy to spend this if I'm not careful about deleting resources after I've spun them up. Fortunately, I can use a GitHub Actions workflow on a schedule to save me when I forget.

I usually associate a set of resource groups with a repository in GitHub. I have a couple of options, I could delete the resource groups themselves or I could delete the resources in the resource groups. In this example, I've chosen just to delete the resources.

To do this, I use `complete` mode with an empty ARM template:

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
    ]
}
```

The GitHub Action then looks as follows:

```yaml
name: destroy

on:
  schedule:
    - cron: "0 0 * * *"
  # add workflow dispatch to be able to run trigger the workflow manually
  workflow_dispatch:

jobs:

  destroy:
    runs-on: ubuntu-latest
    steps:
    
    - name: Azure Login
      uses: azure/login@v1
      with:
        creds: ${{ secrets.AZURE_CREDENTIALS }}

    - uses: actions/checkout@v2

    - name: Destroy
      id: deploy-acr
      uses: azure/CLI@v1
      with:
        azcliversion: 2.23.0
        inlineScript: |
          az deployment group create --name destroy --resource-group NAME_OF_YOUR_RESOURCE_GROUP --template-file .github/workflows/empty.json --mode Complete
```

Check out the the following repo for a working example: https://github.com/jamiemccrindle/bicep-app-service-container