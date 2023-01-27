import rss from "@astrojs/rss";
import { getPostsCollection } from "@modules/post.mjs";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function get(context) {
  let posts = await getPostsCollection();

  return rss({
    title: "chan.dev",
    description: "chantastic tech",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      link: `/posts/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
    customData: `<language>en-us</language>`,
  });
}
