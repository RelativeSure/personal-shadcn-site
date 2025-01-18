import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/pages" }),
  schema: z.object({
    title: z.string(),
    // description: z.string()
    // pubDate: z.coerce.date(),
  }),
});

export const collections = { pages };
