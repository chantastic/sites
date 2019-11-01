# Suspense for Data Fetching (Experimental) — Summary

[doc](https://reactjs.org/docs/concurrent-mode-suspense.html)

## What Is Suspense, Exactly?

- Suspense let's you "wait" on loading.
- Suspense is more _mechanism_ than API.
- Suspense is not a data fetching library

This is how facebook currently sees integration: [Relay-Suspense integration](https://relay.dev/docs/en/experimental/a-guided-tour-of-relay#loading-states-with-suspense).

Over time, Suspense will be React's primary way to read asynchronous data — indifferent to source.

### What Suspense Is Not

- Not a date fetching implementation
- Not a ready-to-use client
- Does not couple data fetching to your view layer

### What Suspense Lets You Do

- Let's data fetching libraries integrate with React
- Let's you orchestrate intentionally designed loading states
- Helps you avoid race conditions

## Using Suspense in Practice

Read the [Relay Guide](https://relay.dev/docs/en/experimental/a-guided-tour-of-relay) to see how facebook interprets data-Suspense integration.

A minimal, "fake" data wrapper for demos:

```js
function wrapPromise(promise) {
  let status = "pending"
  let result
  let suspender = promise.then(
    r => {
      status = "success"
      result = r
    },
    e => {
      status = "error"
      result = e
    }
  )
  return {
    read() {
      if (status === "pending") {
        throw suspender
      } else if (status === "error") {
        throw result
      } else if (status === "success") {
        return result
      }
    },
  }
}
```

Dan says not to use it but for demos.

### What If I Don’t Use Relay?

Wait. You're favorite data fetching lib will likely see Suspense support soon.  
Or write your own — for now.

### For Library Authors

Example:

```js
function fetchProfileData() {
  let userPromise = fetchUser()
  let postsPromise = fetchPosts()
  return {
    // wrapPromise code is above
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  }
}
```

- Suspense is _not_ currently intended as a way to start fetching data when a component renders
- It lets components express that they’re “waiting” for data that is already being fetched
- Prefer APIs that favor or enforce fetching before render — to avoid waterfalls

React Core Team recommendations on this will change over time as the space gets fleshed out.

We can create a special "resource" for these complex cases.  
This allows React to render components as requisite data becomes avalaible.

**As more data streams in, React will retry rendering, and each time it might be able to progress “deeper”**

`<Suspense />` boundaries give us control over which parts of the page are rendered together or indifferent of each other.

## Traditional Approaches vs Suspense

- Fetch-on-render (for example, fetch in useEffect)
  - components that fetch data and render components that fetch data can lead to "waterfalls"
- Fetch-then-render (for example, Relay without Suspense)
  - IO blocks render
- Render-as-you-fetch (for example, Relay with Suspense)
  - Fetch and render simultaniously. Render what's available as it streems in. _But on a schedule (later concept)_

Applications will use a blend of these strategies.

### Approach 1: Fetch-on-Render (not using Suspense)

Example:

```js
useEffect(() => {
  fetchSomething()
}, [])
```

"Waterfalls" are when one component fetches and then a rendered child component fetches.  
The second won't start until the first is resolved.

### Approach 2: Fetch-Then-Render (not using Suspense)

Example:

```js
function fetchProfileData() {
  return Promise.all([fetchUser(), fetchPosts()]).then(([user, posts]) => {
    return { user, posts }
  })
}
```

These are fetched in parallel.
But because of `Promise.all`, rendering is blocked by the longest query.

### Approach 3: Render-as-You-Fetch (using Suspense)

- Start fetching
- Start rendering
- Finish fetching

**With Suspense, we don’t wait for the response to come back before we start rendering.**  
We start rendering immediately.

### We’re Still Figuring This Out

Suspense — itself — is flexible.

Ongoing questions:

- How do we make it easier to avoid waterfalls?
- When we fetch data for a page, can the API encourage including data for instant transitions from it?
- What is the lifetime of a response? Should caching be global or local? Who manages the cache?
- Can Proxies help express lazy-loaded APIs without inserting read() calls everywhere?
- What would the equivalent of composing GraphQL queries look like for arbitrary Suspense data?

## Suspense and Race Conditions

Race conditions: a bug that happens due to incorrect assumptions about the order in which our code may run.

### Race Conditions with useEffect

In [this example](https://codesandbox.io/s/nervous-glade-b5sel), previous requests can resolve after the latest request and clobber the current state.

_Providing a `useEffect` cleanup function that cancels or ignores the previous request could fix this but requires vigilance._

### Race Conditions with componentDidUpdate

Same problem.  
More code.  
Harder to think about.

### The Problem

Problem: "synchronizing" several processes that affect each other is the problem.

### Solving Race Conditions with Suspense

[Example Sandbox](https://codesandbox.io/s/infallible-feather-xjtbu)

- Set state immediately
- Pass resource (containing our wrapped promises) to the component for immediate rendering
- Let `Suspense` boundaries decide when and what to render

## Handling Errors

[`Erron boundaries`](https://reactjs.org/docs/error-boundaries.html) like other React code.

`ErrorBoundary` MVP:

```js
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    }
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}
```

Be intentional about `ErrorBoundary` placement:  
[The Fault in Our Tolerance: Accounting for Failures in React](https://aweary.dev/fault-tolerance-react/)
