import { c as create_ssr_component } from "./app-4dc8bca7.js";
import { e as episodeSlug } from "./paths-0bd14fe0.js";
const prerender = true;
async function load({ page, fetch }) {
  const PODCAST_ID = "bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3";
  const url = `https://api.simplecast.com/podcasts/${PODCAST_ID}/episodes?limit=1000&offset=0`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${"eyJhcGlfa2V5IjoiMGI1NTFjYmE4NTU2ZmYyM2I3YTM2YjU0ODk5ZGQ2MTMifQ=="}`
    }
  });
  if (res.ok) {
    let episodes = await res.json();
    let episode = episodes?.collection?.find((episode2) => episode2.slug === page.params.slug);
    if (!episode) {
      return;
    }
    return {
      redirect: `/episodes/${episodeSlug(episode)}`,
      status: 302
    };
  }
  return {
    status: res.status,
    error: new Error(`Could not load ${url}`)
  };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
export { U5Bslugu5D as default, load, prerender };
