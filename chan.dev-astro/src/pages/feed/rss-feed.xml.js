import rss from "@astrojs/rss";

export function get() {
  return rss({
    title: "chan.dev",
    description: "chantastic tech",
    site: "https://chan.dev/",
    items: [],
    customData: `<language>en-us</language>`,
  });
}
