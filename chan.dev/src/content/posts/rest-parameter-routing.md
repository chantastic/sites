---
title: Rest parameter dynamic routes
date: 2023-07-12
---

I find [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths 'Astro getStaticPaths() documentation') confusing.
These examples help me make sense of it.

## Rest paramaters match infinitely segments

A file named `[...thing].astro` (placed in the root) will match all of these paths:

```
✅ /
✅ /thing
✅ /doesnt-have-to-be-thing
✅ /nested/thing
✅ /nested/anything
✅ /deeply/nested/thing
✅ /you/get/the/idea/nested/deeply/thing
```

## Nesting in statically named directories

When nested in a static directory (`nested`, not `[nested]`), the rest parameter file matches infinitely nested paths inside that subdirectory path.

```
⛔️ /
⛔️ /thing
⛔️ /doesnt-have-to-be-thing
✅ /nested/thing
✅ /nested/anything
✅ /nested/deeply/thing
⛔️️ /you/get/the/idea/nested/deeply/thing
```

## Nesting in dynamically named directories

When nested in a dynamic directory (`[nested]`, not `nested`), the rest parameter file matches infinitely nested paths for any subdirectory path.

```
⛔️ /
⛔️ /thing
⛔️ /doesnt-have-to-be-thing
✅ /nested/thing
✅ /nested/anything
✅ /nested/deeply/thing
✅ /you/get/the/idea/nested/deeply/thing
```

But this only works for pages that `getStaticPaths()` has generated a first segment for.
In the example above, the first segments are `/nested` and `/you`.

To match all the paths above, the resulting `getStaticPaths()` needs to look like this:

```js
;[
	{params: {nested: 'nested', thing: 'thing'}},
	{params: {nested: 'nested', thing: 'anything'}},
	{params: {nested: 'nested', thing: 'deepy/thing'}},
	{
		params: {
			nested: 'you',
			thing: 'get/the/idea/nested/deeply/thing',
		},
	},
]
```

Note how the entire unmatched path is passed as `thing`.

## Mix static and dynamic

Dynamic and static routes can be mixed and matched.
I love this example from the [Astro docs](https://docs.astro.build/en/core-concepts/routing/#rest-parameters 'Routing with rest parameters — Astro docs').

```js
// `/[org]/[repo]/tree/[branch]/[...file]`
;[
	{
		org: 'withastro',
		repo: 'astro',
		branch: 'main',
		file: 'docs/public/favicon.svg',
	},
	{
		org: 'chantastic',
		repo: 'sites',
		branch: 'main',
		file: 'chan.dev',
	},
]
```

## Keep rest parameters at the end of a path

Just like rest paramaters in JavaScript, limit yourself to one per path, and keep them at the end of discrete file trees.

Weird things happen you attempt two dynamic filenames with rest parameters.

## You can fork a path, one dynamic the other static

Dynamic routes don't have to exhaustive.
You can waste a lot of good effort trying to make your dynamic routes inclusive of your url paths.
Many times you can just add more static paths, or fork dynamic paths.

```
pages/
├─ [dynamic_collection]
│  ├─ [...dynamic_resource].astro
├─ static_collection
│  ├─ static_resource.astro
├─ [different_param]
├─ static_page_with_links_to_both_static_and_dynamic_pages
```

This is the file structure I use to render the lessons, lesson collections, and collection years on this site.

```
pages/lessons/
├─ [...lesson_slug].astro
├─ [year].astro
├─ [collections].astro
├─ [collection].astro
│  ├─ [year].astro
```
