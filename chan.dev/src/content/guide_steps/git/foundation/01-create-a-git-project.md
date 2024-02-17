---
title: Create a Git Project
---

Let's create a new, empty git repository.

```sh title="Initialize and open new git repository"
# create new directory and initialize git into it
git init my-project

# cd into the the now project root
cd my-dir
```

Run `git status` to see the the status of the project.

```sh title="Check the project status"
git status
```

You should see a message like this:

```
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

## Assignment

Add a few files and run `git status` again.

<details>
  <summary>See my solution</summary>

```sh title="Add files and run git status"
# add three empty markdown files
touch git-init.txt
touch git-status.txt
touch git-add.txt

# get the repository status
git status
```

```sh
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        git-add.txt
        git-init.txt
        git-status.txt

nothing added to commit but untracked files present (use "git add" to track)
```

</details>

---

## Adding git to an existing project

Note that you can also use `git init` with an existing project.

```sh frame="terminal"
# navigate to your project root
cd path/to/project

# initializes the current directory
git init

# to begin staging and commiting
git status
```
