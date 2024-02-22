---
title: Create a Git Repository
---

A repository is just a directory with a `.git` folder in it.  
Ok, it's *slightly* complicated than that, but not much.

Use the `init` command to create a new git repository and directory.

```sh title="Initialize and open new git repository"
git init my-project
```

`cd` into the new project directory and run run `ls` to see it's contents.

```sh title="Open our repository and see what's in it"
cd my-project
ls
```

It's empty, right?
Just what we'd expect from a new project.
Run `ls` again but this time with the `--all` option.

```sh title="List hidden files in /my-project"
ls --all
```

Now we can see the hidden `.git` directory that makes `my-project` a git repository.

```txt title="ls --all (output)"
.
..
.git
```

## Our first git command

Run `git status` to see the repository status.
This is the most frequently used git command.

```sh title="Check the repository status"
git status
```

You'll see this message:

```txt title="git status (output)"
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

This one command introduces a lot of language for us to cover:
- We're on *branch* `main`.
- Which has no *commits*.
- And no files to *add* and *track*.

But before we do, let's do a quick git magic trick…

---
## Assignment #1

A git repository is any old project directory with a properly initialized `.git` directory inside of it.

Remove the `.git` directory and and run `git status` again.
Do you see the same message or get an error?

---

## Assignment #2

Existing project directories can be made into git repositories by running `git init` in their project root.

```sh title="Initialize an existing project"
cd my-existing-project
git init
```

Try this in an existing folder and run `git status`. What do you see?

And don't forget, just remove the `.git` directory makes it a normal directory again.