---
slug: microsoft-graph-terraform-data-source
title: Microsoft Graph API Terraform Data Source
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [terraform, azure]
---

Most Terraform examples that reference permissions from the Microsoft Graph use the GUIDs for the permissions. This makes
it harder to write the Terraform config, as you have to look up the GUIDs for each permission. It also makes it harder
to do code reviews where reviewers typically just believe the comment that describes what permission the GUID represents.

This is what the code for the required_resource_access for an azure ad application for k8s looks like using just the GUIDs 
(this is from a real example online):

```terraform
required_resource_access {
  resource_app_id = "00000003-0000-0000-c000-000000000000"
  resource_access {
    id   = "7ab1d382-f21e-4acd-a863-ba3e13f7da61"
    type = "Role"
  }
  resource_access {
    id   = "06da0dbc-49e2-44d2-8312-53f166ab848a"
    type = "Scope"
  }
  resource_access {
    id   = "e1fe6dd8-ba31-4d61-89e7-88639da4683d"
    type = "Scope"
  }
}
```

Your AD tenant should have enterprise applications (service principals) for the various Microsoft services including
the Microsoft Graph.

![Microsoft Graph Enterprise Application](/img/blog/2021-04-19-microsoft-graph-terraform-data-source/enterprise-applications.png)

You can look this up as a data source using Terraform as follows:

```terraform
data "azuread_service_principal" "graph" {
    # graph api application id
    application_id = "00000003-0000-0000-c000-000000000000"
}
```

This will return a data source that has all of the oauth2 permissions and app roles for the Microsoft Graph. They can be awkward to
work with, so I'll usually create a new object that maps the permission name to the permission id e.g.:

```terraform
locals {
    graph = {
        application_id = data.azuread_service_principal.graph.application_id
        app_roles = {for app_role in data.azuread_service_principal.graph.app_roles : app_role.value => app_role.id}
        oauth2_permissions = {for oauth2_permission in data.azuread_service_principal.graph.oauth2_permissions : oauth2_permission.value => oauth2_permission.id}
    }
}
```

Using this, the example above would look like:

```terraform
required_resource_access {
  resource_app_id = local.graph.application_id
  resource_access {
    id   = local.graph.app_roles["Directory.Read.All"]
    type = "Role"
  }
  resource_access {
    id   = local.graph.oauth2_permissions["Directory.Read.All"]
    type = "Scope"
  }
  resource_access {
    id   = local.graph.oauth2_permissions["User.Read"]
    type = "Scope"
  }
}
```

::: tip

Note: this works for more than just the Microsoft Graph, you can use the same technique to look up app roles and permissions from any of your
enterprise applications.

:::