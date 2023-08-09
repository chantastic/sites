---
title: Create Workspace Snippets in VS Code
references:
  - https://code.visualstudio.com/docs/editor/userdefinedsnippets
  - https://code.visualstudio.com/docs/editor/userdefinedsnippets#_project-snippet-scope
  - https://code.visualstudio.com/api/references/extension-manifest
---

## Contents

## Using variables

https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables

## Surround in snippet

VS Code provides variables for snippets.
`TM_SELECTED_TEXT` places your selected text in the snippet.

To utilize this variable, you can't rely on autocomplete (because typing would delete your selection).

Open the [Command Palette][https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette].
Select `Snippets: Surround with Snippet…`. And select the snippet you'd like to use.

Alternatively, establish a keyboard shortcut for `editor.action.showSnippets` _when_ `editorTextFocus`.

```json
{
  "key": "ctrl+alt+s",
  "command": "editor.action.showSnippets",
  "when": "editorTextFocus"
}
```

https://stackoverflow.com/questions/41191054/using-tm-selected-text-in-my-custom-snippets#48676522

## Other notes

- I think that if you want to have language specific project files, you have to build them up as extensions.
