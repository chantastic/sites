import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection("posts", ({ data }) => {
    if (data.publishDate) {
      return true;
    }
    return false;
  });

  return rss({
    title: "chan.dev",
    description: "chantastic tech",
    site: "https://chan.dev/",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
