import { getCollection } from "astro:content";
import { compareByDate } from "@modules/collection";

export async function getPostCollection() {
  const result = await getCollection("posts", ({ data }) => {
    if (data.publishDate) {
      return true;
    }
    return false;
  });

  result.sort((a, b) =>
    compareByDate(a.data.publishDate, b.data.publishDate)
  );

  return result;
}

export async function getPostCollectionTags() {
  const posts = await getCollection("posts", ({ data }) => {
    if (data.tags) {
      return true;
    }
    return false;
  });

  const result = [
    ...new Set(
      posts
        .map(({ data }) => data.tags)
        .filter(Boolean)
        .flat()
    ),
  ];

  return result;
}
