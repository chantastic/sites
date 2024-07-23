---
title: Add video to GitHub README
publishDate: 2024-07-22
references:
  - https://stackoverflow.com/questions/11804820/how-can-i-embed-a-youtube-video-on-github-wiki-pages
  - https://www.get-youtube-thumbnail.co/
  - https://stackoverflow.com/questions/34763547/youtube-maxresdefault-thumbnails
---

YouTube videos can't be embedded in GitHub READMEs.

## TL;DR

## Contents

## Basic markdown implementation (no styles)

Start by uploading a thumbnail image.

_Note:If you make this change via the GitHub UI, they'll host uploaded images without requiring they be added to the repository)._

You should have an image like this:

```markdown
![Uploaded image](https://github.com/user-attachments/assets/{some-slug})
```

## Make image contents a link

Wrap the image markdown in a link to YouTube video.

```markdown
[![Uploaded image](https://github.com/user-attachments/assets/{some-slug})](https://youtu.be/u3KukBymauk?feature=shared)
```

## Provide a meaningful alt text

I prefer to use the video title with the prefix: `YouTube tutorial: `.

```markdown
[![YouTube tutorial: Do the thing the right way, from the beginning](https://github.com/user-attachments/assets/97ad27be-d9e7-446a-b7ed-3a220ed8f3aa)](https://youtu.be/u3KukBymauk?feature=shared)
```

## Rely on default styling

If you upload a large enough image, GitHub's default styling will make the image responsive to the container.

```css
.markdown-body img {
	max-width: 100%;
	box-sizing: content-box;
	background-color: var(
		--bgColor-default,
		var(--color-canvas-default)
	);
}
```

## Take styling into your own hands

To take styling into your own hands, you'll need to do all this with HTML instead of markdown.

You can use the markup that GitHub uses.

```html
<a href="YOUR_VIDEO_URL"
	><img
		src="YOUR_THAUMBNAIL_IMAGE_URL"
		alt="YOUR_ALT_TEXT"
		style="max-width: 100%;"
/></a>
```

I've added a `width` rule to make sure the image is always scaled to full-width.

```html ins=/width: 100%; /
<a href="YOUR_VIDEO_URL"
	><img
		src="YOUR_THAUMBNAIL_IMAGE_URL"
		alt="YOUR_ALT_TEXT"
		style="width: 100%; max-width: 100%;"
/></a>
```

\*Note: Most attributes get sanitized away. So there's not a whole lot else you can do.

## If you don't have a thumbnail, get the one from YouTube

[This site will get the YouTube hosted thumbnails for your video](https://www.get-youtube-thumbnail.com/).

**Note: This URL differs slightly from those used on YouTube. The subdomain is `i3` instead of `i`.**

## More than you care to know on YouTube thumbnail url schemas

YouTube offers a number of thumbnail quality alternatives.

[Great stack overflow on the topic of YouTube thumbnail URLs](https://stackoverflow.com/questions/34763547/youtube-maxresdefault-thumbnails).

```txt
https://i.ytimg.com/vi_webp/<VIDEO_ID>/maxresdefault.webp
https://i.ytimg.com/vi/<VIDEO_ID>/maxresdefault.jpg
https://i.ytimg.com/vi/<VIDEO_ID>/hqdefault.jpg
```

**Note: `maxresdefault` variants aren't guaranteed to be available. But they should be if you're uploading your own thumbnail — which you should be.**

## Improve visual hints

For this use case, I'm exporting a variant of my thumbnail with a "play button" overlay.
