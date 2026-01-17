---
slug: claude-code-pro-subscription-docker
title: How to Use Your Claude Code Pro Subscription in Docker
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [docker, claude-code, ai, oauth]
---

If you use an API key with Claude Code, you pay for API usage. If you authenticate via OAuth, you use your Pro subscription credits. For those of us who want our subscription to work inside a container, OAuth is the only path.

<!--truncate-->

The challenge: Claude Code stores state in two locations, and Docker volumes only mount directories, not files. This post shows how to persist both.

## The Two Config Locations

Claude Code stores credentials in `~/.claude/.credentials.json` but onboarding state in `~/.claude.json`:

```
/root/
├── .claude/                    ← Directory
│   ├── .credentials.json       ← OAuth tokens
│   ├── cache/
│   └── ...
└── .claude.json                ← Onboarding state (separate file)
```

A named volume on `~/.claude` will persist your credentials, but `~/.claude.json` is ephemeral container storage. Without it, Claude Code triggers the full onboarding flow on every container start.

## Common Pitfalls

Two issues that will bite you:

1. **Entrypoint scripts overwriting credentials.** If your entrypoint copies a mounted credentials file on every container start, it will overwrite tokens that were refreshed during browser auth. Only copy if the destination doesn't already exist.

2. **Named volumes only mount directories.** You can't add a single file to a named volume, and bind-mounting a file that doesn't exist yet creates a directory instead. The fix is to symlink the file into a directory that is mounted.

## The Solution

Symlink `~/.claude.json` into the persisted directory so one volume covers both locations.

`Dockerfile`

```dockerfile
FROM node:22-bookworm

RUN npm install -g @anthropic-ai/claude-code

RUN echo '#!/bin/bash\n\
mkdir -p /root/.claude\n\
if [ ! -L /root/.claude.json ]; then\n\
  rm -f /root/.claude.json\n\
  ln -s /root/.claude/claude.json /root/.claude.json\n\
fi\n\
if [ -f /root/.claude-creds ] && [ ! -f /root/.claude/.credentials.json ]; then\n\
  cp /root/.claude-creds /root/.claude/.credentials.json\n\
fi\n\
exec "$@"' > /entrypoint.sh && chmod +x /entrypoint.sh

WORKDIR /workspace
ENTRYPOINT ["/entrypoint.sh"]
CMD ["bash"]
```

`docker-compose.yml`

```yaml
services:
  claude:
    build: .
    stdin_open: true
    tty: true
    volumes:
      - .:/workspace
      - claude-data:/root/.claude
      - ~/.claude-container/.credentials.json:/root/.claude-creds:ro

volumes:
  claude-data:
```

## First Run

On first run, you'll need to complete the OAuth flow in your browser once. After that, the authentication state persists in the `claude-data` volume.

```shell
docker compose run claude claude
```

:::info

The credentials file at `~/.claude-container/.credentials.json` is only used for initial bootstrap. After your first browser authentication, the container will use the tokens stored in the named volume.

:::

## Debugging Tips

If authentication isn't persisting:

1. `docker exec` into a running container where auth works
2. Check what files exist in `/root/.claude/` and whether `/root/.claude.json` is a symlink
3. Look for `hasCompletedOnboarding` in the json files to see which one stores onboarding state

This generalises to any app that scatters state across multiple locations. Before building persistence, `find ~ -name "*appname*"` helps map where everything lands.

---

I debugged this with Claude Code running on my host machine while another instance ran inside the container, passing messages between them manually. A bit like *Severance*—the innie helping debug its own persistence issues while the outie ran commands from the outside.
