---
title: '3. Use nunjucks for templates'
status: 'Accepted'
date: 2023-01-07
---

## Context

I attempted a rewrite to liquid.
I'd prefer to use liquide because it's the templating language used by ConvertKit.

Unfortunately, @11ty/navigation seemed to stop working entirely.

## Decision

Continue using Nunjucks for the indeterminate future.
Clean up template use for simpler transition later.

## Consequences

The only real disadvantage is that I can't use a single templating language between site and ConvertKit.

Nunjucks is generally more expressive and docs have improved.
