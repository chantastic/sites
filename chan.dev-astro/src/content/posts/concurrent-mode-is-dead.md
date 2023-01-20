---
title: Concurrent Mode is Dead. Long live Concurrent…
publishDate: 2021-06-09
tags:
---

Three years ago [Dan Abramov](https://mobile.twitter.com/dan_abramov/) introduced [Suspense and Async Rendering with React](https://www.youtube.com/watch?v=nLF0n9SACd4) at [JSConf Iceland 2018](https://2018.jsconf.is/speakers/dan-abramov/).

In the three years since, terminology took some twists and turns.

"Suspense" was limited to `React.lazy` in versions 16 and 17.

"Async React" became "Concurrent Mode" — a top-down rendering mode that could be enabled for `Strict Mode`-compatible applications.

React 18 has new-new language. And I'd like to start my tour of React 18 changes by rebasing on new terminology used in the [ReactWG](http://github.com/reactwg) (React Working Group).

## Concurrent Mode => Concurrent everything

"Concurrent Mode" is no more. Bye 👋. We barely knew ya!

Instead of a concurrent mode, concurrency is possible in all React 18 apps.

React 18 adds a set of new features, sometimes called "concurrent features" or "concurrent APIs". These features rely on a new mechanism called "concurrent rendering" that weren't possible before it.

It's a subtle but important change.
Concurrency is no longer something that you opt into at the root of your application. It's an enrichment that happens as you use "Concurrent features and APIs" like `startTransition`.

Concurrent rendering is not a mode.
Concurrent rendering is React.

## New-new, React 18 terminology

Here's the state of React 18 terminology shifts I've seen in [ReactWG discussions](https://github.com/reactwg/react-18/discussions):

<div>
<style>
  ul {
    list-style-type: none;
    padding-inline-start: 1rem;
  }
</style>

Fired:

- ❌ Concurrent Mode

Hired:

- ✅ Concurrent React
- ✅ Concurrent rendering
- ✅ Concurrent features and APIs

</div>

## Takeaway

In React 18, Concurrent React is React. Concurrent features and APIs — like `startTransition` — expose controls for opting into concurrent rendering.

## Acknowledgements

This post was reviewed and improved by the fantastic folks in the reactwg. Lessons learned while writing this post are available via the [reactwg GitHub discussions](https://github.com/reactwg/react-18/discussions/45#discussioncomment-848441).

## Learn with me!

I'm writing more posts like this on React 18.
Sign-up below to get React 18 articles as I write them.

<script async data-uid="462188815e" src="https://chantastic.ck.page/462188815e/index.js"></script>
