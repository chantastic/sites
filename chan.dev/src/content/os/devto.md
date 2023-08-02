---
title: Cross-posting to Dev.to
date: 2023-08-02
---

**Order of opperations:**

- <a href="https://dev.to/new" target="_blank">Create post ⤤︎</a>
- Copy and paste markdown source as content
  - Handle code blocks and video embeds manually (below)
  - Add tags
  - `Add cover image`
- Set post options (octagonal menu button)
- `Publish`

| Option          | Value       |
| :-------------- | :---------- |
| `Canonical URL` | `canonical` |

Video
: Use liquid tag shortcode (requires YouTube id)
: `{% youtube video-id %}`

Code blocks
:
Code blocks are a cluster

Featured image
: Best at `100:42` aspect ratio

**TODO:**

(custom markdown processor)
Code blocks:

- falls appart with `expressive-code` directives
- hates `\n` two-space line-breaks

Tools:

- YouTube url parser
