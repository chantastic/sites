Ideally, state update the screen immediately.  
But sometimes we need to defer updates to the screen.

Concurrent mode gives us new tools for deciding when to transition between creens/states.

## Transitions

The default case is this:

- You click a button
- You're instantly transported to the next page
- You see a spinner until content loads.

**It'd be nice if we could "skip" it and wait for some content to load before trasitioning to the new screen**

_Enter: the `useTransition()` Hook._

Prerequisite: Concurrent Mode via `ReactDOM.createRoot`.

```diff
+  const [startTransition, isPending] = useTransition({
+    timeoutMs: 3000
+  });
```

- `startTransition` is the function used to tell React _which_ state update you want to defer
- `isPending` is the boolean we check to determine if the transition is still active
- `timeoutMs` is an option to defie how long you're wiling to wait for the transition to complete before showing transitioning. In other words, the longest amount of time you want to wait on the current screen.

### Wrapping setState in a Transition

```jsx
<button
  onClick={() => {
    startTransition(() => {
      /* update state */
    });
  }}
>
```

When the async function resolves, the state is updated.  
After the specified `timoutMs` opition, React "gives up" wating and transitions the state, regardless of the async functions resolution state.

### Adding a Pending Indicator

Waiting for a new screen without feedback that something is happening sucks.

Use the boolean `isPending` that `useTransition()` returns to **communicate the state trasition is prgross**.

```jsx
<>
  <button
    disabled={isPending} /* disable the button to indicate registered action */
    onClick={() => {
      startTransition(() => {
        const nextUserId = getNextId(resource.userId)
        setResource(fetchProfileData(nextUserId))
      })
    }}
  >
    Next
  </button>

  {/* show some other text to indicate that the app is doing stuff */}
  {isPending ? " Loading..." : null}

  <ProfilePage resource={resource} />
</>
```

### Reviewing the Changes

Clicking our button doesn't preform an immediate state transition to an "undesireable" loading state, but instead stays on the previous screen and communicates progress there.

### Where Does the Update Happen?

Both versions of `<ProfilePage>` exist at the same time.  
Where is the "next" one rendering?

Imagine it happening "in a different universe".  
Obviously this is an illusion.  
React is just switching back and forth between small chunks of work real fast like.

We can't "see" that universe directly but it can communicate back to us — via `isPending`.

When the update is no longer pending, the universes "merge" back to gother (back to the git metaphor).

`useTransition` lets you focus on the desired user experience, and not think about the mechanics of how it’s implemented.

### Transitions Are Everywhere

Just adding more `Suspense` boundaries can't solve all of your loadig state issues.  
Sometimes views will "take a step back".

`useTransition()` is the solution.

* before `useTransition`: https://codesandbox.io/s/boring-shadow-100tf
* after `useTransition`: https://codesandbox.io/s/sleepy-field-mohzb

### Baking Transitions Into the Design System

Pretty much every event or interaction that could result in a component suspending needs to wrap the handler in `useTransition`.  
This will avoid 

**We (Recat Core) recommend to bake useTransition into the design system components of your app.**

```jsx
function Button({ children, onClick }) {
  const [startTransition, isPending] = useTransition({
    timeoutMs: 10000
  });

  function handleClick() {
    startTransition(() => {
      onClick();
    });
  }

  const spinner = (
    // ...
  );

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isPending}
      >
        {children}
      </button>
      {isPending ? spinner : null}
    </>
  );
}
```

This button doesn't care what state is being updated.  
It wraps any state update that happens via `onClick`.  

## The Three Steps

* Complete — the destination — a fully rendered next screen
* Skeleton — "take a step forward" —  we transition but some data is still loading
* Receded — "take a step backward" —
* Pending — "stay awhile"

### Default: Receded → Skeleton → Complete

"Taking a step back"  

**Receded** is the `default` before, where `useTransition()` isn't used.  
It's not the ideal user experience because "loaded" views can be "hidden."  

When two suspendable components are children of the same `Suspense` component,  
The fallback will be shown when either is suspended.  

### Preferred: Pending → Skeleton → Complete

### Wrap Lazy Features in \<Suspense\>

### Suspense Reveal “Train”

### Delaying a Pending Indicator

### Recap

## Other Patterns

### Splitting High and Low Priority State

### Deferring a Value

### SuspenseList
