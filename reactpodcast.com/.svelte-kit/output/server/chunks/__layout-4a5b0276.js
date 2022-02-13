import { c as create_ssr_component, s as setContext, i as is_promise, n as noop, b as add_attribute, e as escape } from "./app-4dc8bca7.js";
import * as datefn from "date-fns";
import { e as episodeSlug } from "./paths-0bd14fe0.js";
const prerender = true;
async function load({ page, fetch }) {
  const url = `https://api.simplecast.com/episodes/${page.params.id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${"eyJhcGlfa2V5IjoiMGI1NTFjYmE4NTU2ZmYyM2I3YTM2YjU0ODk5ZGQ2MTMifQ=="}`
    }
  });
  if (res.ok) {
    let episode = await res.json();
    return {
      props: { episode },
      maxage: datefn.differenceInDays(new Date(Date.now()), new Date(episode.published_at)) >= 7 ? 3600 : 0
    };
  }
  return {
    status: res.status,
    error: new Error(`Could not load ${url}`)
  };
}
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { episode } = $$props;
  setContext("episode", episode);
  if ($$props.episode === void 0 && $$bindings.episode && episode !== void 0)
    $$bindings.episode(episode);
  return `<header data-window-content class="${"my-4"}"><a href="${"/"}">\u2190 All Episodes</a></header>
${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<p>waiting for the promise to resolve...</p>
`;
    }
    return function(episode2) {
      return `
	<main><div data-window-content><div class="${"border-t-2 border-gray-100 pt-6"}"><div><p class="${"text-sm leading-5 text-gray-500"}"><time${add_attribute("datetime", episode2.published_at, 0)}>${escape(datefn.format(new Date(episode2.published_at), "MMM d, yyyy"))}</time></p>
					<div><h1 class="${"mt-2 text-xl leading-7 font-semibold text-gray-900"}"><a href="${"/episodes/" + escape(episodeSlug(episode2))}">${escape(episode2.title)}</a></h1>
						<noscript class="${"my-8"}"><audio${add_attribute("src", episode2.audio_file_url, 0)} class="${"w-full"}" controls>Your browser does not support the <code>audio</code> element.
							</audio></noscript>
						<div style="${"position:sticky; top: 0; z-index: 900; background-color: white;"}"><iframe title="${"Media player for episode " + escape(episode2.title)}" class="${"my-4"}" height="${"200px"}" width="${"100%"}" frameborder="${"no"}" scrolling="${"no"}" seamless src="${"https://player.simplecast.com/" + escape(episode2.id) + "?dark=true"}"></iframe></div>

						<p class="${"mt-3 text-base leading-6 text-gray-600"}">${escape(episode2.description)}</p>

						<a href="${"/episodes/" + escape(episodeSlug(episode2))}">Notes</a>
						<a href="${"/episodes/" + escape(episodeSlug(episode2)) + "/transcript"}">Transcript</a>
						${slots.default ? slots.default({ episode: episode2 }) : ``}</div></div></div></div>

		<div id="${"log"}"><pre>${escape(JSON.stringify(episode2, null, 2))}</pre></div></main>
`;
    }(__value);
  }(episode)}`;
});
export { _layout as default, load, prerender };
