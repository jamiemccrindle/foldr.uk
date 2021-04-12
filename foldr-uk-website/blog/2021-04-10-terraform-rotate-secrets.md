---
slug: terraform-rotate-secrets
title: Rotate secrets with terraform
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [terraform, secrets]
---

Rotating secrets is a Good Thing&trade; as it limits the length of a time a compromised set of credentials can be used for.

It's quite difficult to make secret rotation atomic i.e. changing a secret in your identity provider at exactly the same
time you change the secret in the system that uses it for authentication. Mismatches between the values will result in 
authentication failures.

The ideal is where the identity provider supports multiple valid secrets for a single identity e.g. Azure Service Principals. If that's
the case, you can have 2 secrets active at the same time and rotate them on offset time periods e.g.:

![password rotation](/img/blog/2021-04-10-terraform-rotate-secrets/rotation.drawio.svg "Secret Rotation")

:::info

This example uses secrets that expire after 60 days and rotates them each month. The mechanism supports rotating secrets more frequently
so pick an expiry window that meets your risk appetite. The limiting factor is when infrastructure needs to be redeployed after 
a secret is rotated.

:::

In the terraform below, I've set up 2 passwords, one called `even` and one called `odd`.

The `odd` password rotates at the beginning of the odd months and is the current password for those months i.e.:

* January, March, May, July, September, November

And the `even` password rotates at the beginning of the even months and is the current password for those months i.e.:

* February, April, June, August, October, December

And now for the terraform:

```terraform
variable "date" {
    type = string
}

locals {
  date        = tonumber(var.date)
  odd_keeper  = floor((local.date + 1) / 2)
  even_keeper = floor(local.date / 2)
  use_even    = local.date % 2 == 0
}

resource "random_password" "odd" {
  keepers = {
    "date" = local.odd_keeper
  }
  length           = 32
  special          = true
  override_special = "_%@"
}

resource "random_password" "even" {
  keepers = {
    "date" = local.even_keeper
  }
  length           = 32
  special          = true
  override_special = "_%@" 
}

output "current_secret" {
    value = local.date % 2 == 0 
                ? random_password.even.result 
                : random_password.odd.result
}
```

For this to work, you need to supply a `date` variable when you call terraform that contains the current year and month e.g.:

```shell
terraform apply -auto-approve -var="date=`date +%Y%m`"
```

:::caution

Terraform will store these secrets in terraform state, so make sure you're [using a backend that is appropriately secured](https://www.terraform.io/docs/language/state/sensitive-data.html).

:::
