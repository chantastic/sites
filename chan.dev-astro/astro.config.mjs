import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remark_toc from "remark-toc";
import remark_deflist from "remark-deflist";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehype_autolink_headings from "rehype-autolink-headings";
import { h, s } from "hastscript";

export default defineConfig({
  site: import.meta.env.DEV
    ? "http:localhost:3000"
    : "https://chan.dev",
  integrations: [tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [
      [
        // https://github.com/remarkjs/remark-toc
        remark_toc,
        {
          maxDepth: 2,
          heading:
            "toc|outline|contents|table[ -]of[ -]contents?",
        },
      ],
      remark_deflist,
    ],
    rehypePlugins: [
      // https://docs.astro.build/en/guides/markdown-content/#heading-ids-and-plugins
      rehypeHeadingIds,
      [
        rehype_autolink_headings,
        {
          behavior: "append",
          properties: {
            className: "heading--direct-link",
          },
          group: h("span", {
            tabIndex: "-1",
          }),
          content: (element) => [
            h(
              "span",
              {
                className: "heading--direct-link-icon",
                ariaHidden: true,
              },
              s(
                "svg",
                {
                  width: 16,
                  height: 16,
                  version: "1.1",
                  viewBox: "0 0 16 16",
                  xlmns: "http://www.w3.org/2000/svg",
                },
                [
                  s("path", {
                    fillrule: "evenodd",
                    fill: "currentcolor",
                    d: "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",
                  }),
                ]
              )
            ),
            h(
              "span",
              { "is:raw": true, className: "sr-only" },
              `Section titled ${element.children[0].value}`
            ),
          ],
        },
      ],
    ],
  },
});
