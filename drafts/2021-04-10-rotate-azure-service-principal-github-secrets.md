---
slug: terraform-rotate-passwords
title: Rotate Azure Service Principal Secrets in GitHub
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [hola]
---

Use this devcontainer
az login or set XXX env vars
get a github token and set GITHUB_TOKEN
we should probably store state in a storage account...
talk about bootstrapping

Dec - 202012
Jan - 202101 - use odd pwd - odd pwd should rotate, even pwd should not rotate - so we want to odd to be a new keeper and the even not to be. it rotates on whole numbers.
Feb - 202102 - use even pwd - even pwd should rotate, odd pwd should not rotate
Mar - 202103 - use odd pwd - odd pwd should rotate, even pwd should not rotate

phase 2

create a service principal that can create sps etc. manually
afterwards you'll replace that with an sp that is generated via tf...
ok, maybe what we're going to do is... run it with my creds first...
we need to bootstrap the storage account...