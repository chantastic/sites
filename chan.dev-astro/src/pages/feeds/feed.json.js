import { getPostCollection } from "@modules/post.ts";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import config from "../../../astro.config.mjs";
import site from "@src/metadata.json";

const parser = new MarkdownIt();

export async function get() {
  let posts = await getPostCollection();

  return {
    body: JSON.stringify({
      version: "https://jsonfeed.org/version/1",
      title: site.title,
      home_page_url: config.site,
      feed_url: new URL(
        `${site.feed.path}/${site.feed.jsonFilename}`,
        config.site
      ).toString(),
      description: site.description,
      author: {
        name: site.author.name,
        url: config.site,
      },
      items: posts.map((post) => ({
        id: new URL(post.slug, config.site).toString(),
        url: new URL(post.slug, config.site).toString(),
        title: post.data.title,
        content_html: sanitizeHtml(parser.render(post.body)),
        date_published: post.data.publishDate,
      })),
    }),
  };
}
