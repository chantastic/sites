---
date: 2022-11-01
title: "Novimber outline"
# description: "Append text by entering insert mode from normal mode."
# keys:
#   - a
#   - A
---

## What is this

This is a beginner's guide to Vim motions.

It's just 12 lessons that will change the way you navigate text — code, prose, notes or otherwise.

You can't learn Vim in 12 lessons.
But you can transform the way you navigate text.

## Delivery

This course is delivered as a email drip campaign so you can have a full day to practice the one thing that you learned.

At the end, I'll give you an option to purchase an accompanying video course, reference ebook, and cheetsheets for $9.

## Do I have to use Vim?

- Vim motion emulation: VS code et, al

## The most useful vim motion: change

- `ci` change inside
- `ca` change around
- `c[a|i]t` change tag

Replaces:

- start selection
- end selection
- cut

Will select the nearest set of characters.
So you don't have to be inside the quotes for it to work.

## Undo

## The best way to learn vim motions: visual selection

The `c{m}t` command i showed you can be tricky.
There is no visual confirmation of the range you selected.
As you're learning vim, it can be helpful to take a step back and use vim's visual made.

- like shift (when using arrow keys)
- get a sense of how vim's selections work

- `vi{motion}`
- `va{motion}`

## Paste

## Yank (copy)

## Found notes from other repo

## Setup

https://www.youtube.com/playlist?list=PLnc_NxpmOxaNqdGvUg8RBi8ZTaZGPdqBD

- [html5boilerplate](https://github.com/h5bp/html5-boilerplate)
  - Has HTML, CSS, JSON, and JavaScript

## Story

- TextMate as first serious editor
- It went defunkt. Other editors had TextMate key-bindings but it made the docs experience bad and was incomplete
- So, I learned Vim as a universal keybindings
- I've since used Sublime Text 2 (cross-platform), Vim (both GUI and terminal, local and remote), Emacs (with evil mode), Atom, WebStorm, VS Code, and a bunch of online editors.

- Vim is a way too communicate intention to the editor.
  - Using a mouse you're just selecting points. From here to here, do this.
  - With vim you can say
    - "change the text inside these quotes"
    - "remove this tag"
    - "go to the top or bottom of the file"
    - "replace all occurances of this word where the case matches"
    - "move the current line to the middle of the screen"

## Personal preference

- Now, a lot of people like to customize their vim config, I'm not that guy
- The value for me is that un-customized Vim is a transferrable skill between editors
- MOST of my text manipulation is done with Vim — and the things i don't do I know how to do.

## VS Code Setup

- [vscodevim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
- Setting: `vim: Start in Insert Mode`

## Sneek peak

`App.js`

If you walk away with ONE THING. let it be ci and ca

- `ci"` - change inside double-quotes
- `ca"` - change around double-quotes
  - `p` - place cut below
  - `P` - place cut above
- `cit` - change inside tag
- `cat` - change aronud tag

## VISUAL

`README.md`

- like shift (use arrow keys)
- can't start in middle of word. have to start at the beginning
- visual select with surround `S`

- u (cover this because i use it a lot)
- upgrade d, c, (s)
- viw
- vaw
  - w
  - e
- vi"
- va" (from " to {} in React)
- cs"` (vim surround)

  - (ys)?
  - ?? cs"{`
    - cs"{ then ysi{`
  - (t) (f)??

- SKIP VISUAL MODE

  - fewer keypresses
  - removes step from what you would do with a mouse
  - ci"
  - ct.
  - cT"
  - cit / cat
  - (you can do the same with `d`)
  - dd
  - C
  - S
  - (every delete is a cut, which is nice)

- Navigation
  - o O
  - ^ 0 $
  - (% not working)
  - { / } ( for stepping thru big blocks of code)
  - ( / ) (includes first line)
  - G
  - gg
  - #g
  - gf
  - ZZ
- Quitting

  - ZQ
  - ZZ
  - z and g are overloaded
  - ^d / ^u (half pages)
  - ^f / ^b (whole pages)
  - zz / zt / zb
  - H / M / L
  - - (next line with at first character)
  - - (prev line with at first character)
  - preferring cmd-shift [] to vims way

- MISC (most useful in markdown if not using prettier)

  - <<
  - > >
  - ^I / ^O

- OTHER MODES

  - ^V (visual block)
  - R (ascii, certain css values like colors)
  - ^R (redo)
  - I
  - O
  - A

- Search

  - /
    - n
    - N
  - ?

- :s/some-term/replacement-term/g
- :%s/some-term/replacement-term/g
- (using range)
- great stuff here: https://vim.fandom.com/wiki/Search_and_replace

Things I prefer VS Code for

- TAGS plugin vs (cst<)

---

React Retreat/Repose San Diego
- What do we do for food?
  - Dija Mara
  - The Friendly
  - Pizza
  - Taco guy
  - Cereal bar
- What do we do for coffee?
- How big should it be?
- What should the activitities be?
- Where should it be.
- What are good SD activitities?
  - How many people can fit into a bus