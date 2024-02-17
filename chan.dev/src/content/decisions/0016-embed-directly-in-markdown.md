---
title: 16. Embed directly in markdown
status: Accepted
date: 2024-02-17
---
## Context

`remark-embed` is a completely unreliable part of my markdown system.  
I'd installed it for notion-like embedding but it just keeps shitting the bed on upgrades.

## Decision

Stop using `remark-embed` and embed directly.

## Consequences

- I'll likely have a few broken embeds (no matter how diligent I am about fixing them).
- I have to fix those embeds. blech.
- Requires that I use the embed code instead of the link.
- Old embedded code wont have the benefit of any improvements to embed containers.