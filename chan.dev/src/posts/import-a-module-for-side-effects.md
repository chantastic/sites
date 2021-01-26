---
title: Import Modules for Side Effects
date: 2021-01-26
layout: layouts/post.njk
---

Modules — in JavaScript — can be imported strictly for their side effects.

```js
import "./module-with-side-effects.mjs";
```

Notice.
We're not making any local assignments.  
We aren't importing functions or constants for later use.  
We're simply importing the global effects of the module, as if the code lived in this file.

On the module side, simply write code with effects.

```js
// file: ./module-with-side-effects.mjs
console.info("module-with-side-effects loaded");
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

## Mixing side effects and exports

Modules can contain a mix of exports and side effects.  
I'd recommend _NOT_ mixing these but it's possible.

To utilize both a modules side-effects and and exports, you'll need to import them separately:

```js
import "./module-with-side-effects.mjs"; // load side effects
import hype from "./module-with-side-effects.mjs"; // load default export

hype("moduuuuuules");
// => MODUUUUUULES!!!
```

## Side effect imports in the wild…

I see this style of import used with Webpack to import stylesheets.

In this case, Webpack is packaging up CSS as JavaScript and appending it to the browser's [CSSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model).

<script src="https://cdn.podia.com/embeds.js" async="async"></script>

## Go pro

This is part of a course I'm build on modules at [lunch.dev](https://www.lunch.dev).  
When live, members get access to this and other courses on React.

<a href="https://www.lunch.dev/member" data-podia-embed="button" data-text="Join lunch.dev for videos">Join lunch.dev</a>
