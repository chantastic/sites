---
title: A chantastic guide to supermotions
---

I love keyboard effeciency.  
It's fun picking up simple motions that let you talk with a computer &mdash; more freely.

These motions aren't limited to just one tool, or platform.  
Everything here is intended to travel withy you, wherever conjuring computers takes you.

---

## Change text

If I could take only one Vim motion with me everywhere, it would be change.  
There's just nothing like it in any other editor.

Just think about what's involved in changing portions of text in most editors.

- Move from keyboard to mouse
- Make text selection
- Move from mouse back to keyboard
- Hit `delete`
- Start typing

This is too many steps.  
And it gets worse when the change you're attempting is structural, changing surrounding double-quotes to single-quotes.  
Or, in programming, changing strings to a variable.

Using Vim motions, can handle all of thise cases with the versital motion: <kbd>c</kbd>.

- Change line (<kbd>cc</kbd>)
- Change from here to the end of the line (<kbd>C</kbd>)
- Change text inside quotes (<kbd>ci"</kbd>)
- Change until the next `,` character (<kbd>ct,</kbd>)
- Change quotes to curly braces (<kbd>cs"{</kbd>)
- Change this paragraph (<kbd>cap</kbd>)

Of course to use these motions, you'll need a quick primer on modal editing.  
Let's get started.

## Modal editing: the command sandwhich

If you've never used Vim, this is a quikc primer.  
Skip ahead if you're already familiar with the concept.  
Or stick around and learn how to explain it to a friend.

Every editor you've used before has a single mode: Insert mode.  
You see a tall, skinny cursor.  
And as you type, text is inserted.  

In these editors, you run commands by prefixing charactors with a special key.  
- <kbd>⌘</kbd> + <kbd>x</kbd> to cut
- <kbd>⌘</kbd> + <kbd>c</kbd> to copy
- <kbd>⌘</kbd> + <kbd>v</kbd> to paste

In Vim, this is achieved a different way.  
You don't use a prefix key; you leave insert mode, into a "macro mode" (called `Normal mode` &mdash; arrogantly enough).

In Normal mode, every key is an editing macro.  
- <kbd>d</kbd> to delete
- <kbd>c</kbd> to change (delete and insert)
- <kbd>y</kbd> to copy ("yank")

And these macros allow you to specify range and selection:

- <kbd>dd</kbd> - delete the current line
- <kbd>D</kbd> - delete from the current position onward
- <kbd>di"</kbd> - delete inside double quotes
- <kbd>dinq</kbd> - delete inside next quate (single or double)

## Change in: character pair

The `change in: character pair` supermotion targets text surrounded by a pair of characters.  
In most cases, this is a pair quotes, paretheses, braces, or brackets.

Here are several common commands for this supermotion:

| Macro | Description |
| ----- | ----------- |
| <kbd>ci"</kbd> | change in double quotes |
| <kbd>ci'</kbd> | change in single quotes |
| <kbd>ci`</kbd> | change in backticks |
| <kbd>ciq</kbd> | change in quotes (single or double) |
| <kbd>ci(</kbd> | change in parentheses |
| <kbd>ci{</kbd> | change in curly braces |
| <kbd>ci[</kbd> | change in square brackets |
| <kbd>ci<</kbd> | change in angle brackets |
| <kbd>cit</kbd> | change in tag (HTML, XML) |

### Standard behavior

This supermotion operations in the character pair around your cursor.

<!--gif of changing inside quotes, with cursor inside region -->

But if your cursor is _not_ is not in between the specified character pair,
this supermotion works on the next character pair on that line.

<!--gif of changing inside quotes, with cursor inside region -->

It does not work backwards &mdash; even if the character pair (before the cursor) is the only character pair on the line.

But there is a macro modifier for this case.

### Change inside modifiers

| Modifier | Example | Description |
| ------- | ----------- | ---|
| next | <kbd>cin\<character\></kbd> | change in next \<character\> |
| last | <kbd>cil\<character\></kbd> | change in last \<character\> |


### Conclusion

Change in (`ci`) is my favorite, most used supermotion.  
It saves so much effort in making text selections.

---

## Change to

The "change to" supermotion deletes text untel the provided characters and re-enters *Insert mode*.

Here's a the most common change inside macros:

| Macro | Description |
| ----- | ----------- |
| <kbd>ci"</kbd> | change inside double quotes |

---

vim supermotions

- destructive insert
  - change partial text object (til)
  - change line (C)
  - change partial line
  - (visualizing selections, understanding motion)
- positional insert
  - above and below
  - begging of line
  - first character
  - end of line

* jump to occurrence
  - next
  - previous
