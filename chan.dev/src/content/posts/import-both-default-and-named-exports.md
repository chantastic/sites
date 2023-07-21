---
title: Import Both Default and Named Exports
description: "How to efficiently import both default and named exports in JavaScript, keeping your code clean and well-organized by mixing these import styles"
publishDate: 2021-02-05
og:
  image: "https://res.cloudinary.com/chantastic/image/upload/v1685927001/chan.dev/import-default-from-named-export.jpg"
tags: [code]
---

We can mix and match import styles to keep code tidy and direct.

The code below imports both the default export (as `cheesburger`) as well as all named exports.

```js
import {
  default as cheeseburger,
  bun,
  cheese,
  patty,
} from "./cheeseburger.mjs";
```

We can tidy it up a smidge by splitting the default export and named export import statements — using a comma.

```diff lang="js"
- import {
-   default as cheeseburger,
-   bun,
-   cheese,
-   patty,
- } from "./cheeseburger.mjs";
+ import cheeseburger, { bun, cheese, patty } from "./cheeseburger.mjs";
```

This eliminates the need to rename the `default` on import with `as`.

## What mixed imports are not

The import position of default and named exports cannot be swapped. When mixing the two, it's always default first then named exports.

When I first saw this syntax, I assumed that every comma was like a repeaet — a new opportunity to assign local variables. That's not how it is. One comma, after the default, and before the named.

## Go pro

This is part of a course I'm build on modules at [lunch.dev](https://www.lunch.dev).  
When live, members get access to this and other courses on React.

<script src="https://cdn.podia.com/embeds.js" async="async"></script>
<a
href="https://www.lunch.dev/member" data-podia-embed="button" data-text="Join lunch.dev for this course">Join lunch.dev for this course</a>

