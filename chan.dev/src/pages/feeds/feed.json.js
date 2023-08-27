import * as POSTS from "#pages/posts/posts";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import site from "#/metadata.json";
import { url } from "#modules/site";

const parser = new MarkdownIt();

export async function get() {
  const posts = await POSTS.getCollection();

  return {
    body: JSON.stringify({
      version: "https://jsonfeed.org/version/1",
      title: site.title,
      home_page_url: import.meta.env.SITE,
      feed_url: url(
        `${site.feed.path}/${site.feed.jsonFilename}`
      ),
      description: site.description,
      author: {
        name: site.author.name,
        url: import.meta.env.SITE,
      },
      items: posts.map((post) => ({
        id: url(post.slug),
        url: url(post.slug),
        title: post.data.title,
        content_html: sanitizeHtml(parser.render(post.body)),
        date_published: post.data.publishDate,
      })),
    }),
  };
}
