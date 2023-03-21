---
title: Import and Rename Named Exports
description: "Learn how to import and rename named exports in JavaScript. Avoid naming collisions and maintain control in your modules, using the as keyword."
publishDate: 2021-01-27
og:
  image: "https://chan.dev/og-image/import-and-rename-named-exports.jpg"
tags:
---

JavaScript Modules have a syntax for remaning named exports, at import.

```js
import { exportedName as localName } from "…";
```

I think about this as "given name" and "nickname". _Michael Chan_ is the name my creators gave me but — on this site — I go by _chantastic_.

```js
import { michaelChan as chantastic } from "./michael-chan.mjs";
```

This is one of two tools we have for avoiding naming collisions between modules.

## Rename named exports to avoid a collision

In my last post — [Import Named Exports](../import-named-exports/) — we imported two functions from the `string-utils` module: `hype` and `chant`.

```js
import { hype, chant } from "./string-utils.mjs";
```

What if the modules we're working in already has a `hype` function? Are we stuck stuck? Do we have to refactor our code to consider the new module?

Nope!

We use the `as` keyword to rename named exports locally.

```diff
- import { hype, chant } from "./string-utils.mjs";
+ import {
+   hype as hypeText,
+   chant
+ } from "./string-utils.mjs";
```

With `as`, we have full control of the module we're working in.  
We can assign named exports to any free, local identifier.

## My take

The `as` keyword gives us a way to avoid naming collisions, or use a name that's more contextually accurate. This is great for working with modules in a codebase _and_ the larger npm ecosystem.

However, I find this to be a less ideal form collision avoidance than importing all of a module's contents into a single variable.

But we'll cover that in a future post 😅.

## Go pro

This is part of a course I'm build on modules at [lunch.dev](https://www.lunch.dev).  
When live, members get access to this and other courses on React.

{% lunch-dev-cta %}
