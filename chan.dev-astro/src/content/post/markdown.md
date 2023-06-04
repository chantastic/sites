---
title: markdown
tags: ["code"]
---

## details

### Raw markdown

Markdown supports HTML and, therefore, details.
However, in order to put markdowndown inside of a summary, there needs to be additional line-breaks between HTML elements and markdown blocks.

<details>
<summary>Some disclosure</summary>

_Markdown can go in here if you leave extra line breaks._

</details>

```md
<details>
<summary>Some disclosure</summary>

_Markdown can go in here if you leave extra line breaks._

</details>
```

### markdown-it plugins

[markdown-it-container](https://github.com/markdown-it/markdown-it-container) can be used to create definition lists.
