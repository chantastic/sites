---
title: Use Suspense Today
publishDate: 2019-10-23
tags:
---

Believe it or not, you've had access to `Suspense` for a year.

Yes, there is more suspense to come.  
Yes, that "more" isn't totally ready.  
No, that doesn't mean you can't use `Suspense` today.

### React.lazy and Suspense sitting in a tree

React `v16.6` [introduced `React.lazy`](https://reactjs.org/blog/2018/10/23/react-v-16-6.html#reactlazy-code-splitting-with-suspense) —  
A way to code-split in client-rendered applications by components.

```js
import React from "react";
const LazyLoadedComponent = React.lazy(() =>
  import("./SomeComponent")
);

function MyApp() {
  return (
    <React.Suspense fallback={<div>Waiting...</div>}>
      <LazyLoadedComponent />
    </React.Suspense>
  );
}
```

<br />

`lazy` depends on `Suspense` to present a fallback while the lazily-loaded component is fetched.

In that way, `Suspense` acts as a boundary for asynchronous data.  
If a promise inside a `Suspense` boundary is pending,
The `fallback` is presented.
Once resolved, `children` are presented.

### But Suspense needs a translator

`Suspense` can't magically know all the promises it's `children` may or may not have.

That's where `lazy` comes in.  
It acts as a translator.

`lazy` wraps a dynamic `import` and communicates `Pending` and `Resolved` states to the nearest `Suspense` component boundary.
([code here](https://github.com/facebook/react/blob/master/packages/shared/ReactLazyComponent.js)).
`Suspense` will resolve `fallback` or `children` accordingly.

## The future™️

As we move into a `Suspense` future, you'll see this pattern more often:  
A `Suspense` boundary (with `fallback`)  
And data, wrapped in "translator" (`React.lazy`, `ReactCache.createResource`, etc).

### What's Next? Errors

Not all promises resolve.  
Some are `Rejected`.  
I'll show you how to handle that state next time.
