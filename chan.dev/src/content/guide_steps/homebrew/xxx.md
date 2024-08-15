---
title: 'Appendix: Storing machine-specific environment variables'
slug: 'homebrew/env-variables'
---

ZSHELL is the default shell in MacOS.

And there are several dotfiles it makes use of for very different needs.

This isn't a `ZSHELL` course. So I'll get to the point but leave helpful references.

<!-- link to docs on zsh -->

## Use .zshenv to store machine-specific envs

The best file for machine-spcefic inv variables `.zshenv`.

At to keep in machine-specific, I make sure that this file is never saved in my [`.dotfiles`](https://chantastic/.dotfiles) with this line in git.

```txt file=".gitignore"
zshenv
```

<!-- pitch course on managing dotfiles -->
