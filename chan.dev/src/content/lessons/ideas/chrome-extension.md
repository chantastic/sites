---
title: Chrome Extension
date: 2023-07-30
---

- [Developer Extensions](https://developer.chrome.com/extensions/devguide)
  - [Getting Started Tutorial](https://developer.chrome.com/extensions/getstarted)
  - [Content Scripts](https://developer.chrome.com/extensions/content_scripts)
  - [chrome.runtime](https://developer.chrome.com/extensions/runtime#method-sendMessage)
  - [chrome.storage](https://developer.chrome.com/extensions/storage)
  - [permissions](https://developer.chrome.com/extensions/permissions)
  * [Debugging Extensions](https://developer.chrome.com/extensions/tut_debugging)
- [Extending DevTools](https://developer.chrome.com/extensions/devtools)
  - [overview](https://developer.chrome.com/extensions/overview)
- [tabs.executeScript](https://developer.chrome.com/extensions/tabs#method-executeScript)
- [chrome.devtools.inspectedWindow](https://developer.chrome.com/extensions/devtools_inspectedWindow)
- [chrome.devtools.panels](https://developer.chrome.com/extensions/devtools_panels#method-ExtensionSidebarPane-setPage)

Other helpful resources:

- [How to Write a Chrome DevTools Extension](https://www.dgendill.com/posts/programming/2016-12-06-chrome-devtools-extension-tutorial.html) by Dominick Gendill
- [Sample Extensions](https://developer.chrome.com/extensions/samples#search:devtools)
- [mdn/webextensions-examples](https://github.com/mdn/webextensions-examples)

Firefox Add-ons debugging

- [Your first extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [Web-extensions polyifill](https://github.com/mozilla/webextension-polyfill)
- [FF Doesn’t support contentScriptsContext in inspectedWindow/eval](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval)

- [Passing selected element to content scripts](https://developer.chrome.com/extensions/devtools#selected-element)

- [Message Passing](https://developer.chrome.com/extensions/messaging)

Notes:

Because there’s poor visibility into content scripts, and the suck to reload,
Make sure the connections are all wired up first.
