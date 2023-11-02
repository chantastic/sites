---
title: 'Create Markdown "Components" with Remark Directives'
date: 2023-07-13
---

## Notes

Incompatible with obsidian plugin.

## API reference

`textDirective`

```md
:i[the content]{id="content"}
```

`leafDirective`

```md
::hr
::br
```

supports `{key="value"}`?

`containerDirective`

:::my-container

My contained content.
:::

---

I love markdown but wish it had components.

"That's what [MDX][] is for, right??"

Not really. MDX is JavaScript file format, not markdown.[^1]
What I want is a way to abstract repeated markup for embeds, intent links, wordy markup, and styled containers.

[^1]:
    Try and explain markdown with 1 layer of abstraction removed.

    **JSX**: An XML syntax extension to JavaScript.

    **Markdown**: A suprset of HTML

    **MDX**: An XML syntax extension in a superset of HTML — in JavaScript.

    WAT‽

    There are too many layers of interpretation. My preference is to use JSX _or_ MD. And selectively parse markdown content thru a markdown processor.

[MDX]: https://mdxjs.com/ "MDX documentation"

## Enter Remark Directive

[Remark directive][] is a [Remark][] plugin that introduces a customizeable syntax.

This is the full syntax sample shown in documentation:

```md

```

Let's break that down into the practical use cases shown above.

[remark]: https://remark.js.org/ "Remark: markdown processor powered by plugins"

### Details element

```md
<details>
    <summary>Details</summary>
    Something small enough to escape casual notice.
</details>
```

```md
:::my-container

Any _markdown_ I want.
:::
```

And here's a more complex example:

## What I'd like

I just want a few repeatable snippets for:

- embeds
- "bug me on social" intent links
- hidden content[^2]

[^2]: There are other good reasons to hide content.

    Add the #body or #nerd url target to urls on [chan.dev][] and you'll see hidden debugging details, stats, and scripts appear.

## Visually Hidden example

:::my-component

This is a test
:::

```md
:::visually-hidden

This description makes visible content accessible via assistive technologies.
:::
```

oeunth :i[lovely] oeunth

<!-- not currently supported after 3.0 update -->
<!-- :::main{#readme} -->

Lorem:br
ipsum.

<!-- not currently supported after 3.0 update -->
<!-- ::hr{.red}

A :i[lovely] language know as :abbr[HTML]{title="HyperText Markup Language"}.
-->

```css
.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

/*
 * https://www.a11yproject.com/posts/how-to-hide-content/
 * Dave Rupert @davatron5000
 */
```

## Why markdown is important

For the past 3 years, I used [eleventy][] to build [chan.dev][]. eleventy was my favorite static site generator before [Astro 2.0][Astro].

But when I went to migrate all of my markdown content, I ran into a problem. It was littlered with [eleventy short codes][].
Some pages probably still are!

This is a very eleventy-specific way to create dynamic elements. And it couldn't go with me.

[Eleventy]: https://www.11ty.dev/ "Eleventy, a simpler static site generator"
[chan.dev]: htps://chan.dev "the chaotic digital garden of chantastic"
[Astro]: https://astro.build/blog/astro-2/ "Astro 2.0 announcement post"
[Eleventy shortcodes]: https://www.11ty.dev/docs/shortcodes/ "Template Language custom tags"

## Enter Remark Directive

[Remark directive][]

[remark directive]: https://github.com/remarkjs/remark-directive

To process the text content as markdown, there needs to be a newline separating the opening `div` and the markdown text.
Again, very cool that

The Markdown parser needs one preceeding line of whitespace, it will just spit out normal text.

<!-- ![examples]() -->

And it doesn't end there.
Most AST-based markdown formatters will correct that to have new lines above and below the markdown.
And this introduces another problem

<!-- prettier-ignore-start -->
```md
<section>
  <div>
    <div>

A _liiiiittle_ markdown.
  </div>
  </div>
</section>
```

```md
<div class="flex gap-x-3">
  <div class="w-1/2">

A _liiiiittle_ markdown.
  </div>
  <div class="w-1/2">

Some **other** markdown.
  </div>
</div>
```
<!-- prettier-ignore-end -->

<div class="flex gap-x-3">
  <div class="w-1/2">

A _liiiiittle_ markdown.

  </div>
  <div class="w-1/2">

Some **other** markdown.

  </div>
</div>

It's great that I can just drop in a [tailwindcss flex recipe](https://v1.tailwindcss.com/components/flexbox-grids "tailwindcss flexbox grids documentation and recipes"). But do you see what I mean by wierd?

Anything that I want parsed as markdown requires surronding newlines.
And that's not all!

<!-- prettier-ignore-start -->

```md
<div class="flex gap-x-3">
  <div class="w-1/2">
    <div>

A _liiiiittle_ markdown.

  <div>
  </div>
</div>
```

<div class="flex gap-x-3">
  <div class="w-1/2">
    <div>

A _liiiiittle_ markdown.

  <div>
  </div>
</div>
<!-- prettier-ignore-end -->
