---
title: Fly.io
date: 2023-12-10
---

## Setup

```zsh
brew install flyctl
```

```zsh
fly help
```

```zsh
fly auth login
```

```zsh
fly docs
```

## Concepts

- [Fly Machines](https://fly.io/docs/machines/)
  - Ephemeral
- [Dockerfile for undetectable build/frameworks](https://fly.io/docs/languages-and-frameworks/dockerfile/)
- Remote Builders: machines that build apps when deploying without a local Docker daemon or when using `--remote-only`. Free
- [fly.toml]: configuration center and primary at build time.
- [Fly Volumes](https://fly.io/docs/volumes/)
  - Slice of reserved NVMe disk storage
  - Attached to Fly Machine
- [LiteFS](https://fly.io/docs/litefs/)

## First

```zsh
git clone https://github.com/fly-apps/hello-fly.git
cd hello-fly
fly launch --now
```

_Name must be globally unique._

`fly apps open` (in repo).

Urls are supported with `open`: `fly apps open /chan`

## LiteFS

[Reference docs](https://fly.io/docs/litefs/speedrun/)

- Create LiteFS Cloud cluster