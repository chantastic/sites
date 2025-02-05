---
title: Expressive Code
description: Expressive code is a rehype plugin that extends the presentation capabilities of markdown code blocks.
date: 2024-12-16
---

## Syntax highlighting

## Comment title

## Title

## Terminal frame

`ansi`, `bash`, `bat`, `batch`, `cmd`, `console`, `powershell`, `ps`, `ps1`, `psd1`, `psm1`, `sh`, `shell`, `shellscript`, `shellsession`, `zsh`

`code`, `terminal`, `none`, `auto`

## Options

- `showCopyToClipboardButton: false`

overridable styles

## Line markers
- Single line: `{4}`
- Separate lines `{2, 7, 30}`
- Range of lines `{2-4}`
- Multiple ranges `{2-4, 7-10, 100-101}`

- `ins`, `del`, `mark`

- labels: `{"A":1-4}` (for gutters)

- labels on own lines. first add additonal lines in the code block: `{"1. Do the thing":1}`

- `diff` type with `lang` option

- quote highlite: `"some text"` (mark, ins, del)
- regex highlight: `/some\s+text/` (mark, ins, del)
- capture groups: `/(some\s+text)/g` (mark, ins, del)
- opt out of capture groups: `//ye(?:s|p)/` `(?:` is inclusive

## Word Wrap

- `wrap`, `wrap: true`, `wrap: false`
- `preserveIndent`, `preserveIndent: true`, `preserveIndent: false`

## Code component in Astro files and MDX

## importing code from files (Vite)

`?raw` import suffix

## Plugin: Collapsable sections

`collapse={1-5, 24-30}`

## Plugin: Line numbers

`showLineNumbers`, `showLineNumbers: true`, `showLineNumbers: false`
`startLineNumber=5`

## Themes (light and dark mode)

## Developing a plugin

## style overrides
