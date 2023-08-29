---
title: Polymorphic as prop in Astro
description: Astro has dynamic tags — a way to accept an element or component as a prop. And they're totally different than React's polymorphic as prop pattern.
publishDate: 2023-08-23
cover: ./astro-dynamic-tags.png
coverAlt: Dynamic tags in Astro. The concept is represented series of 5 gems with varying color shape.
---

Astro has [dynamic tags][] — a way to take an element or component as a prop.

I had trouble finding the feature because the React community calls this pattern the "polymorphic as prop". _Because we enjoy our pseudo-computer-science bullshit artisinally._

Dynamic tags are simple to implement in Astro.

## No-fuss implementation

1. Take a _capitalized_ `Element` prop as a local variable.
1. Render that prop as a template tag.
1. Take and spread rest-props.
1. Render children using Astro's un-named [`<slot />`][].

```astro
---
const { Element, ...props } = Astro.props;
---

<Element {...props}><slot /></Element>
```

## Destructure and rename the element prop (for convenience or convention)

Uppercase prop names can look out of place in templates.
Destructure and rename the `Element` prop in one to provide a more ergonomic/conventional authoring experience.

```astro ins=/as: Element, /
---
const { as: Element, ...props } = Astro.props;
---

<Element {...props}><slot /></Element>
```

Astro templates require that dynamic tags be capitalized. Renaming the element prop is a convent way to follow that requirement while providing a more conventional API to consumers.

## Accept and de-duplicate classes with `class:list`

Astro has a [`class:list` directive][] for orchestrating dynamic classes.
Provide the `class:list` directive an array with both _provided_ and _component_ classes.

`class:list` is smart and automatically removes duplicate classes.

```astro lang="astro" ins={4, 7, 10} ins=/class:list.*}/
---
const {
  as: Element = "div",
  class: providedProps,
  ...props
} = Astro.props;
const componentClasses = "prose prose-slate dark:prose-invert";
---

<Element {...props} class:list={[componentClasses, providedProps]}>
  <slot />
</Element>
```

_Note: `class` needs to be renamed when destructured because values can not be assigned to reserved words._

## Complete with TypeScript interface

This is my completed component, with the TypeScript interface.

Yours needs will likely vary.

```astro ins={2-5}
---
interface Props {
  as?: "body" | "main" | "article";
  class?: "string";
}

const {
  as: Element = "div",
  class: providedProps,
  ...props
} = Astro.props;
---

<Element {...props} class:list={[componentClasses, providedProps]}>
  <slot />
</Element>
```

## BEWARE: dynamic tags don't honor hydration client directives

Astro provides [client directives][] for hydrating client-side UI.
Those don't work with dynamic tags.

If you're using dynamic tags for static layouts — like me — this isn't an issue.

## Takeaways

Astro supports the "polymorphic as prop" pattern popular in React.
And the additional standard tooling of TypeScript and [`class:list` directive][] make it even easier to consistently implement.

[dynamic tags]: https://docs.astro.build/en/core-concepts/astro-syntax/#dynamic-tags
[`<slot />`]: https://docs.astro.build/en/core-concepts/astro-components/#slots
[`class:list` directive]: https://docs.astro.build/en/reference/directives-reference/#classlist
[client directives]: https://docs.astro.build/en/reference/directives-reference/#client-directives
