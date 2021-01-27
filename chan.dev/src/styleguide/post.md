---
title: Post
date: 2020-10-18
layout: layouts/post.njk
---

## Heading 2

## Heading 3

## Heading 4

## Heading 5

## Heading 6

This is a paragraph

Next to anather paragraph

And a third

_italicized text_

**emboldened text**

[a link](#)

<a href="/" target="_blank" rel="noreferrer noopener">An external Link</a>

- unordered
- list

1. unordered
2. list

> A famous blockquote

`inlinecode block`

```js
// JS code block
let yo = "blah";
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

```js/0,2-3
// this
// block
// has
// line
// highlights
```