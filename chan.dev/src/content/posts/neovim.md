---
title: neovim
date: 2023-09-27
dateUpdated: 2023-12-30
references:
  - https://github.com/nvim-lua/kickstart.nvim
---

I've avoided a heavily customized experience for most of my life. This is doubly true with Vim.

For me, Vim is a passport.
I can take text-editing powers to any tool with decent Vim emulation. And I do. I love using today's cloud coding environments and Vim-capable second-brain tools (like Obsidian).

But, with VSCode, I can utilize neovim via the [neovim-vscode extension][].

[neovim-vscode extension]: https://github.com/vscode-neovim/vscode-neovim

I've tried this extension before. But I didn't want to dive into configuration before I had a way to share it between machines. [And now I do](/dotfiles).

Here are some things I've learned so far.

## Install neovim

```sh
brew install neovim
```

## Lua

neovim supports both [lua][] and VimScript.
VimScript is a trash fire burning a fresh hole in the atmosphere.
So, I'm opting for Lua — another language I don't know.

[lua]: https://www.lua.org/

## `~/.config/nvim/init.lua`

`[init.lua][]` is a file that executes before neovim starts, when placed in the `~/.config/nvim/` path.

[init.lua](https://neovim.io/doc/user/lua-guide.html#lua-guide-config)

## neovim-vscode integration

There's a condition that can be used to load extensions only in VS Code (or neovim).

```lua title="~/.config/nvim/init.lua"
if vim.g.vscode then
    -- VSCode extension
else
    -- ordinary Neovim
end
```

## lazy.nvim

neovim includes a package management system based on the filesystem.
Download packages into privileged folders and they will autoload.  
For that reason, you don't need a dedicated package manager.

However, I'm operating across several systems. And I'd like my dotfiles not to balloon with plugin source code. So, I'm using [lazy.nvim][].

To set it up, add all this to `init.lua` and run `nvim` in the terminal.

```lua title="~/.config/nvim/init.lua"
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
    vim.fn.system({
        "git",
        "clone",
        "--filter=blob:none",
        "https://github.com/folke/lazy.nvim.git",
        "--branch=stable", -- latest stable release
        lazypath,
    })
end
vim.opt.rtp:prepend(lazypath)
```

This conditionally clones lazy if it doesn't exist and adds it to the runtime path.

You can utilize it with a `setup` call.

```lua title="~/.config/nvim/init.lua"
-- Make sure to set `mapleader` before lazy so your mappings are correct
vim.g.mapleader = " "

require("lazy").setup({
    -- packages table
})
```

[lazy.nvim]: https://github.com/folke/lazy.nvim

## plugin: nvim-surround

[nvim-surround][] is my one non-negotiable plugin.  
Here's how it's set up in neovim.

[nvim-surround]: https://github.com/vscode-neovim/vscode-neovim

Add `kylechui/nvim-surround` to the lazy `setup()` package table.

```lua title="~/.config/nvim/init.lua"
{
    "kylechui/nvim-surround",
    version = "*", -- Use for stability; omit to use `main` branch for the latest features
    event = "VeryLazy",
    config = function()
        require("nvim-surround").setup({
            -- Configuration here, or leave empty to use defaults
        })
    end
}
```

This setup is a skeleton that leaves you with some config options.
