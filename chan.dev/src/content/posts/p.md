---
title: "A Universal Terminal alias for bun, pnpm, npm, and yarn"
references:
  - https://zsh.sourceforge.io/Intro/intro_4.html
  - https://unix.stackexchange.com/questions/33255/how-to-define-and-load-your-own-shell-function-in-zsh
---

I've accidentally typed `npm` for the last time.

This is the zsh script I made to detect and run the correct package manager every time: `bun`, `pnpm`, `npm`, and even ::shudders:: `yarn`.

```zsh
# determine local package manager and run command with it
p() {
  if [[ -f bun.lockb ]]; then
    command bun "$@"
  elif [[ -f pnpm-lock.yaml ]]; then
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

## What it does

This function ensures that I don't irritate myself as I switch between projects — typing `npm start` when I meant `bun start` or `npm i` when I mant `yarn`.

Working in projects with different package managers, I often type the wrong command and then loose time to confusing runtime errors or unwanted lock files.

## What it doesn't do

This function does not create a universal interface around the different package managers.

I rarely have trouble using the right commands in the right project. And I enjoy utilizing the subtlies in each package manager.

## Unecessary philosophy

Universal interfaces are a great way to unlearn everything that makes anything good.

This function is more akin to an alias that prevents bugs.

## Learn more

Check out the attached references if you want to learn how to set up zsh functions.
