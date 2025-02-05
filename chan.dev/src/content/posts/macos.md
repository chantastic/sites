---
title: macOS
date: 2023-09-27
---

This doc is a collection of random macOS stuff.

## Shortcuts

[Mac native shortcuts](https://support.apple.com/en-us/HT201236#:~:text=Option%2DCommand%2DL%3A%20Open%20the%20Downloads%20folder.)
[Readline shortcuts](https://en.wikipedia.org/wiki/GNU_Readline)

## Force OS install

I have a weird setup on my personal mac. I use an external drive as the boot drive. The drive was set up without permissions and now I don't know how to add them. This breaks macOS updates.

Hoever, I've learned how to force them:

```zsh
sudo softwareupdate -i -a -R
# -i Install
# -a All appropriate updates
# -R Automatically restart (or shut down) if required to complete installation)
```

For future reference, I think that resolving the drive permissions will make this irrelevant.

Community reference: https://discussions.apple.com/thread/253635826?answerId=256807178022#256807178022

## Finder

| Shortcut | Action |
|----------|---------|
| <kbd>⌘</kbd><kbd>D</kbd> | Duplicate the selected files |
| <kbd>⌘</kbd><kbd>E</kbd> | Eject the selected disk or volume |
| <kbd>⌘</kbd><kbd>F</kbd> | Start a Spotlight search in the Finder window |
| <kbd>⌘</kbd><kbd>I</kbd> | Show the Get Info window for a selected file |
| <kbd>⌘</kbd><kbd>R</kbd> | (1) Show original file for selected alias (2) Refresh/reload page in some apps (3) Check for software updates again |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd> | Open the Computer window |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>D</kbd> | Open the desktop folder |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>F</kbd> | Open the Recents window |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>G</kbd> | Open a Go to Folder window |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>H</kbd> | Open the Home folder |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>I</kbd> | Open iCloud Drive |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> | Open the Network window |
| <kbd>⌥</kbd><kbd>⌘</kbd><kbd>L</kbd> | Open the Downloads folder |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>N</kbd> | Create a new folder |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>O</kbd> | Open the Documents folder |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd> | Show or hide the Preview pane |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>R</kbd> | Open the AirDrop window |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>T</kbd> | Show or hide the tab bar |
| <kbd>⌃</kbd><kbd>⇧</kbd><kbd>⌘</kbd><kbd>T</kbd> | Add selected Finder item to the Dock |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>U</kbd> | Open the Utilities folder |
| <kbd>⌥</kbd><kbd>⌘</kbd><kbd>D</kbd> | Show or hide the Dock |
| <kbd>⌃</kbd><kbd>⌘</kbd><kbd>T</kbd> | Add selected item to the sidebar |
| <kbd>⌥</kbd><kbd>⌘</kbd><kbd>P</kbd> | Hide or show the path bar |
| <kbd>⌥</kbd><kbd>⌘</kbd><kbd>S</kbd> | Hide or show the Sidebar |
| <kbd>⌘</kbd><kbd>/</kbd> | Hide or show the status bar |
| <kbd>⌘</kbd><kbd>J</kbd> | Show View Options |
| <kbd>⌘</kbd><kbd>K</kbd> | Open the Connect to Server window |
| <kbd>⌃</kbd><kbd>⌘</kbd><kbd>A</kbd> | Make an alias of the selected item |
| <kbd>⌘</kbd><kbd>N</kbd> | Open a new Finder window |
| <kbd>⌥</kbd><kbd>⌘</kbd><kbd>N</kbd> | Create a new Smart Folder |
| <kbd>⌘</kbd><kbd>T</kbd> | Show or hide the tab bar (single tab) |
| <kbd>⌥</kbd><kbd>⌘</kbd><kbd>T</kbd> | Show or hide the toolbar (single tab) |
| <kbd>⌥</kbd><kbd>⌘</kbd><kbd>V</kbd> | Move files from Clipboard to current location |
| <kbd>⌘</kbd><kbd>Y</kbd> | Use Quick Look to preview files |
| <kbd>⌥</kbd><kbd>⌘</kbd><kbd>Y</kbd> | View Quick Look slideshow |
| <kbd>⌘</kbd><kbd>1</kbd> | View as icons |
| <kbd>⌘</kbd><kbd>2</kbd> | View as list |
| <kbd>⌘</kbd><kbd>3</kbd> | View in columns |
| <kbd>⌘</kbd><kbd>4</kbd> | View in gallery |
| <kbd>⌘</kbd><kbd>[</kbd> | Go to previous folder |
| <kbd>⌘</kbd><kbd>]</kbd> | Go to next folder |
| <kbd>⌘</kbd><kbd>↑</kbd> | Open containing folder |
| <kbd>⌘</kbd><kbd>⌃</kbd><kbd>↑</kbd> | Open containing folder in new window |
| <kbd>⌘</kbd><kbd>↓</kbd> | Open selected item |
| <kbd>→</kbd> | Open selected folder (list view only) |
| <kbd>←</kbd> | Close selected folder (list view only) |
| <kbd>⌘</kbd><kbd>Delete</kbd> | Move to Trash |
| <kbd>⇧</kbd><kbd>⌘</kbd><kbd>Delete</kbd> | Empty Trash |
| <kbd>⌥</kbd><kbd>⇧</kbd><kbd>⌘</kbd><kbd>Delete</kbd> | Empty Trash without confirmation |
| <kbd>⌘</kbd>+Brightness Down | Toggle video mirroring |
| <kbd>⌥</kbd>+Brightness Up | Open Displays preferences |
| <kbd>⌃</kbd>+Brightness Up/Down | Change external display brightness |
| <kbd>⌥</kbd><kbd>⇧</kbd>+Brightness Up/Down | Adjust brightness in smaller steps |
| <kbd>⌥</kbd>+Mission Control | Open Mission Control preferences |
| <kbd>⌘</kbd>+Mission Control | Show desktop |
| <kbd>⌃</kbd><kbd>↓</kbd> | Show all windows of front app |
| <kbd>⌥</kbd>+Volume Up | Open Sound preferences |
| <kbd>⌥</kbd><kbd>⇧</kbd>+Volume Up/Down | Adjust volume in smaller steps |
| <kbd>⌥</kbd>+Keyboard Brightness Up | Open Keyboard preferences |
| <kbd>⌥</kbd><kbd>⇧</kbd>+Keyboard Brightness Up/Down | Adjust keyboard brightness in smaller steps |
| <kbd>⌥</kbd>+double-click | Open in separate window, close original |
| <kbd>⌘</kbd>+double-click | Open folder in separate tab/window |
| <kbd>⌘</kbd>+drag to volume | Move instead of copy |
| <kbd>⌥</kbd>+drag | Copy item |
| <kbd>⌥</kbd><kbd>⌘</kbd>+drag | Make alias of item |
| <kbd>⌥</kbd>+click disclosure triangle | Open all folders (list view only) |
| <kbd>⌘</kbd>+click window title | See containing folders |
