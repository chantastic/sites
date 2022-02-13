import { c as create_ssr_component, i as is_promise, n as noop, a as each, e as escape, b as add_attribute } from "./app-4dc8bca7.js";
import * as datefn from "date-fns";
import { e as episodeSlug } from "./paths-0bd14fe0.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "[data-unlist].svelte-1crkqd1.svelte-1crkqd1.svelte-1crkqd1{list-style-type:none;padding:unset}[data-episode-list].svelte-1crkqd1>.svelte-1crkqd1+.svelte-1crkqd1{margin-block-start:clamp(2rem, 10vw, 5rem)}",
  map: null
};
const prerender = true;
async function load({ fetch }) {
  const PODCAST_ID = "bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3";
  const url = `https://api.simplecast.com/podcasts/${PODCAST_ID}/episodes?limit=10&offset=0`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${"eyJhcGlfa2V5IjoiMGI1NTFjYmE4NTU2ZmYyM2I3YTM2YjU0ODk5ZGQ2MTMifQ=="}`
    }
  });
  if (res.ok) {
    return {
      props: { episodes: await res.json() },
      maxage: 3600
    };
  }
  return {
    status: res.status,
    error: new Error(`Could not load ${url}`)
  };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { episodes } = $$props;
  if ($$props.episodes === void 0 && $$bindings.episodes && episodes !== void 0)
    $$bindings.episodes(episodes);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>React Podcast with chantastic</title>`, ""}`, ""}

<header data-window-content class="${"my-4"}"><a href="${"/"}" class="${""}">React Podcast</a></header>

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<p>waiting for the promise to resolve...</p>
`;
    }
    return function(episodes2) {
      return `
	<div data-window-content><main class="${"border-t-2 border-gray-100 pt-6"}"><ul data-unlist data-episode-list class="${"svelte-1crkqd1"}">${each(episodes2.collection, (episode) => `${episode.status === "published" ? `<li class="${"relative svelte-1crkqd1"}"><p class="${"text-sm leading-5 text-gray-500"}"><time data-episode-item--time${add_attribute("datetime", episode.published_at, 0)}>${escape(datefn.format(new Date(episode.published_at), "MMM d, yyyy"))}
								</time></p>
							<div><h2 class="${"mt-2 text-xl leading-7 font-semibold text-gray-900"}">${escape(episode.title)}</h2>
								<p class="${"mt-3 text-base leading-6 text-gray-500"}">${escape(episode.description)}
								</p></div>
							<div class="${"mt-3"}"><a class="${"text-base leading-6 font-semibold text-teal-600 hover:text-teal-700 focus:outline-none focus:underline"}" href="${"episodes/" + escape(episodeSlug(episode))}"><span class="${"sr-only"}">${escape(episode.title)} </span>Show notes<span class="${"absolute inset-0"}"></span></a></div>
						</li>` : ``}`)}</ul>

			<div class="${"border-t-2 border-gray-100 py-6 mt-6"}"><a href="${"/all"}">See all episodes \u2192</a></div></main></div>
	<div id="${"log"}"><pre>${escape(JSON.stringify(episodes2, null, 2))}</pre></div>
`;
    }(__value);
  }(episodes)}`;
});
export { Routes as default, load, prerender };
