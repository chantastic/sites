# 7. Prefer markdown plugins over shortcodes

Date: 2023-01-10

## Status

Accepted

## Context

Having made heavy use of notion in 2022, I want more features than basic markdown.
Fortunately, [markdown-it](https://github.com/markdown-it/markdown-it-deflist) is super flexible.
Markdown makes my work here super portable (future proof). But a caveat to that is my use of shortcodes.
While I'd prefer not to have a heavily customized markdown parser, doing keeps content portable.

## Decision

Prefer markdown plugins over shortcodes.

Where possible, extend the language of markdown to make authoring simpler.

## Consequences

- I become more beholden to a specific markdown processer, the deeper my my integration is.
