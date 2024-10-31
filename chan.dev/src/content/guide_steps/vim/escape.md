---
title: 'Escape: Groking Modal Editing'
order: 2
---

Every editor you've used has a single mode: *Insert mode*.  

And in *Insert mode*, you have a well known cursor.
It'sutomatically switched a tall, slender, and it probably blinks.  
This tall-skinny-blinky cursor dutifully inserts every character you type.

But there's a catch.  
Commands — like `Save`, `Copy`, `Paste`, and `Undor` — require the use of modifier keys.

## Vim has two modes

Unlike other editors, Vim has two major modes: `Insert mode` and `Normal mode`.

`Insert mode` is the mode you're familiar with.  
`Normal mode` can be thought of as a "command mode".



Using your editor's Vim mode (or extension), you can escape insert mode by tying <kbd>esc</kbd>.

## How to switch from Insert mode to Normal mode

We access this mode with the <kbd>Esc</kbd> key.

Hitting `Esc` you enter what Vim calls "Normal mode".
And in this mode, every key becomes a mneumonic command.

### Escaping Insert mode

Hit <kbd>Esc</kbd> now to enter Normal mode.  
Depending on the editor you're using, you may see the cursor change to a rectangle.  
Or, if you see a activity bar, you may see the mode change from `--INSERT--` to nothing at all.

These are all signs that you are now in Normal mode.

## Re-entering Insert mode

Now, just as important as leaving Normal mode, is re-entering Insert mode.

For now use the <kbd>i</kbd> key to re-enter Insert mode.
This is the easiest to remember because it's a mneumonic for "insert".

Take a moment to escape and re-enter Insert mode.

## The many ways to enter Insert mode

| Key          | Description                                 |
| ------------ | ------------------------------------------- |
| <kbd>i</kbd> | _Insert_ (before the cursor)                |
| <kbd>a</kbd> | _Append_ (after the cursor)                 |
| <kbd>o</kbd> | _Open_ a new new line (below the cursor)    |
| <kbd>s</kbd> | _Substitute_ the character under the cursor |

There are also capital letter variants.
I'll use <kbd>⇧</kbd> to represent the <kbd>shift</kbd> key here (and throughout) to avoid confusion with lowercase commands.

| Key           | Description                                |
| ------------- | ------------------------------------------ |
| <kbd>⇧i</kbd> | _Insert_ at the beginning of the line      |
| <kbd>⇧a</kbd> | _Append_ at the end of the line            |
| <kbd>⇧o</kbd> | _Open_ a new line above the cursor         |
| <kbd>⇧s</kbd> | _Substitute_ the the line under the cursor |

## Assignment

Navigate a document and try escaping and re-entering Insert mode several times.
Use as many of these insert methods as you can think of.
