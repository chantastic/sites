---
---

```
## Get ready to super-charge your editing

You're about to change the way you edit code — forever.

I remember being where you are now.
I knew Vim to could super-charge my editing productivity.
But it was hard to find guides and lessons that stuck.

Everyone wanted to teach me "the basics" — "from" which I could build the rest of my understanding.

That's good.
But it's crapy way to learn.

So this guide is different.
I'm going to throw you into the deep end.
We're going to cover the commands I find most useful, after 15 years with Vim motions.

## Assignment

Today's assignment is simple.
Find the best way to enable "Vim mode" ("Vim keybindings" or "Vim extension") in your editor.

Here are a few common options to get you started:
- VSCode ([beginner](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)) and ([advanced](https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim))
- [Zed](https://zed.dev/features#vim)
- [Emacs](https://github.com/emacs-evil/evil)
- [Sumblime Text](https://www.sublimetext.com/docs/vintage.html#enabling-vintage)
- [JetBrains IntelliJ](https://www.jetbrains.com/help/idea/using-product-as-the-vim-editor.html)
- [neovim](https://neovim.io/)

Tomorrow, we'll get started.

Good luck!
```

```
## Escape "normal": Introduction to modal editing

Every editor you've ever used had a single mode.
In this mode, you have a tall line cursor — it probably blinks.
And any keys you press insert characters, moving this cursor forward.

In these editors, keyboard shortus (or "key-bindings") are made possible by use if modifier keys (e.g., <kbd>⌘</kbd> + <kbd>s</kbd>, <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>p</kbd>, etc.).
These combinations of modifier keys allow you to *escape* the default *insert mode*.

Vim take a different approach.
Instead of a single *insert mode*, with modifiers to escape, vim has two major modes: _Insert_ and _Normal_.
```

## Escaping insert mode

Using your editor's Vim mode (or extension), you can escape insert mode by tying <kbd>esc</kbd>.
