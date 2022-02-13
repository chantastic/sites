import { c as create_ssr_component, g as getContext, e as escape } from "./app-4dc8bca7.js";
import { e as episodeSlug } from "./paths-0bd14fe0.js";
const U5Bidu5D_u5Btitleu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let episode = getContext("episode");
  return `${$$result.head += `${$$result.title = `<title>${escape(episode.title)} on React Podcast with chantastic</title>`, ""}<link rel="${"canonical"}" href="${"https://reactpodcast.com/episodes/" + escape(episodeSlug(episode))}" data-svelte="svelte-i2her6">`, ""}

<section><div class="${"mt-4 prose"}"><h2>Notes</h2>
		<!-- HTML_TAG_START -->${episode.long_description}<!-- HTML_TAG_END --></div></section>`;
});
export { U5Bidu5D_u5Btitleu5D as default };
