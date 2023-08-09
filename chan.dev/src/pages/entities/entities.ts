import type * as ASTRO_CONTENT from "astro:content";
import { z, defineCollection } from "astro:content";

export const COLLECTION_NAME = "entities";

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
  typeof COLLECTION_NAME
>;

function formatEntityPlatformForPost(entity: CollectionEntry) {
  return function (platform: CollectionEntry["data"]) {
    switch (platform) {
      case "twitter": {
        return `@${new URL(entity.data[platform]).pathname.split("/")[1]}`;
      }
      case "mastodon": {
        const url = new URL(entity.data[platform]);

        return `${url.pathname.split("/")[1]}@${url.hostname
          .split(".")
          .slice(1, 3)
          .join(".")}`;
      }
      default: {
        return entity.data[platform];
      }
    }
  };
}

export function getPlatformShortoutsForRelatedEntities(platform: string) {
  return function (relatedEntities: CollectionEntry[]) {
    return relatedEntities
      .filter((entity: CollectionEntry) => entity.data[platform])
      .map((entity: CollectionEntry) =>
        formatEntityPlatformForPost(entity)(platform)
      );
  };
}

export const collectionSchema = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    type: z.enum(["Person", "Organization"]), // https://schema.org/Person // https://schema.org/Organization

    avatar: z.string().url().optional(),
    bluesky: z.string().url().optional(),
    discord: z.string().url().optional(),
    github: z.string().url().optional(),
    instagram: z.string().url().optional(),
    mastodon: z.string().url().optional(),
    site: z.string().url().optional(),
    twitter: z.string().url().optional(),
    youtube: z.string().url().optional(),
    threads: z.string().url().optional(),
    hashtag: z.string().optional(),
  }),
});
