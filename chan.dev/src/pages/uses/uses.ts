import * as ASTRO_CONTENT from "astro:content";
import * as COLLECTION from "@modules/collection";
import { z, defineCollection } from "astro:content";

export const COLLECTION_NAME = "uses";

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
    manufacturer: z.string().optional(),
    model: z.string().optional(),
    size: z.string().optional(),
    status: z
      .enum([
        "active",
        "inactive",
        "replaced",
        "lost",
        "returned",
        "sold",
        "gifted",
      ])
      .optional(),
    frequency: z.string().optional(), // enum? daily, weekly,
    acquisition: z.string().optional(), // enum? purchase, review, gift
    replaced_by: z.string().optional(), // overload: string to slug, object with optional name, deets, etc.
    // replaced_by <> replaces
  }),
});
