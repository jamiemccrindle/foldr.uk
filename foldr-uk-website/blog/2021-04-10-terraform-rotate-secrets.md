---
slug: terraform-rotate-secrets
title: Rotate secrets with terraform
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [terraform, secrets]
---

In this series, I'll be using this mechanism to safely rotate Azure Service Principal credentials stored in a GitHub Actions Secret
using terraform.

In this blog post, I'll focus on the secret rotation mechanism in terraform.

Rotating secrets is a Good Thing&trade; as it limits the length of a time a compromised set of credentials can be used for.

If you do implement secret rotation with a single secret a different challenge is ensuring that the secret
is rotated in the identity provider at the same time as in the services that use the secret or you may have authentication failures.

The ideal is where the identity provider supports multiple secrets for a single identity e.g. Azure Service Principals. If that's
the case, you can have 2 secrets active at the same time and rotate them on offset time periods e.g.:

![password rotation](/img/blog/2021-04-10-terraform-rotate-secrets/rotation.drawio.svg "Secret Rotation")

This mechanism should allow you to pick whatever password expiry window that suits your risk appetite but in this example,
I'll work with passwords that are valid 60 days.

I've set up 2 passwords, one called `even` and one called `odd`.

The `odd` password rotates at the beginning of the odd months and is the current password for those months i.e.:

* January, March, May, July, September, November

And the `even` password rotates at the beginning of the even months and is the current password for those months i.e.:

* February, April, June, August, October, December

The following is the terraform that acheives this:

```terraform
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