---
title: working with yarn versions
date: 2024-01-17
description: "Set yarn version with Corepack. Enable corepack, run yarn set version stable, and reinstall dependencies."
tags: [tools, javascript]
references:
  - https://yarnpkg.com/getting-started/install
  - https://yarnpkg.com/cli/set/version
---

Enable [Node.js Corepack](https://yarnpkg.com/corepack)

```sh
corepack enable
```

Set yarn version and re-install dependencies

```sh
yarn set version stable && yarn install
```
