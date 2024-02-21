---
title: Create a Git Repository
---

A repository is any directory with a `.git` folder in it.  
Ok, it's more complicated than that, but only a little.

Let's create a new, empty git repository.

```sh title="Initialize and open new git repository"
git init my-project
```

`cd` into the new project directory and run run `ls`.

```sh title="Open our repository and see what's in it"
cd my-project
ls
```

It's empty, right?
Just what we'd expect from a new project.

Look again, but this time use `ls --all`.
This all options shows hidden folders as well, revealing a `.git` directory.
This directory is what makes this project a **Git repository**.

This means we can run git commands to learn about the project and it's status.

Run `git status` to see the repository status.

```sh title="Check the repository status"
git status
```

You'll see this message:

```
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

This will all make sense in time.

For now, congrats on your new repo!

## Assignment

I want you to see how powerful this directory is.
Delete the `.git` directory and run `git status` again.

You'll get an error.
Because the `.git` makes this project a repository.

Now, you can get it back again by running `git init` (with no project name).
This will initialize git in the current directory and get us back to where we were before.

Add a few files and run `git status` again.

Give it a try!
