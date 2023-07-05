import * as ASTRO_CONTENT from "astro:content";
import * as COLLECTION from "@modules/collection";
import { z, defineCollection } from "astro:content";

export const COLLECTION_NAME = "posts";

export function path(...segments: string[]) {
  return COLLECTION.constructPathFromSegments(
    COLLECTION_NAME,
    ...segments
  );
}

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
  typeof COLLECTION_NAME
>;

export async function getCollection(
  filter = (entry: CollectionEntry) => {
    if (entry.data.publishDate) {
      return true;
    }
    return false;
  },
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
    publishDate: z.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    og: z
      .object({
        title: z.string().optional(),
        audio: z.string().url().optional(),
        image: z.string().url().optional(),
      })
      .optional(),
  }),
});
