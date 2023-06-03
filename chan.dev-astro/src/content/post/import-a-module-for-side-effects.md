---
title: Import Modules for Side Effects
description: "Explore the concept of importing JavaScript modules solely for their side effects, the use of conditional side effects with dynamic imports, and best practices to follow."
publishDate: 2021-01-26
og:
  image: "https://chan.dev/og-image/import-a-module-for-side-effects.jpg"
---

Modules — in JavaScript — can be imported strictly for their side effects.

```js
import "./string-utils.mjs";
```

Notice.
We're not making any local assignments.  
We aren't importing functions or constants for later use.  
We're simply importing the global effects of the module, as if the code lived in this file.

On the module side, simply write code with effects.

```js
// file: ./string-utils.mjs
console.info("string-utils loaded.");
```

## Conditional side effects with dynamic imports

We can load modules with side effects conditionally, with an immediately invoked async function.

```js
(async () => {
  if (true /* maybe some environment var */) {
    await import("/modules/my-module.js");
  }
})();
```

Here, you can imagine checking an environment variable before importing side effects.

## Don't mix side effects and exports

Modules can contain a mix of exports and effects.  
While there may be a good reason to do this, it also make your imports unpredictable.

Here's why I recommend avoiding the mix:

```js
import hype from "./string-utils.mjs";
// loads both exports AND side effects

console.log(hype("moduuuuuules"));
// => string-utils loaded.
// => MODUUUUUULES!!!
```

Module effects _always_ run at import.

In a mixed module, you _can_ import only the effects but you _can not_ import only the exports.

## Side effect imports in the wild…

I see this style of import used with Webpack to import stylesheets.

In this case, Webpack is packaging up CSS as JavaScript and appending it to the browser's [CSSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model).

## Go pro

This is part of a course I'm build on modules at [lunch.dev](https://www.lunch.dev).  
When live, members get access to this and other courses on React.

{% lunch-dev-cta %}
