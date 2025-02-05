---
title: Welcome VS Code stream friends!
dateCreated: 2023-04-20
---

_This is a work in progress. Today it's just notes for our stream._

## Learn Vim with me on YouTube

Check out this playlist where we go thru every key on the keyboard and says what it does in Vim.

<div data-responsive-youtube-container>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=3yQTq3S2jM7MAtaO&amp;list=PLnc_NxpmOxaNqdGvUg8RBi8ZTaZGPdqBD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

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

## Qualifications

- I'm not a Vim expert. I've just picked up a few helpful tricks over the years.

## Personal preference

- Now, a lot of people like to customize their vim config, I'm not that guy
- The value for me is that un-customized Vim is a transferrable skill between editors
- MOST of my text manipulation is done with Vim — and the things i don't do I know how to do.

## Sneek peak

`App.js`

If you walk away with ONE THING. let it be ci and ca

- <kbd>ci"</kbd> - change inside double-quotes
- <kbd>ca"</kbd> - change around double-quotes
  - <kbd>p</kbd> - place cut below
  - <kbd>P</kbd> - place cut above
- <kbd>cit</kbd> - change inside tag
- <kbd>cat</kbd> - change aronud tag

## VISUAL

`README.md`

- like shift (use arrow keys)
- can't start in middle of word. have to start at the beginning
- visual select with surround <kbd>S</kbd>

- <kbd>u</kbd> (cover this because i use it a lot)
- upgrade <kbd>d,</kbd> <kbd>c,</kbd> <kbd>s</kbd>
- <kbd>viw</kbd>
- <kbd>vaw</kbd>
  - <kbd>w</kbd>
  - <kbd>e</kbd>
- <kbd>vi"</kbd>
- <kbd>va"</kbd> (from " to {} in React)
- <kbd>cs"`</kbd> (vim surround)

  - <kbd>(ys)?</kbd>
  - ?? <kbd>cs"{`</kbd>
    - <kbd>cs"{</kbd> then <kbd>ysi{`</kbd>
  - (t) (f)??

- SKIP VISUAL MODE

  - fewer keypresses
  - removes step from what you would do with a mouse
  - <kbd>ci"</kbd>
  - <kbd>ct.</kbd>
  - <kbd>cT"</kbd>
  - <kbd>cit</kbd> / <kbd>cat</kbd>
  - (you can do the same with <kbd>d</kbd>)
  - <kbd>dd</kbd>
  - <kbd>C</kbd>
  - <kbd>S</kbd>
  - (every delete is a cut, which is nice)

- Navigation
  - <kbd>o</kbd> <kbd>O</kbd>
  - <kbd>^</kbd> <kbd>0</kbd> <kbd>$</kbd>
  - (% not working)
  - <kbd>{</kbd> / <kbd>}</kbd> ( for stepping thru big blocks of code)
  - <kbd>(</kbd> / <kbd>)</kbd> (includes first line)
  - <kbd>G</kbd>
  - <kbd>gg</kbd>
  - <kbd>#g</kbd>
  - <kbd>gf</kbd>
  - <kbd>ZZ</kbd>
- Quitting

  - <kbd>ZQ</kbd>
  - <kbd>ZZ</kbd>
  - <kbd>z</kbd> and <kbd>g</kbd> are overloaded
  - <kbd>^d</kbd> / <kbd>^u</kbd> (half pages)
  - <kbd>^f</kbd> / <kbd>^b</kbd> (whole pages)
  - <kbd>zz</kbd> / <kbd>zt</kbd> / <kbd>zb</kbd>
  - <kbd>H</kbd> / <kbd>M</kbd> / <kbd>L</kbd>
  - - (next line with at first character)
  - - (prev line with at first character)
  - preferring cmd-shift [] to vims way

- MISC (most useful in markdown if not using prettier)

  - <kbd><<</kbd>
  - <kbd>>></kbd>
  - <kbd>^I</kbd> / <kbd>^O</kbd>

- OTHER MODES

  - <kbd>^V</kbd> (visual block)
  - <kbd>R</kbd> (ascii, certain css values like colors)
  - <kbd>^R</kbd> (redo)
  - <kbd>I</kbd>
  - <kbd>O</kbd>
  - <kbd>A</kbd>

- Search

  - <kbd>/</kbd>
    - <kbd>n</kbd>
    - <kbd>N</kbd>
  - <kbd>?</kbd>

- <kbd>:s/some-term/replacement-term/g</kbd>
- <kbd>:%s/some-term/replacement-term/g</kbd>
- <kbd>(using range)</kbd>
- great stuff here: https://vim.fandom.com/wiki/Search_and_replace

Things I prefer VS Code for

- TAGS plugin vs (<kbd>cst<</kbd>)
