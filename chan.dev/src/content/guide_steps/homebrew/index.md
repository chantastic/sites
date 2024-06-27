---
title: Homebrew
---

## Installation

Follow the up-to-date instructions on the site.

## Install terminal applications

```sh
brew install neovim
```

## Install GUI apps with Cask

```sh
brew install --cask visual-studio-code
```

## Install fonts with cask

```sh
brew install --cask font-jetbrains-mono-nerd-font
```

## Create a Brewfile from installed apps

```sh
brew bundle dump
```

This will create a `Brewfile` in your current directory.  
You can control the output file with the `--file` flag.

```sh
brew bundle dump --file=~/.dotfiles/Brewfile
```

## Install Visual Studio Code extensions in Brewfiles

```txt file="Brewfile"
vscode "asvetliakov.vscode-neovim"
```

## Bundle apps from Brewfile

If you've used the default name of `Brewfile`, you can run the `brew bundle` command in that directory.

```sh
brew bundle
```

And if you want to bundle from a specific file, use the `--file` flag.

```sh
brew bundle --file=~/.dotfiles/Brewfile
```

## Conditionally bundle apps with environment variables

```txt file="Brewfile"
cask "arc" if [[ $MACHINE != "work" ]]
```

You can also use `unless`, if you think natural language reads better than code.

```txt file="Brewfile"
cask "arc" unless [[ $MACHINE == "work" ]]
```

## Set machine variables in `.zshenv`

It's my preference to set variables for these types of checks in `.zshenv`.  
I do not track this file in my my shared dotfiles. So it remains unique to each machine.

## References

-https://gist.github.com/ChristopherA/a579274536aab36ea9966f301ff14f3f#install-a-specific-brewfile -https://github.com/Homebrew/homebrew-bundle?tab=readme-ov-file#usage
