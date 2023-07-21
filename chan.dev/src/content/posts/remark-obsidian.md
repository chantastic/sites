---
title: Using obsidian as a Astro frontend
date: 2023-07-19
---

Stage: notes-only

plugin: `remark-obsidian`

## Settings in `astro.config.mjs`

```js
[
  remark_obsidian,
  { markdownFolder: `${process.cwd()}/src/content` },
],
```

This is important for obsidian to resolve URLs.

## Status

Note: I don't use this technique. I don't particularly care for obsidian. I just found it interesting to explore.
I'm not using it because the plugin was incompatible with `remark-directive`, which I need more.