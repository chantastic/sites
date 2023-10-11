import * as ASTRO_CONTENT from "astro:content";
import * as COLLECTION from "#modules/collection";
import { z, reference, defineCollection } from "astro:content";

export const COLLECTION_NAME = "dailies";

export function path(...segments: string[]) {
  return COLLECTION.constructPathFromSegments(
    COLLECTION_NAME,
    ...segments
  );
}

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
  typeof COLLECTION_NAME
>;

type ViteGlobItem = Record<string, Frontmatter>;
type Frontmatter = {
  frontmatter: { publishDate: COLLECTION.maybeDate };
};

export function processFeedEntries(
  viteGlob: ViteGlobItem,
  formatter
) {
  return Object.entries(viteGlob)
    .filter(([, post]) => post.frontmatter.publishDate)
    .sort(([, a], [, b]) =>
      COLLECTION.compareByDate(
        a.frontmatter.publishDate,
        b.frontmatter.publishDate
      )
    )
    .map(formatter);
}

export async function getCollection(
  filter = (entry: CollectionEntry) => {
    if (entry.data.publishDate) {
      return true;
    }
    return false;
  },
  sort = (a: CollectionEntry, b: CollectionEntry) =>
    COLLECTION.compareByDate(
      a.data.publishDate,
      b.data.publishDate
    )
) {
  const result = await ASTRO_CONTENT.getCollection(
    COLLECTION_NAME,
    filter
  );

  return result.sort(sort);
}

export const collectionSchema = defineCollection({
  schema: () => z.object({}),
});
