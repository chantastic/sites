---
title: "10. Use expressive-code for enriching code blocks progressively"
status: "Accepted"
date: 2023-07-21
---

## Context

Code blocks should have certain ergonomics.

- copy-pasteable
- file-name clearly destinguished from code (where appropriate)
- diffs with language support
- highlights

But these need to be done in a way that is progressive.
Any enhancements should be ignored by markdown-processors I don't control (dev.to, Notion, StackOverflow, GitHub, etc.)
This ensures that visitors to my site get a great experience but snippets don't have to re-formatted to be useful elsewhere.

The Astro docs use [expressive-code](https://github.com/expressive-code/expressive-code), which supports [shiki](https://github.com/shikijs/shiki).
It currently provides two discrete plug-ins that allow me to do everything stated above.

- [plugin-frame](https://github.com/expressive-code/expressive-code/tree/main/packages/%40expressive-code/plugin-frames)
- [plugin-text-markers](https://github.com/expressive-code/expressive-code/tree/main/packages/%40expressive-code/plugin-text-markers)

You can find examples of my intended use-cases at [chan.dev/styleguide/post](https://chan.dev/styleguide/post/#technical).

## Decision

Use `expressive-code` via the [first-class Astro integration](https://github.com/expressive-code/expressive-code/blob/main/packages/astro-expressive-code/README.md).

## Consequences

Tailwind `prose` needs additional styles to make `figure > code` look like `code`.
