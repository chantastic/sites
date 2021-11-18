---
layout: layout.html
---

<header>

# AVO 🥑 CSS

with [@chantastic](https://twitter.com/chantastic)

</header>

AVO CSS is BEM-like naming escapes the class attribute. It's design allows for:

- Improved copy-paste (no `class` => `className`)
- Low specificity
- High compatability with utility CSS libraries
- Grep-able selectors with special characters `@!:-_`
- Clear composability
- Strong isolation
- Logical connection to components and props

## Style

### Element

```css
[data-avatar] {
  --avatar--size: 3rem;
  height: var(--avatar--size);
  width: var(--avatar--size);
}
```

### Value

```css
[data-avatar~="inactive"] {
  opacity: 5;
}
```

### Key-value

```css
  --avatar--size: 4rem;
}
```

### Composition

```css
[data-user-header--profile-avatar] {
  --avatar--size: 7rem;
}
[data-user-header--friend-avatar] {
  --avatar--size: 2.5rem;
}
```

## Articles

Read more about AVO 🥑 CSS and how it compares to BEM.

- [https://chan.dev/posts/avo-a-bem-dialect-using-data-attributes/](https://chan.dev/posts/compare-avo-and-standard-bem-conventions/)
- [Compare AVO 🥑 and standard BEM Conventions](https://chan.dev/posts/compare-avo-and-standard-bem-conventions/)

## Videos and streams

### Build CSS APIs with Attribute Selectors

<time>Nov 11, 2021</time>

<iframe width="560" height="315" src="https://www.youtube.com/embed/MWFbo5KDyZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Let's Build a Pure CSS Stack

Nov 11, 2021

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cfo3M88RfDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Let's Build a Pure CSS Stack

Nov 11, 2021

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cfo3M88RfDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Build neutral color scale into colorway — LIVE

Apr 15, 2021

<iframe width="560" height="315" src="https://www.youtube.com/embed/0yXWhFmok9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Building colorway media object with AVO — LIVE

Apr 13, 2021

<iframe width="560" height="315" src="https://www.youtube.com/embed/q1uPAVbciAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Building colorway media object with AVO — LIVE

Apr 9, 2021

<iframe width="560" height="315" src="https://www.youtube.com/embed/rUsMX4j8Q9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Building colorway with AVO — LIVE

Apr 8, 2021

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nx3ZcnnQE-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Building Colorway element: surface— LIVE

Mar 22, 2021

<iframe width="560" height="315" src="https://www.youtube.com/embed/9yP8ewPMHNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Building Colorway with AVO 🥑 and Storybook— LIVE

Mar 15, 2021

<iframe width="560" height="315" src="https://www.youtube.com/embed/OZg6pP6bFs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Building Colorway with AVO 🥑 and Storybook— LIVE

Mar 3, 2021

<iframe width="560" height="315" src="https://www.youtube.com/embed/qWAoHIPEWQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Data Attribute Selector Methodology — AVO 🥑 — LIVE

Feb 8, 2021

<iframe width="560" height="315" src="https://www.youtube.com/embed/XoBZAc1d43Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Style with CSS Custom Properties

Jul 23, 2020

<iframe width="560" height="315" src="https://www.youtube.com/embed/3iP3SZiFJhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Style with CSS Custom Properties [livestream]

Jul 21, 2020

<iframe width="560" height="315" src="https://www.youtube.com/embed/-FO6g0WQ7Rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<footer>
&copy; 2021, Michael Chan.
</footer>
