import { c as create_ssr_component, g as getContext, e as escape } from "./app-4dc8bca7.js";
import { e as episodeSlug } from "./paths-0bd14fe0.js";
const Transcript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let episode = getContext("episode");
  return `${$$result.head += `${$$result.title = `<title>${escape(episode.title)} on React Podcast with chantastic</title>`, ""}<link rel="${"canonical"}" href="${"https://reactpodcast.com/episodes/" + escape(episodeSlug(episode)) + "/transcript"}" data-svelte="svelte-dlsmae">`, ""}

<section id="${"transcript"}" data-transcript><div class="${"mt-4 prose"}"><h2>Transcript</h2>
		<!-- HTML_TAG_START -->${episode.transcription || "No Transcript available for this episode"}<!-- HTML_TAG_END --></div></section>`;
});
export { Transcript as default };
