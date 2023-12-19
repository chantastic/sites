---
title: Fix prebuild and postbuild scripts in pnpm
date: 2023-12-19
references:
  - https://github.com/pnpm/pnpm/issues/2891
---

In [pnpm](https://pnpm.io/), [`prebuild` and `postbold` events don't fire](https://github.com/pnpm/pnpm/issues/2891) like the do with [npm](https://docs.npmjs.com/cli/v10/commands) and [yarn](https://yarnpkg.com/).

This can be "fixed" by adding `enable-pre-post-scripts=true` to `.npmrc`.

```txt title=".npmrc"
enable-pre-post-scripts=true
```
