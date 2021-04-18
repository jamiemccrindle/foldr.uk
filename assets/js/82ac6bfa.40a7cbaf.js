(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(91)),s={slug:"bootstrap-terraform-state-in-azure",title:"Bootstrap terraform state in azure",author:"Jamie McCrindle",author_title:"foldr",author_url:"https://github.com/jamiemccrindle",author_image_url:"https://avatars.githubusercontent.com/u/909696?s=60&v=4",tags:["terraform","azure"]},c={permalink:"/bootstrap-terraform-state-in-azure",editUrl:"https://github.com/jamiemccrindle/foldr.uk/tree/main/foldr-uk-website/blog/blog/2021-04-18-bootstrap-azure-terraform-state.md",source:"@site/blog/2021-04-18-bootstrap-azure-terraform-state.md",description:"It's a good idea to store your Terraform state in a remote backend because:",date:"2021-04-18T00:00:00.000Z",formattedDate:"April 18, 2021",tags:[{label:"terraform",permalink:"/tags/terraform"},{label:"azure",permalink:"/tags/azure"}],title:"Bootstrap terraform state in azure",readingTime:1.485,truncated:!1,nextItem:{title:"Safely rotate secrets with terraform",permalink:"/terraform-rotate-secrets"}},u=[],i={toc:u};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It's a good idea to store your Terraform state in a remote backend because:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Terraform state often contains sensitive information e.g. credentials, access tokens etc. so using a backend that has access control and encrypts the state at rest and in transit will keep it safter."),Object(o.b)("li",{parentName:"ul"},"Your Terraform state can be backed up"),Object(o.b)("li",{parentName:"ul"},"You can retrieve your state when running scripts in CI / CD pipelines.")),Object(o.b)("p",null,"If you're using Terraform to configure Azure resources, you'll probably want to use the ",Object(o.b)("a",{parentName:"p",href:"https://www.terraform.io/docs/language/settings/backends/azurerm.html"},"azurerm terraform backend"),"."),Object(o.b)("p",null,"This stores your state in an Azure Storage Account. The following Terraform will create a storage account that can be used to store your Terraform state in Azure:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"main.tf")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-terraform"},'resource "azurerm_resource_group" "terraform_state" {\n  name     = var.resource_group_name\n  location = var.location\n}\n\nresource "azurerm_storage_account" "terraform_state" {\n  name                     = var.storage_account_name\n  resource_group_name      = azurerm_resource_group.terraform_state.name\n  location                 = azurerm_resource_group.terraform_state.location\n  account_tier             = "Standard"\n  account_replication_type = "GRS"\n  min_tls_version          = "TLS1_2"\n}\n\nresource "azurerm_storage_container" "terraform_state" {\n  name                  = var.container_name\n  storage_account_name  = azurerm_storage_account.terraform_state.name\n  container_access_type = "private"\n}\n\nvariable "resource_group_name" { type = string }\nvariable "storage_account_name" { type = string }\nvariable "container_name" { type = string }\nvariable "location" { type = string }\n')),Object(o.b)("p",null,"To run it, you'll need to supply a file with the following variables set:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"bootstrap.tfvars")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'# the name of the resource group e.g. "rg-mytfstate-shared-001"\nresource_group_name = ""\n\n# the name of the storage account e.g. "sttfstate001"\nstorage_account_name = ""\n\n# the name of the container e.g. "tfstate"\ncontainer_name = "tfstate"\n\n# e.g. "West Europe"\nlocation = "West Europe"\n')),Object(o.b)("p",null,"To apply the terraform run the following"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# log into azure, this assumes you have sufficient privileges to create resource groups\naz login\n\n# initialise terraform\nterraform init\n\n# show a plan\nterraform plan -var-file=bootstrap.tfvars\n\n# apply the terraform\nterraform apply -var-file=bootstrap.tfvars\n")))}l.isMDXComponent=!0}}]);