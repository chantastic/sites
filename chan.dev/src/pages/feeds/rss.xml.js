import rss from "@astrojs/rss";
import { getPostCollection } from "@modules/post.ts";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import site from "@src/metadata.json";
import { url } from "@modules/site";

const parser = new MarkdownIt();

export async function get() {
  const posts = await getPostCollection();

  return rss({
    title: site.title,
    description: site.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      link: url(post.slug),
      content: sanitizeHtml(parser.render(post.body)),
    })),
    customData: `<language>en-us</language>`,
  });
}
