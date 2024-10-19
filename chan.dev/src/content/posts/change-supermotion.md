---
title: Change
date: 2024-10-15
docs:
  - ':help motion.txt'
  - ':help text-objects'
  - ':help change.txt'
  - ':help change'
  - ':help delete'
  - ':help count'
  - ':help visual.txt'
  - ':help mini.ai'
  - ':help mini.surround'
---

<style>
  kbd {
    margin-right: 0.25em;
  }
  th {
    text-align: start;
  }
</style>

People suck at teaching Vim.

Why?  
Because it's good software.  
Good software is composable.  
And composability isn't naturally apparent virtue.

So we'll learn a little differently.  
Instead of working our way up from basics,  
we'll treat each operation atomically and exhaustively.

This guide throws you right into the deep end, with the exact commands you'll run for any given *change*.

Worst case, you learn nothing.  
Second-worst case, you learn one of Vim's best capabilities (and nothing else).
Best case, you master these individual commands and experience the strong undercurrent of composability in each lesson.

Obviously I think you and I can get to that bast case scenario or I wouldn't have written this.

Wanna learn some Vim?

## Contents

## Intent: the power of Vim

We often need to change text inside quotes, delete extranious words, or manipulate sentences and paragraphs.  
But in traditional editors we spend a lot of time making text selections with mouse.

Intent is what mave Vim so powerful.  

If we want to change the text inside a quote, we don't need to visually select it first.  
We communicate our full intent through operations (keyboard commands).  
<kbd>c</kbd><kbd>i</kbd><kbd>"</kbd> does exactly what we want with just four characters.

We'll cover 100 such operations in this guide with practical examples of where they're most useful in code.

## How to read this guide

Lessons in this guide include 3 parts:

1. A description of the editing intent
1. An exhaustive table of Vim operations to achieve that intent
1. Notes on exceptions, shortcomings, and considerations

We start with the base operation `ci` (change inner).  
This is my favorite intent and Vim's most capable.  

"Change inner" is the termonoligy you'll find in the docs.  
But I make an additional distinction of "inside".  
"Inside" is used to distinguish "inner" selections that are inside quotes.

Finally, every one of these commands is run in `Normal mode`.  
In normal mode, you'll type each character in the operation.  
Entry speed should not matter in stock Vim/neoVim.

---

## Change inside quotes

Change text inside the current (or next) pair of quotes.

