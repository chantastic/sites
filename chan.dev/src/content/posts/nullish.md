---
title: "Nullish Coalescing and when you should use it"
publishDate: 2023-10-17
cover: ./nullish/nullish.png
coverAlt: "Nullish presented as a subset of falsy"
references:
  - https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
---

The `??` operator is identical to `||` when the left side is `null`, `undefined`, or `truthy`.

They differ when the left side is `falsy` but _not_ `null` or `undefined`.  
In this case:
`??` returns the left side.  
`||` will returns the right side.

In practical terms, `??` returns values with an operable type (`string`, `number`, `bigint`, `boolean`, etc.) even when their values are falsy.

## `falsy` contains `nullish`

`falsy` is a superset of `nullish`.  
It's a _square_, _rectangle_, _paralellagram_ situation.

## Examples

Number

```js
console.log(42 || "default"); // 42
console.log(42 ?? "default"); // 42
console.log(0 || "default"); // "default"
console.log(0 ?? "default"); // 0
```

String

```js
console.log("juniper" || "default"); // "juniper"
console.log("juniper" ?? "default"); // "juniper"
console.log("" || "default"); // "default"
console.log("" ?? "default"); // ""
```

Boolean

```js
console.log(true || "default"); // true
console.log(true ?? "default"); // true
console.log(false || "default"); // "default"
console.log(false ?? "default"); // false
```

Nullish

```js
console.log(undefined || "default"); // "default"
console.log(undefined ?? "default"); // "default"
console.log(null || "default"); // "default"
console.log(null ?? "default"); // "default"
```
