import * as ASTRO_CONTENT from "astro:content";
import * as COLLECTION from "@modules/collection";
import { z, defineCollection } from "astro:content";

export const COLLECTION_NAME = "lessons";

export function path(...segments: string[]) {
  return COLLECTION.constructPathFromSegments(
    COLLECTION_NAME,
    ...segments
  );
}

export function title(specific?: string) {
  return specific
    ? specific
    : COLLECTION.prefixCollectionTitle(COLLECTION_NAME);
}

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
  typeof COLLECTION_NAME
>;

export async function getCollection(
  filter?: (entry: CollectionEntry) => unknown,
  sort = (a: CollectionEntry, b: CollectionEntry) => 0
) {
  let result = await ASTRO_CONTENT.getCollection(
    COLLECTION_NAME,
    filter
  );

  return result.sort(sort);
}

export const collectionSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    keys: z.array(z.string()).optional(),
  }),
});
