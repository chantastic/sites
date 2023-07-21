---
title: 'Create Markdown "Components" with Remark Containers'
date: 2023-07-13
---

Let's talk about how weird markdown is.

You can write HTML directly into a markdown file.
This actually makes Markdown awesome!
But things get weird in practice.

Let's look at why [Prettier]() — a tool designed to format code beuatifully — makes this HTML uglier.

```markdown
<section>
  <div class="flex gap-x-3">
    <div class="w-1/2">

A _liiiiittle_ markdown.

  </div>
  <div class="w-1/2">

Some **other** markdown.

  </div>
  </div>
</section>
```

## The problem

Let's start with a simplistic example.
And work our way up.

```markdown
<div>
  A _little_ markdown.
</div>
```

<div class="border border-black p-4 m-0">
  <strong>Output:</strong>
  <div>
    A _little_ markdown.
  </div>
</div>

Here, the word `_little_` is treated as raw text and not markdown.
But it *can* be processed as markdown by adding a newline between the opining `div` and text content.

```markdown
<div>

  A _little_ markdown.
</div>
```

<div class="border border-black p-4 m-0">
  <strong>Output:</strong>
  <div>

  A _little_ markdown.
  </div>
</div>

Brilliant!
Markdown in HTML.

But what if you have more than one level of nesting?

```markdown
<div><!-- first level -->
  <div><!-- second level -->

    A _little_ markdown.
  </div>
</div>
```

<div class="border border-black p-4 m-0">
  <strong>Output:</strong>
  <div><!-- first level -->
    <div><!-- second level -->

      A _little_ markdown.
    </div>
  </div>
</div>
</div>

Well that brilliance was short lived.
What happened?

## Original markdown code block syntax

Markdown — [as specified by the author](https://daringfireball.net/projects/markdown/syntax#precode "Markdown Code Blocks specification, by author John Gruber") — interprets 4 spaces (or 1 tab) as a code block.

> To produce a code block in Markdown, simply indent every line of the block by at least 4 spaces or 1 tab.
> This is a normal paragraph:
>
>     This is a code block.

As developers, we commonly use [GitHub Flavored Markdown](https://github.github.com/gfm/ "GitHub Flavored Markdown Spec").
This specialization of markdown adds [fenced code blocks](https://github.github.com/gfm/#code-fence) as an optional syntax.

But it doesn't replace the "4 space or 1 tab" specification.

Anything nested "4 spaces or 1 tab" deep is intepreted as code.
This doesn't just cause chaos on the content line but any HTML written at that depth.
This is why you get that hanging `</div>` (above).

## Prettier makes things uglier, but correct

---

To process the text content as markdown, there needs to be a newline separating the opening `div` and the markdown text.
Again, very cool that

The Markdown parser needs one preceeding line of whitespace, it will just spit out normal text.

<!-- ![examples]() -->

And it doesn't end there.
Most AST-based markdown formatters will correct that to have new lines above and below the markdown.
And this introduces another problem

```markdown
<section>
  <div>
    <div>

A _liiiiittle_ markdown.

  </div>
  </div>
</section>
```

```markdown
<div class="flex gap-x-3">
  <div class="w-1/2">

A _liiiiittle_ markdown.

  </div>
  <div class="w-1/2">

Some **other** markdown.

  </div>
</div>
```

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

```
<div class="flex gap-x-3">
  <div class="w-1/2">

A _liiiiittle_ markdown.

  </div>
```

<div class="flex gap-x-3">
  <div class="w-1/2">
    <div>

A _liiiiittle_ markdown.

<div>

  </div>
</div>
