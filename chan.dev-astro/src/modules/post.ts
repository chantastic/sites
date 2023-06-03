import { getCollection } from "astro:content";

export async function getPostCollection() {
  let result = await getCollection("post", ({ data }) => {
    if (data.publishDate) {
      return true;
    }
    return false;
  });

  result.sort((a, b) => {
    // https://stackoverflow.com/a/73522819
    let [bDate, aDate] = [
      b.data.publishDate,
      a.data.publishDate,
    ];

    if (!aDate && !bDate) {
      return 0;
    }
    if (!aDate) {
      return -1;
    }
    if (!bDate) {
      return 1;
    }

    return (
      new Date(bDate).getTime() - new Date(aDate).getTime()
    );
  });

  return result;
}
