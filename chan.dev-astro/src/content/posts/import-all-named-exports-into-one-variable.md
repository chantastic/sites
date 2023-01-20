---
title: Import All Named Exports into One Variable
publishDate: 2021-02-01
og:
  image: "https://chan.dev/og-image/import-all-named-exports-into-one-variable.jpg"
tags:
---

We can import all of a JavaScript module's contents into a single variable with `* as`.

```js
import * as stringUtils from "./string-utils.mjs";
```

Now `stringUtils` can reference any exports in `string-utils.mjs` using property access syntax.

```js/2-3
import * as stringUtils from "./string-utils.mjs";

stringUtils.chant("we will");
stringUtils.hype("rock you");
```

## Where is this a good practice?

Importing all named exports into a single variable is great feature for application code.

Consider these UI modules that have a similar export signatur.

**`email.js`**

```js
export Item …;
export List …;
export ListItem …;
export Controller …;
```

**`contact.js`**

```js
export Item …;
export List …;
export ListItem …;
export Controller …;
```

[Renaming all of these named exports](../import-and-rename-named-exports/) is super irritating!

```js
import {
  List as EmailList,
  ListItem as EmailListItem,
  Controller as EmailController,
} from "./email.js";
import {
  List as ContactList,
  ListItem as ContactListItem,
  Controller as ContactController,
} from "./contact.js";
```

By reducing moduling imports to a single reference, we eliminate the need to rename the colliding exports.

```js
import * as Email from "./email.js";
import * as Contact from "./contact.js";

// Email.List, Contact.List, Email.Item, Contact.Item, etc.
```

And these namespaces guarantee that we never experience a collision between named exports.

## My take

This is my preferred way to import named exports. It has eliminated pointless hours spent justifying local references between modules I don't control.

## Go pro

This is part of a course I'm build on modules at [lunch.dev](https://www.lunch.dev).  
When live, members get access to this and other courses on React.

{% lunch-dev-cta %}
