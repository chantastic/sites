import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<link rel=\"stylesheet\" href=\"/global.css\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-fc5df2ee.js",
			css: [assets + "/_app/assets/start-d5b4de3e.css"],
			js: [assets + "/_app/start-fc5df2ee.js",assets + "/_app/chunks/vendor-470ba9fa.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"global.css","size":759,"type":"text/css"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/episodes\/([^/]+?)_([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1]), title: d(m[2])}),
						a: ["src/routes/__layout.svelte", "src/routes/episodes/[id]_[title]/__layout.svelte", "src/routes/episodes/[id]_[title]/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/episodes\/([^/]+?)_([^/]+?)\/transcript\/?$/,
						params: (m) => ({ id: d(m[1]), title: d(m[2])}),
						a: ["src/routes/__layout.svelte", "src/routes/episodes/[id]_[title]/__layout.svelte", "src/routes/episodes/[id]_[title]/transcript.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/all\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/all.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/([^/]+?)\/?$/,
						params: (m) => ({ slug: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/[slug].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/episodes/[id]_[title]/__layout.svelte": () => import("../../src/routes/episodes/[id]_[title]/__layout.svelte"),"src/routes/episodes/[id]_[title]/index.svelte": () => import("../../src/routes/episodes/[id]_[title]/index.svelte"),"src/routes/episodes/[id]_[title]/transcript.svelte": () => import("../../src/routes/episodes/[id]_[title]/transcript.svelte"),"src/routes/all.svelte": () => import("../../src/routes/all.svelte"),"src/routes/[slug].svelte": () => import("../../src/routes/[slug].svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-2cb81d22.js","css":["assets/pages/__layout.svelte-3e443f86.css"],"js":["pages/__layout.svelte-2cb81d22.js","chunks/vendor-470ba9fa.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-2ad4003b.js","css":[],"js":["error.svelte-2ad4003b.js","chunks/vendor-470ba9fa.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-07f34264.js","css":["assets/pages/all.svelte-a15eb057.css"],"js":["pages/index.svelte-07f34264.js","chunks/vendor-470ba9fa.js","chunks/paths-0bd14fe0.js"],"styles":[]},"src/routes/episodes/[id]_[title]/__layout.svelte":{"entry":"pages/episodes/_id___title_/__layout.svelte-3802d1fc.js","css":[],"js":["pages/episodes/_id___title_/__layout.svelte-3802d1fc.js","chunks/vendor-470ba9fa.js","chunks/paths-0bd14fe0.js"],"styles":[]},"src/routes/episodes/[id]_[title]/index.svelte":{"entry":"pages/episodes/_id___title_/index.svelte-78220e07.js","css":[],"js":["pages/episodes/_id___title_/index.svelte-78220e07.js","chunks/vendor-470ba9fa.js","chunks/paths-0bd14fe0.js"],"styles":[]},"src/routes/episodes/[id]_[title]/transcript.svelte":{"entry":"pages/episodes/_id___title_/transcript.svelte-e05c6672.js","css":[],"js":["pages/episodes/_id___title_/transcript.svelte-e05c6672.js","chunks/vendor-470ba9fa.js","chunks/paths-0bd14fe0.js"],"styles":[]},"src/routes/all.svelte":{"entry":"pages/all.svelte-6c53e221.js","css":["assets/pages/all.svelte-a15eb057.css"],"js":["pages/all.svelte-6c53e221.js","chunks/vendor-470ba9fa.js","chunks/paths-0bd14fe0.js"],"styles":[]},"src/routes/[slug].svelte":{"entry":"pages/_slug_.svelte-a5885ea4.js","css":[],"js":["pages/_slug_.svelte-a5885ea4.js","chunks/vendor-470ba9fa.js","chunks/paths-0bd14fe0.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}