---
title: Concurrent Mode is Dead. Long live Concurent…
date: 2021-06-09
layout: layouts/post.njk
---

Three years ago [Dan Abramov](https://mobile.twitter.com/dan_abramov/) introduced [Suspense and Async Rendering with React](https://www.youtube.com/watch?v=nLF0n9SACd4) at [JSConf Iceland 2018](https://2018.jsconf.is/speakers/dan-abramov/).

In the three years since, terminology took some twists and turns.

"Suspense" was relegated to use with `React.lazy`.

"Async React" became "Concurrent Mode" — a top-down rendering mode that could be "enabled" for `Strict Mode`-compatible applications.

React 18 has new-new language. And I'd like to start my tour of React 18 changes by rebasing on new terminology used in the [ReactWG](http://github.com/reactwg) (React Working Group).

## Concurrent Mode => Concurrent everything

"Concurrent Mode" is no more. Bye 👋. We barely knew ya!

Instead of a concurrent mode, concurrency is possible in all React 18 apps.

A "Concurrent Renderer" is used for the "Concurrent Rendering" of component trees where "Concurrent features and APIs" — like "Concurrent Suspense" — are used.

It's a subtle but important shift.
Concurrency is no longer something that you opt into at the root of your application. It's an enrichment that happens as you use "Concurrent features and APIs" like `startTransition`.

Concurrent rendering is not a mode.
Concurrent rendering is React.

## New-new, React 18 termonology

Here's the state of React 18 termonology shifts I've seen in [ReactWG discussions](https://github.com/reactwg/react-18/discussions):

<div>
<style>
  ul {
    list-style-type: none;
    padding-inline-start: 1rem;
  }
</style>

Fired:

- ❌ Concurrent Mode
- ❌ Suspense (unmodified)

Hired:

- ✅ Concurrent React
- ✅ Concurrent Rendering
- ✅ Concurrent Renderer
- ✅ Concurrent Suspense
- ✅ Legacy Suspense
- ✅ Concurrent features and APIs

</div>

Buckle up! You're about to see the word "concurrent" a loooooot.

## Learn with me!

I'm writing more posts like this on React 18.
Sign-up below to get React 18 articles as I write them.

<script async data-uid="462188815e" src="https://chantastic.ck.page/462188815e/index.js"></script>
