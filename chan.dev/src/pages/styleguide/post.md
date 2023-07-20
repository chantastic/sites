---
title: Post
description: What all of the markdown features will look like on this site.
layout: "@layouts/MarkdownLayout.astro"
dateCreated: 2020-12-24
dateModified: 2023-06-03
---

# Post Styleguide

This page shows the use of severale several markdown features, their interpretation by markdown-it, and their resulting styles.

---

## Contents

## Headings

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Paragraph

This is a paragraph

Next to another paragraph

And a third

## Decoration

_italicized_

**emboldened**

~~striken~~

<mark>marked</mark>

## Links

[link](#)

[external-link](https://youtube.com/@chantastic)

## Lists

- unordered
- list

1. ordered
2. list

Description list
: A list of terms and their definitions.

Long definition
: Definitions can be very long. In the case that it is long, it should wrap nicely.

Multiple definitions
: This is one definition of the second term.
: This is another definition of the second term.

## Quotes

<q>Inline quote</q>

> Block quote

<figure>
  <blockquote>
    But web browsers aren’t like web servers. If your back-end code is getting so big that it’s starting to run noticably slowly, you can throw more computing power at it by scaling up your server. That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity.
  </blockquote>
  <figcaption>
    &mdash; Jeremy Keith, <cite>Mental models</cite>
  </figcaption>
</figure>

[Additional info](https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/)
[Possible plugin](https://www.npmjs.com/package/remark-captions?activeTab=readme)

## Callouts

> [!tip] A tip!
> This is a tip…

> [!note] A note!
> This is a note…

[More on obsidian callouts](https://help.obsidian.md/Editing+and+formatting/Callouts).

    note: pencilIcon,
    abstract: clipboardListIcon,
    summary: clipboardListIcon,
    tldr: clipboardListIcon,
    info: infoIcon,
    todo: checkCircleIcon,
    tip: flameIcon,
    hint: flameIcon,
    important: flameIcon,
    success: checkIcon,
    check: checkIcon,
    done: checkIcon,
    question: helpCircleIcon,
    help: helpCircleIcon,
    faq: helpCircleIcon,
    warning: alertTriangleIcon,
    attention: alertTriangleIcon,
    cautions: alertTriangleIcon,
    failure: xIcon,
    missing: xIcon,
    fail: xIcon,
    danger: zapIcon,
    error: zapIcon,
    bug: bugIcon,
    example: listIcon,
    quote: quoteIcon,
    cite: quoteIcon,

## Technical

<kbd>CMD + T</kbd>

`inline code`

```js
// JS code block
const yo = "blah";
```

```jsx
// jsx code block
function MyComponent({ name, ...props }) {
  return <div {...props}>Hello {name}!</div>;
}
```

```diff
// diff
- function chant(message) {
+ export function chant(message) {
  return [...Array(3)].map(() => `${message}!`).join(" ");
}
```

**This is not supported in Astro's installation of shiki yet.**

```js/0,2-3
// this
// block
// has
// line
// highlights
```

## Details

<details>
<summary>Some disclosure</summary>

_Markdown can go in here if you leave extra line breaks._

</details>

## Tweet

https://twitter.com/mipsytipsy/status/1601441441196040192?s=20

## YouTube

<div data-responsive-youtube-container>

https://youtu.be/2LMaihPQKus?t=1717

</div>

It'd be really nice to extend oembed-transformer to allow for contoiners