| Operation | Description |
| --- | --- |
|  <kbd>c</kbd><kbd>i</kbd><kbd>'</kbd> | change inside single quotes |
|  <kbd>c</kbd><kbd>i</kbd><kbd>"</kbd> | change inside double quotes |
|  <kbd>c</kbd><kbd>i</kbd><kbd>`</kbd> | change inside backticks |

*Note: The cursor does not need to be inside the target quotation to be changed. But it does need to be before the quotation.*

---

## Change inside brackets, braces, and parentheses

Change text inside the current (or next) pair of braces, brackets, and parentheses.

| operation | Alternative | Alias | Description |
| --- | --- | --- |--- |
| <kbd>c</kbd><kbd>i</kbd><kbd>(</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>)</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>b</kbd> | change inside parentheses |
| <kbd>c</kbd><kbd>i</kbd><kbd>{</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>}</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>B</kbd> | change inside curly braces |
| <kbd>c</kbd><kbd>i</kbd><kbd>[</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>]</kbd> |  | change inside square brackets |
| <kbd>c</kbd><kbd>i</kbd><kbd><</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>></kbd> | | change inside angle brackets |

Both opening and closing characters target the same selection.  
But I recommend committing to the opening character.  
Here's why:

1. Committing to an operation creates stronger muscle memory.
1. Minimal, columnar-style keyboards often remove physical representation of closing characters. So choosing the right side could require additional keystrokes, if a columnar-style keyboard is in your future.

*Note: Parentheses and curly braces have aliases that are easier to type.*

---

## Change inner word, sentence, or paragraph

Change the word, sentence, or paragraph under the cursor.
This works indifferent to the cursor's position inside that selection.

| Operation | Description |
| :--- | :--- |
| <kbd>c</kbd><kbd>i</kbd><kbd>w</kbd> | change inner word |
| <kbd>c</kbd><kbd>i</kbd><kbd>W</kbd> | change inner WORD (includes punctuation) |
| <kbd>c</kbd><kbd>i</kbd><kbd>s</kbd> | change inner sentence (determined by punctuation) |
| <kbd>c</kbd><kbd>i</kbd><kbd>p</kbd> | change inner paragraph (determined by whitespace) |

---

## Repeat operations

It can be useful to repeat an operation.

Prefixing an operation with a number will execute that operation the number of times spcefied.
This number is referred to as an operation's `count`.

These are the operations from the previous lesson with various counts.

| operation | Description |
| --- | --- |
| <kbd>2</kbd><kbd>c</kbd><kbd>i</kbd><kbd>w</kbd> | change inner word under cursor and the next |
| <kbd>3</kbd><kbd>c</kbd><kbd>i</kbd><kbd>W</kbd> | change inner WORD under cursor and next 2 WORDs (includes punctuation) |
| <kbd>3</kbd><kbd>c</kbd><kbd>i</kbd><kbd>s</kbd> | change inner sentence under cursor and the next |
| <kbd>2</kbd><kbd>c</kbd><kbd>i</kbd><kbd>p</kbd> | change inner paragraph under cursor and the next |


---

## Change around

OK. Let's talk about text selection composition now.

Vim operations are composable.  
For the curious, the existance of an `inner` distinction suggests an "outer".

And Vim delivers.

This distinction is `around` (think "including").

- "Change around (including) double quotes."
- "Change around sentence (including whitespace and punctuation)."
- "Change around block (including curly braces)."

For *every* `inner` operation we've learned, there is a corresponding `around` operation, which *includes* characters and/or whitespace.

This table is every `ci` command we've learned, but using the `ca` (around) variation.

| Operation | Alternative | Alias | Description |
| --- | --- | --- |--- |
| <kbd>c</kbd><kbd>a</kbd><kbd>'</kbd> | |  | change around (including) single quotes |
| <kbd>c</kbd><kbd>a</kbd><kbd>"</kbd> | |  | change around (including) double quotes |
| <kbd>c</kbd><kbd>a</kbd><kbd>`</kbd> | |  | change around (including) backticks |
| <kbd>c</kbd><kbd>a</kbd><kbd>(</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>)</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>b</kbd> | change around (including) parentheses |
| <kbd>c</kbd><kbd>a</kbd><kbd>{</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>}</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>B</kbd> | change around curly braces |
| <kbd>c</kbd><kbd>a</kbd><kbd>[</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>]</kbd> |  | change around (including) square brackets |
| <kbd>c</kbd><kbd>a</kbd><kbd><</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>></kbd> | | change around (including) angle brackets |
| <kbd>c</kbd><kbd>a</kbd><kbd>w</kbd> | | | change arround word (including whitespace) |
| <kbd>c</kbd><kbd>a</kbd><kbd>W</kbd> | | | change arround WORD (including punctuation and whitespace) |
| <kbd>c</kbd><kbd>a</kbd><kbd>s</kbd> | | | change around sentence (determined by punctuation. including whitespace) |
| <kbd>cap</kbd> | | | change arround paragraph (determined by whitespace. including whitespace) |

---

## What is a text object?

Text objects are an important concept in Vim.  
And one you now have experience with.

`i"` (inside double quotes) is a text object.  
`ab` (around parentheses) is a text object.  
`iW` (inner WORD) is a text object.  

Think of these as queries &mdash or text selections.  
I've referred to them as "selections" up to this point.

These text objects are composable.  
They can be used with commands other than `c` (change).

Let's learn how…

---

## Delete, don't change

Let's talk more command composition.  

Our base `c` (change) command is actually two commands in one: `d` (delete) followed by `i` (insert).  
And anything composed can be decomposed.

So what happens if we swap the decomposed `d` command, instead of the (composed) `c` command?

We get a new set of operations that delete text objects *and* keep us in *Normal mode*.  
This is helpful when text objects need only be deleted (not replaced).

Let's look at the board to see every `c` operation, as a `d` operation.

