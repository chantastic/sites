---
title: "Create a Universal Terminal Command for pnpm, npm, and yarn"
references:
  - https://zsh.sourceforge.io/Intro/intro_4.html
---

I've accidentally typed `npm` for the last time.

This is the zsh script I made to detect and run the correct package manager every time: `pnpm`, `npm`, and even ::shudders:: `yarn`.

```zsh
# determine incumbant package manager and run command with it
p() {
  if [[ -f pnpm-lock.yaml ]]; then
    command pnpm "$@"
  elif [[ -f yarn.lock ]]; then
    command yarn "$@"
  elif [[ -f package-lock.json ]]; then
    command npm "$@"
  else
    command pnpm "$@"
  fi
}
```

<!-- TODO: write generic post on zsh fnuctions -->
