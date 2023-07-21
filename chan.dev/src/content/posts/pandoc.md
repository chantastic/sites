---
title: "Pandoc"
dateCreated: 2022-01-07
---

## Contents

## Install Pandoc on mac with Homebrew

```sh
brew install pandoc
```

This requires [Homebrew](https://brew.sh).  
Find [additional installation options here](https://pandoc.org/installing.html#macos).

Once installed, run `which pandoc` to verify your installation.
If you don't see a result, try again in a new terminal window.

## Install MacTeX for PDF generation

[MacTeX](https://tug.org/mactex/mactex-download.html) is a typesetting tool. And it's required for PDF generation.

MacTex is enormous enormous at ~4GB.  
See [alternative Latex installation options here](https://pandoc.org/installing.html#macos).
MacTex recommends installing the full version, if you have the disk space. It's unpredictable when you'll need specific features.

## Basic usage

Out of the box, Pandoc is configured for markdown to html conversion.

### Bare command

```sh
pandoc
```

Run `pandoc` with no arguments to open a Pandoc shell. Type some markdown there and hit <kbd>CTRL-D</kbd> twice and see the resulting HTML.

```sh
chantastic@local % pandoc
Hello *pandoc*!

❤️, [chan](https://chan.dev)

<p>Hello <em>pandoc</em>!</p>
<p>❤️, <a href="https://chan.dev">chan</a></p>
```

This makes a great demo but a terrible workflow.

## Feed pandoc source files

Pandoc takes source files as input.

```sh
pandoc my-markdown-file.md
```

When fed multiple source files, it combines them.

```sh
pandoc file1.md file2.md file3.md
```

```sh
chantastic@local % pandoc file1.md file2.md file3.md

<h2 id="this-is-file-one">This is File One</h2>
<p>Contents from file one.</p>
<h2 id="this-is-file-two">This is File Two</h2>
<p>Contents from file two.</p>
<h2 id="this-is-file-three">This is File Three</h2>
<p>Contents from file three.</p>
```

## Use the `--output` option to set an output file

Pipe Pandoc transformations into a file on disk by providing an `--output` location.

```sh
pandoc my-markdown-file.md --output transformed-file.html
```

Use `-o` for short.

```sh
pandoc my-markdown-file.md -o transformed-file.html
```

## Pandoc infers format from filename extensions

Pandoc is smart enough to infer the output format based on the provided extension.

Let's get weird and change the `output` file extension to `.docx` (lol, remember Microsoft Word?).

```sh
pandoc my-markdown-file.md --output transformed-file.docx
```

Pandoc made a Microsoft Word doc for us!

_Type `ls` to see it_.

## Set input format with the `--from` option

We can explicitly set the input format with the `--from` option.

Pandoc defaults to `markdown` (specifically [Pandoc Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown)).

```sh
# the default without options
pandoc my-markdown-file.md --from markdown
```

Set the input format to `commonmark` if you prefer strict markdown.

```sh
pandoc my-markdown-file.md --from commonmark
```

Pandoc offers _a lot_ formats. So you're not limited to markdown.  
We can transform document from html to markdown as well.

```sh
pandoc some-webpage.html --from html --to markdown
```

[Find the full list of input formats here](https://pandoc.org/MANUAL.html#general-options).

## Set output format with the `--to` option

We can explicitly set the output format with the `--to` option.

Pandoc defaults to `html`.

```sh
# the default without options
pandoc my-markdown-file.md --to html
```

Set the output format to `.pdf` to create a PDF.

```sh
# This requires a latex installation. See Install.
pandoc my-markdown-file.md --to pdf
```

_The console output will look real strange._

[Find the full list of output formats here](https://pandoc.org/MANUAL.html#general-options).

## Create standalone html files with the `--standalone` option

Produce complete HTML documents with the `--standalone` option. This will wrap your content in a standard HTML template.

```sh
pandoc my-markdown-file.md --standalone
```

You can [introduce layouts with templating syntax](https://pandoc.org/MANUAL.html#templates). I won't be covering that here.

\*Note that if it can't find an H1, it will use the filename as a title. If more than one filename is provided, you'll need to provide a title via frontmatter or the `--metadata` option.

## Add metadata with the `--metadata` option

Metadata can be provided as key:value pairs to the --metadata option

```sh
pandoc my-markdown-file.md --standalone --metadata=title:"My Greatest Work",
```

[Use the [`--metadata-file`] option can also be used to reduce the command size](https://pandoc.org/MANUAL.html#templates).

## Include frontmatter in markdown files

A better way to include metadata is via a YAML metadatablock in your first markdown file.

You can put anything here but here is a sampling of ePub metadata

```md
---
title:
  - type: main
    text: A Beginner's Guide to Pandoc
  - type: subtitle
    text: Build ebooks with ease!
creator:
  - role: author
    text: Michael Chan
  - role: editor
    text: Michael Chan
identifier:
rights: © 2022 Michael Chan, CC BY-NC
ibooks:
  version: 0.0.1
---

# This is a standard markdown file

And this will be the first page in my ebook.
```

Generate an ePub and the frontmatter metadata will be used to populate the required ePub fields.

```sh
pandoc my-markdown-file.md -o my-book.epub
```

[Full list of ePub attributes](https://pandoc.org/MANUAL.html#epubs)

## Other docs I'd like to dive into but haven't yet.

like to learn more:

## Bug me for more…

- [Divs and Spans](https://pandoc.org/MANUAL.html#divs-and-spans)

[Bug me on twitter if you'd like me to keep working on this doc.
