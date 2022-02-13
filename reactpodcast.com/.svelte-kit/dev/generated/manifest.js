const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/episodes/[id]_[title]/__layout.svelte"),
	() => import("../../../src/routes/episodes/[id]_[title]/index.svelte"),
	() => import("../../../src/routes/episodes/[id]_[title]/transcript.svelte"),
	() => import("../../../src/routes/all.svelte"),
	() => import("../../../src/routes/[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/episodes/[id]_[title]/index.svelte
	[/^\/episodes\/([^/]+?)_([^/]+?)\/?$/, [c[0], c[3], c[4]], [c[1]], (m) => ({ id: d(m[1]), title: d(m[2])})],

	// src/routes/episodes/[id]_[title]/transcript.svelte
	[/^\/episodes\/([^/]+?)_([^/]+?)\/transcript\/?$/, [c[0], c[3], c[5]], [c[1]], (m) => ({ id: d(m[1]), title: d(m[2])})],

	// src/routes/all.svelte
	[/^\/all\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/[slug].svelte
	[/^\/([^/]+?)\/?$/, [c[0], c[7]], [c[1]], (m) => ({ slug: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];