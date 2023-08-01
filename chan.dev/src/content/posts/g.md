---
title: A Blazingly Fast zsh Git Alias
---

```zsh
# No arguments: `git status -sb`
# With arguments: acts like `git`
g() {
  if [[ $# -gt 0 ]]; then
    git $@
  else
    git status -sb
  fi
}
```
