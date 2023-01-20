---
title: Catch Your Suspense Errors
date: 2019-10-30
tags:
  - post
---

Not every promise resolves.  
Some are rejected.

So, when we use `React.Suspense` to show loading and loaded states,  
We need to consider exceptions as well.

## Error Boundary Crash Course

[Error boundaries](https://reactjs.org/blog/2017/09/26/react-v16.0.html#better-error-handling) were a flagship features of React 16 —
One of the first features to illustrate the potential of the [fiber rewrite](https://engineering.fb.com/web/react-16-a-look-inside-an-api-compatible-rewrite-of-our-frontend-ui-library/).

To use `Suspense` effectively, you have to to make use of `error boundaries`.

## Start with Copy and Paste

The React docs have a [copy and paste-able](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries) `ErrorBoundary` component.

You really only need one of these things.  
So copy and paste it into your code and customize to your needs.

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static defaultProps = {
    fallback: <h1>Something went wrong.</h1>,
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}
```

<br />

This one is customized slightly for demos.

- It assumes you don't have a logging service and uses `console.logs`
- It takes a `fallback` prop for custom messages — much like `Suspense`

## Wrap Those Suspense Components

Wrap `Suspense` components with an error boundary to  
handle these three possible states:

- _pending_ — `Suspense fallback`
- _resolved_ — `Suspense children`
- _rejected_ — `ErrorBoundary fallback`

```js
import React from "react"
import ErrorBoundary from "./error-boundary"

const LazyLoadedComponent = React.lazy(() => import("./SomeComponent"))

function MyApp() {
  return (
    <ErrorBoundary
      fallback={
        <div>Stop trying to make fetch happen. It's not gonna happen.</div>
      }
    >
      <React.Suspense fallback={<div>Waiting...</div>}>
        <LazyLoadedComponent />
      </React.Suspense>
    </ErrorBoundary>
  )
}
```

<br />

## This Ain't No 1:1

I see a lot of people immediately jump to wrapping `ErrorBoundary` and `Suspense` together.

It's not a good look.

Separate, they give you nuanced control over your entire view.  
Stick layout components in between,  
Handle errors closely,  
Or have only one `ErrorBoundary` around a bunch of `Suspense` components.

The world is your oyster.
Keep 'em separate and keep control.

## This is The Suspense API

Right now, we're using `React.lazy` to do the work of communicating _pending_, _resolved_, and _rejected_ states to our `Suspense` and `ErrorBoundary` components.

Next, we'll talk about creating our own wrappers to interact with this Suspense API.
