---
title: "A Universal Terminal alias for bun, pnpm, npm, and yarn"
description: "Use zsh functions to create command line alias that determines local package manager and runs the corrrect comamnd: bun, pnpm, npm, or yarn."
publishDate: 2023-09-09
tldr: |
  I've typed `npm` for the last time.
  This zsh function ensures that I don't spawn uneccassary heartache as I switch between projects — typing `npm start` when I meant `bun start` or `npm i` when I mant ::shudders:: `yarn`.
cover: ./p/p_thumbnail.png
coverAlt: Screenshot of a text editor revealing a zsh function that determines the local package manager and runs the correct command. Works with bun, pnpm, npm, and yarn.
---

I've typed `npm` for the last time.

As JavaScript developers, we have four package managers to choose from. And between personal, work, and open source projects, I use every last one of them. This is a problem because typing the wrong command costs time and irritation.

Below is zsh function that I've used to eliminate package manager context switching heartache — typing `npm start` when we meant `bun start` or `npm i` when we mean ::shudders:: `yarn`.

```zsh
# determine package manager and run command with it
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

## What this command does not do

This function does not create a universal interface around the varied package managers. I don't find universal interfaces helpful.

And I enjoy utilizing the subtlies in each package manager. My problem is the muscle memory around comman cammonds (`start`, `install`, and `test`) and those actions inadvertantly spawing confusion.

## Learn more

Check out these references if you want to learn more about zsh functions.

- [Intro to zsh functions](https://zsh.sourceforge.io/Intro/intro_4.html)
- [How to define and load your own shell function in zsh](https://unix.stackexchange.com/questions/33255/how-to-define-and-load-your-own-shell-function-in-zsh)
