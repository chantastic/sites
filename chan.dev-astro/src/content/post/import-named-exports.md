---
title: Import Named Exports
description: "Explore the power of named exports in JavaScript modules while understanding the potential downside of naming collisions and their solutions."
publishDate: 2021-01-26
og:
  image: "https://chan.dev/og-image/import-named-exports.jpg"
---

By default, expressions and assignments declared inside a module aren't available outside of that module.

```js
// file: string-utils.mjs

function hype(message) {
  return `${message.toUpperCase()}!!!`;
}
```

Here, `hype` is only available to other functions inside `string-utils.mjs`.

We can expose `hype` to other modules by prepending the `export` keyword.

```diff
// file: string-utils.mjs

- function hype(message) {
+ export function hype(message) {
  return `${message.toUpperCase()}!!!`;
}
```

`hype` is now a _named export_ from the `string-utils` module.

Keep in mind that `export`-ing something doesn't mean it is automatically available throughout the codebase. Every `export` requires an `import`.

## Import named exports

Anything one module exports can be imported and used by another module.

```js
import { hype } from "./string-utils.mjs";

console.log(hype("moduuuules"));
// => MODUUUULES!!!
```

The syntax we use to access named exports is similar to object destructuring assignment.

```js
let person = { name: "chantastic" };
let { name } = person;
```

We can only import what we can access by name.

So, the import statement below would fail (with our current module):

```js
import {
  hype,
  chant /* oops. no chant */,
} from "./string-utils.mjs";

// SyntaxError:
// The requested module './string-utils.mjs' does not provide an export named 'chant'
```

## Import multiple named modules

We can import as many named exports as we like!

Let's implement and export a `chant` function:

```js/6-8
// file: string-utils.mjs

export function hype(message) {
  return `${message.toUpperCase()}!!!`;
}

export function chant(message) {
  return [...Array(3)].map(() => message).join("! ");
}
```

```js
import { hype, chant } from "./string-utils.mjs";

console.log(chant("M"));
// => Modules! Modules! Modules!
```

## My take

Named exports are the module feature I use most.

The major downside of named exports is naming collisions with other modules.  
In future posts I'll share a handful of strategies to compensate for and avoid naming collisions of named exports.

## Go pro

This is part of a course I'm creating on modules at [lunch.dev](https://www.lunch.dev).  
When live, members get access to this and other courses on React.

<script src="https://cdn.podia.com/embeds.js" async="async"></script>

<a href="https://www.lunch.dev/member" data-podia-embed="button" data-text="Join lunch.dev for videos">Join lunch.dev</a>
