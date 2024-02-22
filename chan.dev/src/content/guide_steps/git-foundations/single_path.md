---
title: the single path
---

## git-help

```sh title="Get Git Help"
git help
```

<details>
<summary>In video</summary>

- `git help` - help summary
- `git help -a` — available subcommands
- `git help -g` — concept guides
- `git help git` - overview (full manual)
- `git help <command>` - subcommand documentation

</details>

## git-init

```sh title="Create and new git repository"
git init my-git-notes
```

<details>
<summary>In video</summary>

- `cd my-git-notes`
- `ls`
- `ls --all`
- `ls .git`
- `git help init`

</details>

## git-status

```sh title="Get the status of a git repository"
git status
```

<details>
<summary>In video</summary>

- `git status`
- `rm -vfr .git`
- `git status`
- `git init`

</details>

## git-add

```sh title="Add to git index"
git add .
git add some-file.txt
git add path/to/file.txt
git add '*.txt'
git add -p
```

<details>
<summary>In video</summary>

- `git add help`

</details>

## git-reset

```sh title="Reset git index"
git reset .
git reset some-file.txt
git reset path/to/file.txt
git reset '*.txt'
git reset -p
```

<details>
<summary>In video</summary>

- `git reset help`

</details>

## git-commit

```sh title="Commit index to the git repository"
git commit -m "add git notes files"
git commit # defaults to VISUAL or EDITOR (likely Vim)
GIT_EDITOR="code --wait" git commit
```

<details>
<summary>In video</summary>

- `git commit`
- brings up editor

https://stackoverflow.com/a/36644561

- `core.editor = nvim`

</details>

## git-log

```sh title=""
git log
git log --pretty=oneline
git log --pretty=oneline --abbrev-commit
git log --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative
```

- graph can't be set true: https://stackoverflow.com/a/25712489

## git-diff

Add a change to one of the files.

`echo "git add help" > git-add.txt`

```sh title="
git diff
git diff --staged
git diff head
git diff head~
```

https://www.golinuxcloud.com/git-head-caret-vs-tilde-at-sign-examples/

- add more to git to stage

## git-remote

## git-push

## git-pull

## git-fetch

## git-clone

## on configuring git

Let's add got config for all of our options