| Operation | Alternative | Alias | Description |
| --- | --- | --- |--- |
| <kbd>d</kbd><kbd>a</kbd><kbd>'</kbd> | |  | delete around (including) single quotes |
| <kbd>d</kbd><kbd>a</kbd><kbd>"</kbd> | |  | delete around (including) double quotes |
| <kbd>d</kbd><kbd>a</kbd><kbd>`</kbd> | |  | delete around (including) backticks |
| <kbd>d</kbd><kbd>a</kbd><kbd>(</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>)</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>b</kbd> | delete around (including) parentheses |
| <kbd>d</kbd><kbd>a</kbd><kbd>{</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>}</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>B</kbd> | delete around (including) curly braces |
| <kbd>d</kbd><kbd>a</kbd><kbd>[</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>]</kbd> |  | delete around (including) square brackets |
| <kbd>d</kbd><kbd>a</kbd><kbd><</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>></kbd> | | delete around (including) angle brackets |
| <kbd>d</kbd><kbd>a</kbd><kbd>w</kbd> | | | delete around word (including whitespace)|
| <kbd>d</kbd><kbd>a</kbd><kbd>W</kbd> | | | delete around WORD (including punctuation and whitespace) |
| <kbd>d</kbd><kbd>a</kbd><kbd>s</kbd> | | | delete around sentence (determined by punctuation. including whitespace) |
| <kbd>d</kbd><kbd>a</kbd><kbd>p</kbd> | | | delete around paragraph (determined by whitespace. including whitespace) |
| <kbd>d</kbd><kbd>i</kbd><kbd>'</kbd> | |  | delete inner single quotes |
| <kbd>d</kbd><kbd>i</kbd><kbd>"</kbd> | |  | delete inner double quotes |
| <kbd>d</kbd><kbd>i</kbd><kbd>`</kbd> | |  | delete inner backticks |
| <kbd>d</kbd><kbd>i</kbd><kbd>(</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>)</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>b</kbd> | delete inner parentheses |
| <kbd>d</kbd><kbd>i</kbd><kbd>{</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>}</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>B</kbd> | delete inner curly braces |
| <kbd>d</kbd><kbd>i</kbd><kbd>[</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>]</kbd> |  | delete inner square brackets |
| <kbd>d</kbd><kbd>i</kbd><kbd><</kbd> | <kbd>c</kbd><kbd>i</kbd><kbd>></kbd> | | delete inner angle brackets |
| <kbd>d</kbd><kbd>i</kbd><kbd>w</kbd> | | | delete inner word (including whitespace)|
| <kbd>d</kbd><kbd>i</kbd><kbd>W</kbd> | | | delete inner WORD (including punctuation and whitespace) |
| <kbd>d</kbd><kbd>i</kbd><kbd>s</kbd> | | | delete inner sentence (determined by punctuation. including whitespace) |
| <kbd>d</kbd><kbd>i</kbd><kbd>p</kbd> | | | delete inner paragraph (determined by whitespace. including whitespace) |


---

## Count revisited

Now that you know know about *commands* and *text objects*,  
There are things you need to consider when using *counts*.

Applying a count runs the command in sequence &mdash as if you typed it multiple, consecutive times.

Consider <kbd>3</kbd><kbd>c</kbd><kbd>i</kbd>" (3x, change inner double quotes).

1. Delete existing text in the double quotes and places the insert cursor inside the quotes.
1. (Now inside quotes) perform the the same task &mdash; resulting in no descernable change.
1. (Still inside quotes) perform the the same task &mdash; resulting in no descernable change.

This is even more confusing when manipulating words, sentences, and paragraphs.  
Consider <kbd>3</kbd><kbd>c</kbd><kbd>i</kbd><kbd>s</kbd> (3 times change inner word).

1. Delete the sentence under the cursor, ignoring whitespace.
1. (Now over the remaining whatespace) perform the same task &mdash; deleting that remaining whitespace.
1. (Now with a new sentence under the cursor) perform the same task &mdash; deleting the next sentence (also ignoring whitespace).

This effect repeats, feeling like an off-by-one error.

For these reasons, repeating over `inner` operations is largely flawed.  
So I favor `around` for when performing counted operations.

*Note: See plugins for the ability to add a count to text objects.*

---

## The composability of operations

We now have 44 discrete operations, which can be repeated indefinitely.
That's a lot.

So how can we think about them composably?  
Let's start with anatomy.

`(<count>) <command> <text object>`

Let's break down a few as examples.

<kbd>c</kbd><kbd>i</kbd><kbd>w</kbd>
| segment | value | description |
| --- | --- | --- |
| count| none | (default: 1x) |
| command| <kbd>c</kbd> | change |
| text object| <kbd>i</kbd><kbd>w</kbd> | inner word |

<kbd>2</kbd><kbd>c</kbd><kbd>i</kbd><kbd>b</kbd>
| segment | value | description |
| --- | --- | --- |
| count| <kbd>2</kbd> | 2x |
| command| <kbd>c</kbd> | change |
| text object | <kbd>i</kbd><kbd>b</kbd> | inner parentheses |

