---
title: How to Embed YouTube Shorts
---

Embedding YouTube Shorts is the same as embedding any other YouTube video.  
It just… harder.

## Steal this embed markup

To start, you need the YouTube embed markup.
Get it from the share sheet on any YouTube video.
Or just trust me and copy this.

<!-- TODO: link the video that I'll make for this content -->

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/RvYvyzsnFm8"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
```

## Get the right url

Copy a link to your short.
And strip out the video id.

The part after `shorts` and before the `?` is your video id.

```text "RvYvyzsnFm8"
https://youtube.com/shorts/RvYvyzsnFm8?feature=share
```

Put that in your ~~pipe~~ embed markup ~~smoke~~ render it.

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/RvYvyzsnFm8"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

## Flip the aspect ratio

Dangit, YouTube!  
I guess we have to flip the hard-coded aspect ratio too:

```diff lang="html" "315" "560"
<iframe
-  width="315"
+  width="560"
-  height="560"
+  height="315"
  src="https://www.youtube.com/embed/RvYvyzsnFm8"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
```

Now we get the proper Shorts UI.

<iframe
  width="315"
  height="560"
  src="https://www.youtube.com/embed/RvYvyzsnFm8"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

## Do it better

It's stupid that yo uhave to do all this. <mark>@cc: YouTube</mark>

I made two components that will help you out
