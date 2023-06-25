---
title: ""
date: 2022-06-29
---

> [!attention]
>
> - Change the `element` from `div#root` to `p#greeting`

- To create a div DOM node with the text "Hello World" and insert that DOM node into the document.
- (In our HTML document,) add a `<body>` tag with a `<div>` inside of it.
- Add the `id` `"root"`.
- We can test at this stage by adding some text.
- (Below this `<div>`,) add a `<script>` tag that is `type="module"`.
  - (Note that everything in this tag is JavaScript)
- (In our `<script>`,)
  - Create a div element.
  - Assign it's reference to the variable `element`
  - (Use that reference to) set `textContent`.
  - (To make sure we got this far, we can `alert(element.textContent)`)
  - Perfect.
  - Now set the `element`'s `className` to `container`
- (With our new `"Hellow World"` Let's append our new `"Hello World"` element to our `"root"` div and append our `Hello World` element to it.
  - Query the dom for the `div#root`
  - Store a reference to that element in the varible `element`.
  - Use that reference to append the "Hello World" div `element`

```html
<body>
  <div id="root"></div>
  <script type="module">
    const element = document.createElement("div");
    element.textContent = "Hello World";
    element.className = "container";

    const rootElement = document.getElementById("root");
    rootElement.append(element);
  </script>
</body>
```

- Let's step back and look at what we've done.
- We have an HTML Document which we added 3 tags to: `body`, `div`, and `script`.
- We have our `div` an id `root` so we could easily access it via JavaScript — later.
- In our script we used DOM APIs to:
  - Create an element
  - We assigned text and a className to it
  - And append it to our `div#root` element
- You can learn a lot more about the browser's DOM APIs at MDN, a great resource for all web and JavaScript knowledge

## Extra Credit

- To create the root element in the script section,
- Delete the `<div id="root">` HTML tag
- (Because `div#root` no longer exists,) Change the `rootElement` from `getElementById("root")` to `document.createElement("div")`
- Use the `setAttribute` method to set `id` to `root`.
- The append stays the same.
- Be sure to remember that `createElement`, `getElementById`, `setAttribute`, and `append` are all part of the browser's DOM API. The best place to learn more about browser DOM APIs on MDN.

```diff
<body>
  <script type="module">
    const element = document.createElement("div");
    element.textContent = "Hello World";
    element.className = "container";

-   const rootElement = document.getElementById("root");
+   const rootElement = document.createElement('div')
+   rootElement.setAttribute('id', 'root')

    rootElement.append(element);
  </script>
</body>
```
