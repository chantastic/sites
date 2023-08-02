---
title: Cross-posting to Medium
date: 2023-08-01
---

**Order of opperations:**

- <a href="https://medium.com/new-story" target="_blank">New Story ⤤︎</a>
- Copy and paste article section-by-section
  - Create code blocks and copy/paste individual code sections
- Menu > `More Settings` (see table below)
- Menu > `Publish`
  - Select `Topics` (tags). **Use this UI because it shows reach.**

| Option                                        | Value              |
| :-------------------------------------------- | :----------------- |
| `SEO Title`                                   | Auto-title is fine |
| `SEO Description`                             | `description`      |
| `Advanced Settings: Customize Story Link`     | `slug`             |
| `Advanced Settings: Customize Canonical Link` | `canonical`        |

Video
: Use their `add video` button (requires YouTube link)

Featured Video
: Drag to top (automatically becomes feautered image)

Code blocks
:
Code blocks are a cluster

- Best to copy blocks one-by-one
- Use `add code` button `{ }` (not `</>`)
- Copy from post (Using copy button)
- Select `language` that matches the state languge
  - Bay be inferred from presented filename or can be found in Markdown

**TODO:**

Code blocks:

- have a version that disables `expressive-code`?
- strip out `\n` from code blocks? (Medium-only solution)
- generate an RTF file?
- use [the API](https://medium.com/codex/medium-has-an-api-605b51037b52)?
