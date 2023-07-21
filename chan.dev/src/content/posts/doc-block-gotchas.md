---
title: Storybook gotchas
date: 2023-07-19
---

### Source doc block

Without the use of a `Story` block, the `Source` block shows JSX.

The `Story` component actually `emits` the source to show, when rendered.
So it has to be present if you want to see JSX

https://chromaticqa.slack.com/archives/C02K88CKTFW/p1689803642305029

## Meta must be important as named export

Works:

```jsx
import { Meta } from "@storybook/blocks"
<Meta />
```

Doesn't:

```jsx
import * as Blocks from "@storybook/blocks"

<Blocks.Meta />
```

Doesn't:

```jsx
import { Meta as BlockMeta } from "@storybook/blocks"

<BlocksMeta />
```

Alt (double import):

```jsx
import { Meta } from "@storybook/blocks"
import * as Blocks from "@storybook/blocks"

<Meta />

<Blocks.Story />
<Blocks.Canvas />
```

https://chromaticqa.slack.com/archives/C02K88CKTFW/p1689365244388669

It's not necessarily on purpose, but it's because the Meta is read via the AST, and then the information is statically extracted. The actual Meta component is more or less a no-op. And our static extraction logic just doesn't take that case into account when looking for it.

- https://github.com/storybookjs/mdx2-csf/blob/next/src/index.ts#L76-L77
- https://github.com/storybookjs/storybook/blob/next/code/ui/blocks/src/blocks/Meta.tsx

## Remame

If you're importing components by named exports, you're bound to have naming conflicts. These can be resolved via double import statement or `as` import directive

## (page not available)

when somethnig gets moved by title only (not file system), the page will disappear

---

## general ones

## .ts can't render JSX. need .tsx
