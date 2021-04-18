---
slug: how-to-install-a-specific-version-of-terraform-github-actions-using-apt-get
title: Install a specific version of Terraform in a Github Action using apt
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [terraform, github]
---

The standard way to install Terraform on ubuntu is via `apt` but the instructions typically don't show how to
select a specific version. Most examples of how to install a specific version of terraform in a GitHub action
just pull the binary directly.

This is how you can install a specific version of Terraform for use in a GitHub action using `apt`:

```yaml
name: install-terraform-example

on:
  push:
    branches:
      - main

jobs:

  install-terraform:
    runs-on: ubuntu-latest
    steps:
    - run: |
        curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
        sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
        sudo apt-get update
        sudo apt-get install terraform=0.14.10
```