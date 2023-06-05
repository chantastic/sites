import { z, defineCollection } from "astro:content";

const post = defineCollection({
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

const decision = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  post,
  decision,
};