<kbd>3</kbd><kbd>d</kbd><kbd>a</kbd><kbd>p</kbd>
| segment | value | description |
| --- | --- | --- |
| count| <kbd>3</kbd> | 3x |
| command| <kbd>d</kbd> | delete |
| text object | <kbd>a</kbd><kbd>p</kbd> | around paragraph |

Every operation you've learned can be decomposed into these three segments.

---

## Use plugins for extended functionality

The [`mini.nvim/ai`][mini/ai] plugin includes additional selection tools and aliases.

Check out their documentation for additional features.  
Here are are a few operations that I use often.

| Operation | Description |
| --- | --- |
|  <kbd>c</kbd><kbd>i</kbd><kbd>*</kbd> | Change inside (arbitrary) `*` (useful in Markdown)|
|  <kbd>c</kbd><kbd>i</kbd><kbd>_</kbd> | Change inside (arbitrary) `_` (useful in Markdown, or renaming snake_case variables)|
|  <kbd>c</kbd><kbd>i</kbd><kbd>/</kbd> | Change inside (arbitrary) `/` (useful with Regex)|
|  <kbd>c</kbd><kbd>i</kbd><kbd>?</kbd> | Change 2 <interactive: prompt for left and right edges> |
|  <kbd>c</kbd><kbd>i</kbd><kbd>q</kbd> | Change inside quotes (`'`, `"`, <code>`</code>) |
|  <kbd>c</kbd><kbd>i</kbd><kbd>n</kbd><kbd>q</kbd> | Change inside next quotes |
|  <kbd>c</kbd><kbd>i</kbd><kbd>l</kbd><kbd>q</kbd> | Change inside last quotes |
|  <kbd>c</kbd><kbd>i</kbd><kbd>f</kbd> | Change inside function call |
|  <kbd>c</kbd><kbd>i</kbd><kbd>a</kbd> | Change inside argument |
|  <kbd>c</kbd><kbd>2</kbd><kbd>i</kbd><kbd>a</kbd> | Change inside 2nd argument |
|  <kbd>d</kbd><kbd>2</kbd><kbd>a</kbd><kbd>a</kbd> | Delete 2nd argument in function call/definition |
|  <kbd>c</kbd><kbd>2</kbd><kbd>i</kbd><kbd>t</kbd> | Change 2 inner tags (atomic selection) |

---

## Take selection farther with motions

We did not cover motions.  

Motions are are not text objects.  
They are Vim's way of moving the cursor.  
However, like text objects, they can be used with commands to perform operations.

This is a comprehensive (but not exhaustive) list of motions composed with the `c` command.

| command | alternative | alias | description |
| --- | ---| --- | --- |
| <kbd>c</kbd><kbd>b</kbd>  |  |  | change to beginning of the previous word |
| <kbd>c</kbd><kbd>B</kbd>  |  |  | change to beginning of the previous WORD (includes punctuation and whitespace)|
| <kbd>c</kbd><kbd>e</kbd>  |  |  | change to end of the word (includes punctuation and whitespace)|
| <kbd>c</kbd><kbd>E</kbd>  |  |  | change to end of the WORD (includes punctuation and whitespace)|
| <kbd>c</kbd><kbd>f</kbd> `<character>`  |  |  | change through next (find) `<charecter>` |
| <kbd>c</kbd><kbd>F</kbd> `<character>`  |  |  | change through previous (find) `<charecter>`  |
| <kbd>c</kbd><kbd>g</kbd><kbd>g</kbd>  |  |  | change to start of file |
| <kbd>c</kbd><kbd>G</kbd>  |  |  | change to end of file |
| <kbd>c</kbd><kbd>k</kbd>  | <kbd>c</kbd><kbd>⬆︎</kbd> |  | change current and previous line |
| <kbd>c</kbd><kbd>j</kbd>  | <kbd>c</kbd><kbd>⬇︎</kbd> |  | change current and next line |
| <kbd>c</kbd><kbd>l</kbd>  | <kbd>c</kbd><kbd>➡︎</kbd> | <kbd>s</kbd> | change character under cursor |
| <kbd>c</kbd><kbd>h</kbd>  | <kbd>c</kbd><kbd>⬅︎</kbd> |  | change character before cursor |
| <kbd>c</kbd><kbd>H</kbd>  |  |  | change to top of screen (excluding padding) |
| <kbd>c</kbd><kbd>M</kbd>  |  |  | change to the middle of the screen |
| <kbd>c</kbd><kbd>L</kbd>  |  |  | change to bottom of screen (excluding padding) |
| <kbd>c</kbd><kbd>n</kbd>  |  |  | change to next `search result` |
| <kbd>c</kbd><kbd>N</kbd>  |  |  | change to previous `search result`  |
| <kbd>c</kbd><kbd>p</kbd>  |  |  | change to previous `search result` |
| <kbd>c</kbd><kbd>P</kbd>  |  |  | change to previous `search result`  |
| <kbd>c</kbd><kbd>t</kbd> `<character>`  |  |  | change to next `<charecter>` |
| <kbd>c</kbd><kbd>T</kbd> `<character>`  |  |  | change to previous `<charecter>`  |
| <kbd>c</kbd><kbd>w</kbd>  |  |  | change to start of next word |
| <kbd>c</kbd><kbd>W</kbd>  |  |  | change to start of next WORD (includes punctuation and whitespace)|
| <kbd>c</kbd><kbd>0</kbd> |  | | change (from cursor) to start of line |
| <kbd>c</kbd><kbd>$</kbd> |  | <kbd>C</kbd> | change (from cursor) to the end of the line |
| <kbd>c</kbd><kbd>#</kbd> |  | | change to previous word under cursor (word, if none found) |
| <kbd>c</kbd><kbd>*</kbd> |  | | change to next word under cursor (word, if none found) |
| <kbd>c</kbd><kbd>%</kbd> |  | | change to matching character pair (forward or backward) |
| <kbd>c</kbd><kbd>^</kbd> |  | | change to first non-whitespace character on the current line |
| <kbd>c</kbd><kbd>)</kbd> |  | | change to the beginning of the current sentence |
| <kbd>c</kbd><kbd>)</kbd> |  | | change to the end of the current sentence |
| <kbd>c</kbd><kbd>{</kbd> |  | | change to the beginning of the current paragraph |
| <kbd>c</kbd><kbd>}</kbd> |  | | change to the end of the current paragraph |
| <kbd>c</kbd><kbd>-</kbd> |  | | change to the first non-whitespace character on the previous line |
| <kbd>c</kbd><kbd>+</kbd> |  | | change to the first non-whitespace character on the next line |

*Note: a few omissions: [[, [], ]], ][, etc. `:help object-motions.txt`*

These are additional text object text selections.

| command | alias | description |
| --- | --- | ---|
| <kbd>c</kbd><kbd>l</kbd>  | <kbd>s</kbd> | change character |
| <kbd>c</kbd><kbd>g</kbd><kbd>n</kbd> | | change the   next search pattern match |
| <kbd>c</kbd><kbd>g</kbd><kbd>_</kbd> | | change from cursor to the last non-blank character of the line |
| <kbd>c</kbd><kbd>c</kbd>  | | change current line |
| <kbd>c</kbd><kbd>$</kbd> | <kbd>C</kbd> | change from the cursor to the end of the line |

There are no interactions with the `g` command prefix. Test.

---

## Debug text object selections with Visual mode

You may feel uneasy about text objects.  
This is natural as we're used to visualizing our selections.

This is where Vim's Visual mode comes into play.

We can replace the `c` and `d` commands with `v` to first perform a visual selection.  
Then, with that selection, post-fix the `c` or `d` command.

Here are a few examples using Visual mode with text objects and motions:

| operation | description |
| --- | --- |
| <kbd>v</kbd><kbd>i</kbd><kbd>w</kbd><kbd>c</kbd> | visual select inner word and change |
| <kbd>v</kbd><kbd>a</kbd><kbd>p</kbd><kbd>d</kbd> | visual select around paragraph and delete |
| <kbd>v</kbd><kbd>i</kbd><kbd>"</kbd><kbd>c</kbd> | visual select inside double quotes and change |
| <kbd>v</kbd><kbd>t</kbd><kbd>*</kbd><kbd>d</kbd> | visual select to `*` and delete |
| <kbd>v</kbd><kbd>T</kbd><kbd>-</kbd><kbd>c</kbd> | visual select backward to `-` and delete |

*Note: Count is not supported in Visual mode. This makes sense when you consider that count repeats commands, it does not compound them. Instead prefixing `v` with a number will select 11 × <count> characters.*

---

## Common workflows

### HTML/XML

| operation | description |
| --- | --- |
| <kbd>c</kbd><kbd>i</kbd><kbd>t</kbd> | change inside tag |
| <kbd>c</kbd><kbd>i</kbd><kbd>"</kbd> | change inside double quotes |
| <kbd>c</kbd><kbd>t</kbd><kbd>"</kbd> | change to double quote (to beginning of string attribute) |
| <kbd>c</kbd><kbd>T</kbd><kbd>"</kbd> | change back-to doble quote (to beginning of string attribute) |
| <kbd>c</kbd><kbd>i</kbd><kbd><</kbd> | change tag name |
| <kbd>c</kbd><kbd>t</kbd><kbd>␣</kbd> | change to space (handy for changing individual class names and other string attributes) |
| <kbd>c</kbd><kbd>T</kbd><kbd>␣</kbd> | change back-to space (handy for changing individual class names and other string attributes) |
| <kbd>c</kbd><kbd>i</kbd><kbd>w</kbd> | change string attribute segment (separated by non-word characters, e.g., `-`, `_`, `.`, etc.) |

*Note: Remember that that these operations can use `d` (delete) and `v` (visual) commands and/or `a` (arround) text objects selections.*

**Additional commands with [`mini.nvim/ai`][mini/ai]**

| operation | description |
| --- | --- |
| <kbd>c</kbd>`<count>`<kbd>i</kbd><kbd>t</kbd> | change inside <count> (ansestor) tags |
| <kbd>c</kbd><kbd>i</kbd><kbd>l</kbd><kbd>q</kbd> | change inside last quotes (universal) |
| <kbd>c</kbd>`<count>`<kbd>i</kbd><kbd>n</kbd><kbd>q</kbd> | change inside next `<count>` quotes (universal) |
| <kbd>c</kbd>`<count>`<kbd>i</kbd><kbd>n</kbd><kbd>B</kbd> | change inside next `<count>` curly brarces |

```html title="sample.html"
<html>
  <head>
    <title>title</title>
  </head>
  <body>
    <main>
      <h1 class="class-one-a class-two" id="my-id">Page title</h1>
    </main>
  </body>
</html>
```

### React

*All operations from HTML section apply.*

| operation | description |
| --- | --- |
| <kbd>c</kbd><kbd>i</kbd><kbd>b</kbd> | change inside parentheses |
| <kbd>c</kbd><kbd>i</kbd><kbd>B</kbd> | change inside curly braces |
| <kbd>c</kbd><kbd>a</kbd><kbd>"</kbd><kbd>{</kbd> | change attribute in quotes and insert `{` to interpolate variable. |



**Additional commands with [`mini.nvim/ai`][mini/ai] and [`mini.nvim/surround`][mini/surround]**


| operation | description |
| --- | --- |
| <kbd>c</kbd><kbd>i</kbd><kbd>f</kbd> | change function call arguments |
| <kbd>c</kbd><kbd>i</kbd><kbd>a</kbd> | change argument under cursor (or next) |
| `<count>`<kbd>c</kbd><kbd>i</kbd><kbd>a</kbd> | change argument at `<count>` position |
| <kbd>s</kbd><kbd>r</kbd><kbd>"</kbd><kbd>\`</kbd> | surround replace `"` with <code>`</code> to allow interpolation |
| `<count>`<kbd>d</kbd><kbd>i</kbd><kbd>a</kbd> | change argument at position `<count> `|
| <kbd>d</kbd><kbd>a</kbd><kbd>a</kbd> | (ripple) delete first argument |
| <kbd>d</kbd>`<count>`<kbd>a</kbd><kbd>a</kbd> | delete argument at position `<count>` |
| <kbd>c</kbd>`<count>`<kbd>i</kbd><kbd>n</kbd><kbd>B</kbd> | change inside next `<count>` curly brarces |
| <kbd>s</kbd><kbd>r</kbd><kbd>q</kbd><kbd>?</kbd> | replace surrounding quotes (universal) with `<interactive>` (<code>{\`</code>, <code>\`}</code>) (for changing string to variable interpolation) |

```jsx
function(a,b,c) {
  return a + b + c;
}

function({a,b = 1, ...c}) {
  return a + b + c;
}

export default function (a, b, c) {
  return (<html>
    <head>
      <title>title</title>
    </head>
    <body>
      <main>
        <h1 class="class-one-a class-two" id="my-id">Page title</h1>
      </main>
    </body>
  </html>)
}
```

### Markdown/prose

[[: go to previous heading
]]: go to next heading
ci*/ci_: change inside em/strong
ci*/ci_: change inside em/strong
cis/cas: change sentance
cip/cap: change paragraph

[mini/ai]: https://github.com/echasnovski/mini.nvim/blob/main/lua/mini/ai.lua
