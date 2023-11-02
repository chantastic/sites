---
title: "The missing devolpment workflow: Snapshot-driven development"
date: 2023-10-27
---

The developer workflow is missing something.

Having built design systems in Storybook, I found glimpses of it.

There was one project that solidified the need for me.
It was a simple UI that that displayed a share-url based your enabled features.

The challenge was that this UI sat at the top of a mountain of tech debt and institutional unrest.
It got data from:
- Props
- A Rest API
- Global user data

Ultimately, these can all be transformed into props, if you isolate just the view layer. And we did. that part was simple.

The Rest API could be mocked. Also, not a problem.

But the framework supplied data was weird.

---

Component-driven-development doesn't scale to complex full-stack componentry.

- props
- async state
- interactions
- framework-level

---

## Separate Story from the Book

Leverage the actual framework for rendering.

Storybook is just an incidental compilation of those stories.

---

You get Stories as a result of any preview deploy pipeline.