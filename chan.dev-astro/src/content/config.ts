import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date().optional(),
  }),
});

export const collections = {
  posts: posts,
};
