import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remark_toc from "remark-toc";
import remark_deflist from "remark-deflist";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehype_autolink_headings from "rehype-autolink-headings";
import { h, s } from "hastscript";
import remark_external_links from "remark-external-links";
import remark_embedder from "@remark-embedder/core";
import oembed_transformer from "@remark-embedder/transformer-oembed";
import remark_obsidian_callout from "remark-obsidian-callout";
import remark_directive from "remark-directive";
import { visit } from "unist-util-visit";
import astro_expressive_code from "astro-expressive-code";
import react from "@astrojs/react";
function process_remark_directives() {
  // note: this function acts mutably
  return (tree) => {
    visit(tree, (node) => {
      if (
        !(
          node.type === "textDirective" ||
          node.type === "leafDirective" ||
          node.type === "containerDirective"
        )
      ) {
        return;
      }

      const data = node.data || (node.data = {});
      const hast = h(node.name, node.attributes);

      switch (node.type) {
        case "containerDirective": {
          switch (node.name) {
            case "hidden-script": {
              data.hName = "section";
              data.hProperties = {
                className: "hidden-video-script",
                ...hast.properties,
              };

              break;
            }

            default: {
              data.hName = hast.tagName;
              data.hProperties = hast.properties;

              break;
            }
          }

          break;
        }

        default: {
          data.hName = hast.tagName;
          data.hProperties = hast.properties;

          break;
        }
      }
    });
  };
}

function exchange_relative_links_with_absolute() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        ["link", "definition"].includes(node?.type) &&
        node.url.startsWith("/")
      ) {
        node.url = new URL(node.url, site).toString();
      }
    });
  };
}

const site = import.meta.env.DEV ? "http://localhost:4321" : "https://chan.dev";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    tailwind(),
    sitemap({
      // I'm building dedicated share pages that I don't want indexed.
      // Ultimately, this may be better as a dynamic route.
      filter: (page) => !page.endsWith("/share/"),
    }),
    astro_expressive_code({
      frames: {
        styleOverrides: {
          frameBoxShadowCssValue: "none",
        },
      },
    }),
    react(),
  ],
  image: {
    service: sharpImageService(),
  },
  markdown: {
    remarkPlugins: [
      exchange_relative_links_with_absolute,
      [
        // https://github.com/remarkjs/remark-toc
        remark_toc,
        {
          maxDepth: 2,
          heading: "toc|outline|contents|table[ -]of[ -]contents?",
        },
      ],
      remark_deflist,
      [
        remark_embedder,
        {
          transformers: [oembed_transformer],
        },
      ],
      // https://www.reliablesoft.net/noreferrer-noopener/#noreferrer-vs-nofollow
      [
        remark_external_links,
        {
          rel: "noopener",
        },
      ],
      remark_obsidian_callout,
      remark_directive,
      process_remark_directives,
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
            // h(
            //   "span",
            //   {
            //     "is:raw": true,
            //     className: "sr-only",
            //   },
            //   `Section titled ${(element?.children[0]?.value || "").trim()}`
            // ),
          ],
        },
      ],
    ],
  },
});
