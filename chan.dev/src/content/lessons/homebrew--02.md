---
title: Bundling from Brewfiles
date: 2026-03-28
collection: guides
guide: homebrew
guide_step: bundling-from-brewfiles
sequence: bundling-from-brewfiles
---
If you've used the default name of `Brewfile`, you can run the `brew bundle` command in that directory.

```sh
brew bundle
```

And if you want to bundle from a specific file, use the `--file` flag.

```sh
brew bundle --file=~/.dotfiles/Brewfile
```
