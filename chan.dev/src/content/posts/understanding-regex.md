---
title: Understanding regex (for beginners)
date: 2023-08-08
---

Regex is difficult to master but easy to get started with.
Knowing a few basics will help a ton

## Exact match

By default, regex will match the first instance of an exact pattern.

```diff lang="js"
"Michael Chan".match(/Michael Chan/)
// Michael Chan
```

## Capture group

Sometimes you don't want to capture everything in a match.
Use paretnthesis to capture set the boundaries of a capture group.

```diff lang="js"
"Michael Chan".match(/Michael (Chan)/)
// Chan
```

## Other examples to flesh out

```diff lang="js"
"Michael Chan".match(/Michael (.+)/);
// => Chan
```

```diff lang="js"
"Michael Chan".match(/Michael C(.+)n/);
// => ha
```
