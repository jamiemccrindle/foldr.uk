---
slug: devcontainer-kafka-to-cosmosdb
title: Kafka and CosmosDB in a devcontaienr
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [azure, cosmosdb, kafka]
---

Confluent and Microsoft have collaborated to create a cosmosdb connector for kafka. This post describes how to get them
up and running in a devcontainer.

https://www.confluent.co.uk/blog/integrate-azure-and-confluent-to-stream-data-into-cosmos-db/

```Dockerfile
FROM cnfldemos/cp-server-connect-datagen:0.4.0-6.1.0

RUN confluent-hub install microsoftcorporation/kafka-connect-cosmos:1.0.9-beta --no-prompt
```

To get the master key, attach to the emulator container and check start.sh:

```shell
root@32098097d428:/usr/local/bin/cosmos# cat start.sh | grep EMULATOR_KEY=
EMULATOR_KEY="${AZURE_COSMOS_EMULATOR_KEY:-REDACTED}"
```
