---
title: React Children
---

## Contents

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

The only part we'll be changing here is the line where `React.createElement` is called.

```html /"A single string"/
let reactElement = React.createElement("span", {}, "A single string");
```

## Pass `children` as several strings (function overloading)

```html /"Multiple", " strings", "."/
let reactElement = React.createElement( "span", {}, "Multiple", " strings", "."
);
```

## Pass `children` multiple children of mixed type

```js
let reactElement = React.createElement(
  "span",
  {},
  false,
  true,
  "1",
  2,
  [3],
  4.0,
  (() => "5")(),
  null,
  undefined
);
```

_Objects (and related complex types like `Date` will result in an error._
_Note how the array flattens_

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

_Objects (and related complex types like `Date` will result in an error._

## Pass `children` as deeply nested array

```js
let reactElement = React.createElement("span", {}, [
  ["All "],
  ["arrays ", ["will "]],
  [[["be "], "flattened"], "."],
]);
```

_Objects (and related complex types like `Date` will result in an error._

## Pass `children` as a prop

```js
let reactElement = React.createElement("span", {
  children: "Same rules apply.",
});
```

<!-- makes no differences on the component side -->

## Intercept `children` in components

```js
let reactElement = React.createElement("span", {
  children: "Same rules apply.",
});
function MyComponent({ children, ...props }) {
  return React.createElement("span", props, children);
}
```

## Intercept `children` in components

```js
let reactElement = React.createElement("span", {
  children: "Same rules apply.",
});
function MyComponent({ children, ...props }) {
  return React.createElement("span", props, children);
}
```

---

## Children.count(children)

```js
function MyComponent({ children, ...props }) {
  return React.createElement("span", props, React.Children.count(children));
}
```

<!-- try the privous examples f -->

## Children.forEach(children, fn, thisArg?)

```js
function MyComponent({ children, ...props }) {
  const result = [];
  React.Children.forEach(children, (child, index) => {
    result.push(child);
    result.push(React.createElement("hr", { key: index }));
  });

  return React.createElement("span", props, result);
}
```

## Children.map(children, fn, thisArg?)

```js
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

<!-- assumes opaque (could be array could not be) -->

## Children.only(children)

```
let isSingleReactElement = Children.only(children);
```

## Children.toArray(children)

Use this to manipulate the array.
(filter, sort, reverse, etc.)
