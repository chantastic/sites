---
title: Compare AVO 🥑 and standard BEM Conventions
description: 'Discover the differences between AVO 🥑 and standard BEM conventions for naming CSS blocks, elements, and modifiers, with side-by-side examples.'
publishDate: 2021-02-08
---

## AVO 🥑 : BEM (standard) syntax comparison

This is a chart, mapping AVO 🥑 syntax to standard BEM verbiage.

AVO 🥑 is a syntactive dialect of [BEM's Block, Element, Modifier constructs](https://en.bem.info/methodology/quick-start/).  
This reference describes AVO 🥑 naming conventions in BEM terms — as defined on [bem.info](https://en.bem.info/methodology/quick-start/).

- [AVO 🥑 : BEM (standard) syntax comparison](#avo---bem-standard-syntax-comparison)
  - [Block](#block)
  - [Element](#element)
  - [Modifier](#modifier)

### Block

> A functionally independent component that can be reused.

```css
/* BEM */
.avatar {
}

/* AVO 🥑 */
[data-avatar] {
}
```

```html
<!-- BEM -->
<img class="avatar" src="…" alt="…" />

<!-- AVO 🥑 -->
<img data-avatar src="…" alt="…" />
```

### Element

> A composite part of a block that can't be used separately from it.

```css
/* BEM */
.avatar {
}
.avatar__img {
}

/* AVO 🥑 */
[data-avatar] {
}
[data-avatar--img] {
}
```

```html
<!-- BEM -->
<span class="avatar">
	<img class="avatar__img" src="…" alt="…" />
</span>

<!-- AVO 🥑 -->
<span data-avatar>
	<img data-avatar--img src="…" alt="…" />
</span>
```

### Modifier

> An entity that defines the appearance, state, or behavior of a block or an element.

```css
/* BEM */
.avatar--status_ok {
}

/* AVO 🥑 */
[data-avatar~='status:ok'] {
}
```

```html
<!-- BEM -->
<img class="avatar avatar--status_ok" src="…" alt="…" />

<!-- AVO 🥑 -->
<img data-avatar="status:ok" src="…" alt="…" />
```
