import rss from "@astrojs/rss";
import * as POSTS from "#pages/posts/posts";
import sanitizeHtml from "sanitize-html";
import site from "#/metadata.json";
import { url } from "#modules/site";

function formatPostEntryAsRSSItem([file, { frontmatter, compiledContent }]) {
  return {
    title: frontmatter.title,
    pubDate: frontmatter.publishDate,
    description: frontmatter.description,
    categories: frontmatter.tags,
    link: url(file.match(/posts\/(.+)\.md/)[1]),
    content: sanitizeHtml(compiledContent(), {
      allowedTags: [...sanitizeHtml.defaults.allowedTags, "img"],
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        code: ["class"],
      },
    }),
  };
}

export async function GET() {
  const postImportResult = import.meta.glob("../../content/posts/**/*.md", {
    eager: true,
  });

  const posts = POSTS.processFeedEntries(
    postImportResult,
    formatPostEntryAsRSSItem
  );

  return rss({
    title: site.title,
    description: site.description,
    site: import.meta.env.SITE,
    items: posts,
    customData: `<language>en-us</language>`,
  });
}
