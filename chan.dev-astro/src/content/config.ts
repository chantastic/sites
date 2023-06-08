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

const lesson = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    keys: z.array(z.string()).optional(),
  }),
});

export const collections = {
  post,
  decision,
  lesson,
};
