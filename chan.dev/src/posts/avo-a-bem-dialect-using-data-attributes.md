---
title: AVO 🥑 — A BEM Dialect Using Data Attributes
date: 2021-02-08
tags:
  - post
---

## Attribute Value-Object

AVO 🥑 is a syntactive varient of [BEM's Block, Element, Modifier constructs](https://en.bem.info/methodology/quick-start/). AVO is an initialism for "Attribute Value-Objects".

As a BEM dialect, AVO observes the concepts of BEM but uses data attribute syntax that reduced (template) repetition and improves template legibility (particularly when used in legacy codebases or with utility class libraries).

**Contents**

- [Attribute Value-Object](#attribute-value-object)
- [Video](#video)
- [Goals](#goals)
- [Attribute](#attribute)
    - [CSS](#css)
    - [HTML](#html)
- [Value (boolean)](#value-boolean)
    - [CSS](#css-1)
    - [HTML](#html-1)
- [Value-object (enumerable)](#value-object-enumerable)
    - [CSS](#css-2)
    - [HTML](#html-2)
- [Value-object (unbounded)](#value-object-unbounded)
    - [CSS](#css-3)
    - [HTML](#html-3)
    - [Warning](#warning)
- [Relative](#relative)
    - [CSS](#css-4)
    - [HTML](#html-4)

## Video

Watch me demonstrate this syntax in a LIVE YouTube session.
{% youtube-video 'https://youtu.be/XoBZAc1d43Y?t=63' %}

## Goals

AVO 🥑 uses data attribute selectors to achieve 5 primary goals:

- Enable copy-paste of large code examples — from docs to code — in React/JSX or HTML template
- Improve legibility of view code by reducing, in-template, selector duplication
- Facilitate migration of code with automated tools like grep, find-and-replace, and jscodeshift — by providing first class attribute selectors over class name strings
- Eliminate (as much as possible) the likelihood of selector collision between new selectors and legacy codebases
- Clarify the relationship of composed elements by segmenting "modifier" selectors into attribute namespaces

## Attribute

AVO 🥑 elements use empty [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#syntax) for [BEM Blocks](https://en.bem.info/methodology/quick-start/#block).

#### CSS

```css
[data-avatar] {
  …
}
```

#### HTML

```html
<img data-avatar src="https://placekitten.com/200/200" alt="cute kitten" />
```

## Value (boolean)

AVO 🥑 extensions use the `~=` [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#syntax) for [booleans BEM Modifiers](https://en.bem.info/methodology/quick-start/#boolean).

_Key-only values (like `mention` above) are inferred to be `true`, [like in BEM](https://en.bem.info/methodology/quick-start/#boolean)._

#### CSS

```css
[data-avatar~="mention"] {
  --avatar--size: 1.25em;
  --avatar--font-size: 1.5em;
  margin-right: 0.125em;
  transform: translateY(0.25em);
}
```

#### HTML

```html
<img
  data-avatar="mention"
  src="https://placekitten.com/200/200"
  alt="cute kitten"
/>
```

## Value-object (enumerable)

AVO 🥑 extensions also use the `~=` [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#syntax) for enumerable, [key-value BEM Modifiers](https://en.bem.info/methodology/quick-start/#key-value).

#### CSS

```css
[data-avatar~="size:sm"] {
  --avatar--size: 3rem;
}

[data-avatar~="size:md"] {
  --avatar--size: 4rem;
}

[data-avatar~="size:lg"] {
  --avatar--size: 5rem;
}
```

#### HTML

```html
<img
  data-avatar="size:sm"
  src="https://placekitten.com/200/200"
  alt="cute kitten"
/>
<img
  data-avatar="size:md"
  src="https://placekitten.com/200/200"
  alt="cute kitten"
/>
<img
  data-avatar="size:lg"
  src="https://placekitten.com/200/200"
  alt="cute kitten"
/>
```

## Value-object (unbounded)

AVO 🥑 extensions use the `*=` [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#syntax) for keys with unkown values.

This allows for indeterminate values `status:<undefined>` to be extended with inline styles.

#### CSS

```css
[data-avatar*="status:"] {
  --avatar--border: clamp(2px, calc(var(--avatar--size) * 0.1), 5px) solid transparent;
}
```

#### HTML

```html
<img data-avatar="status:" style="border-color: purple" {...} />
```

#### Warning

While available, this isn't recommended. Using a fixed set of values is preferred.

If you want to provide a default, consider instead providing an explicit `unknown` selector:

```css
[data-avatar~="status:unkown"] {
  border-color: transparent;
}
```

## Relative

AVO 🥑 extensions use a `--` delimiter for [BEM Elements](https://en.bem.info/methodology/quick-start/#element).  
`root-element--composed-element`

The example below introduces a header that includes avatar styles that are composed with the `data-avatar` Block.0

#### CSS

```css
[data-person-header] {
  …
}
[data-person-header--avatar] {
  --avatar--size: 7rem;
}
```

#### HTML

```html
<header data-person-header>
  <img data-avatar data-person-header--avatar {...} />
</header>
```
