---
title: Intersection Observer
description: 'A detailed explanation of the Intersection Observer API.'
date: 2023-01-05
cover: ./intersection-observer/intersection-observer.png
coverAlt: |
  A planet with overlapping haves appearing to be fused together.
references:
  - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  - https://12daysofweb.dev/2021/intersection-observer
  - https://www.smashingmagazine.com/2021/07/dynamic-header-intersection-observer/
  - https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/
  - https://videotap.com/dashboard/videos/14494/blog
---

## Contents

## Minimum usage

```js
new IntersectionObserver(calledOnIntersection).observe(
	childElement
)
```

## Instantiate Intersection Observer with options

```js ins=/, {}/
new IntersectionObserver(calledOnIntersection, {})
```

## Root option

`root` sets the containing elements. Its default is the top-level viewport.

```diff lang="js"
new IntersectionObserver(calledOnIntersection, {
+ root: document.querySelector('#target_scroll_area'),
})
```

## Threshold option

`threshold` sets the amount of intersection the observed child must have with the root to trigger the callback. Its default is `0` (any intersection) and can be any decimal between `0` and `1`.

![Illustraction of intersections with various threshold. With a value of 0, any overlapping target element is green. With a value of 0.5, only elements overlapping by 50% or more are green. And with a value of 1, only elemnets that are 100% in view are green.](./intersection-observer/intersection-observer_threshold.png)

```diff lang="js"
new IntersectionObserver(calledOnIntersection, {
  root: document.querySelector('#target_scroll_area'),
+ threshold: 0.5, // 50% intersection to be "in view"
})
```

## Margin option

![Illustration of intersections with various margin values. With a value of 0, the viewport is used to determine intersecting targets. With a value of 16px, that area grows to be viewport + margin. With a value of -16 px, the area where intersections are evaluated is 16px inset from the viewport edge (on all sides).](./intersection-observer/intersection-observer_margin.png)

`margin` accepts any CSS margin value (including negative values). Its default is `0`.

```diff lang="js"
new IntersectionObserver(calledOnIntersection, {
  root: document.querySelector('#target_scroll_area'),
  threshold: 0.5,
+ rootMargin: '-50px 0', // 50px of off-screen margin, only on y-axis.
})
```

## IntersectionObserverEntry object

Callbacks receive an array of [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) objects.

```js
let myIOCallback = (entries, observer) => {
	entries.forEach((entry) => {
		// entry: {
		//   boundingClientRect
		//   intersectionRatio
		//   intersectionRect
		//   isIntersecting
		//   rootBounds
		//   target
		//   time
		// }
	})
}
```

See these references for details on [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry):

- [boundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/boundingClientRect)
- [intersectionRatio](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio)
- [intersectionRect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRect)
- [isIntersecting](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting)
- [rootBounds](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/rootBounds)
- [target](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/target)
- [time](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/time)

## .observe() method

Provides an IntersectionObserver instance with target elements to observe.

```js
myIntersectionObserver.observe(target)
```

Observed multiple elements for intersections:

```js del=/target/ ins=/descendents/
const descendents = document.querySelectorAll(
	'.some-descendent'
)

myIntersectionObserver.observe(targetdescendents)
```

[IntersectionObserver observe() method reference.](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe)

## .disconnent()

Stops the IntersectionObserver instance from observing any targets.

```js
myIntersectionObserver.disconnect()
```

[IntersectionObserver disconnect() method reference.](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe)

## .takeRecords()

Query an IntersectionObserver instance for all observed targets. Returns an array of [IntersectionObserverEntry](#intersectionobserverentry-object) objects.

```js
myIntersectionObserver.takeRecords()
```

[IntersectionObserver takeRecords() method reference.](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/takeRecords)

## .unobserve(target)

Remove observed target (or targets) from an IntersectionObserver instance.

```js
myIntersectionObserver.unobserve(target)
```

[IntersectionObserver takeRecords() method reference.](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/takeRecords)

---

## Common uses for IntersectionObserver

- "Read Time" and "amount read" indicators.
- Scrolly-telling animation triggers.
- Lazy-loading assets and scripts.
  - Prefer more modern tools [lazy](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) and script's `defer async`.
- Closing out-of-view menus, tooltips, and overlays.
- Ad interaction tracking.

## When not to use Intersection Observers

[Good counterpoints from Ori Livni.](https://bsky.app/profile/orisomething.bsky.social/post/3kiaxq2lahg2t)

## Posts asking for help

- [Tweet](https://x.com/chantastic/status/1743339523164291092?s=2)
- [Bluesky](https://bsky.app/profile/chantastic.bsky.social/post/3kiawcdqs5b2c)
- [Threads](https://www.threads.net/@chantastic/post/C1uo9PYStcz)
- [Mastodon](https://hachyderm.io/@chantastic/111704771500544741)

## Support

Strong: https://caniuse.com/intersectionobserver

## Cool demo

### Scroll-snap + sticky header

<iframe height="300" style="width: 100%;" scrolling="no" title="Scroll-snap + position: sticky + intersectionObserver" src="https://codepen.io/michellebarker/embed/XwQXGv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/michellebarker/pen/XwQXGv">
  Scroll-snap + position: sticky + intersectionObserver</a> by Michelle Barker (<a href="https://codepen.io/michellebarker">@michellebarker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Scrolly-telling

<iframe height="300" style="width: 100%;" scrolling="no" title="Just an Apple ... 02" src="https://codepen.io/mikeK/embed/qwVROY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mikeK/pen/qwVROY">
  Just an Apple ... 02</a> by Manfred Kempener (<a href="https://codepen.io/mikeK">@mikeK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### There and back effect

<iframe height="300" style="width: 100%;" scrolling="no" title="Intersection Observer" src="https://codepen.io/osublake/embed/WaLjNL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/osublake/pen/WaLjNL">
  Intersection Observer</a> by Blake Bowen (<a href="https://codepen.io/osublake">@osublake</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Page navigation highlighting

<iframe height="300" style="width: 100%;" scrolling="no" title="Experiment with IntersectionObserver and mix-blend-mode" src="https://codepen.io/dffontes/embed/rvzYRp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dffontes/pen/rvzYRp">
  Experiment with IntersectionObserver and mix-blend-mode</a> by Daniel Fontes (<a href="https://codepen.io/dffontes">@dffontes</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe

### etc.

[CodePen collection by Ahmad Shadee](https://codepen.io/collection/AGkZRq?cursor=eyJwYWdlIjoyfQ=)

## Popular videos

Top YouTube results for `"intersection observer"` in incognito.

### Direct search

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube.com/embed/2IbRtjez6ag?si=XtGevFRB6ceNN2X5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube.com/embed/T8EYosX4NOo?si=nlRy6jL73s2wuGKH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube.com/embed/aUjBvuUdkhg?si=0qbYvlh4U8Er8Z8d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube.com/embed/r1auJEf9ISo?si=fAuZbPw-Ly81uC0_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

### Search by views count

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube.com/embed/T33NN_pPeNI?si=yIUBBLno6su9XZaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube.com/embed/LXbtIeHIQJA?si=5vdQYrXqRn16_n4P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube.com/embed/NZKUirTtxcg?si=RQJowlYotg6o-w58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube.com/embed/huVJW23JHKQ?si=R2dLL-7GGbav9uhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
