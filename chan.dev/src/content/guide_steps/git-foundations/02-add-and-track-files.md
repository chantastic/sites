---
title: Add and tracked files
---

Git is a content tracker.
So let's add some content.

Create a few text files to keep notes on the commands we're learning.

```sh title="Add files to git repository"
touch git-init.txt git-status.txt git-add.txt
```

Run `git status` to see what's changed.

```diff title="git status (changed output only)"
Untracked files:
  (use "git add <file>..." to include in what will be committed)
-	git-add.txt
-	git-init.txt
-	git-status.txt
```

Note the addition of the `Untracked files` section.
We now have files that can be added to git index.

Use `git add <file>` to do so.

```sh title="Add single file to git index"
git add git-add.txt
```

Run `git status` again to

```diff title="git status (changed output only)"
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
+	new file:   git-add.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
-	git-init.txt
-	git-status.txt
```

Now we see an additional section `Changes to be comitted`.

## Adding all changes

I'd be pretty irritated to add files one-by-one.
Fortunately, Git gives us a number of options.

Most common is is the shortgut add.
Using `.` adds all of the files in your working directory.

```sh title="Add all changes in the current directory"
git add .
```

You can also use globs to select groupings of similar files.
Say, I wanted to only files with a `.txt` suffix.

```sh title="Add all changes in the current directory with a .txt suffix"
git add '*.txt'
# don't forget the quotes when using globs
```

## Assignment #1

Use the different approaches to `add` files to the staging area.

## Assignment #2

You may need to remove changes as well. Run `git status` to discover the command git recommends for this.

## Assignment #3

Check out the documentation for `git-add` by running `git help add`.
There's an _interactive mode_ that I use quite frequently but won't cover in this guide.
