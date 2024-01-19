---
title: Intersection Observer
description: ''
date: 2023-01-05
references:
  - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  - https://12daysofweb.dev/2021/intersection-observer
  - https://www.smashingmagazine.com/2021/07/dynamic-header-intersection-observer/
  - https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/
  - https://videotap.com/dashboard/videos/14494/blog
---

## Questions

- "how does rootMargin resolve element margin?"

## API

- `asynchronous`
- "observer target" (the element we're observing)
- we can provide a negative root margin.

`root`
: an ancestor element used for tracking visibility, <mark>defaulting to the browser viewport</mark>
: https://arc.net/l/quote/bfhykatm

`rootMarign`
: enables changing the intersection bounding box using percent or pixel values corresponding to top right bottom left similar to margin, useful for tracking based on passing for example the midpoint of the ancestor vs. the bottom edge
: https://arc.net/l/quote/muidvwdl
: syntax is like the margin property

`threshold`
: the percentage of the target element that must be visible to trigger the callback, defined as a single number or an array of decimal values between 0 and 1. Default is `0`???.
: https://arc.net/l/quote/svgmpjss

## Tips

- Better adjust `rootMargin` then `threshold` in most cases.
  - https://arc.net/l/quote/hwajltvf
- [Visualization tool](https://codepen.io/michellebarker/full/xxwLpRG)

## Usage

```js
// Target to observe
const boxEl = document.getElementById('box')
// Observer
const boxObserver = new IntersectionObserver(
	callback /*options*/
)
// Observing #box
boxObserver.observe(boxEl)
```

NOTE: `observe`, `unobserve`, and separated all of the reusable chunks out.

- `entries` (argument) ([]Elements)
- `entries[0]`
- `if (!box.isIntersecting) return` (`isIntersecting`)

##

- "Read Time"
- trigger animations
- lazy load assets and scripts
- closing out-of-view menus, tooltips, and overlays

## TODO

- [x] Collect resources
- [x] Stream content as I learn
- [ ] Complete competitive analysis to determine title and thumbnail
- [ ] Stream taking notes
- [ ] Draft 3 minute video
- [ ] Script video and social content
- [ ] Record 3 minute video
- [ ] Edit
- [ ] Publish
- [ ] Distribute

### Core

- 1-5 minute piece on Intersection Observer API
- Socials:
  - YouTube
  - Twitter
  - Shorts, TikTok, Reels
- Find viewer motivation, maybe a cool feature they see oth websites?

### Follow-up

- cross-post this post to dev.to, hackernoon, medium
- distribute on reddit, twitter,

### Define what it isn't

- ResizeObserve
  - https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-proble/
  - https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserve
- Conterpoint: [just use scroll even](https://bsky.app/profile/orisomething.bsky.social/post/3kiaxq2lahg2t)

## Learner outcome

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

[CodePen collection by Ahmad Shadee](https://codepen.io/collection/AGkZRq?cursor=eyJwYWdlIjoyfQ=

## Competitive analysis

_Top YouTube results for `"intersection observer"` in incognito_

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

### Search by by views count

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

### Summary

Decide on one killer feature and call that out in the title.
Put the API term in the description (and in content, obvi).

## Thanks!

- [Prince Wilson](https://x.com/maxcell/status/1743342061661597890?s=2), for [Stephanie Eckles](https://twitter.com/5t3ph)' article.
- [Ashley Ryan](https://x.com/ashleyepryan/status/1743342489396826273?s=20), for [Michelle Barker](https://twitter.com/MicheBarks)'s article.

## Raw Stream transcript (Whisper --small)

```plaintext
[00:00.000 --> 00:04.160]  Hey, how's it going?
[00:04.160 --> 00:06.360]  It's been a while since we've done this.
[00:06.360 --> 00:07.360]  A long while.
[00:07.360 --> 00:12.360]  I don't have any of my regular setup here, so I apologize.
[00:12.360 --> 00:15.440]  I'm going to do my best to, I don't know, I think it's working.
[00:15.440 --> 00:16.760]  I don't even know if it's working.
[00:16.760 --> 00:18.160]  It's been a while.
[00:18.160 --> 00:22.760]  But I'm doing some research on Intersection Observer, and I thought instead of just doing
[00:22.760 --> 00:26.840]  that by myself, I could do it here.
[00:26.840 --> 00:30.160]  And then, you know, if you're interested in this stuff or you just want to hang out,
[00:30.160 --> 00:32.480]  then, you know, we can do it together.
[00:32.480 --> 00:39.160]  So here we are together, hello to the handful of people who are watching right now.
[00:39.160 --> 00:47.520]  Okay, so today, my goal is, we're going to project right now that involves Intersection
[00:47.520 --> 00:53.840]  Observer, and I want to make a video about it, but it's kind of like an interesting challenge
[00:53.840 --> 00:58.320]  because like Intersection Observer is kind of like a boring API.
[00:58.320 --> 01:04.400]  So I was thinking about ways that I could make like a more interesting video about it.
[01:04.400 --> 01:09.840]  And so as I learn, I'm kind of thinking about how I can make a video and, you know, what
[01:09.840 --> 01:11.320]  are the most important takeaways.
[01:11.320 --> 01:21.480]  So what I have here is I had asked on social, like what some people found to be like really
[01:21.480 --> 01:25.280]  helpful resources when learning about Intersection Observer.
[01:25.280 --> 01:28.360]  So I caught a bunch of those.
[01:28.360 --> 01:32.640]  I think, let's see, Prince gave me a great one, and Ashley gave me a great one.
[01:32.640 --> 01:35.600]  These two blog posts I'm really excited about.
[01:35.600 --> 01:41.040]  And then I have a handful of videos both on Intersection Observer like outright or like
[01:41.040 --> 01:45.840]  things that you can do with Intersection Observer, which is like anime and all that
[01:45.840 --> 01:46.840]  kind of stuff.
[01:46.840 --> 01:50.800]  So that's what we're going to be going through today.
[01:50.800 --> 01:58.080]  And so, yeah, if you had me interested in this, then, you know, I hope that you enjoy.
[01:58.080 --> 02:01.040]  One thing that I am kind of curious about is whether or not the audio is going to come
[02:01.040 --> 02:09.320]  through because I'm not sure if I set that up properly, but we'll see how it goes.
[02:09.320 --> 02:17.280]  Okay, hopefully I didn't break anything and it'll still come through.
[02:17.280 --> 02:19.440]  Actually, I'm going to give it a try.
[02:20.120 --> 02:22.720]  Hi there, my name is Kevin and welcome to this video where we're going to be looking
[02:22.720 --> 02:24.760]  at Intersection Observers.
[02:24.760 --> 02:27.800]  You guys have been asking for some JavaScript and we're finally doing some after a long
[02:27.800 --> 02:29.320]  time of not having done any.
[02:29.320 --> 02:32.320]  So that is pretty exciting.
[02:32.320 --> 02:36.160]  If you don't know what Intersection Observers are, they're really cool.
[02:36.160 --> 02:38.160]  Here we go.
[02:38.160 --> 02:40.360]  Okay, let's dive in.
[02:40.360 --> 02:41.360]  Where was I?
[02:41.360 --> 02:43.360]  Okay, so these are the things that I am hoping to do.
[02:43.360 --> 02:44.800]  I want to collect some resources.
[02:44.800 --> 02:46.160]  I did do that.
[02:46.160 --> 02:53.520]  So a done there, let's see, yep, okay, cool.
[02:53.520 --> 02:54.520]  Strip content.
[02:54.520 --> 02:55.520]  Okay, here we go.
[02:55.520 --> 02:56.520]  We're doing that.
[02:56.520 --> 03:02.360]  I'm going to put an X because technically it is done enough, but we're going to do some,
[03:02.360 --> 03:03.360]  take it further.
[03:03.360 --> 03:09.520]  Okay, so complete competitive analysis, sermon, title, and thumbnail of this video.
[03:09.520 --> 03:16.120]  So this is something that's kind of interesting right off the bat is I looked at these videos
[03:16.120 --> 03:24.480]  actually, I'm going to do this, let's go to YouTube.
[03:24.480 --> 03:33.160]  And we're just going to type in Intersection Observer, server.
[03:33.160 --> 03:38.720]  Now we get these videos and as far as I can tell, like the most pop, let's see if we sort
[03:38.720 --> 03:44.000]  it by looking at all the videos, how do we sort?
[03:44.000 --> 03:54.800]  Yeah, there we go, sort by view count.
[03:54.800 --> 03:59.760]  The videos that seem so you kind of see like the videos like flip, you know, all these
[03:59.760 --> 04:05.360]  videos that we saw first place, like on the tournament match actually like went to like
[04:05.360 --> 04:06.360]  a lower place.
[04:06.360 --> 04:11.880]  And I was realizing like through like kind of the finding these videos that a lot of them
[04:11.880 --> 04:13.720]  are based on like a feature.
[04:13.720 --> 04:17.320]  So this one's animated on scroll, which is kind of an interesting concept.
[04:17.320 --> 04:19.320]  This one's infinite scroll.
[04:19.320 --> 04:23.360]  This is a Chrome announcement, which is interesting.
[04:23.360 --> 04:29.040]  But it got me thinking that like a more compelling version of this video is maybe video specifically
[04:29.040 --> 04:35.520]  on what is possible through these, these APIs.
[04:35.520 --> 04:41.520]  So I'm going to focus, I think on the infinite scroll case, because that's the one that I
[04:41.520 --> 04:47.600]  think is most like, like rockable, there's, there's enough context there.
[04:47.600 --> 04:51.640]  And it's pretty easy, like as soon as you hit the end, you know, you can do the thing.
[04:51.640 --> 04:57.400]  I'm curious if that's enough to justify thinking about interception, intersection observer
[04:57.400 --> 05:04.880]  versus just kind of like a scroll height, like on a scroll event, but we'll see.
[05:04.880 --> 05:06.600]  Okay, cool.
[05:06.600 --> 05:09.320]  Let's dive into it.
[05:09.320 --> 05:12.480]  I've heard all of that.
[05:12.480 --> 05:15.040]  I think I'm going to start with the blog posts.
[05:15.040 --> 05:18.920]  Yeah, let's do that.
[05:18.920 --> 05:26.560]  Okay, so the first one I got was this blog post by Stephanie Eccles.
[05:26.560 --> 05:28.560]  Oh, shoot.
[05:28.560 --> 05:31.400]  Where's it?
[05:31.400 --> 05:33.720]  It's been a week since I've actually looked at this stuff.
[05:33.720 --> 05:37.520]  So it's kind of in shambles right now.
[05:37.520 --> 05:41.240]  This is the state of all my notes.
[05:41.240 --> 05:45.320]  Cool demos.
[05:45.320 --> 05:48.960]  Where did I put the posts?
[05:48.960 --> 05:52.840]  Right.
[05:52.840 --> 05:55.040]  Okay.
[05:55.040 --> 06:04.920]  Okay.
[06:04.920 --> 06:11.120]  So intersection observer, use the intersection observer web API as a performant way to track
[06:11.120 --> 06:17.000]  where elements are in viewports and other scrollable regions.
[06:17.000 --> 06:20.720]  Stephanie Eccles is great, by the way, she puts a ton of really great stuff.
[06:20.720 --> 06:23.480]  I think this is from like a 12 days Christmas thing.
[06:23.880 --> 06:26.200]  You should definitely sign up.
[06:26.200 --> 06:27.920]  I love little series like this.
[06:27.920 --> 06:30.760]  This is super cool.
[06:30.760 --> 06:33.640]  Okay, so what is intersection observer API?
[06:33.640 --> 06:40.560]  The intersection observer, I owe web API, is an asynchronous way to watch the visibility
[06:40.560 --> 06:46.600]  of target elements either within their ancestors or the main viewport.
[06:46.600 --> 06:51.160]  Okay, to watch the visibility of target elements.
[06:51.160 --> 06:57.200]  Okay, so like as they so like this could be our target element and it is currently visible
[06:57.200 --> 06:59.200]  and then now it's not visible.
[06:59.200 --> 07:02.600]  So I think that's what I'm understanding.
[07:02.600 --> 07:10.760]  Okay, you can trigger additional events based on the target elements visibility and position
[07:10.760 --> 07:13.440]  aka where it's intersecting.
[07:13.440 --> 07:17.840]  Importantly, this observation happens off the main thread.
[07:17.840 --> 07:20.880]  Okay, that's the async, renness parts.
[07:20.880 --> 07:25.600]  Meaning it can be more performant alternative to other scroll tracking methods.
[07:25.600 --> 07:26.600]  Okay, cool.
[07:26.600 --> 07:30.280]  Zoom is in a little bit.
[07:30.280 --> 07:35.920]  While I owe is technically our intersection observer is technically an experimental API.
[07:35.920 --> 07:38.600]  It has very good browser support.
[07:38.600 --> 07:39.760]  Let's pop that open.
[07:39.760 --> 07:44.000]  Yeah, when was this written?
[07:44.000 --> 07:50.200]  I have a feeling that it's just kind of standard now because let's see let's look at this.
[07:50.200 --> 07:54.480]  So we have current relative usage.
[07:54.480 --> 07:59.040]  Yeah, it's got 97.26%.
[07:59.040 --> 08:01.680]  That's good enough for me to call it standard.
[08:01.680 --> 08:10.400]  So let's carry on very good browser support being experimental mostly means it is possible
[08:10.400 --> 08:13.680]  that it could undergo breaking changes good.
[08:13.680 --> 08:15.680]  Okay.
[08:15.680 --> 08:16.920]  Not too worried about that.
[08:16.920 --> 08:20.360]  I owe core features and concepts.
[08:20.360 --> 08:26.960]  Let's consider a scenario where an AI and an IO is useful intersection observer, a sticky
[08:26.960 --> 08:32.840]  table of contents for in page links where you want to highlight the current section.
[08:32.840 --> 08:37.480]  Okay, a sticky table of contents for in page links.
[08:37.480 --> 08:45.040]  Okay, previously, you may have taken measurements between the top of the viewport and the top
[08:45.160 --> 08:47.160]  of each new section.
[08:47.160 --> 08:48.160]  Yep.
[08:48.160 --> 08:49.160]  Okay.
[08:49.160 --> 08:54.200]  Then set up a squirrel tracking to add a class to the related link with IO.
[08:54.200 --> 09:00.560]  You can instead separately observe when each page section intersects.
[09:00.560 --> 09:06.880]  So the midpoint of the viewport and the trigger updating an active link state.
[09:06.880 --> 09:07.880]  That's a mouthful.
[09:07.880 --> 09:13.920]  Okay, so I think if I understand correctly, it binds it more to the like, let's see, like
[09:13.920 --> 09:16.120]  the target effectively.
[09:16.120 --> 09:23.620]  So we can instead of saying we know that this element is this high on this big of a document,
[09:23.620 --> 09:28.880]  we know we just grab that element and say if it's visible, then we're in that section
[09:28.880 --> 09:34.360]  and we want to activate that element is kind of the conceptual difference.
[09:34.360 --> 09:40.520]  It's a little bit more, I guess, declarative in that way where you're saying I want this
[09:40.520 --> 09:47.000]  element to be in screen when I make this change, as opposed to calculate the difference
[09:47.000 --> 09:51.600]  between this element and the floor of the page to know whether or not it's in scope
[09:51.600 --> 09:53.600]  or something.
[09:53.600 --> 09:54.880]  I've never actually done that.
[09:54.880 --> 10:01.800]  So I don't know, I don't have a proper comparison kind of like logged into my head.
[10:01.800 --> 10:06.440]  Let's see when using intersection observer, the target element intersection is calculated
[10:06.440 --> 10:07.840]  based on three options.
[10:07.840 --> 10:09.840]  Okay, this is helpful.
[10:10.160 --> 10:12.840]  And then I'm going to take notes as we go through this.
[10:12.840 --> 10:18.800]  So three options, route, an ancestor or element used for tracking visibility default to the
[10:18.800 --> 10:22.000]  route defaulting to the browser viewport.
[10:22.000 --> 10:27.360]  Okay, cool, that is interesting.
[10:27.360 --> 10:36.640]  Also, our case is cool, quote links, which I think are really awesome.
[10:36.640 --> 10:42.240]  Because you can, they unfurl, like if you paste a link, it'll actually like show this
[10:42.240 --> 10:44.360]  as a quote, which is really awesome.
[10:44.360 --> 10:50.320]  I do worry about like a rot, like if, you know, the browser company goes under, what's
[10:50.320 --> 10:55.000]  going to happen with all of those links?
[10:55.000 --> 11:00.160]  Because oh, that's the other thing is here, let's go to VS code.
[11:00.160 --> 11:06.560]  If I paste that link, it's like this fully obfuscated arc link, it doesn't actually link
[11:06.560 --> 11:15.720]  back to the content with, you know, additional stuff, which is sad, just sad.
[11:15.720 --> 11:16.720]  All right.
[11:16.720 --> 11:20.920]  Okay, so let's make a section here for the API.
[11:20.920 --> 11:31.360]  I'm just going to put any section anywhere, just go to the top.
[11:31.360 --> 11:36.240]  Okay, so the API has a handful of terms we're learning.
[11:36.240 --> 11:54.240]  Here is the root, root, and that is, okay, an ancestor element used, okay, so it defaults
[11:54.240 --> 12:00.640]  to the browser, that is an important, or the viewport, which is an important kind of takeaway
[12:00.640 --> 12:01.640]  for me.
[12:01.640 --> 12:07.880]  I'm just going to mark that.
[12:07.880 --> 12:11.800]  Knowing your defaults is like, you know, half the battle in my opinion.
[12:11.800 --> 12:18.640]  Dude, Travis, hey, good to see you, good to see you, does this work, oh, hey, there it
[12:18.640 --> 12:19.640]  is.
[12:19.640 --> 12:26.840]  Good to see you, slowly clawing my way out of the dark, and I'm glad you're here, glad
[12:26.840 --> 12:27.840]  you're here.
[12:27.840 --> 12:28.840]  Okay, cool.
[12:28.840 --> 12:32.600]  So the next part is root margin.
[12:32.600 --> 12:38.680]  So this enables changing the intersection bounding box using percent or pixel values corresponding
[12:38.680 --> 12:48.560]  to the top, right, bottom, and left, similar to margin, useful for tracking based on passing.
[12:48.560 --> 12:58.480]  For example, the midpoint of the ancestor versus the bottom or the edge, okay.
[12:58.480 --> 13:28.280]  Root margin, root margin, copy link to highlight, okay, there we go.
[13:29.240 --> 13:38.360]  Okay, threshold is the percentage of the target element that must be visible to trigger the
[13:38.360 --> 13:39.360]  callback.
[13:39.360 --> 13:42.520]  Wow, this is already a little bit more advanced than I thought it would be, which is like
[13:42.520 --> 13:43.720]  really exciting.
[13:43.720 --> 13:48.920]  The idea that like this route, at what point it's considered out, you know, what percentage
[13:48.920 --> 13:54.520]  wise like, you know, less than 5%, or more than 95%.
[13:55.280 --> 14:01.560]  Okay, defined as a single number or an array of decimal values between one and zero.
[14:01.560 --> 14:02.560]  Okay, cool.
[14:02.560 --> 14:03.560]  Let's grab that.
[14:04.560 --> 14:06.560]  Copy link to highlight.
[14:13.560 --> 14:16.560]  And let's grab this term.
[14:16.560 --> 14:21.560]  Okay, so we have threshold, root margin and root.
[14:24.560 --> 14:37.520]  Okay, once the target is visible based on these parameters, the IO, the intersection
[14:37.520 --> 14:45.680]  observer initiates a callback with additional data you can use for your event one intersection,
[14:45.680 --> 14:52.160]  one intersecting bit of data is the time in milliseconds between when you when an observer
[14:52.200 --> 14:56.200]  was started, and when the callback was triggered.
[14:56.200 --> 15:00.040]  I got you for intersection observer is the threshold value.
[15:00.040 --> 15:05.360]  If you select one, meaning when the element is 100% visible, then the entirety of the
[15:05.360 --> 15:09.640]  element must be visible within the route at once.
[15:09.640 --> 15:15.680]  Given scrollable areas ranging from phones to mega monitors with varying resolutions aspects
[15:15.680 --> 15:21.720]  ratios, 100% is difficult to achieve without failing in some scenarios.
[15:21.720 --> 15:28.480]  The default for threshold is zero, meaning as soon as even one pixel is visible, the
[15:28.480 --> 15:32.680]  callback will initiate that is also worth noting.
[15:32.680 --> 15:38.680]  So the default default is zero.
[15:41.680 --> 15:48.120]  Okay, so anytime it's in the document at all, and I'm assuming like with text and stuff,
[15:48.120 --> 15:51.120]  there's a little bit of kind of line height on those elements.
[15:51.120 --> 16:00.480]  So in this case, that could be considered in for this line, assuming we'll find out
[16:00.480 --> 16:06.080]  more reliable, see a more reliable way to change when a callback occurs is to adjust
[16:06.080 --> 16:13.000]  the route margin to reposition it when the at what point the target element needs to
[16:13.000 --> 16:18.480]  intersect the route, more reliable way to change when a callback occurs is just the
[16:18.480 --> 16:21.320]  route mark. Oh, I see. Okay, cool.
[16:21.320 --> 16:27.440]  So I think this is like the invisible space around an element.
[16:27.440 --> 16:31.720]  We want to change that instead of this threshold.
[16:31.720 --> 16:34.880]  So that's a good point.
[16:34.880 --> 16:39.920]  So let's call this section tips.
[16:39.920 --> 16:46.040]  Better to adjust margin.
[16:46.600 --> 16:51.600]  Then threshold, in most cases.
[17:00.600 --> 17:03.600]  Okay, like that.
[17:08.600 --> 17:15.600]  Okay, creating a basic intersection observer first, we'll make sure the API is available.
[17:15.600 --> 17:22.600]  So we would say if intersection observer in window, let's run that test.
[17:22.600 --> 17:26.600]  Oh, my gosh.
[17:26.600 --> 17:34.600]  One thing that I absolutely hate about ARC is the DevTools are like unusable.
[17:34.600 --> 17:37.600]  I can't like zoom in or out of them.
[17:37.600 --> 17:39.600]  So bear with me.
[17:39.600 --> 17:41.600]  We're just going to check this.
[17:41.600 --> 17:46.600]  Intersection observer is going to live on the window.
[17:46.600 --> 17:51.600]  So if we go to our console.
[17:51.600 --> 17:53.600]  Intersection.
[17:53.600 --> 17:55.600]  Observer.
[17:55.600 --> 18:00.600]  Cool. We have that as native code. Perfect.
[18:01.600 --> 18:10.600]  Okay, so then we initiate, then we initiate the observer and begin observing our target.
[18:10.600 --> 18:15.600]  Okay, so, okay.
[18:15.600 --> 18:22.600]  Hey, thanks for the like.
[18:22.600 --> 18:29.600]  Okay, so multiple. Sorry, the styling on all this stuff is is whack right now.
[18:29.600 --> 18:35.600]  But yeah, so, so multiple thresholds equals multiple triggers.
[18:35.600 --> 18:38.600]  I don't know yet. That's a good question.
[18:38.600 --> 18:40.600]  Let's figure it out.
[18:40.600 --> 18:55.600]  Let's see. So box amount is document dot get element by ID box, and then observe intersection observer so we have a callback with our options.
[18:55.600 --> 18:59.600]  Box observer and then we call observe on it.
[18:59.600 --> 19:03.600]  And okay, cool.
[19:03.600 --> 19:10.600]  Okay, so let's see if we have any I assume that these headings are going to have IDs.
[19:10.600 --> 19:18.600]  So let's use this post and create an intersection observer.
[19:18.600 --> 19:37.600]  So first, which heading is this basics heading, I'm sorry for the small size I wish I could zoom it inside of our but it's going to blow things up.
[19:37.600 --> 19:42.600]  Equals document dot get element by ID.
[19:42.600 --> 19:46.600]  Oh, I didn't even look at the ID.
[19:46.600 --> 19:51.600]  Okay, that's the ID we'll use.
[19:51.600 --> 19:55.600]  Don't paste code.
[19:55.600 --> 20:08.600]  I'm on a new machine. So, or not a new machine, a reformatted machine so all of these things have to do again. So allow pasting.
[20:08.600 --> 20:20.600]  Okay, let's read that again. So box heading we want to track is document dot get elements by ID.
[20:20.600 --> 20:29.600]  What I did that please type allow pasting below to allow pasting. Okay, do I have to not do it.
[20:29.600 --> 20:31.600]  Allow pasting.
[20:31.600 --> 20:38.600]  Is that it. Now can I do it. Now will you let me do it.
[20:38.600 --> 20:49.600]  Const heading equals document dot get element by ID.
[20:49.600 --> 20:55.600]  Finally, okay, so we have it. Okay, heading. We have our element great.
[20:55.600 --> 21:22.600]  Okay, we have our elements. Now we need to create an intersection intersection observer. So our heading observer, let's do that.
[21:22.600 --> 21:34.600]  New intersection observer. And we'll just do an anonymous callback for now, we will console dot log.
[21:34.600 --> 21:41.600]  Oh, Arx, can we do that.
[21:41.600 --> 21:50.600]  And then I'm not too worried about the options. I just want like a basic I just want a basic one. Okay, and then we're going to do heading.
[21:50.600 --> 21:58.600]  Observer dot observe.
[21:58.600 --> 22:19.600]  And then we pass in our heading. Okay, gotcha. So this intersection observer will observe anything once we create it so I didn't need to name this heading observer, because it doesn't have any notion of the heading.
[22:19.600 --> 22:23.600]  Okay.
[22:23.600 --> 22:28.600]  Heading observer is not a function.
[22:28.600 --> 22:31.600]  Maybe I just spelled. Oh, yeah, I spelled it wrong.
[22:31.600 --> 22:43.600]  Observer, it's going to be observe reference Arx is not available. Okay, we can fix that.
[22:43.600 --> 22:51.600]  We're just going to take Arx.
[22:51.600 --> 23:03.600]  Oh, right, because arguments isn't it.
[23:03.600 --> 23:17.600]  Okay, whatever, just take them.
[23:17.600 --> 23:20.600]  Okay, run again. Okay, cool, perfect.
[23:20.600 --> 23:30.600]  Okay, so we're observing this. Let's see, it looks like it's in the document right now. So we had it log out these two elements.
[23:30.600 --> 23:35.600]  What it logs out is the intersection.
[23:35.600 --> 23:38.600]  What is it? The, what does it call it?
[23:38.600 --> 23:42.600]  Intersection observer entry.
[23:42.600 --> 23:48.600]  Which includes
[23:48.600 --> 23:59.600]  I can zoom in that way. Let's see, which includes a bounding client wrecked intersection wrecked root bounds target and time. Okay, so they did mention time.
[23:59.600 --> 24:10.600]  And then to what's this delay route, margin routes, scroll margin threshold. Okay, so these are the API is that we know about which.
[24:10.600 --> 24:12.600]  Okay.
[24:12.600 --> 24:27.600]  Perfect. I guess those are options. Actually, let's test that three out. So if I redefine this function and provided an option which is going to be the, let's call it.
[24:27.600 --> 24:30.600]  We say root margin.
[24:30.600 --> 24:36.600]  So right now root, root margin looks like that. Let's call.
[24:36.600 --> 24:40.600]  I assume it's an object. I don't know yet.
[24:40.600 --> 24:44.600]  Root margin.
[24:44.600 --> 24:50.600]  Just do one rem all around.
[24:50.600 --> 24:56.600]  Root margin must be specified in pixels or percentages. Okay.
[24:56.600 --> 25:00.600]  Okay, we'll call this eight pixels. Okay, cool.
[25:00.600 --> 25:05.600]  Now, if I get that to log again.
[25:05.600 --> 25:14.600]  Actually, I have to run the function, the new function with the header. Okay, so I get that to log again.
[25:14.600 --> 25:30.600]  Yes, okay, so we have a root margin margin of eight pixels, which means that that is coming from our handler is that's coming from our definition of those options, which are an object, which is great.
[25:30.600 --> 25:45.600]  Okay, so this is our basic usage. I'm going to copy that.
[25:45.600 --> 25:59.600]  So basic usage, pretty simple. We don't have anything I'm actually going to take these options out because totally optional as the name implies.
[25:59.600 --> 26:26.600]  Okay, so, man, I wish that was more visible. I'm just going to read what you have to say Travis. The big gotcha for observer is that they are designed to observe multiple elements.
[26:26.600 --> 26:47.600]  They're just one. So if they have the same logic use one observer for multiple elements. Yes, yeah, so there's a separation here right like I could have a like log log element as it enters frame type of thing which is what I'm doing right here.
[26:47.600 --> 26:59.600]  Then I could apply that to any element as it goes in and out of frame. I am curious I am finding myself curious like, so we have a reference here, right so do we turn.
[27:00.600 --> 27:14.600]  How do we stop observing observer dot like what we have we have Oh disconnect observe I assume disconnect is how we turn it off.
[27:14.600 --> 27:18.600]  And it looks like we can apply options after the fact.
[27:18.600 --> 27:21.600]  So disconnect.
[27:21.600 --> 27:37.600]  Now as I scroll this element in and out of view okay I had multiples of them though so this probably isn't fair I probably just they're often memory somewhere.
[27:37.600 --> 27:39.600]  Okay.
[27:39.600 --> 27:46.600]  I do like I do like that as maybe a better example.
[27:46.600 --> 27:56.600]  Not better but maybe a more kind of like step by step example.
[27:56.600 --> 28:03.600]  Oh, yeah yep unobserved element so I need to turn it off on the element. That is a good call thank you Travis.
[28:03.600 --> 28:11.600]  Yeah so let's do this again I just want to make sure I get all the basics right so.
[28:11.600 --> 28:14.600]  Okay so it's off right now.
[28:14.600 --> 28:18.600]  We're going to take that heading.
[28:18.600 --> 28:25.600]  And we'll say so const heading.
[28:25.600 --> 28:29.600]  Document dot get element by ID.
[28:29.600 --> 28:32.600]  Okay so we have that have that heading.
[28:32.600 --> 28:36.600]  Great. Okay so now we're going to create an intersection observer.
[28:36.600 --> 28:49.600]  That's more generic now that we know that it's not tied to a specific element so this will be like log elements.
[28:49.600 --> 28:54.600]  I don't know I guess we could like, I don't know which is log the whole element.
[28:54.600 --> 29:08.600]  This is an intersection observer that we then provide a call back which we could actually.
[29:08.600 --> 29:18.600]  So console dot start for the dings my texture on.
[29:18.600 --> 29:24.600]  Okay so we could create a function.
[29:24.600 --> 29:27.600]  So function.
[29:27.600 --> 29:30.600]  So I'll see if I can zoom in again.
[29:30.600 --> 29:38.600]  Okay so function.
[29:38.600 --> 29:51.600]  Log element is going to take we're just going to take all those are we'll do the same function as we did last time.
[29:51.600 --> 30:10.600]  Log.
[30:10.600 --> 30:13.600]  Let's turn that that's strictly necessary.
[30:13.600 --> 30:14.600]  Okay cool.
[30:14.600 --> 30:17.600]  Now we have a function called log args.
[30:17.600 --> 30:22.600]  Okay generic function that just takes the args and logs them out.
[30:22.600 --> 30:39.600]  Now we want to create a new intersection observer which is const log.
[30:39.600 --> 30:56.600]  Okay so this is going to take a call back or see log args as elements is observed.
[30:56.600 --> 31:00.600]  Okay and then we give it the function of log args.
[31:00.600 --> 31:10.600]  We don't need any options if we don't want.
[31:10.600 --> 31:13.600]  Mission like missing initializer consts.
[31:13.600 --> 31:15.600]  Oh my gosh.
[31:15.600 --> 31:27.600]  Good Lord intersection observer.
[31:27.600 --> 31:31.600]  Let's zoom back out so I can actually see the the API we're working with.
[31:31.600 --> 31:35.600]  Okay box observe intersection observer.
[31:35.600 --> 31:36.600]  New intersection observer.
[31:36.600 --> 31:37.600]  Okay cool.
[31:37.600 --> 31:38.600]  Now that looks right.
[31:38.600 --> 31:49.600]  We're just typing.
[31:49.600 --> 31:50.600]  Okay cool.
[31:50.600 --> 31:56.600]  Now we have a.
[31:56.600 --> 31:59.600]  Now we have a log.
[31:59.600 --> 32:06.600]  Args as element is observed with a little misspelling there and we're going to call
[32:06.600 --> 32:14.600]  observe on this with our heading.
[32:14.600 --> 32:21.600]  Okay now it is in view and so we're going to take it out and push it back in and it
[32:21.600 --> 32:24.600]  pops into view.
[32:24.600 --> 32:28.600]  Let's see let's see.
[32:28.600 --> 32:32.600]  There we go yeah so we can see it go in and out of view we get an event for each which
[32:32.600 --> 32:33.600]  is really cool.
[32:33.600 --> 32:42.600]  Okay now we want to turn this off right.
[32:42.600 --> 32:48.600]  So if we want to turn that off we're going to say log args.
[32:48.600 --> 33:01.600]  What was it again on observe on observe which is a fabulous name I think on observe that
[33:01.600 --> 33:03.600]  now as I scroll that should turn off.
[33:03.600 --> 33:07.600]  Okay cool perfect and it did great.
[33:07.600 --> 33:16.600]  Whoa.
[33:17.600 --> 33:23.600]  Okay so that is all I think I accidentally closed that bummer.
[33:23.600 --> 33:30.600]  Okay so I think that that is a good kind of like place though.
[33:30.600 --> 33:40.600]  So what we've learned is observe on observe and okay we got to play with it a little
[33:40.600 --> 33:41.600]  bit.
[33:41.600 --> 33:45.600]  Only problem is now I need to dang it it all went away.
[33:45.600 --> 33:56.600]  So next we had I'm just going to write a note about what we did we had we used observe
[33:56.600 --> 34:11.600]  on observe
[34:11.600 --> 34:33.600]  and we separated all the kind of disparate functions out reusable chunks out great.
[34:33.600 --> 34:45.600]  Okay so I think we understand the basics of how this works right now.
[34:45.600 --> 34:49.600]  For callback function will receive an array of entries regardless of the number of target
[34:49.600 --> 34:54.600]  elements so callback function will receive an array of entries regardless of the number
[34:54.600 --> 34:59.600]  of target elements.
[34:59.600 --> 35:04.600]  Okay so I'm just going to do a little bit of confusion about that but we'll see how it
[35:04.600 --> 35:05.600]  goes.
[35:05.600 --> 35:15.600]  In an example we're only worried about a single entry so we can save that by the zero index
[35:15.600 --> 35:24.600]  will ensure its intersection intersecting will ensure it's intersecting remove the
[35:24.600 --> 35:28.600]  observer and perform our event.
[35:28.600 --> 35:39.600]  Okay so we have a callback which takes entries assume multiple elements based on the context
[35:39.600 --> 35:47.600]  of this post box entries of zero.
[35:47.600 --> 35:53.600]  Oh gotcha so it can be multiple elements but we want to make sure that we're grabbing the
[35:53.600 --> 36:00.600]  first one that we're operating on the first one unless we're intentionally using multiple
[36:00.600 --> 36:19.600]  elements so if box is intersecting return oh cool so we have this is intersecting.
[36:19.600 --> 36:35.600]  We have entries which I guess we name that which is an array and so in most cases if we're
[36:35.600 --> 36:43.600]  just using one we're going to say entries of zero and then we can also do conditions
[36:43.600 --> 36:53.600]  like if not box dot is intersecting.
[36:53.600 --> 37:06.600]  Okay so this is where so is intersecting okay cool box observer dot unobserve so the box
[37:06.600 --> 37:19.600]  is not intersecting return observer dot unobserve we're going to stop observing box dot target.
[37:19.600 --> 37:34.600]  Oh okay gotcha so this is going to have elements this is an array of elements.
[37:34.600 --> 37:45.600]  Box text content intersected box element style background yellow okay.
[37:45.600 --> 37:53.600]  Okay so removing the observer is best if you only need to trigger the callback once yes in the scenario of our sticky
[37:53.600 --> 38:05.600]  table of contents we would want to keep the observer active yes.
[38:05.600 --> 38:11.600]  Okay Travis says it's because if you observe multiple items multiple elements can intersect
[38:11.600 --> 38:16.600]  at the same time therefore multiple entries can be returned.
[38:16.600 --> 38:22.600]  Ah gotcha okay interesting cool.
[38:22.600 --> 38:28.600]  What have you used this for Travis just out of curiosity I'm always like I'm very interested
[38:28.600 --> 38:41.600]  in use cases that other people have like used this for.
[38:41.600 --> 38:46.600]  All the AC goes off at five and I totally forgot about that so I'm like burning alive.
[38:46.600 --> 38:57.600]  Okay due to setup of this tutorial page we need to scope our observer to the route to demo scrollable element of the box the box route.
[38:57.600 --> 39:04.600]  Then we'll also adjust the route margin to pull the bottom up to 50% meaning our callback won't trigger until the box is scrolled
[39:04.600 --> 39:13.600]  above the midpoint of the route element okay so the route margin is relative to the route element okay got it.
[39:13.600 --> 39:22.600]  Okay so we have a box element options routes route element.
[39:22.600 --> 39:26.600]  So that's the box routes okay got it.
[39:26.600 --> 39:42.600]  Basic intersection observer was our CSS look like okay so we have a box routes a box and a midpoint.
[39:42.600 --> 39:55.600]  Okay the JavaScript we are testing for the future great.
[39:55.600 --> 40:05.600]  Box element equals document dot get element by the box cons route element document dot get element by the box route.
[40:05.600 --> 40:10.600]  Box element route element okay.
[40:10.600 --> 40:16.600]  Route margin 50% which again we can use pixel values or percentage values.
[40:16.600 --> 40:26.600]  And a cons callback okay so this is what she's constructed earlier which we already looked at and in the intersection observer we provide our.
[40:26.600 --> 40:31.600]  See where the options yeah route element and then okay cool perfect.
[40:31.600 --> 40:41.600]  Great great great. Also another cool thing with the options you can apply it to different route elements which gives you a lot of flexibility between the callback and route element which is nice.
[40:41.600 --> 40:48.600]  Observer dot observe box element great and then it unobserves itself which is pretty cool.
[40:48.600 --> 40:54.600]  Okay so we're going to scroll.
[40:54.600 --> 40:57.600]  As this thing goes.
[40:57.600 --> 41:01.600]  It turned to intersected and.
[41:01.600 --> 41:12.600]  Change the background color of that element and but it doesn't go back because it it unobserved itself on that one event.
[41:12.600 --> 41:17.600]  Which is interesting okay cool cool cool I like it.
[41:17.600 --> 41:23.600]  Okay ideas for using the intersection observer besides the sticky table of contents tracking.
[41:23.600 --> 41:35.600]  Possibly also familiar to you as scroll spy here are some other ideas analytics events involving visibility or read time oh cool yeah actually.
[41:35.600 --> 41:39.600]  That could be a fun sample.
[41:39.600 --> 41:44.600]  So read time.
[41:44.600 --> 41:49.600]  Let's see trigger animations yes.
[41:49.600 --> 42:01.600]  We'll see that in some of the other examples that I have lazy load assets and scripts yep.
[42:01.600 --> 42:08.600]  Then closing out of view menus toolbars and overlays that's actually a really great idea I.
[42:08.600 --> 42:12.600]  I like that a lot.
[42:12.600 --> 42:24.600]  That's that is something that you kind of get is more like native experience I think where you know you open up menu and then maybe you switch away or you have scroll out of it or something at all it closes.
[42:24.600 --> 42:28.600]  Which does make the web feel kind of webby.
[42:28.600 --> 42:34.600]  I guess like you can scroll and all that stuff there's there's no my.
[42:34.600 --> 42:39.600]  There's no experience of it having like closed in the background or whatnot because it's just.
[42:40.600 --> 42:52.600]  Interesting okay additional resources NBN documentation yes of course a few different tracking methods in the context of gathering analytics events.
[42:52.600 --> 43:01.600]  Let's see what we got here gathering see almond provides a deep investigation into intersection observer pretty provides a.
[43:01.600 --> 43:14.600]  Several practical use cases for intersection observer like lazy loading or pausing out on videos okay cool that is very cool.
[43:14.600 --> 43:17.600]  I like.
[43:17.600 --> 43:21.600]  Okay so then this is another post.
[43:21.600 --> 43:31.600]  With use cases oh awesome man there's just so much so much possible to do here.
[43:31.600 --> 43:39.600]  Infinite pagination as well yes keep learning the next X items yeah I think it's great it's great point Travis for sure.
  [43:39.600 --> 43:47.600]  And that's kind of the like I and I guess that's my question is like of these examples which one is kind of the most.
[43:47.600 --> 44:01.600]  Like which one has the most meat on it for a video because I think that you can learn all of this stuff but like having a nice entry point is really helpful.
[44:01.600 --> 44:12.600]  Great stuff great stuff what I want to do next is go to that second article I had which I think is very very good.
[44:12.600 --> 44:20.600]  And I want to see we're going to see some examples in that one so.
[44:20.600 --> 44:22.600]  Pull that up.
[44:22.600 --> 44:25.600]  It was this article smashing magazine.
[44:25.600 --> 44:29.600]  Okay.
[44:29.600 --> 44:32.600]  Let's dive in.
[44:32.600 --> 44:41.600]  By Michelle Barker for smashing magazine it's about a 14 minute read I'll probably have to leave at some point after that I think I need to be home by six so.
[44:41.600 --> 44:44.600]  See quick summary.
[44:44.600 --> 44:54.600]  Have you ever needed to build a UI where some component on the page needs to respond to an element as they've scrolled to a certain threshold within the viewport.
[44:54.600 --> 45:06.600]  Or perhaps in an out of viewport itself in JavaScript attaching an event listener to constantly fire a callback on a scroll can be a can be performance intensive.
[45:06.600 --> 45:16.600]  And if used unwisely can make for sluggish user experience but but there is a better way with intersection observer.
[45:16.600 --> 45:19.600]  Okay.
[45:19.600 --> 45:30.600]  The intersection observer API is JavaScript API that enables us to observe an element and detect when it passes a specified point in the scrolling container.
[45:30.600 --> 45:43.600]  Often but not always the viewport triggering a callback function intersection observer can be considered more performant than listening for scroll events on the main thread, as it is asynchronous.
[45:43.600 --> 45:53.600]  Okay, you know it's probably we've read that at the beginning of both of these and so I'm gonna make a note about it.
[45:53.600 --> 45:57.600]  Can never spell that word without reading another spelling of it.
[45:57.600 --> 46:11.600]  And a callback will only fire when the element we're observing meets the specified threshold in instead every time threshold instead every time the scroll position is updated.
[46:11.600 --> 46:17.600]  Callback will only fire when the element we're observing meets the specified threshold.
[46:17.600 --> 46:20.600]  Okay.
[46:20.600 --> 46:22.600]  Long sentence.
[46:22.600 --> 46:36.600]  Long sentence is hard for me to read intersection observer can be considered a more perform considered more performant than listening for scroll events on the main thread, as it is asynchronous and
[46:36.600 --> 46:49.600]  the callback will only fire when the elements we're observing when the element we're observing meets the specified threshold instead of every time the scroll position is updated.
[46:49.600 --> 46:53.600]  That's a lot but yes, I understand.
[46:53.600 --> 46:56.600]  Instead of like every scroll.
[46:56.600 --> 46:57.600]  Got it.
[46:57.600 --> 47:12.600]  In this article, we'll walk through an example of how we can use intersection observer to build a fixed header component that changes when it intersects with different sections of a webpage basic usage to use intersection observer
[47:12.600 --> 47:33.600]  we need to first create a new observer, which takes two parameters and object with the observers options and callback function that we want to execute whenever the element we're observing known as the observe observer target.
[47:33.600 --> 47:36.600]  Observer target.
[47:36.600 --> 47:40.600]  The elements were observing.
[47:40.600 --> 47:50.600]  The root scroll to container which must be an ancestor of the target elements.
[47:50.600 --> 47:53.600]  Okay, I wonder if that's validated.
[47:53.600 --> 47:57.600]  When you create the internet section observer.
[47:57.600 --> 48:03.600]  It couldn't be right because that function would have to be evaluated.
[48:03.600 --> 48:07.600]  Yeah.
[48:07.600 --> 48:20.600]  Okay, constant options. Okay, so we're going to for our route to document query selector data scroll route. Okay.
[48:20.600 --> 48:26.600]  So it looks like we can, you know, put that anywhere presumably it's going to go something on the body.
[48:26.600 --> 48:32.600]  route margin. That's the default threshold one.
[48:32.600 --> 48:42.600]  So that's 100% which the default is 0% if I'm right remembering correctly.
[48:42.600 --> 48:52.600]  Okay, cool. Let's see. So callback entries observer.
[48:52.600 --> 49:01.600]  Okay, this one we're actually taking the second argument, which we hadn't seen I don't think in any of the previous examples.
[49:01.600 --> 49:03.600]  Okay.
[49:03.600 --> 49:10.600]  When we created our observer, we then need to instruct it to watch target elements so cons.
[49:10.600 --> 49:20.600]  Sorry, so we're going to select our target element with this data query selector, and then we will call the observer dot observe with the target element.
[49:20.600 --> 49:27.600]  Okay, any of the options values can be omitted as they will fall back to their default values. Yes, so.
[49:27.600 --> 49:30.600]  Okay.
[49:30.600 --> 49:40.600]  If no root is specified, then we'll be classed as the browser viewport. Yes, the above code example shows the default values for both route margin and threshold.
[49:40.600 --> 49:52.600]  This can be hard to visualize so I so so are worth explaining. Okay, so route margin. Okay, let's jump to this.
[49:52.600 --> 50:04.600]  So route margin value is a bit like adding CSS margins to a root element and just like margins can take multiple values including your values target element be considered to be intersecting relative to the margins.
[50:04.600 --> 50:10.600]  Okay, I love this visualization. This is amazing.
[50:10.600 --> 50:30.600]  Okay, so we have route margin 50 pixels so it puts this 50 pixel margin around the element. Now I'm curious how that relates to like, I guess, I should probably put some questions in here.
[50:30.600 --> 50:45.600]  Like, how does root margin resolve element margin?
[50:45.600 --> 50:54.600]  Like if there's margin on the root element, is it like additive or is this just like the other one just gets ignored and this one.
[50:54.600 --> 51:02.600]  This is what we use because obviously margin is for layout but if it's root element we don't give a crap about the layout.
[51:02.600 --> 51:13.600]  Interesting so we can do negative margin which is really interesting.
[51:13.600 --> 51:18.600]  That seems like a recipe for disaster.
[51:18.600 --> 51:32.600]  I can see like I can see the need for it like if you have an element right there but even there like, you know when you get that bounce effect from scrolling, it seems like you could just have a bag of hurt with that.
[51:32.600 --> 51:35.600]  I don't know. I don't know.
[51:35.600 --> 51:41.600]  Let's open in a new page. What happened here?
[51:41.600 --> 51:44.600]  Okay, so the scroll route.
[51:44.600 --> 51:57.600]  Oh, so this is defined as scroll route with positive and negative margin values the orange square is positioned at this point where it would be classed as intersecting assuming the default threshold values one.
[51:57.600 --> 52:05.600]  Okay.
[52:05.600 --> 52:13.600]  Okay, so Travis is that he thinks the default mark or the element margin matters. So I'd love to check that out.
[52:13.600 --> 52:16.600]  Let's see.
[52:17.600 --> 52:20.600]  I think did I get that right? Hopefully I did.
[52:20.600 --> 52:30.600]  Thanks for hanging out with us. I am just reading about intersection observer. I am using intersection observer for like infinite scroll type thing.
[52:30.600 --> 52:36.600]  And I thought since I am using it I might as well use this opportunity to make a video about it.
[52:36.600 --> 52:46.600]  Yeah, so I'm just learning in real time documenting some things and then I will make like an actual video about what I learned about the API and I don't know an interesting use case.
[52:46.600 --> 52:57.600]  Okay, so this means that an element is technically can technically be classed as an interest as intersecting even when it is out of view.
[52:57.600 --> 53:01.600]  If our scroll route is the viewport. Yes.
[53:01.600 --> 53:10.600]  So if you increase the margin zero threshold, it will still capture it.
[53:10.600 --> 53:21.600]  Okay, the orange square is intersecting with the route even though it is outside the visible area.
[53:21.600 --> 53:28.600]  Now Travis, I'm actually really curious. Oops, sorry, let me remove that Travis. I'm super curious when you did infinite scroll.
[53:28.600 --> 53:37.600]  Did you like create an element at the bottom that you observed for like intersections?
[53:37.600 --> 53:43.600]  Like did you have to have an element there to know when it triggered?
[53:43.600 --> 53:58.600]  Because it seems like you could compare scroll height, but the benefit of using an intersection observer would be to have a like presumably like a load more button, right?
[53:58.600 --> 54:06.600]  And when that load more button shows, you would just load more for the person is kind of like the way that I'm thinking about it.
[54:06.600 --> 54:11.600]  But yeah, okay, so you're saying an empty div is what you use. Okay, cool.
[54:11.600 --> 54:19.600]  That's helpful to know that I'm thinking about it the right way or the way that you have experienced it.
[54:19.600 --> 54:33.600]  Okay, so route margin defaults to zero pixels but can take a string consisting of multiple values just like using the margin of property in CSS, which is nice.
[54:33.600 --> 54:46.600]  I might add that to my notes syntax is like the margin property.
[54:46.600 --> 54:55.600]  Oh, nice, cool. Well, good luck studying computer science. I think it's fun. I love it. I don't actually know much about computer science, but I do love programming, especially for the web.
[54:55.600 --> 54:59.600]  So yeah, best of luck. Best of luck.
[54:59.600 --> 55:02.600]  On re helvetica.
[55:02.600 --> 55:10.600]  What's up? Good to see you. Good to see you. How you doing? What are your was your favorite use case for intersection observer?
[55:10.600 --> 55:26.600]  Also, I was laughing so hard. I cannot remember who it was, but I saw someone on Twitter just just laying it on thick that you were single and shouldn't be and I was I was cracking up.
[55:26.600 --> 55:29.600]  So funny.
[55:29.600 --> 55:38.600]  So funny. Love it.
[55:38.600 --> 55:47.600]  Yeah, I owe aka the old lazy load. Yes, the old what's the new lazy load. Is that like, I mean, I don't different.
[55:47.600 --> 55:51.600]  What is it like astro has like visible.
[55:51.600 --> 55:57.600]  I assume. I mean, what do they do do they use intersection observer.
[55:58.600 --> 56:08.600]  Okay, cool threshold. And I love these illustrations so much. It is just hard to say how much I just love these illustrations.
[56:08.600 --> 56:15.600]  Okay, the threshold can consist of a single value or any array of values between zero and one.
[56:15.600 --> 56:30.600]  It represents the proportion of the element that must be within the root bounds for it to be considered intersecting using the default value of one is the default is one. I thought it was zero.
[56:30.600 --> 56:34.600]  But I guess not.
[56:34.600 --> 56:49.600]  So you've won the callback will fire when 100% of the target elements is visible within the root. Also, any of you guys going to conferences this year, and which ones because I always love seeing y'all at the conferences.
[56:49.600 --> 56:53.600]  I think I'm going right now I'm going to.
[56:53.600 --> 57:06.600]  I don't know if this has been announced but I think Ken's doing an epic web conference. So I think that would be cool and then what else am I doing react Miami, which will be my first year.
[57:06.600 --> 57:09.600]  Super excited about that one.
[57:09.600 --> 57:15.600]  Yeah, which one, which ones you're all going to.
[57:15.600 --> 57:24.600]  What was being used for images at one point before lazy load support was that oh yeah gotcha. Yes, I see what you're saying now.
[57:24.600 --> 57:36.600]  So like before you could just like do there was browser support for just lazy loading images would use this. Got it.
[57:37.600 --> 57:44.600]  CSP is that a comp? Yeah, yeah, yeah. Yeah, to which conferences, which conferences.
[57:44.600 --> 57:55.600]  Let's say using the default value of one the callback will fire when 100% of the target element is visible within the roots. Okay, so in this case the root margin we have out here.
[57:55.600 --> 58:07.600]  It has to be fully inside of this dotted square area, which has the negative root margin in order for it to be visible. But in this case, even at 0%.
[58:07.600 --> 58:23.600]  I think that means like a single pixel. We would still see something root margin negative 20 pixels threshold half so once we see half of the element that threshold that would enact.
[58:23.600 --> 58:32.600]  Okay, threshold of one zero and point five respectively result in the callback firing when 100% 0% and 50% visible.
[58:32.600 --> 58:50.600]  It's always easy to visualize when an element will be classed as a visible using these options. I built a small tool to help get get to grips with the intersection observer. Oh hell. Yes, I'm so excited about this.
[58:50.600 --> 58:55.600]  Oh man, this is awesome.
[58:55.600 --> 59:02.600]  So freaking cool. Yes, this is definitely going to my video.
[59:02.600 --> 59:08.600]  Visualization tool.
[59:08.600 --> 59:21.600]  Okay, so so we're going to adjust the root margin and threshold values the two shared boxes show where the elements intersection ratio matches the threshold value. Okay.
[59:21.600 --> 59:33.600]  So this is our margin. Let's set it to zero. I want to get it like just just the most basic. So I think these are the defaults at least as presented in the article. It's root margin of zero and threshold of one.
[59:33.600 --> 59:44.600]  And in this case, this element we're going to scroll.
[59:44.600 --> 59:50.600]  Okay, I'm, I'm confused now.
[59:50.600 --> 01:00:03.600]  What are the Oh, is that just a visualization for the threshold?
[01:00:03.600 --> 01:00:18.600]  Oh, yes, got it. Okay, threshold. Okay, cool, cool, cool. Got it. Okay, so this is the size. This threshold visually is the size of the element that we're seeing. And so as we do this, so like 0%.
[01:00:18.600 --> 01:00:30.600]  It's going to say pink. No, it changes as soon.
[01:00:30.600 --> 01:00:42.600]  Changes is that point. Interesting. Okay, now it would change the threshold to one.
[01:00:42.600 --> 01:00:54.600]  It's not until after it hits that, that it changes color, the first one, at least.
[01:00:54.600 --> 01:01:10.600]  And that is affected by doing a negative margin that would kind of make that space encroach further. Interesting. Yeah, this is kind of, I'm glad this tool exists because it's like very.
[01:01:10.600 --> 01:01:23.600]  I had a kind of like natural intuition about how this thing worked and it is not correct at all. Okay, cool. So this second one comes into view.
[01:01:23.600 --> 01:01:31.600]  And it looks largely like it immediately becomes pink.
[01:01:31.600 --> 01:01:36.600]  Interesting.
[01:01:36.600 --> 01:01:45.600]  Okay. So fascinating.
[01:01:45.600 --> 01:01:57.600]  Okay, so no threshold can optionally take an array instead of a number for simplicity this visualizer only includes a single value option. Okay, cool, cool, cool, cool, cool, cool, cool, cool.
[01:01:57.600 --> 01:02:13.600]  Oh, Carl's bet 5,000. You know, actually, I think I am. Michael Jackson just asked if I wanted to join him in chance to do it. I think I am going to do it. I am not much of a runner. But yeah, if you're going to be there, I'll see you there. Yeah, that'd be super fun.
[01:02:13.600 --> 01:02:22.600]  Or, you know, I'll see you to the start. And then, you know, you'll be off to lunch by the time that I actually cross.
[01:02:22.600 --> 01:02:31.600]  Yeah, so sorry, I missed the timing on this but margin. Yeah, so the margin of like the route surrounding element type thing.
[01:02:31.600 --> 01:02:43.600]  Yeah, yeah, not particularly intuitive. But yeah, it's, it's an interesting API. Very interesting. Okay, cool. Love that. Love that visualization tool.
[01:02:43.600 --> 01:02:59.600]  Okay, see, so creating the header now that we've grasped the basic principle, let's start building our dynamic header. We'll start with web page divided into sections. This image shows the complete layout of page will be building.
[01:02:59.600 --> 01:03:05.600]  Okay, so happy face ice cream parlor. This is just a static image, I think.
[01:03:06.600 --> 01:03:23.600]  So I've included a demo at the end of this article, so feel free to jump straight to it if you're keen to unpack the code. There's also GitHub repository. Each section has a minimum height, 100 viewport height, although they could be longer depending on content.
[01:03:23.600 --> 01:03:34.600]  Also, on ring hit me up when if you know if you come into town early or later or whatever, let me know and grab lunch or something with love to see it. Love to see it.
[01:03:34.600 --> 01:03:51.600]  Let's see our header is fixed at the top of the page and stays in place as the user scrolls using position fixed. The sections have different colored backgrounds and when they meet the header the colors of the header change to complete those of the section.
[01:03:51.600 --> 01:04:02.600]  This is also a marker to show the current section the user is in, which slides along with the next version arrived next section arrives.
[01:04:02.600 --> 01:04:16.600]  To make it easier for us to get straight to the relevant code, I've set up a minimal demo for the starting point before we start the intersection observer API, in case you'd like to follow along.
[01:04:16.600 --> 01:04:40.600]  Okay, so this doesn't have any anything attached to it. I don't think yeah, no JavaScript. So each section has a different background color. And my understanding is that this header is going to be sticky and adjust as you as you change sections.
[01:04:40.600 --> 01:04:55.600]  So the markup sort of the markup. I love the use of data attributes by the way data attributes and selectors brilliant big fan big fan and three anchor links with the attribute data link, which will scroll the user relevant.
[01:04:55.600 --> 01:04:59.600]  Okay, cool, cool, cool.
[01:04:59.600 --> 01:05:04.600]  Yes, and then obviously there's this is the this is the nav.
[01:05:04.600 --> 01:05:16.600]  The section has all the contents data section has the background color, raspberry mint vanilla and chocolate.
[01:05:16.600 --> 01:05:33.600]  Okay, so noteworthy here is that we have the IDs I'm not going to read all that will position our header with the CSS so that it will stay fixed to the top. Yep. Okay, so position fixed with 100% irrelevant to the fixed part of that.
[01:05:34.600 --> 01:05:45.600]  Okay, so it's not sticky is just fixed. So just going to stay up there.
[01:05:45.600 --> 01:05:57.600]  Okay, we'll also give our sections a minimum height and center the content this code isn't necessarily for intersections over to work it's just for design. Okay, not worried about it then.
[01:05:57.600 --> 01:06:00.600]  Or, I mean, I guess.
[01:06:00.600 --> 01:06:02.600]  There it is.
[01:06:02.600 --> 01:06:15.600]  I from warning while building this Copenhagen demo I ran into a perplexing issue where my intersection observer code that should have worked perfectly was failing to fire the call back at the correct point of the intersection.
[01:06:15.600 --> 01:06:31.600]  But instead of firing when the target element intersected with the viewport edge after a bit of headscratching I realized that this was because code pen content is loaded with an iframe interesting.
[01:06:31.600 --> 01:06:40.600]  Okay, as a work around in the demo we can wrap our markup and another element which will act as a scrolling container the roots in our IO option. Okay, cool.
[01:06:40.600 --> 01:06:43.600]  Great, great, great, great.
[01:06:43.600 --> 01:06:52.600]  So if you want to see how to use the viewport. Okay, so there's a GitHub repository I'll click that so I can have a link.
[01:06:52.600 --> 01:07:08.600]  In our CSS will define some custom properties for the colors we're using will also define two additional custom properties for the header text and the background colors and set some initial values we're going to update these two custom properties for the different
[01:07:08.600 --> 01:07:16.600]  intersections later different sections later on. Okay, so these are just our colors. Good.
[01:07:16.600 --> 01:07:26.600]  Also set the colors for the different sections I'm using the data attributes as the selector, but you could just eat as easily use a class if you prefer.
[01:07:26.600 --> 01:07:35.600]  Okay, and then I assume that we're going to use the variables that like the reason this is very obliged is so that we can use those variables once we actually make those that intersection.
[01:07:36.600 --> 01:07:46.600]  We can also set some styles for a header when each section is in view. Yes. Okay, cool. So then these are going to match those.
[01:07:46.600 --> 01:07:49.600]  See the background color.
[01:07:49.600 --> 01:07:51.600]  Great.
[01:07:51.600 --> 01:08:07.600]  Strong case for using data attributes here because we're going to toggle the data theme attribute of the header upon each intersection.
[01:08:07.600 --> 01:08:18.600]  I feel like there's some context missing here I think I understand why the data attributes are nice here.
[01:08:18.600 --> 01:08:31.600]  You know, because we have this kind of like API where it's like data theme is chocolate it's like multi theme by default, whereas class names get a little little hairy when you're trying to do like key and value in the same selector.
[01:08:31.600 --> 01:08:46.600]  I think I understand that that's this missing context here I think so creating the observer or context that I skipped by virtue of not reading all the sections.
[01:08:46.600 --> 01:08:53.600]  Travis always a pleasure. Yeah, I'll see you.
[01:08:53.600 --> 01:09:11.600]  Okay, now that we have the basic HTML and CSS for a page set up we can create an observer to watch for each of our sections coming into view we want to fire a call back whenever section comes into contact with the bottom of the header as we're scrolling the page.
[01:09:11.600 --> 01:09:18.600]  This means we need to set negative root margin that corresponds to the height of the header.
[01:09:18.600 --> 01:09:40.600]  Okay, so like if the head the headers 40 pixels then we want to have a negative root margin of 40 pixels so that it see this is where my knowledge gets a little fuzzy like is it going to start transitioning as or is it going to transition at the moment that it like that section touches it or when it passes it.
[01:09:40.600 --> 01:09:43.600]  Well, we shall see.
[01:09:43.600 --> 01:09:53.600]  Okay, so Chris selector the sections okay so we're going to get all of the sections.
[01:09:53.600 --> 01:10:00.600]  So an array of all the sections cons scroll route documents okay so.
[01:10:00.600 --> 01:10:04.600]  And then this is like the thing that's wrapping it all.
[01:10:04.600 --> 01:10:06.600]  It's my understanding.
[01:10:06.600 --> 01:10:10.600]  We can also put that in line if we wanted to.
[01:10:10.600 --> 01:10:28.600]  So root margin is going to be header offset height times minus one in pixels so it's just making it a negative value and a threshold is going to be zero.
[01:10:28.600 --> 01:10:41.600]  The threshold of zero as we want to fire if any part of the section is intersecting intersecting with the root margin. So first of all we'll create a call back to change the data theme value of the header.
[01:10:41.600 --> 01:10:57.600]  This is more straightforward than adding and removing classes especially when oh I got it that ties back to the thing where we had a class we would have to actually take off a known other class and then put on a class or is this we're just changing the value.
[01:10:58.600 --> 01:11:07.600]  Got it totally makes sense.
[01:11:07.600 --> 01:11:16.600]  Yes, okay yeah set attribute data theme, and there can only be one data theme. So it will change that value great.
[01:11:16.600 --> 01:11:21.600]  Then we'll create the observer to watch for the sections intersecting.
[01:11:21.600 --> 01:11:26.600]  So observer new intersection observer will pass our on intersect and options.
[01:11:26.600 --> 01:11:31.600]  See where's the on yeah on intersect right here.
[01:11:31.600 --> 01:11:34.600]  sections for each.
[01:11:34.600 --> 01:11:41.600]  And so we're going to create an observer.
[01:11:41.600 --> 01:11:44.600]  We're going to observe for each section.
[01:11:44.600 --> 01:11:48.600]  Okay, great. Let's see how this works.
[01:11:48.600 --> 01:11:51.600]  So ever home.
[01:11:51.600 --> 01:11:55.600]  It is this color right now and then okay.
[01:11:55.600 --> 01:11:58.600]  Interesting.
[01:11:58.600 --> 01:12:04.600]  It didn't change back so that's noteworthy.
[01:12:04.600 --> 01:12:13.600]  Okay, so as soon as we hit that other one it switches many colors are like messing with my eyes hardcore.
[01:12:13.600 --> 01:12:15.600]  Okay.
[01:12:15.600 --> 01:12:20.600]  Whoa, that changed in the middle somewhere.
[01:12:20.600 --> 01:12:26.600]  And this one changes that change in the middle.
[01:12:26.600 --> 01:12:38.600]  Oh, are those different sections are probably different sections.
[01:12:38.600 --> 01:12:42.600]  Interesting.
[01:12:43.600 --> 01:12:46.600]  Okay, okay, okay.
[01:12:46.600 --> 01:12:57.600]  However, you might notice that the colors aren't updating correctly as we scroll down in fact the header is updating with the previous sections colors each time scrolling upwards on the other hand it works perfectly.
[01:12:57.600 --> 01:13:09.600]  We need to determine the scroll direction and change the behavior. Oh, yes, I did not immediately think of that. Yes, but it's going to be a different behavior each time.
[01:13:09.600 --> 01:13:27.600]  Okay, finding the scroll direction will set a variable in JS for the direction of the scroll with an initial value of up and another for the last known scroll position previous why position then within the callback of the scroll position is greater than the previous value.
[01:13:27.600 --> 01:13:30.600]  We can set the direction value as down and up.
[01:13:30.600 --> 01:13:33.600]  Okay, so.
[01:13:33.600 --> 01:13:34.600]  Oh, I see.
[01:13:34.600 --> 01:13:37.600]  So previous why position.
[01:13:37.600 --> 01:13:56.600]  So every time the event fires we're going to store a value of what our why position is, and then use that as a comparison to determine if we're in the act of going up or the act of going down.
[01:13:56.600 --> 01:14:07.600]  So scroll route.
[01:14:07.600 --> 01:14:13.600]  Where's this coming from?
[01:14:13.600 --> 01:14:19.600]  Do we just have access?
[01:14:19.600 --> 01:14:30.600]  Kevin keep reading scroll route dot scroll top.
[01:14:30.600 --> 01:14:33.600]  Get resolved.
[01:14:33.600 --> 01:14:41.600]  Oh, scroll route is a variable that we set up here.
[01:14:41.600 --> 01:14:48.600]  Okay, so that was the purpose behind making it an available variable.
[01:14:48.600 --> 01:14:50.600]  Okay, got it.
[01:14:50.600 --> 01:14:56.600]  So that variable has to be in scope for this thing to work.
[01:14:56.600 --> 01:15:02.600]  Const on intersection. Okay, that's all the same with the addition of the set scroll direction.
[01:15:02.600 --> 01:15:10.600]  Okay, so we'll also create a new function to update the header colors passing in the target.
[01:15:10.600 --> 01:15:13.600]  Hold on just a second.
[01:15:13.600 --> 01:15:26.600]  Docks myself here.
[01:15:26.600 --> 01:15:29.600]  Let's see passing the target but I am an athlete in a second.
[01:15:29.600 --> 01:15:31.600]  Good reminder.
[01:15:31.600 --> 01:15:37.600]  Let's see.
[01:15:37.600 --> 01:15:45.600]  Okay, so update colors target constant target data section set attribute data theme theme on intercept.
[01:15:45.600 --> 01:15:46.600]  Okay, gotcha.
[01:15:46.600 --> 01:15:49.600]  So far, we should see no change the behavior of our header.
[01:15:49.600 --> 01:15:55.600]  But now that we know the scroll direction, we can pass in a different target for update colors function.
[01:15:55.600 --> 01:15:59.600]  If the scroll direction is up, we'll use the entry target.
[01:15:59.600 --> 01:16:02.600]  If it's down, we'll use the next section.
[01:16:02.600 --> 01:16:15.600]  Okay, so if direction is up return target, if target dot next element is sibling return next element sibling, otherwise return target.
[01:16:15.600 --> 01:16:17.600]  Got it.
[01:16:17.600 --> 01:16:18.600]  Okay, there's one more issue.
[01:16:18.600 --> 01:16:26.600]  However, the header will update not only when the section hits the header, but when the next element comes into view at the bottom of the viewport.
[01:16:26.600 --> 01:16:27.600]  That's right.
[01:16:27.600 --> 01:16:34.600]  That's what we were seeing is as the element came into view that it was switching, which kind of looked like the middle of the section, which was why I was confused.
[01:16:34.600 --> 01:16:38.600]  This is because our observer fires the callback twice.
[01:16:38.600 --> 01:16:39.600]  Interesting.
[01:16:39.600 --> 01:16:40.600]  Twice.
[01:16:40.600 --> 01:16:52.600]  Once the element is entering and again as it's leaving to determine whether the header should update, we can use the is intersecting key from entry from the entry object.
[01:16:52.600 --> 01:16:59.600]  Let's create another function to return a Boolean value for whether the header colors should update.
[01:16:59.600 --> 01:17:15.600]  Okay, should update entry if direction is down and entry is intersecting return true, if it's up and is intersecting false, or sorry, also true, otherwise false.
[01:17:15.600 --> 01:17:21.600]  Okay, so we have a direction.
[01:17:21.600 --> 01:17:26.600]  Okay, curious why these are both true.
[01:17:26.600 --> 01:17:28.600]  So the direction is down.
[01:17:28.600 --> 01:17:31.600]  Oh, and it's not intersecting true.
[01:17:31.600 --> 01:17:35.600]  If it's up and it is intersecting true, otherwise false.
[01:17:35.600 --> 01:17:37.600]  Okay.
[01:17:37.600 --> 01:17:41.600]  We'll update our on intersect function accordingly.
[01:17:41.600 --> 01:17:45.600]  Okay, if should update enter return.
[01:17:45.600 --> 01:17:47.600]  Okay.
[01:17:47.600 --> 01:17:53.600]  Okay, now our colors should update correctly, we can set CSS transition so that the effect is a little nicer.
[01:17:53.600 --> 01:17:55.600]  Okay, transition.
[01:17:55.600 --> 01:17:56.600]  Okay, easy.
[01:17:56.600 --> 01:18:13.600]  So this is going to say that pink and cream color vanilla, until we get to this section, I think, if I'm understanding code correctly, as soon as they touch, it's going to switch.
[01:18:13.600 --> 01:18:16.600]  Yes, cool.
[01:18:16.600 --> 01:18:18.600]  Okay, nice.
[01:18:18.600 --> 01:18:21.600]  Again, switch.
[01:18:21.600 --> 01:18:26.600]  Now let's see going back the other direction.
[01:18:26.600 --> 01:18:27.600]  Very cool.
[01:18:27.600 --> 01:18:37.600]  Okay, so part of that is that we're allowing.
[01:18:37.600 --> 01:18:50.600]  It's interesting to think because now my brain's thinking like we use clip path to actually just like have it show the background, which would actually like show the split behind it, which would be kind of cool, but
[01:18:50.600 --> 01:19:00.600]  So on this other side, we're going to wait until we get all the way to cross that section before it switches to the other one, which is a nice touch, I think.
[01:19:00.600 --> 01:19:02.600]  Very cool.
[01:19:02.600 --> 01:19:10.600]  Okay, adding dynamic markers. So next we'll add a marker to the header. I unfortunately don't have time to go through the full rest of this tutorial.
[01:19:10.600 --> 01:19:13.600]  But now you know it's here.
[01:19:13.600 --> 01:19:19.600]  So update markers. So I think, let's see the example.
[01:19:19.600 --> 01:19:27.600]  So now we have this little face thingy ice cream face, which is super cute.
[01:19:27.600 --> 01:19:29.600]  Love it.
[01:19:29.600 --> 01:19:31.600]  Okay, awesome.
[01:19:31.600 --> 01:19:39.600]  Browser support widely supported you can polyfill in older browsers, some additional resources, etc, etc.
[01:19:39.600 --> 01:19:42.600]  Okay, unfortunately, I have to go.
[01:19:42.600 --> 01:19:49.600]  But thank you so much for hanging with me for this last what is it hour and a half, I guess almost.
[01:19:49.600 --> 01:19:57.600]  Yeah, if you can do me a favor and like this subscribe if you're on YouTube and that, you know, all that stuff helps me out, I guess, I don't know.
[01:19:57.600 --> 01:20:07.600]  But yeah, I appreciate you and appreciate you hanging out. I'll see you in another one of these and, you know, check out my video that I eventually make.
[01:20:07.600 --> 01:20:09.600]  All right, peace. See you all later. Bye.
```
