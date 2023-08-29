---
title: Add Lucide Icons to Astro
publishDate: 2023-07-31
tags: [astro, svg]
description: "How to add Lucide icons to an Astro site."
shoutouts: [astro, lucide]
cover: ./lucide-in-astro.png
coverAlt: spaceship launching from fictional planet with Astro and Lucide logos
tldr: |
  - **Craft a Custom Lucide Integration with Astro**: Learn how to create a tailored integration of Lucide's SVG icons with Astro.
  - **Build an Astro Component for Lucide Icons**: Follow the guide to convert Lucide's JSON icons into inline SVGs in an Astro site.
  - **Extract a Reusable `LucideIcon` Component**: Make a flexible and reusable component for various use cases.
  - **Enhance the Integration with Custom Features**: Explore options for custom attributes, favorite icons, and TypeScript integration.
  - **Achieve Accessibility and Customization**: Implement customized Lucide icons with desired attributes in Astro components.
  - **Tailor Icon Implementation to Your Needs**: Understand that this method offers a specific solution among many ways to add Lucide icons. 🛠️🎨
---

There's no first-class [Lucide][] integration for [Astro][].
But making a custom one isn't too hard.

[Lucide]: https://lucide.dev/ "Lucide SVG icon set"
[astro]: https://astro.build/ "Astro: all-in-one web framework designed for speed"

This is the component I made to do the job:

```astro
---
const { icon, ...props } = Astro.props;

const [, attributes, children] = icon;

const componentChildren = children
  ?.map(
    ([shape, attributes]) =>
      `<${shape} ${Object.entries(attributes)
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ")} />`
  )
  .join("");

const componentAttributes = {...attributes, ...props}
---

<svg
  {...componentAttributes}
  set:html={componentChildren}
/>
```

If this component looks reasonable to you,
copy it and go forth.

If you'd like to learn how it works, let's get it!

## Our goal

For this build, our goal is to render icons directly into an Astro site — converting Lucide's JSON files to inline `<svg>`s at build time.

This [is just one of many ways to add Lucide icons to a site](https://lucide.dev/packages) — the one that fits my needs best.

## Initial setup

Add the `lucide` package.

```zsh title="install lucide" frame="terminal"
pnpm install lucide
```

In the standard `lucide` package, icons are exported as JSON arrays with the following contents:

`[0]`: `"svg"`  
`[1]`: element attributes  
`[2]`: children

```js
// lucide/dist/esm/icons/accessibility.js
[
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  },
  [
    ["circle", [Object]],
    ["path", [Object]],
    ["path", [Object]],
    ["path", [Object]],
    ["path", [Object]],
  ],
];
```

We need to import these JSON files and render their data as `HTML`.

## Render a single icon

To render a single Lucide icon:

1. Import any `lucide` icon
1. Destructure `attributes` and `children` array items from that icon
1. Reduce children nodes to HTML string
1. Render an `<svg>` component
   - Spread `attributes` directly on the element
   - Apply `childElements` with the `set:html` directive

```astro title="any .astro file" {2, 5, 8, 19, 21, 23}
---
// 1. Import any `lucide` icon
import { Accessibility } from "lucide";

// 2. Destructure the `attributes` and `children` array items
const [, attributes, children] = Accessibility;

// 3. Reduce children nodes to HTML string
const componentChildren = children
  ?.map(
    ([child, attributes]) =>
      `<${child} ${Object.entries(attributes)
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ")} />`
  )
  .join("\n");
---

<!-- 4. render svg element -->
<svg
  {/* 4.1. Spread `attributes` directly on the element */}
  {...attributes}
  {/* 4.2. Apply `childElements` with the `set:html` directive */}
  set:html={childrenElements}
/>
```

## Extract `LucideIcon` component

Now that we can render icons, let's extract this code as a reusable component.

1. Move the relevant code to `src/components/lucide-icon.astro`
1. Refactor to `icon` as a prop
1. Take rest `...props` so HTML and SVG attributes can be applied at the call site
1. Merge icon `attributes` and component `props`
1. Apply munged attributes-props to exported `svg` element

```diff lang="astro" title="src/components/lucide-icon.astro" {2,3,16, 21}
---
// 1. Take `icon` as a prop
// 2. Take rest `props`
- import { Accessibility } from "lucide";
+ const { icon, ...props } = Astro.props;

const componentChildren = children
  ?.map(
    ([child, attributes]) =>
      `<${child} ${Object.entries(attributes)
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ")} />`
  )
  .join("\n");

// 3. Merge `attributes` and `props`
+ const componentAttributes = {...attributes, ...props}
---

<svg
  {/* 4. Apply munged `componentAttributes` to svg */}
-  {...attributes}
+  {...componentAttributes}
  set:html={childrenElements}
/>
```

## Use the `LucideIcon` component

To use our new `LucideIcon` component, import it along with any `lucide` icon.
Provide the icon JSON to `LucideIcon` using the `icon` prop.

```astro title="any .astro file"
---
import LucideIcon from "#components/lucide-icon.astro";
import { Accessibility } from "lucide";
---

<LucideIcon icon={Accessibility} />
```

## Apply attributes to `LucideIcon`

The `LucideIcon` receives props that it merges with the default `lucide` values.
Use these to change SVG attributes like `height`, `width`, `fill`, and `stroke-width`.
Or apply common attributes like `class` and `id`.

```astro title="any .astro file"
---
import LucideIcon from "#components/lucide-icon.astro";
import { Accessibility } from "lucide";
---

<LucideIcon icon={Accessibility} width="56" height="56" stroke-width="4" />
```

## Taking it further

My preference is to keep icon importing and SVG rendering separated.
But you may find this cumbersome.

If so, create a facade for `LucideIcon` that exposes your favorite icons via `string` interface.

This could look something like this:

```astro title="my-fav-icons.astro"
---
import {
  Github as github,
  Youtube as youtube,
  Twitter as twitter,
  Instagram as instagram
} from "lucide";

const icons = {
  github,
  youtube,
  twitter,
  instagram
}

const { name = "github", ...props } = Astro.props;

if !(icons[name]) { return null }

const [, attributes, children] = icons[name];

const componentChildren = children
  ?.map(
    ([child, attributes]) =>
      `<${child} ${Object.entries(attributes)
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ")} />`
  )
  .join("\n");

const componentAttributes = {...attributes, ...props}
---

<svg
  {...componentAttributes}
  set:html={childrenElements}
/>
```

## Go further with TypeScript

`lucide` does not expose its `IconNode` type for external use.

So, if you want to use [my code above](#) in TypeScript, you'll need to get clever.

1. Import just the type of any component.
1. Infer the `IconNode` for that icon in the `LucideIcon` type declaration.
1. Add any optional `svg` attributes you'd like to support.  
   (e.g., `height`, `width`, `fill`, `stroke-width`, etc.)

```astro title="src/components/lucide-icon.astro" {2, 6}
---
// 1. Import just the type of any component.
import type { Accessibility } from "lucide";

type Props = {
  // 2. Infer the `IconNode` for that icon in the `LucideIcon` type declaration
  icon: typeof Accessibility;
};
---
```

## That's it!

I hope that you found this useful in building an Astro site.
If you'd like to see more Astro tips and tricks, bug me on Twitter/X or Discord. 😄
