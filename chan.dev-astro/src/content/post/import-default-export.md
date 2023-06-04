---
title: Import Default Export
description: "Explore the power and limitations of JavaScript's default exports and how to use them with named exports to maintain a better developer experience."
publishDate: 2021-02-02
og:
  image: "https://chan.dev/og-image/import-default-export.jpg"
tags: [code]
---

There can only be one `default` export.

```js
export default function Highlander() {}
```

A JavaScript module is allowed any number of named exports. But default exports are in short supply. You get one and only one.

```js
export default function Highlander() {}
export default function OtherHighlander() {}
// SyntaxError: Identifier '.default' has already been declared
```

This limit on defaults empowers a sugary syntax on the import side.

```js
import Highlander from "./highlander.js";
```

We can assign the default export to any variable name, without fuss.

```diff
- import Highlander from "./highlander.js";
+ import LiterallyAnything from "./highlander.js";
```

## So, what should be the default?

[In my last post](../import-all-named-exports-into-one-variable), I demonstrated how I use named exports to expose UI components that are designed to work together.

```js
export List …;
export ListItem …;
export Controller …;
```

With this structure, `default` becomes a natural place to expose a, default composition of those components for drop-in use.

```jsx
export List …;
export ListItem …;
export Controller …;

export default function EmailList() {
  return (
    <Controller>
      <List
        renderItem={item => <ListItem item={item} />}
      />
    </Controller>
  )
}
```

Now, anywhere I want the default composition, I maximally renamable import.

```jsx
// ./app.js
import EmailList from "./email.js";

export default function App() {
  return (
    <main>
      <EmailList />
    </main>
  );
}
```

## A note on exporting functions

Because default exports aren't referenced by the provided name, there's a tendency to leave off of functions names.

"It's cleaner!"

Unfortunately, leaving the name off will impact your developer experience. DevTools will treat these references as anonymous functions.

So, I recommend adding keeping a descriptive name.

## My take

I love default exports — when used as intended.

A lot of folks in frontend recommend using _only_ default exports and mandating one-component-per-file. This feels contrary to the design of JavaScript modules. And the practice has the secondary effect of requiring bespoke file structures to communicate components relationships and private components — something modules already do well.

Use named exports and defaults — together — as intended.

## Go pro

This is part of a course I'm build on modules at [lunch.dev](https://www.lunch.dev).  
When live, members get access to this and other courses on React.

<script src="https://cdn.podia.com/embeds.js" async="async"></script>
<a
href="https://www.lunch.dev/member" data-podia-embed="button" data-text="Join lunch.dev for this course">Join lunch.dev for this course</a>

