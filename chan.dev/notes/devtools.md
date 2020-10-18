---
layout: layouts/note.njk
permalink: /devtools/
---

# DevTools (WIP)

Have you been punched in the face for asking a question?

I have  
I asked "can I customize my DevTools?" and Chrome's documentation reached out from one my Mac's free USB A hubs to clock me in the jaw

Google, you're smart — WE GET IT  
Maybe I'll be smart some day and care more about accuracy than being helpful  
But TODAY, I don't know shit and I just want someone to show me _exactly_ how to do a thing.

If you want the same,  
Here are the bloodied notes I took while getting pummeled by the Extending DevTools documentation

## Starting

Create an empty `manifest.json` wherever you'd like to build your extension

Navigate to `chrome://extensions/` in Chrome

Enable `Developer mode`

Click the (now visible) `Load unpacked` button

Select the folder containing your `manifest.json` in the file picker

This will fail  
You'll get four errors  
Fix them in order

`Manifest is not valid JSON. Line: 1, column: 1, Unexpected token.`

- Add curly braces to `manifest.json` and make it valid
- Hit `Retry` in Chrome

`The 'manifest_version' key must be present and set to 2 (without quotes). See developer.chrome.com/extensions/manifestVersion.html for details.`

- Do precisely what it says (`"manifest_version": 2`)
- Hit `Retry` in Chrome

`Required value 'name' is missing or invalid.`

- Add a `name` field calling it whatever you want (`"name": "Clever Extension Name"`)
- You can rename it whenever
- Hit `Retry` in Chrome

`Required value 'version' is missing or invalid. It must be between 1-4 dot-separated integers each between 0 and 65536.`

- Add `version` according to the spec. I start with `"version": "0.0.1"`
- Hit `Retry` in Chrome

Success!  
You should now see your extension loaded

What does your `manifest.json` look like?  
Mine looks like this:

```
{
  "name": "Clever Extension Name",
  "manifest_version": 2,
  "version": "0.0.1"
}
```

### Why did you make me see all the errors?

Because you're gonna have to get used depending on this page for errors  
It's the only place you're likely to see them as you develop

---

## Create a DevTools page

Every DevTools extension needs a "DevTools page"

Defining one takes three steps

### Add a `devtools_page` definition

Add a `devtools_page` field to your `manifest.json`, pointing to an html file (`"devtools_page": "devtools.html"`)

### Create that `devtools.html` file

Create `devtools.html` in your project root with a standard html5 definition

Add a script tag that sources `devtools.js`

### Create that `devtools.js` file

Create `devtools.html` to your project root

In that file, throw an error — any error will do

### Catch the error

Open DevTools

If you did everything right,  
You'll see an `Errors` button appear in the Chrome extension manager.

Congrats!  
You've defined a DevTools page

### Rant

Seriously?  
Visibility into my DevTools extension is SO bad that I have to throw an error to ensure that it's working??

Why — and I can't stress this enough — the fuck do I need to create an html file to load a javascript file?  
This field should 100% allow a JS file — background pages do.

Oh shit, and background pages...  
Fuck background pages

To the uninitiated, it can sound a helluvah lot like "devtools page" and "background page" are the same thing  
They ARE NOT and it's confusing as hell

I WILL NOT talk about the "background page" in this tutorial just to avoid confusion

### On naming your DevTools page

I started with `main.html` and `main.js`  
But changed them to `devtools.html` and `devtools.js`  
So much of the documentation I encountered referred to these files as such

### Examples

What do your files look like?
Here are mine:

_manifest.json_

```diff
{
  "name": "Clever Extension Name",
  "manifest_version": 2,
  "version": "0.0.1",
+  "devtools_page": "devtools.html"
}
```

_devtools.html_

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script src="devtools.js"></script>
  </body>
</html>
```

_devtools.js_

```js
throw "Hey! Looks like things are hooked up right.";
```

---

## Create an Elements sidebar pane

Neither of us has our big person trunks yet  
So, we ain't diving into the deep end of making our own DevTools panel

We'll start with an Elements sidebar pane

### Verbiage

**DevTools panel**:  
A top-level tab like `Inspector`, `Console`, `Network`, etc.

**Elements sidebar pane**:  
A tab nested inside the Elements panel like `Style`, `Event Listeners`, `Properties`, etc.

### Add a sidebar to the Elements panel

Update `devtools.js` to create a new Elements sidebar:

```js
chrome.devtools.panels.elements.createSidebarPane("My pane");
```

This creates a sidebar pane with the title you provide  
(You can create more than one)

### Reload DevTools

Close and Open DevTools (`CMD + OPT + i` in macOS)  
They don't automatically reload on filesystem changes

Checkout your new `My Pane` tab in the far right of the Elements panel

You made an empty Elements sidebar pane!

---

## Add a view to your Elements sidebar pane

First, a rant...

### Rant

Chrome and Firefox have completely different interfaces for their async APIs

Search for `devtools.panels.elements.createSidebarPane` and you could find docs using Chrome's callbacks or "standardized" promises

It SUUUUUUUUUUUUUUUCKS

Real world extension I've found use [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) to let you use Promises _most_ places

But — LOL again — this is all a big joke  
Because Chrome dominates the market, they answer to nobody  
So other browsers — that implement the promise-based APIs — not only implement callback versions for chrome compatibility THEY IMPLEMENT THE `chrome` global as well!!!

It's hystarically bad

Anyway, you just need to know how fucked it is so you don't get frustrated

I'll stick with the `chrome` callback style APIs because that's what I learned  
Use [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) if you _must_ have promises, prefer reading the MDN docs, or feel righteous indignation over Chrome being a bully

### Set pane content with an object

Provide a callback function to `createSidebarPane`

Send the message `setObject` with a random object

```js
chrome.devtools.panels.elements.createSidebarPane("My pane", (pane) => {
  pane.setObject({ hey: "there!" });
});
```

Restart DevTools  
Open your pane  
See the object you added

### Set pane content with an expression

You can set pane content with an expression  
This isn't where we're headed in this doc  
However, [this post](https://planningcenter.style/?path=/docs/elements-avatar--basic) is the best I found on the topic

### Set pane content with html page

This is where we're gonna live for a bit

```diff
chrome.devtools.panels.elements.createSidebarPane("My pane", (pane) => {
-  pane.setObject({ hey: "there!" })
+  pane.setPage("my-sidebar-pane.html")
})
```

Now make that html file  
Mine looks like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script id="root">
      Hey mom 👋
    </script>
  </body>
</html>
```

(You sly devil. I see you seeing me getting ready to put React in this thing)

Restart DevTools  
Open your pane  
See the new page

Nice work, nerd!

---

Coming later...

Follow my ass on twitter: https://twitter.com/chantastic

## (chrome.storage)

## (inspectedWindow.eval)

## (content scripts)

## (why the fuck doesn't console log work?)

## (add styles)

## (add light/dark-mode theming)

## (add React)

## (update the badge)

## (use tabs to scope updates)

## (update the DOM)
