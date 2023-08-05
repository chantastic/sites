---
title: React Basics
# resources
references:
  - https://react.dev/
---

## Contents

## Add React anywhere!

<!-- React can be added to any page on the internet.

Start with an HTML template like this: -->

```html
<!-- my-page.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React playground</title>
  </head>
  <body></body>
</html>
```

## Add a script and connect it to an DOM node

<!-- JavaScript needs a way of updating our HTML document.
We can make that link by creating a DOM node that can be controlled by JavaScript.

1. Add an element with an id (conventionally `root`)
2. Add a [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
3. In your script, capture a reference to the `root` we want to control with JavaScript -->

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

## Use script type module

<!-- `script` elements can have multiple different types.
We need to specify `type="module"` so that we can import other libraries from the internet. -->

```diff title="my-page.html > body" lang="html" ins=/ type="module"/ {3}
<body>
  <div id="root"></div>
  <!-- Specify type module -->
  <script type="module">
    let domNode = document.getElementById("root");
    console.log(domNode);
  </script>
</body>
```

<!-- **(The following examples will only show `body>script` context.)** -->

## Import the `react-dom` module

<!-- With a `script[type=module]`, we can import JavaScript modules from the internet.
Use the service [esm.sh] to import the `react-dom` package (version `18+`). -->

```diff title="my-page.html > body > script" lang="js" {1}
// Import `react-dom@18` from esm.sh
+import ReactDOM from "https://esm.sh/react-dom@18.2.0";
let domNode = document.getElementById('root');
```

<!-- React is a multi-platform framework.
`ReactDOM` is the library that adapts the React library for the web.

_([esm.sh](https://esm.sh/) is an online server that re-packages [npm](https://www.npmjs.com/) packages for use in `script` modules.)_ -->

## Register root element with ReactDOM

```diff title="my-page.html > body > script" lang="js" {3}
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
let domNode = document.getElementById('root');
// Register root element with ReactDOM
+ReactDOM.createRoot(domNode);
```

## Render plain text to React root

```diff title="my-page.html > body > script" lang="js" ins=/.render("Hello ReactDOM")/
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
let domNode = document.getElementById('root');
// Render plain text to React root
+ReactDOM.createRoot(domNode).render("Hello ReactDOM");
```

## Import `react` and create a React element

```diff title="my-page.html > body > script" lang="js"
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
+import React from "https://esm.sh/react@18.2.0";
+let reactElement = React.createElement("h1", {}, "Hello React");
let domNode = document.getElementById('root');
ReactDOM.createRoot(domNode).render("Hello ReactDOM");
```

## Render React element to React root

```diff title="my-page.html > body > script" lang="js" del=/"Hello ReactDOM"/ /reactElement/
// ...import react and react-dom...
let reactElement = React.createElement("h1", {}, "Hello React");
let domNode = document.getElementById('root');
ReactDOM.createRoot(domNode).render("Hello ReactDOM"reactElement);
```

## Extract a React component

<!-- Components are just function that Return `React.createElement` calls. -->

```diff title="my-page.html > body > script" lang="js" /"h1", {}, "Hello React Component"/ /MyComponent/
// ...import react and react-dom...
let domNode = document.getElementById("root");
-let reactElement = React.createElement("h1", {}, "Hello React Component");
+let reactElement = React.createElement(MyComponent);
+function MyComponent() {
+  return React.createElement("h1", {}, "Hello React Component");
+}
ReactDOM.createRoot(domNode).render(reactElement);
```

## Pass custom props to components

```diff title="my-page.html > body > script" lang="js" ins=/props.name/ ins=/props/ ins=/, { name: "React Rally" }/
// ...import react and react-dom...
let reactElement = React.createElement(MyComponent, { name: "React Rally" });
function MyComponent(props) {
  return React.createElement("h1", {}, `Hello ${props.name}`);
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

## Pass common props to components

```diff title="my-page.html > body > script" lang="js" ins=/ id: "my_app",/ ins=/ id: props.id /
// ...import react and react-dom...
let reactElement = React.createElement(
  MyComponent,
  {
    id: "my_app",
    name: "React Rally"
  }
);
function MyComponent(props) {
  return React.createElement(
    "h1",
    { id: props.id },
    `Hello ${props.name}`
  );
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

## Many common props use "DOM standard" names

<!-- - `class` => `className`
- `for` => `htmlFor` -->

```diff title="my-page.html > body > script" lang="js" ins=/className: "my-css-class-selector",/ ins=/ className: props.className /
// ...import react and react-dom...
let reactElement = React.createElement(
  MyComponent,
  {
    className: "my-css-class-selector",
    name: "React Rally"
  }
);
function MyComponent(props) {
  return React.createElement(
    "h1",
    { className: props.className },
    `Hello ${props.name}`
  );
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

## Use objects instead of strings for the `style` prop

<!-- ```html
"color: red; background-color: black;"
```

```js
{
  color: "red",
  backgroundColor: "black"
}
``` -->

```diff lang="js" title="my-page.html > body > script" ins=/style: { color: "red", backgroundColor: "black" },/ ins=/ style: props.style /
// ...import react and react-dom...
let reactElement = React.createElement(MyComponent, {
  style: { color: "red", backgroundColor: "black" },
  name: "React Rally",
});
function MyComponent(props) {
  return React.createElement(
    "h1",
    { style: props.style },
    `Hello ${props.name}`
  );
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

## Use camelCase for all multi-word common props and properties

```diff title="my-page.html > body > script" lang="js" ins=/onClick: / ins=/ onClick: props.onClick /
// ...import react and react-dom...
let reactElement = React.createElement(MyComponent, {
  onClick: () => alert("heading clicked"),
  name: "React Rally",
});
function MyComponent(props) {
  return React.createElement(
    "h1",
    { onClick: props.onClick },
    `Hello ${props.name}`
  );
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

## Use object rest to separate custom props from common props

```diff title="my-page.html > body > script" lang="js" del=/props/ ins=/{ name, ...restProps }/ del=/{ onClick: props.onClick }/ ins=/restProps/ del=/props./
let reactElement = React.createElement(MyComponent, {
  onClick: () => alert("heading clicked"),
  name: "React Rally",
});
function MyComponent(props{ name, ...restProps }) {
  return React.createElement(
    "h1",
    { onClick: props.onClick }restProps,
    `Hello ${props.name}`
  );
}
let domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(reactElement);
```

<!-- Resources:

- [Object rest](https://v8.dev/features/object-rest-spread)
- [React props and Stand DOM props](https://react.dev/reference/react-dom/components/common#common-props) -->

<!-- ## Props on common components

[https://react.dev/reference/react-dom/components/common#common-props](https://react.dev/reference/react-dom/components/common#common-props)

## Special react props on common components

https://react.dev/reference/react-dom/components/common#common-props

- `children`
- `dangerouslySetInnerHTML`
- `ref`
- `style`

DOM standard:

- `className`
- `htmlFor`

Rule, everything is camelcased

- `onClick`
- `onFocus`
- `onMouseEnter`
- `onChange`
- `onBlur`
- etc -->
