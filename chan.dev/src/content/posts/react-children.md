---
title: React Children
publishDate: 2023-08-16
---

This tutorial experiments with the numerous ways we can provide (and misuse) the `children` prop in React.

## Contents

## Sandboxes

- [CodeSandbox](https://codesandbox.io/s/react-children-ncg78x?file=/src/index.html)
- [Stackblitz](https://stackblitz.com/edit/js-sbbksd?file=index.js)

## Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React playground</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import ReactDOM from "https://esm.sh/react-dom@18.2.0";
      import React from "https://esm.sh/react@18.2.0";
      let reactElement = React.createElement("span", {}, "start here");
      let domNode = document.getElementById("root");
      ReactDOM.createRoot(domNode).render(reactElement);
    </script>
  </body>
</html>
```

## Pass `children` as a single string (third argument)

```diff lang="js" ins=/"A single string"/
let reactElement = React.createElement("span", {}, "A single string");
```

## Pass `children` as several strings (function overloading)

```diff lang="js" /"Multiple", " strings", "."/
let reactElement = React.createElement(
  "span",
  {},
-  "A single string"
+  "Multiple",
+  " strings",
+  "."
);
```

## Pass `children` pass in a single array

```diff lang="js" /"Multiple", " strings", "."/
let reactElement = React.createElement(
  "span",
  {},
+  [
    "Multiple",
    " strings",
    "."
+  ]
);
```

## Pass `children` pass in nested arrays

```diff lang="js" /"Multiple", " strings", "."/
let reactElement = React.createElement(
  "span",
  {},
  [
-    "Multiple",
-    " strings",
-    "."
+    ["All "],
+    ["arrays ", ["will "]],
+    [[["be "], "flattened"], "."],
  ]
);
```

## Pass `children` pass in a single array

```js
let reactElement = React.createElement("span", {}, [
  false,
  true,
  "1",
  2,
  [3],
  4.0,
  (() => "5")(),
  null,
  undefined,
]);
```

_Objects (and related complex types like `Date`) will result in an error._

## Pass `children` as a named prop

```diff lang="js" ins=/children/
let reactElement = React.createElement("span", {
+  children: "Same rules apply.",
});
```

## Intercept `children` in React Components

```diff lang="js" ins=/children/
let reactElement = React.createElement("span", {
  children: "Same rules apply.",
});

+function MyComponent({ children, ...props }) {
+  return React.createElement("span", props, children);
+}
```

## Count children with `React.Children.count`

```diff lang="js" /React.Children.count/
function MyComponent({ children, ...props }) {
  return React.createElement(
    "span",
    props,
    React.Children.count(children)
  );
}
```

## Iterate over children with `Children.map`

```diff lang="js" /React.Children.map/
function RowList({ children }) {
  return (
    <div className="RowList">
      {Children.map(children, (child) => (
        <div className="Row">{child}</div>
      ))}
    </div>
  );
}
```

## Iterate and insert children with `Children.forEach`

```diff lang="js" /React.Children.forEach/
function MyComponent({ children, ...props }) {
  const result = [];
  React.Children.forEach(children, (child, index) => {
    result.push(child);
    result.push(React.createElement("hr", { key: index }));
  });

  return React.createElement("span", props, result);
}
```

## Ensure there is only one child with `Children.only`

```js
let isSingleReactElement = Children.only(children);
```

## Convert children to array with `Children.toArray`

```js /Children.toArray/
function RowList({ children }) {
  return (
    <ul>
      {Children.toArray(children, (child) => child)
        .filter((child) => typeof child === "string")
        .map((child) => (
          <li>{child.toUpperCase()}</li>
        ))}
    </ul>
  );
}
```

Use this to manipulate the array.
(`filter`, `sort`, `reverse`, etc.)
