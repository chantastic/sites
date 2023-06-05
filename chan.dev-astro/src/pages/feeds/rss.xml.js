import rss from "@astrojs/rss";
import { getPostCollection } from "@modules/post.ts";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import site from "@src/metadata.json";

const parser = new MarkdownIt();

export async function get(context) {
  let posts = await getPostCollection();

  return rss({
    title: site.title,
    description: "chantastic tech",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      link: `/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
    customData: `<language>en-us</language>`,
  });
}
