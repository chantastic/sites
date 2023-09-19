---
title: markdown
tags: ["code"]
---

This document describes markdown in terms of [Prettier](https://prettier.io/) defaults. If you don't use prettier, find syntax alternatives on [Daring Fireball](https://daringfireball.net/projects/markdown/).

Many examples have been used from the Daring Firebal documentation.

## GitHub Flavored Markdown (GFM)

Most code environments use custom Markdown parser called [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/).

The most notable difference is how GFM handles code blocks — using a [code fence](https://github.github.com/gfm/#fenced-code-blocks).

I include `(GFM)` where GFM-specific syntax is demonstrated.

## Contents

## Headings

```md
# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6
```

## Blockquote

```md
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

### Nested blockquote

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

### Blockquotes support markdown

> ## This is a header.
>
> 1.  This is the first list item.
> 2.  This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");

<small>Examples from [Daring Fireball](https://daringfireball.net/projects/markdown/syntax#blockquote)</small>

## Lists

### Unordered

```md
- Folklore
- Evermore
- Midnights
```

### Ordered

Ordered lists are alway consecutive.  
The only number that makes a difference is first. Anything other than `1`, sets the `start` value on the `<ol>`.

```md
8. Folklore
1. Folklore
1. Evermore
1. Folklore
```

output:

```html
<ol start="8">
  <li>Folklore</li>
  <li>Folklore</li>
  <li>Evermore</li>
  <li>Folklore</li>
</ol>
```

## Lists of paragraphs

```md
1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
```

## Lists with markdown

````md
- A list item with a blockquote:
  > This is a blockquote
  > inside a list item.
- A list item with a code block:
  ```
  Code goes here
  ```
````

## Code inline

```md
`<em>love it!</em>`
```

```md
`` There is a literal backtick (`) here. ``
```

## Code block (GFM)

````md
```js
let GOAT = "Taylor Swift";
console.log(GOAT);
```
````

### Nested markdown code

Add more backticks for infinite nesting.

`````md
````md
```js
let GOAT = "Taylor Swift";
console.log(GOAT);
```
````
`````

## Horizontal Rule

```md
---
```

## Link

This syntax can often be hard to remember.  
Someone recommended thinking of it as calling a named function with the url. It's stuck with me ever since.

### Basic

```md
[chan.dev](https://chan.dev/ "optional title")
```

### Automatic

```md
<https://chan.dev>
```

### Automatic entity encoded email

```md
<address@example.com>
```

Output:

```html
<a
  href="&#x6D;&#x61;i&#x6C;&#x74;&#x6F;:&#x61;&#x64;&#x64;&#x72;&#x65;
&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;
&#109;"
  >&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;
  &#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;</a
>
```

_This last part more interesting than anything else. Surely bots decode this._

### Reference style

**Reference**

```md
[chan.dev][site]
```

## Emphasis

```md
_produced an <em> context_
**produced an <strong> context**
```

### Mid-word emphasis

```md
un*frigging*believable
```

### Escape empahasis

```md
un\*frigging\*believable
```

## Emphasis

```md
_this is emphasized!_
```

**Definition**

```md
[site]: https://chan.dev/ "Optional Title Here"
```

- NOT case sensetive.
- CAN be defined anywhere in the document.

```md
I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

[google]: http://google.com/ "Google"
[yahoo]: http://search.yahoo.com/ "Yahoo Search"
[msn]: http://search.msn.com/ "MSN Search"
```

**Shorthand reference**

```md
<!-- when referencing this definition -->

[my site]: https://chan.dev

<!-- both examples are identical-->

[my site][]
[my site][my site]
```

## Image

```md
![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")
```

### Reference style

```md
![Alt text][id]

[id]: url/to/image "Optional title attribute"
```

_See [Link](#link) for more reference style options._

## details

### Raw markdown

Markdown supports HTML and, therefore, details.
However, in order to put markdowndown inside of a summary, there needs to be additional line-breaks between HTML elements and markdown blocks.

<details>
<summary>Some disclosure</summary>

_Markdown can go in here if you leave extra line breaks._

</details>

```html
<details>
  <summary>Some disclosure</summary>

  _Markdown can go in here if you leave extra line breaks._
</details>
```

### markdown-it plugins

[markdown-it-container](https://github.com/markdown-it/markdown-it-container) can be used to create definition lists.
