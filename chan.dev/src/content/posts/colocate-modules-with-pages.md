---
title: "Colocate modules with pages"
date: 2023-06-29
---

## Colocate modules in pages directories

**Put modules that share getter functions and types inside nested `/pages` directories.**

```
/src
  /pages
    /my-collection
      /index.astro
      /[collection_slug].astro
      /collection.ts
```

Astro has a "generation one" `/pages` directory.  
Every `.astro`, `.md`, and `.mdx` file becomes a page on your site.  
Unlike other gen 1 `/pages` directories (like those in Next.js, pre App Directory), Astro doesn't read `.js` or `.tsx` modules as pages.

This means you can colocate collection-type specific code there.  
Here's what mine look like, at the moment.

```ts
import * as ASTRO_CONTENT from "astro:content";
import * as COLLECTION from "@modules/collection";
import { z, defineCollection } from "astro:content";

// Used as both type and value
export const COLLECTION_NAME = "decisions";

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
  typeof COLLECTION_NAME
>;

// Collection-aware getCollection facade.
// Proxies `filter` and adds `sort` argument.
export async function getCollection(
  filter = () => true,
  sort = compareCollectionByDate
): Promise<CollectionEntry[]> {
  const result = await ASTRO_CONTENT.getCollection(
    COLLECTION_NAME,
    filter
  );

  return result.sort(sort);
}

// ContentEntry aware sort facade
export function compareCollectionByDate(
  a: CollectionEntry,
  b: CollectionEntry
) {
  return COLLECTION.compareByDate(a.data.date, b.data.date);
}

// Content collection schema
// Utilized by config.ts
export const collectionSchema = defineCollection({
  schema: z.object({
    /* ... */
  }),
});
```

You may see immediate value you this. You may not. I'll do my best to make the benefits clear in other patterns.
