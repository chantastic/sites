import { z, defineCollection } from "astro:content";
import { collectionSchema as decisions } from "@pages/decisions/decisions";
import { collectionSchema as lessons } from "@pages/lessons/lessons";
import { collectionSchema as os } from "@pages/os/os";

const posts = defineCollection({
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

const uses = defineCollection({
  schema: z.object({
    manufacturer: z.string().optional(),
    model: z.string().optional(),
    size: z.string().optional(),
    status: z
      .enum([
        "active",
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

export const collections = {
  posts,
  decisions,
  lessons,
  os,
  uses,
};
