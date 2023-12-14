---
title: Prefer props to params
date: 2023-07-12
---

When generating pages with `getStaticProps()` you have access to `Astro.params`.

```jsx
// posts/[post_slug]
const {post_slug} = Astro.params
```

You can render these values into pages just fine but they can be `undefined`.
Because Astro allows undefined as a value to match the bare subdirectory path (`/`).

In TypeScript—Astro apps, this leaves you writing a lot of checks for `post_slug` anywhere it's used.

```ts
// could be undefined
post_slug?.toUpperCase()
```

Better to pass values along as props and validate their types.

```ts
export async function getStaticPaths() {
  return [
    {
      params: { post_slug: "posts/prefer-props-to-params" },
      props: { entry: /* full post */ },
    },
  ];
}

interface Props {
  entry: CollectionEntry<"post">
}

const { entry } = Astro.props;

console.log(entry.slug.toUpperCase())
// We know that `entry.slug` is a string
```
