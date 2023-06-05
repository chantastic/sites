import { getPostCollection } from "@modules/post.ts";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import site from "@src/metadata.json";

const parser = new MarkdownIt();

export async function get(context) {
  let posts = await getPostCollection();
  return {
    body: JSON.stringify({
      version: "https://jsonfeed.org/version/1",
      title: "chan.dev",
      home_page_url: "https://chan.dev/",
      feed_url: "https://chan.dev/feeds/feed.json",
      description: "",
      author: {
        name: "Michael Chan",
        url: "https://chan.dev/",
      },
      items: posts.map((post) => ({
        id: `https://chan.dev/${post.slug}`,
        url: `https://chan.dev/${post.slug}`,
        title: post.data.title,
        content_html: sanitizeHtml(parser.render(post.body)),
        date_published: post.data.publishDate,
      })),
    }),
  };
}
