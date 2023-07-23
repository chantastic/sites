---
title: Fix VS Code Explorer for Content Projects
publishDate: 2023-07-20
tags: [vscode]
---

The [VS Code explorer][] displays folders at the top of a directory.
This is a common heirarchy that I like it _most_ cases.

**But I hate it for content.**

For content sites — like [chan.dev][] — I prefer alphabetical order.
I want to see my files and folders all _mixed_ up together.

![Screenshot of the Visual Studio Code Explorer, showing several markdown posts. With `explorer.sortOrder: mixed`, a directory of the same name as a post appears next to a post with the same name.](./vs-code-explorer-sort-order/vs-code-explorer-sort-order_mixed-example.png)

## How to change the setting

To change the default behavior, open Settings and find the option for `Explorer: Sort Order`

![Screenshot of VS Code Settings, for the option Explorer: Sort Order. Selected is the `mixed` option.](./vs-code-explorer-sort-order/vs-code-settings_explorer-sort-order-mixed.png)

With this option enabled, files and folders are interwoven in the explorer.

## Why I prefer mixed sort order

On [chan.dev][], I have lots of markdown files.
Some of them have images.
And I want to keep those images in a folder nearby.
I ain't tryna faff with Cloudinary, or hunt down shared `/assets/images` folder.
_I want them right next to my post._

This makes it easy to keep my place on the file system.

## Take it further with workspaces

As mentioned, I prefer the default sort order for most projects.
So, I keep this setting stored in my [chan.dev][] [workspace][].
And only _this_ project is impacted by the setting.

```json
// chan.dev/.vscode/settings.json
{
  "explorer.sortOrder": "mixed"
}
```

[chan.dev]: https://chan.dev/ "The irrational home web home of chantastic"
[workspace]: https://code.visualstudio.com/docs/editor/workspaces 'What is a VS Code "workspace"?'
[VS Code explorer]: https://code.visualstudio.com/docs/getstarted/userinterface#_explorer
