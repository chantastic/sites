---
title: Configure local git
date: 2026-03-28
collection: guides
guide: git-foundations
guide_step: xx-configure-user
sequence: xx-configure-user
---

This is recorded into commits.
_Necessary config._

```sh
git config --global user.name "Michael Chan"
```

```sh
git config --global user.email "hi@chan.dev"
```

## Where are these files

`~/.gitconfig`

I prefer `~/.config/git/config` because it's where most of my other program config is.

## Other helpful config

- `help.autocorrect 1`: https://arc.net/l/quote/dlpewzgc
- more: https://spin.atomicobject.com/git-configurations-default/
- tips for people who aren't me, except maybe git local merged: https://www.freecodecamp.org/news/git-config-how-to-configure-git-settings/
