---
title: z in Vim
publishDate: 2023-08-22
tags: [vim]
references:
  - https://vimhelp.org/
  - https://vimhelp.org/index.txt.html#z
  - https://vimhelp.org/index.txt.html#normal-index
---

`z` is one of Vim's two junk drawers.
(The other is `g`).

This is a highlight of `z` command with callouts to actions available in VS Code, via [VSCodeVim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim).

## Contents

## Folding

```vim {1, 5-6, 13, 21, 26-27, 30}
za           za               open a closed fold, close an open fold
zA           zA               open a closed fold or close an open
                              fold recursively

zc           zc               close a fold
zC           zC               close folds recursively

zd           zd               delete a fold
zD           zD               delete folds recursively

zE           zE               eliminate all folds

zf           zf{motion}       create a fold for Nmove text
zF           zF               create a fold for N lines

zi           zi               toggle 'foldenable'
zj           zj 1             move to the start of the next fold
zk           zk 1             move to the end of the previous fold

zm           zm               subtract one from 'foldlevel'
zM           zM               set 'foldlevel' to zero

zn           zn               reset 'foldenable'
zN           zN               set 'foldenable'

zo           zo               open fold
zO           zO               open folds recursively

zr           zr               add one to 'foldlevel'
zR           zR               set 'foldlevel' to the deepest fold

zv           zv               open enough folds to view the
                              cursor line

zx           zx               re-apply 'foldlevel' and do "zv"
zX           zX               re-apply 'foldlevel'
```

## Redrawing

```vim {3-5, 7-10, 12-15}
zN<CR>       z{height}<CR>    redraw, make window {height} lines high

z<CR>        z<CR>            redraw, cursor line to top of
                              window, cursor on first non-blank
zt           zt               redraw, cursor line at top of window

z-           z-               redraw, cursor line at bottom of
                              window, cursor on first non-blank
zb           zb               redraw, cursor line at bottom of
                              window

z.           z.               redraw, cursor line to center of
                              window, cursor on first non-blank
zz           zz               redraw, cursor line at center of
                              window
```

## Saving and Quitting

```vim {1-3}
ZZ           ZZ               write if buffer changed and close
                              window
ZQ           ZQ               close window without writing
```

## `:help z` reference

```vim
==================================================================
2.5 Commands starting with 'z'                                   z

tag          char             note action in Normal mode
------------------------------------------------------------------
z<CR>        z<CR>            redraw, cursor line to top of
                              window, cursor on first non-blank
zN<CR>       z{height}<CR>    redraw, make window {height} lines
                              high
z+           z+               cursor on line N (default line
                              below window), otherwise like "z<CR>"
z-           z-               redraw, cursor line at bottom of
                              window, cursor on first non-blank
z.           z.               redraw, cursor line to center of
                              window, cursor on first non-blank
z=           z=               give spelling suggestions
zA           zA               open a closed fold or close an open
                              fold recursively
zC           zC               close folds recursively
zD           zD               delete folds recursively
zE           zE               eliminate all folds
zF           zF               create a fold for N lines
zG           zG               temporarily mark word as correctly
                              spelled
zH           zH               when 'wrap' off scroll half a
                              screenwidth to the right
zL           zL               when 'wrap' off scroll half a
                              screenwidth to the left
zM           zM               set 'foldlevel' to zero
zN           zN               set 'foldenable'
zO           zO               open folds recursively
zR           zR               set 'foldlevel' to the deepest fold
zW           zW               temporarily mark word as
                              incorrectly spelled
zX           zX               re-apply 'foldlevel'
z^           z^               cursor on line N (default line
                              above window), otherwise like "z-"
za           za               open a closed fold, close an open
                              fold
zb           zb               redraw, cursor line at bottom of
                              window
zc           zc               close a fold
zd           zd               delete a fold
ze           ze               when 'wrap' off scroll horizontally
                              to position the cursor at the end
                              (right side) of the screen
zf           zf{motion}       create a fold for Nmove text
zg           zg               permanently mark word as correctly
                              spelled
zh           zh               when 'wrap' off scroll screen N
                              characters to the right
zi           zi               toggle 'foldenable'
zj           zj 1             move to the start of the next fold
zk           zk 1             move to the end of the previous fold
zl           zl               when 'wrap' off scroll screen N
                              characters to the left
zm           zm               subtract one from 'foldlevel'
zn           zn               reset 'foldenable'
zo           zo               open fold
zp           zp               paste in block-mode without
                              trailing spaces
zP           zP               paste in block-mode without
                              trailing spaces
zr           zr               add one to 'foldlevel'
zs           zs               when 'wrap' off scroll horizontally
                              to position the cursor at the start
                              (left side) of the screen
zt           zt               redraw, cursor line at top of window
zuw          zuw              undo zw
zug          zug              undo zg
zuW          zuW              undo zW
zuG          zuG              undo zG
zv           zv               open enough folds to view the
                              cursor line
zw           zw               permanently mark word as
                              incorrectly spelled
zx           zx               re-apply 'foldlevel' and do "zv"
zy           zy               yank without trailing spaces
zz           zz               redraw, cursor line at center of window
z<Left>      z<Left>          same as "zh"
z<Right>     z<Right>         same as "zl"
```

```vim
==================================================================
2. Normal    mode                                     normal-index

ZZ           ZZ           write if buffer changed and close window
ZQ           ZQ           close window without writing
```

## Other

In proper vim, `z` also includes commands for spelling and word wrapping.
These are ignored in this reference because they are not supported by VSCodeVim.
