---
title: VS Code Settings for Screencasting
date: 2023-09-19
description: "VS Code settings I use for screencasting: disable lightbulb, hide status bar, bump font sizes, and adjust zoom level."
tags: [vscode, video]
references:
  - https://code.visualstudio.com/docs/editor/profiles
---

These are settings I commonly set for screencasting.
The values change by project but the options are consistent.

```json
{
	"editor.lightbulb.enabled": false,
	"workbench.statusBar.visible": false,
	"explorer.excludeGitIgnore": false,
	"editor.lineNumbers": "off",
	"terminal.integrated.fontSize": 15,
	"editor.fontSize": 16,
	"window.zoomLevel": 1
}
```

## Take it further

I haven't had much luck with [VS Code profiles](https://code.visualstudio.com/docs/editor/profiles). But this would be the ideal place to implement this type of custom setting.
