---
title: wip git course
date: 2024-01-19
---

## Working title

Practical Git for Everyday Developers

## Contents

## Learner outcomes

- Create repositories and remote repositories (Github).
- Commit diffs with both broad and selective additions.
- Revert commits (with forward-moving history).
- Create, checkout, and delete local and remote branches.
- Merge, un-merge, and rebase branches.
- Push to, and pull from remote repositories.

## Approach

When teaching operational programs, I like to teach all operations together: create, read, update destroy.

This is the path I find most progressive and practical:

[Local repositories](#local-repositories)  
[Commits](#commits)  
[Staged diffs](#staged-diffs)  
[Branches](#branches)  
[Stashes](#stashes)  
[Merges](#merges)  
[Remote Repositories](#remote-repositories)  
[Syncing commits, branches, and repositories](#syncing-commits-branches-and-repositories)

## Prerequisite

- Install Git on {@[mac, Linux, windows]}
- Authenticate with GitHub using SSH

## Estimate

45-60min.  
40+ lessons.

## Outline

### Local repositories

- CREATE: `git init`
- READ: `git status`
- _UPDATE: reference(Commit)_
- DESTROY: `rm -rf .git` or `cd .. && rm -rf project_directory`

### Commits

- CREATE: `git add . && git commit`
- READ: `git show`
  - `~` Use to show commits relative to `head`
- READ \[Collection\]: `git log` See all commits
- UPDATE: `git commit --amend`
- DESTROY: `git reset --hard head~`
  - `~` as a relative head reference
- DESTROY (non-destructive): `git revert head`
  - `~` as a relative head reference
  - Describe the importance of non-destruction

### Staged diffs

- CREATE/UPDATE:
  - `git add`
    - argument options (`.`, file, flags, glob, etc.)
- READ:
  - `git diff`, `git diff --staged`
  - `git status`
- DESTROY:
  - `git reset`
    - argument options (`.`, file, flags, glob, etc.)
  - `git checkout (options)`

### Branches

- CREATE: `git checkout -b branch-name`
- READ: `git branch`
- UPDATE:
  - `git checkout branch` (switch branches)
- DESTROY: `git checkout main && git branch -D branch`

Note that branches come with diffs — leading into stashes.

### Stashes

- CREATE:
  - `git stash`
  - `git stash create`
- READ:
  - `git stash list`
  - `git stash show <name>`
- UPDATE:
  - `git stash push`
- DESTROY:
  - `git stash drop`
  - `git stash pop`
  - `git stash clear`
- PULL:
  - `git stash apply`

### Merges

- CREATE: `git merge <branch>`
- READ: `git diff <branch>`
- UPDATE: `git show <merge-commit>`
- DESTROY (non-destructive): `git revert -m 1 <merge-commit>`

- REBASE: `git checkout branch && git rebase main && git checkout main && git merge branch`

### Remote Repositories

- CREATE:
  - Open Git provider UI. (I'm using GitHub)
  - Create a new remote repository
  - Follow instructions to add remote and push

```
  echo "# sample-empty-repo" >> README.md
  git init
  git commit -m "first commit"
  git branch -M main
  git push -u origin main
```

- READ:
  - `git remote -v`
  - `git remote show <remote_name>`
- UPDATE:
  - `git remote rename`
  - `git remote set_url (options)`
  - `git branch --set-upstream <<origin/branch>>`
- DESTROY: `git remote remove <remote_name>`
- CLONE:
  - `git clone git@github.com:chantastic/sample-repo.git`

### Syncing commits, branches, and repositories

- `git push` (and options)
- `git fetch` (and options)
- `git pull` (and options)
- `git rebase origin/<branch>`
- `git reset --hard origin/<branch>`

## Consider?

I consider these additional commands necessary but they don't fit into CRUD format.
They can be added as tips and tricks, at the end. Or applied to any one of the courses listed in [Future courses](#future-next-step-courses).

- `cherry-pick`
- `git rebase` (and squash)
- `--fixup` commits
- `reflog`
- custom log
- git global config I prefer
- `.gitignore`
- `clean`

## Next steps

- Compare the outline to previous material for omissions.
- Add required [considerations](#consider) in.
- Create lesson titles (based on [outline context](#outline)) and descriptions.

## Future "next step" courses

Future course ideas are listed to demonstrate topics that _are not_ covered by design.

- Practical {@[GitHub, GitLab]} for Everyday Developers
- Practical Git for Open Source Collaboration
  - tags, releases, branch, forks, merge, pr, rebase, discussions, issues, gh cli, etc.
- Debugging with Git (reflog, bisect, rebase, shas, relative head, advanced reset, custom train tracks logs)
- Supercharged Github, with the gh cli
- Expert Git in VS Code
