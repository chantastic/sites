---
title: React Basics
publishDate: 2023-08-09
# TODOS:
# - [ ] Add hints to each step
# - [ ] A video on props
# - [ ] Build a few simple components (come up with examples)
# - [ ] Components can also be passed in as props.
---

This totorial is a complete guide core react constructs.
It demonstratens simple implementations of `ReactDom`, `React Element`, `React Component`, `props`, in a familiar, real-world component.

## Contents

## Online sandboxes

- [CodeSandbox](https://codesandbox.io/s/react-basics-fyf6mh?file=/src/index.mjs) <small>Used by me (Vim support)</small>
- [StackBlitz](https://stackblitz.com/edit/js-3c8xnq?file=index.js)

## Put React anywhere!

React is "just JavaScript".
Add it to any page on the internet.

Start with a simple HTML page like this:

```html
<!-- my-page.html -->
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>React playground</title>
	</head>
	<body></body>
</html>
```

## Connect a `script` with a single DOM node

React needs a bridge between JavaScript and the DOM.
Create a DOM node and query for it in a JavaScript script.

```diff lang="html" {10, 12, 14}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React playground</title>
  </head>
  <body>
    <!-- 1. Add an element with id -->
+    <div id="root"></div>
    <!-- 2. Add a script tag -->
+    <script>
      // 3. Capture a reference to element we'd like to control with JavaScript
+      let domNode = document.getElementById("root");
+    </script>
  </body>
</html>
```

_Reference: [HTML-only template from React Docs](https://react.dev/learn/installation#try-react-locally), react.dev. Updated for ES Modules._

## Use modern ES Modules

The browser has progressed a lot in a decade.
Specifying `type="module"` on script tags to use modern JavaScript imports.

```diff lang="html" ins=/ type="module"/ {3}
<body>
  <div id="root"></div>
  <!-- Specify type module -->
  <script type="module">
    let domNode = document.getElementById("root");
    console.log(domNode);
  </script>
</body>
```

_Reference: [Applying the module to your HTML](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#applying_the_module_to_your_html), MDN._

## Import the `react-dom` module

Services like [esm.sh][] allow us to import JavaScript modules from a CDN — no bundling 🥳.
Import the `react-dom` module from the esm.sh.

```diff lang="js" {1}
// Import `react-dom@18` from esm.sh
+import ReactDOM from "https://esm.sh/react-dom@18.2.0";
let domNode = document.getElementById('root');
```

_Reference: [import API reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), MDN._

## Prepare the root DOM node with `ReactDOM`

React needs to set up event handlers the root DOM node.
Prepare the root DOM node with `ReactDOM.createRoot()`.

```diff lang="js" {3}
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
let domNode = document.getElementById('root');
// Register root element with ReactDOM
+ReactDOM.createRoot(domNode);
```

_Reference: [React.createRoot API reference](https://react.dev/reference/react-dom/client/createRoot), react.dev._

## Render plain text to React root

At this point we can render plain text to the React root.
Render "Hello ReactDOM" to the React root.

```diff lang="js" ins=/.render("Hello ReactDOM")/
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
let domNode = document.getElementById('root');
// Render plain text to React root
+ReactDOM.createRoot(domNode).render("Hello ReactDOM");
```

_Reference: [render API reference](https://react.dev/reference/react-dom/client/createRoot#root-render), react.dev._

## Import `react` and create a React element

Next we need React to create React elements and components.
Import `react` and create a React element with `React.createElement()`.

```diff lang="js"
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
+import React from "https://esm.sh/react@18.2.0";
+let reactElement = React.createElement("h1", {}, "Hello React");
let domNode = document.getElementById('root');
ReactDOM.createRoot(domNode).render("Hello ReactDOM");
```

_Reference: [createElement API reference](https://react.dev/reference/react/createElement), react.dev._

## Render a React element to React root

With a React element, we can render it to the React root.
Replace the rendered `"Hello ReactDOM"` text with our new React element.

```diff lang="js" {4} del=/"Hello ReactDOM"/ / (reactElement)/ ins=/"(reactElement)/
/* …react and react-dom imports… */
let reactElement = React.createElement("h1", {}, "Hello React");
let domNode = document.getElementById('root');
// render the React element to the React root
ReactDOM.createRoot(domNode).render("Hello ReactDOM"reactElement);
```

_Reference: [What is a React element, exactly?](https://react.dev/reference/react/createElement#what-is-a-react-element-exactly), react.dev._

## Extract a React component

React components are just functions that return React elements.
Declare a new component and use it to create our React element.

```diff lang="js" {2,5} del=/"h1", {}, "Hello React"/ ins=/"h1", {}, "Hello React Component"/ ins=/MyComponent/
let domNode = document.getElementById("root");
// 2. Create a React element from a the new component
-let reactElement = React.createElement("h1", {}, "Hello React");
+let reactElement = React.createElement(MyComponent);
// 1. Declare a new component
+function MyComponent() {
+  return React.createElement("h1", {}, "Hello React Component");
+}
ReactDOM.createRoot(domNode).render(reactElement);
```

_Reference: [Your first component](https://react.dev/learn/your-first-component), react.dev._

## Pass custom props to components

Static components, like static functions, are not useful.
Pass a `name` prop to the React component and interpolate its value into the React element.

```diff lang="js" {1,3} ins=/[$]{props.name}/ ins=/[(](props)/ ins=/,\s+{ name: "React Rally" }/ del=/React Component/
// 1. provide a prop object to the React component
let reactElement = React.createElement(MyComponent, { name: "React Rally" });
// 2. accept props
function MyComponent(props) {
  return React.createElement(
    "h1",
    {},
    `Hello React Component${props.name}`
  );
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

_Reference: [Passing props to a component](https://react.dev/learn/passing-props-to-a-component), react.dev._

## Pass common props to components

In addition to custom props, React components accept common props.
Pass an `id` prop to the React component and apply it to the React element.

```diff lang="js" {4,12} ins=/ id: "my_app",/ ins=/ id: props.id /
let reactElement = React.createElement(
  MyComponent,
  {
    // 1. define id prop
+    id: "my_app",
    name: "React Rally"
  }
);
function MyComponent(props) {
  return React.createElement(
    "h1",
    // 2. apply the id prop to the React element
    { id: props.id },
    `Hello ${props.name}`
  );
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

_Reference: [Common component props](https://react.dev/reference/react-dom/components/common#common-props), react.dev._

## Some common props use "standard DOM" names

Not all common props use common HTML attributes.
Apply the `class` HTML attribute to React elements using the DOM property name `className`.

```diff lang="js" {4,12} ins=/"my-css-class-selector",/ ins=/ className: props.className /
let reactElement = React.createElement(
  MyComponent,
  {
    // 1. define class selectors using the className prop
+    className: "my-css-class-selector",
    name: "React Rally"
  }
);
function MyComponent(props) {
  return React.createElement(
    "h1",
    // 2. apply the className prop to the React element
    { className: props.className },
    `Hello ${props.name}`
  );
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

_Reference: [Element: className property](https://developer.mozilla.org/en-US/docs/Web/API/Element/className), MDN._

## Use objects instead of strings for the `style` prop

Unlike HTML, the `style` prop requires an object instead of a string.
Apply the `style` prop to React elements using an object with camelCased CSS properties.

```diff lang="js" {2,9} ins=/{ color: "red", backgroundColor: "black" }/ ins=/ style: props.style /
let reactElement = React.createElement(MyComponent, {
  // 1. define styles using object and camelCased CSS properties
+  style: { color: "red", backgroundColor: "black" },
  name: "React Rally",
});
function MyComponent(props) {
  return React.createElement(
    "h1",
    // 2. apply the style prop to the React element
    { style: props.style },
    `Hello ${props.name}`
  );
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

_Reference: [Special component props](https://react.dev/reference/react-dom/components/common#common-props), react.dev._

## Use camelCase for all multi-word common props and properties

React does not use attribute style event names.
Add a click handler using the camelCased `onClick` prop and a function.

```diff lang="js" {2,9} ins=/onClick: / ins=/ onClick: props.onClick /
let reactElement = React.createElement(MyComponent, {
  // 1. define the onClick prop and pass a function
+  onClick: () => alert("heading clicked"),
  name: "React Rally",
});
function MyComponent(props) {
  return React.createElement(
    "h1",
    // 2. apply the onClick prop to the React element
    { onClick: props.onClick },
    `Hello ${props.name}`
  );
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

_Reference: [Common component props](https://react.dev/reference/react-dom/components/common#common-props), react.dev._

## Use object rest syntax to separate custom props from common props

Writing `props` before using every value is tedious.
Use object rest syntax to create variables for custom props and collect the rest into a new object.

```diff lang="js" {5-6, 10, 12} del=/props/ ins=/{ name, ...restProps }/ del=/{ onClick: props.onClick }/ ins=/restProps/ del=/props./
let reactElement = React.createElement(MyComponent, {
  onClick: () => alert("heading clicked"),
  name: "React Rally",
});
// 1. create variables for prop names we want to access
// 2. assign the remainer key-values (rest) to an object
function MyComponent(props{ name, ...restProps }) {
  return React.createElement(
    "h1",
    // 3. send the entire rest object to createElement
    { onClick: props.onClick }restProps,
    // 4. use the `name` variable instead of object property access
    `Hello ${props.name}`
  );
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

_Reference: [Object rest spread](https://v8.dev/features/object-rest-spread), v8.dev._

## **Quick reference videos**

<iframe
  width="315"
  height="560"
  src="https://www.youtube.com/embed/iAvix-05ew0"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
Check out these videos for a quick reference on what we've covered here

<div class="flex flex-wrap">
  <div class="w-1/2">
    <iframe
      width="315"
      height="560"
      src="https://www.youtube.com/embed/1lAlZN3OImY"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
  <div class="w-1/2">
    <iframe
      width="315"
      height="560"
      src="https://www.youtube.com/embed/iAvix-05ew0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</div>

[esm.sh]: https://esm.sh

<iframe
  width="315"
  height="560"
  src="https://www.youtube.com/embed/1lAlZN3OImY"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
