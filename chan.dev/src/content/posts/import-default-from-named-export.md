---
title: Import Default From Named Export
description: 'Discover new ways to import default exports in JavaScript. Use aliases to rename during import, and understand the nuances of working with default exports.'
publishDate: 2021-02-03
og:
  image: 'https://res.cloudinary.com/chantastic/image/upload/v1685927001/chan.dev/import-default-from-named-export.jpg'
tags: [code]
---

Importing `default` can be nuanced. There are just so many ways to do it.

I like to think of `default` as a named export with a fixed (non-customizeable) name.

Check out how we can import `default` like a named export.

```js
import {default as Highlander} from './highlander.js'
```

The lines below yield identical results.

```diff lang="js"
- import Highlander from "./highlander.js";
+ import { default as Highlander } from "./highlander.js";
```

Unlike named exports, you can't import `default` and use it directly. It **must** be remaned at import. This is why the more ergonomic option of `import MyAlias from "…";` exists.

## Use default thru a module alias

We've discussed [module aliases in past posts](../import-all-named-exports-into-one-variable/). And they have some overlap with the `default` export.

Check out this totally valid use of Module aliases and `default`.

```js
import * as Highlander from './highlander.js'

Highlander.default()
```

Technically, you're not using the `default` keyward because we're accessing the reference as a property.

Of course, this looks a little strange when used in frameworks like React.

```jsx
<Highlander.default>…<Highlander.default />
```

## My take

I don't use `default as` or `ModuleAlias.default()` import styles in practice. I just find it helpful to remember how `default` is exported from modules.

In future posts, we'll cover two, more ergonomic alternatives capturing both default and named exports.

## Go pro

This is part of a course I'm build on modules at [lunch.dev](https://www.lunch.dev).  
When live, members get access to this and other courses on React.

<script src="https://cdn.podia.com/embeds.js" async="async"></script>

<a
href="https://www.lunch.dev/member" data-podia-embed="button" data-text="Join lunch.dev for this course">Join lunch.dev for this course</a>
