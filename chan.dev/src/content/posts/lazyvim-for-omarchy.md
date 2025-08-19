---
title: LazyVim for Omarchy
date: 2025-08-18
---

## What is modal editing

Most modern text editors have a single mode where every key you enter gets inserted into on open document.

In these editors, you access editing with modifier keys (e.g., <kbd>⌘</kbd>, <kbd>⌥</kbd>, <kbd>⌃</kbd>, etc).

Modal editors behave differently.  
In modal editors, you switch between modes to complete different editing operations.

## What are major modes in Vim?

`Insert`
: The text editing mode you're used to. Type; characters get inserted.

`Normal`
: Every key is a macro or action (like a keyboard shortcut).

`Command`
: Issue editor commands, e.g., `write`, `quit`, `help`, etc.

`Visual`
: Make text selections (like holding <kbd>shift</kbd> or click-and-drag).

## How do I make visual selections with motions?

First, arrow keys work.  
So you can just use those in visual mode.

But there better ways to make selections.  
I like to start with `word`/`Word` motions.

<kbd>w</kbd>ord
: move to the beginning of the next `word` (deleniated on whitespace and punctuation).

<kbd>W</kbd>ord
: move to the beginning of the next `WORD` (deleniated on whitespace).

<kbd>b</kbd>eginning
: move to the beginning of the previous `word` (deleniated on whitespace and punctuation).

<kbd>B</kbd>eginning
: move to the beginning of the previous `WORD` (deleniated on whitespace).

<kbd>e</kbd>nd
: move to the end of the next `word` (deleniated on whitespace and punctuation).

<kbd>E</kbd>nd
: move to the end of the next `word` (deleniated on whitespace).

_(There is logical opposite to `e`/`E`. But you can use the `g` modifer to get it, with `ge`/`gE`)_

## How do I make visual selections with text objects?

## What can you do with a visual selection?

<kbd>d</kbd>elete
: delete into `normal` mode

<kbd>c</kbd>change
: delete into `insert` mode

<kbd>y</kbd>ank
: yank into `normal` mode

### Other notes

```
## Thesis

Every editor you've used, as a modern programmer has just one editing mode.

Open a file, move the blinking cursor with your mouse, insert or delete text

For you, this is "normal".

in Vim, `normal` is something else.


## Bridge

Insert mode is just one mode in Vim.
But what if i told you tehre where other editing modes you use on a daily basis?

## Antithesis

Vim is a `modal` editor.
You'll use multiple different modes to edit and operate on text.
(Metaphors: Lightroom, video editor, physical workbench.)

## A simple end-to-end edit
- open a file in vim (normal)
- select an insertion point
- make a visual selection (visual) and change (insert)
- escape (normal)
- save and close (command)
```
