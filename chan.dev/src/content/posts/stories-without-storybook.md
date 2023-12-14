---
title: Build your own Storybook in Astro, using CSF
date: 2023-08-18
---

You don't need Storybook to write stories.

When I started at Chromatic, I was using Storybook everyday to build a component library.
Today, I mostly just build my website.

No shade on Storybook but I will never install Storybook to do [component driven development] here.
And even if I wanted to, there isn't an Astro integration.

But I reach for stories all the time.

What I want is stories, without the `book`.

## What we're going to build

Storybook is a full development environment.

This is how I think of stories, as a baseline.

1. CSF (Meta, named exports, object syntax, play functions)
1. pages
1. page fragments for linking
1. A formatted name from the named export name
1. interface information
1. a nested container inside

Bonus:

- A default template
- A sidebare

---

Questions:

- How to parse an astro component file and render that using CSF?
- How to test test components using testing-library (vitest?)
-

flowchart LR
id["This ❤ Unicode"]
