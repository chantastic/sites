import { getCollection } from "astro:content";

export async function getPostsCollection() {
  let posts = await getCollection("posts", ({ data }) => {
    if (data.publishDate) {
      return true;
    }
    return false;
  });

  posts.sort((a, b) => {
    return b.data.publishDate - a.data.publishDate; // what do i need to do to make this stop warning?
  });

  return posts;
}
