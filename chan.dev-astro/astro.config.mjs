import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remark_toc from "remark-toc";
import remark_deflist from "remark-deflist";

export default defineConfig({
  site: import.meta.env.DEV
    ? "http:localhost:3000"
    : "https://chan.dev",
  integrations: [tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [
      [
        remark_toc,
        {
          maxDepth: 2,
          heading:
            "toc|outline|contents|table[ -]of[ -]contents?",
        },
      ],
      remark_deflist,
    ], // https://github.com/remarkjs/remark-toc
  },
});
