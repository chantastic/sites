import rss from "@astrojs/rss";
import { getPostCollection } from "@modules/post.ts";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import site from "@src/metadata.json";
import config from "../../../astro.config.mjs";

const parser = new MarkdownIt();

export async function get() {
  let posts = await getPostCollection();

  return rss({
    title: site.title,
    description: site.description,
    site: config.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      link: new URL(post.slug, config.site).toString(),
      content: sanitizeHtml(parser.render(post.body)),
    })),
    customData: `<language>en-us</language>`,
  });
}
