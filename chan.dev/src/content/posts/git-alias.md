---
title: Git Aliases
---

```ini title="~/.gitconfig"
[alias]
	aa = add --all
	ap = add --patch

	b = branch
	bm = branch --merged
	branches = for-each-ref --sort=-committerdate --format=\"%(color:blue)%(authordate:relative)\t%(color:red)%(authorname)\t%(color:white)%(color:bold)%(refname:short)\" refs/remotes

	c = commit -v
	ca = commit --amend
	cm = commit -v -m

	d = diff
	ds = diff --staged
	dm = diff master

	g = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative

	l = pull

	o = checkout

	p = push
	pf = push --force-with-lease

	r = rebase
	rc = rebase --continue
	rs = rebase --skip
	ri = rebase -i

	s = status -sb
```
