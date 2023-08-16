---
title: Show More component
tags:
  - react
  - react-hooks
  - tutorial
---

This totorial is a complete guide to basic react hooks.
It demonstratens simple implementations of `useState`, `useEffect`, `useRef`, `useContext`, and `useId` in a familiar, real-world component.

## Contents

## Online sandboxes

- [CodeSandbox](https://codesandbox.io/s/show-more-react-8tnjy4?file=/src/App.js) <small>Used by me (Vim support)</small>
- [StackBlitz](https://stackblitz.com/edit/show-more-react?file=src%2FApp.js)

<details>
  <summary>Make your own</summary>

Copy-paste this into your prefered React environment.
Does not include bootstrapping with `React.creatRoot`.

```jsx
/* START HERE */
function ShowMore(/* props */) {
  return <div>🫵 YOUR IMPLEMENTATION 🫵</div>;
}

export default function App() {
  return (
    <ShowMore>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus
      turpis. Nulla efficitur pulvinar dui id imperdiet. Nulla cursus nulla id
      elit imperdiet commodo. Praesent ullamcorper eros quis maximus varius.
      Integer pellentesque urna nulla, nec vestibulum leo malesuada quis.
      Maecenas sit amet mauris eu diam blandit molestie bibendum sit amet
      mauris. Nullam sed posuere lacus. Sed cursus bibendum turpis tincidunt
      volutpat. Duis molestie volutpat urna, in rutrum ante rhoncus volutpat.
      Maecenas a imperdiet dolor. Duis ut ex tincidunt, tincidunt velit in,
      vehicula dolor. Suspendisse dictum porttitor massa. Cras pulvinar
      ultricies lacus ut maximus. In gravida turpis purus, eu mattis odio
      tincidunt eget.
    </ShowMore>
  );
}
```

</details>

## Create a component that renders children and a "Show less" button

Let's start.
Create a Component that renders `children` and a "Show less" button

<small>_(If you're sure what this code does, visit my [React Basics](/react-basics) tutorial for a primer.)_</small>

```jsx {1, 5, 7}
// 1. Create a component that destructures `children` from props
function ShowMore({ children }) {
  return (
    <div>
      {/* 2. Render the `children` */}
      <div>{children}</div>
      {/* 3. Render a "Show less" button */}
      <button>Show less</button>
    </div>
  );
}
```

_Reference: [React Basics](https://chan.dev/react-basics), chan.dev._

---

## Conditionally render toggle text using a ternary operator

The "Show more" button should read "Show less" when expanded.
Add a condition around the button text so that it can be toggled.

<small>_(Don't worry about state. Just activate it, manually, with `true` and `false`.)_</small>

```diff lang="jsx" {7-8} del=/(less){/ ins=/{true .+}/
function ShowMore({ children }) {
  return (
    <div>
      <div>{children}</div>
      {/* Conditionally render toggle text using a ternary operator. */}
      <button>Show less{true ? "less" : "more"}</button>
    </div>
  );
}
```

_Reference: [Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator), MDN._

---

## Manage `expanded` state with state with the `React.useState` hook

The `React.useState` hook is how we manage UI state in React.
Create a state, using a initial value. Then assign that state to a local variable by destructuring the returned array.

<!-- Learn how to use the `useState` hook to manage the expansion state of the content. -->

```diff lang="jsx" {2-3} ins=/expanded/
function ShowMore({ children }) {
  // 1. Track initial state using and provide an initial value
  // 2. Assign it to a local variable by destructuring the returned array
+  let [expanded] = React.useState(true);

  return (
    <div>
      <div>{children}</div>
      <button>Show {expanded ? "less" : "more"}</button>
    </div>
  );
}
```

_Reference:_

- _[Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), MDN._
- _[useState hook reference](https://react.dev/reference/react/useState), react.dev._

---

## Add an `onClick` event handler to the button

UI changes are activated by user input.
Add an `onClick` event handler to the button and log the `expanded` state.

<!-- Integrate the component's state with the button to allow toggling the content's visibility. -->

```diff lang="jsx" ins=/ onClick={.+}/
function ShowMore({ children }) {
  let [expanded] = React.useState(true);

  return (
    <div>
      <div>{children}</div>
      <button onClick={() => console.log(expanded)}>
        Show {expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

_Reference: [Responding to Events](https://react.dev/learn/responding-to-events), React Docs._

---

## Call `React.useState`'s update function with new state

The second value that we get from `React.useState` is a state set function.
Assign that function to a local variable by destructuring it from the returned array. Then call the set function in the button's `onClick` event handler.

<small>_(To toggle the next state, invert the current state with `!` operator.)_</small>

```diff lang="jsx" ins=/, setExpanded/ ins=/setExpanded/ ins=/!/
function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);

  return (
    <div>
      <div>{children}</div>
-      <button onClick={() => console.log(expanded)}>
+      <button onClick={() => setExpanded(!expanded)}>
        Show {expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

_Reference: [useState set functions referenc](https://react.dev/reference/react/useState#setstate), react.dev_

---

## Style the content container with a `style` prop

Styles rules can be applied directly to elements using the `style` prop.  
Style the collapsed state of the ShowMore component to be `100px` tall and hide overflowing content.

<small>_(We want to animate this. So use `maxHeight` and set a `transition`.)_</small>

```diff lang="jsx"
function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);

  return (
    <div>
      <div
+        style={{
+          maxHeight: "100px",
+          overflow: "hidden",
+          transition: "all .5s ease",
+        }}
      >
        {children}
      </div>
      <button onClick={() => setExpanded(!expanded)}>
        Show {expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

_Reference: [Applying CSS style](https://react.dev/reference/react-dom/components/common#applying-css-styles), react.dev._

---

## Conditionally style content container based on state

Style rules can be set conditionally using the ternary operator.  
Use a ternary to switch the `maxHeight` value from `100px` to `"none"` when `expanded`.

```diff lang="jsx"
function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);

  return (
    <div>
      <div
        style={{
+          maxHeight: expanded ? "none" : "100px",
          overflow: "hidden",
          transition: "all .5s ease",
        }}
      >
        {children}
      </div>
      <button onClick={() => setExpanded(!expanded)}>
        Show {expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

<!-- TODO -->

<!-- I'm a big fan of inlining state-derived styles -->
<!-- We could be done here. state and style, real easy. but what if we want to add a nice transition with css? -->
<!-- we have some complications that we have to work thru. first try -->
<!-- whole object updates. we can't transition to 'none'. it has to be a value -->
<!-- we can only get that value from the dom -->

<!-- _Reference: [React Styling](https://reactjs.org/docs/dom-elements.html#style), React Docs._ -->

---

## Access content container's `scrollHeight` with `React.useRef`

`React.useRef` is used to access the DOM node rendered from a component.
Create a `ref` object. Then pass it to an React element via the `ref` (special) prop.
Finally, log out the value in the `onClick` button handler to verify.

```diff lang="jsx" ins=/contentRef/ ins=/[(](contentRef.+)[)]/
function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);

+  const contentRef = React.useRef(null);

  return (
    <div>
      <div
+        ref={contentRef}
        style={{
          maxHeight: expanded ? "none" : "100px",
          overflow: "hidden",
          transition: "all .5s ease",
        }}
      >
        {children}
      </div>
      <button
        onClick={() => {
          setExpanded(!expanded);
+          console.log(contentRef.current.scrollHeight);
        }}
      >
        Show {expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

_Reference: [useRef hook reference](https://reactjs.org/docs/hooks-reference.html#useref), react.dev._

---

## Set `scrollHeight` of DOM node on button click

Any state that we need to make rendering decisious should be tracked in state.  
Set the `scrollHeight` of our DOM node, on state, when our button is clicked.

```diff lang="jsx" ins=/setContentHeight/
function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);
+  let [, setContentHeight] = React.useState();

  const contentRef = React.useRef(null);

  return (
    <div>
      <div
        ref={contentRef}
        style={{
          maxHeight: expanded ? "none" : "100px",
          overflow: "hidden",
          transition: "all .5s ease",
        }}
      >
        {children}
      </div>
      <button
        onClick={() => {
          setExpanded(!expanded);
+          setContentHeight(contentRef.current.scrollHeight);
        }}
      >
        Show {expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

---

## Set `maxHeight` of content container with `contentHeight` state value

If we want to see our transition, we need to explicitly set the `maxHeight` of the content container (CSS stuff 😭).
Use the `contentHeight` value (instead of `"none"`) to set the `expanded` container `maxHeight`.

```diff lang="jsx" ins=/contentHeight/
function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);
  let [contentHeight, setContentHeight] = React.useState();

  const contentRef = React.useRef(null);

  return (
    <div>
      <div
        ref={contentRef}
        style={{
+          maxHeight: expanded ? contentHeight : "100px",
          overflow: "hidden",
          transition: "all .5s ease",
        }}
      >
        {children}
      </div>
      <button
        onClick={() => {
          setExpanded(!expanded);
          setContentHeight(contentRef.current.scrollHeight);
        }}
      >
        Show {expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

_Reference: [Using CSS Transitions on Auto Dimensions](https://css-tricks.com/using-css-transitions-auto-dimensions/), CSS Tricks._

---

## Use `React.useEffect` to set `contentHeight`

Setting `contentHeight` on click is has a major flaw.
The first click will not saw the transition animation.
Move the `setContentHeight` function into a `React.useEffect` to set the `contentHeight` on every render.

```diff lang="jsx"
function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);
  let [contentHeight, setContentHeight] = React.useState();

  const contentRef = React.useRef(null);

+  React.useEffect(() => {
+    if (contentRef.current) {
+      setContentHeight(contentRef.current.scrollHeight);
+    }
+  });

  return (
    <div>
      <div
        ref={contentRef}
        style={{
          maxHeight: expanded ? contentHeight : "100px",
          overflow: "hidden",
          transition: "all .5s ease",
        }}
      >
        {children}
      </div>
      <button onClick={() => {
        setExpanded(!expanded);
-        setContentHeight(contentRef.current.scrollHeight);
      }>
        Show {expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

_References: [useEffect hook reference](https://react.dev/reference/react/useEffect), react.dev._

<!-- - _[A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/), Dan Abramov._ -->

---

<!-- ## Query the DOM and write to the style object using `React.useEffect`

```jsx del={16} del=/maxHeight.+,/ ins={6-10} ins=/maxHeight.+;/
function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);

  let contentRef = React.useRef(null);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = expanded ? `none` : `100px`;
    }
  });

  return (
    <div>
      <div
        style={{
          maxHeight: expanded ? "none" : "100px",
          transition: "all .3s ease",
          overflow: "hidden",
        }}
        ref={contentRef}
      >
        {children}
      </div>
      <button
        onClick={() => {
          setExpanded(!expanded);
          console.log(contentRef.current.scrollHeight);
        }}
      >
        Show {expanded ? "less" : "more"}
      </button>
    </div>
  );
}
``` -->

<!-- ## Memoize useEffect by providing a dependencies array

```jsx ins={10} ins=/ (.expanded.)[)]/
function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);

  let contentRef = React.useRef(null);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = expanded ? `none` : `100px`;
    }
  }, [expanded]);

  return (
    <div>
      <div
        style={{
          maxHeight: expanded ? "none" : "100px",
          transition: "all .3s ease",
          overflow: "hidden",
        }}
        ref={contentRef}
      >
        {children}
      </div>
      {(contentRef.current && contentRef.current.scrollHeight) > 100 && (
        <button
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          Show {expanded ? "less" : "more"}
        </button>
      )}
    </div>
  );
}
```

Reference: [Why you shouldn't put refs in a dependency array](https://epicreact.dev/why-you-shouldnt-put-refs-in-a-dependency-array/) -->

<!-- ## Switching from useEffect to useLayoutEffect for UI Updates

Differentiate between `useEffect` and `useLayoutEffect` and determine the right scenarios for each.

```diff lang="js" {2,14}
- import React, { useState, useRef, useEffect } from 'react';
+ import React, { useState, useRef, useLayoutEffect } from 'react';

...
- useEffect(() => {
+ useLayoutEffect(() => {
    ...
  }, [isExpanded, collapsedHeight]);
```

_Reference: [useLayoutEffect Hook](https://reactjs.org/docs/hooks-reference.html#uselayouteffect), React Docs._

--- -->

## Hide button if below height threshhold

This component has no purpose if content height is under our `100px` threshold.
Hide the the "Show more" button if height is less than `100px`.
Use the Logical AND operator (`&&`).

```diff lang="jsx"
function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);
  let [contentHeight, setContentHeight] = React.useState();

  const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  });

  return (
    <div>
      <div
        ref={contentRef}
        style={{
          maxHeight: expanded ? contentHeight : "100px",
          overflow: "hidden",
          transition: "all .5s ease",
        }}
      >
        {children}
      </div>
+      {contentHeight > 100 && (
        <button onClick={() => setExpanded(!expanded)}>
          Show {expanded ? "less" : "more"}
        </button>
+      )}
    </div>
  );
}
```

_Reference: [Logical AND operator (`&&`)](https://react.dev/learn/conditional-rendering#logical-and-operator-), react.dev._

---

## Create Context

```jsx
// 1. Create context
let ExpandedContext = React.createContext(true);
```

---

## Provide Context

```jsx
function ShowMore({ children }) {
  /* ...code hidden for brevity... */

  return (
    <ExpandedContext.Provider value={expanded}>
      <div>{/* ...code hidden for brevity... */}</div>
    </ExpandedContext.Provider>
  );
}
```

---

## Consume Context

```jsx ins={1-5}
function ShowMoreButton() {
  let expanded = React.useContext(ExpandedContext);

  return <button>Show {expanded ? "less" : "more"}</button>;
}
```

---

## Provide value and updater on Context

```diff lang="jsx" del={19, 38} ins={20, 39, 43-45} del=// ins=//
let ExpandedContext = React.createContext();

function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);
  let [overflowing, setOverflowing] = React.useState(false);

  let contentRef = React.useRef(null);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = expanded
        ? `${contentRef.current.scrollHeight}px`
        : `100px`;
      setOverflowing(contentRef.current.scrollHeight > 100);
    }
  }, [expanded, overflowing]);

  return (
-    <ExpandedContext.Provider value={expanded}>
+    <ExpandedContext.Provider value={[expanded, setExpanded]}>
      <div>
        <div
          style={{
            transition: "all .3s ease",
            overflow: "hidden",
          }}
          ref={contentRef}
        >
          {children}
        </div>
        {overflowing && <ShowMoreButton />}
      </div>
    </ExpandedContext.Provider>
  );
}

function ShowMoreButton() {
  let expanded = React.useContext(ExpandedContext);
  let [expanded, setExpanded] = React.useContext(ExpandedContext);

  return (
    <button
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      Show {expanded ? "less" : "more"}
    </button>
  );
}
```

---

## (repeat the process for overflowing)

```diff lang="jsx" ins=/OverflowingContext/
let ExpandedContext = React.createContext();
+let OverflowingContext = React.createContext();

function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);
  let [overflowing, setOverflowing] = React.useState(false);

  let contentRef = React.useRef(null);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = expanded
        ? `${contentRef.current.scrollHeight}px`
        : `100px`;
      setOverflowing(contentRef.current.scrollHeight > 100);
    }
  }, [expanded, overflowing]);

  return (
    <ExpandedContext.Provider value={[expanded, setExpanded]}>
+      <OverflowingContext.Provider value={[overflowing]}>
        <div>
          <div
            style={{
              transition: "all .3s ease",
              overflow: "hidden",
            }}
            ref={contentRef}
          >
            {children}
          </div>
-          {overflowing && <ShowMoreButton />}
+          {<ShowMoreButton />}
        </div>
+      </OverflowingContext.Provider>
    </ExpandedContext.Provider>
  );
}

function ShowMoreButton() {
  let [expanded, setExpanded] = React.useContext(ExpandedContext);
+  let [overflowing] = React.useContext(OverflowingContext);

+  if (!overflowing) {
+    return null;
+  }

  return (
    <button
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      Show {expanded ? "less" : "more"}
    </button>
  );
}
```

---

## Add ARIA Attributes for Expandable Content

Enhance accessibility by using ARIA attributes to indicate expandable and collapsible content.

```diff lang="js" {7,8,12}
  return (
    <div>
      <div
+       role="region"
+       aria-expanded={isExpanded}
        style={{ maxHeight: isExpanded ? 'none' : `${collapsedHeight}px`, overflow: 'hidden' }}
        ref={contentRef}
      >
        {children}
      </div>
      <button
+       aria-controls={contentRef.current && contentRef.current.id}
        onClick={handleButtonClick}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
```

_Reference: [Using ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), MDN._

---

## Provide a Unique ID for ARIA Controls

Ensure each expandable region can be uniquely identified, especially when multiple instances are on the page.

```diff lang="js" {5,7}
const ShowMore = ({ children }) => {
+ const uniqueId = `readmore-${Math.random().toString(36).substr(2, 9)}`;
  ...
  return (
    <div>
      <div
+       id={uniqueId}
        role="region"
        aria-expanded={isExpanded}
        ...
      >
        ...
      </div>
      <button
        aria-controls={uniqueId}
        ...
      >
        ...
      </button>
    </div>
  );
```

_Reference: [Using the id Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id), MDN._

---

## Add Keyboard Accessibility with `onKeyDown`

Enhance user experience for keyboard users by allowing them to expand and collapse the content using the keyboard.

```diff lang="js" {12,14,16-19}
  ...
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

+ const handleKeyDown = (event) => {
+   if (event.key === "Enter" || event.key === " ") {
+     handleButtonClick();
+     event.preventDefault();
+   }
+ };

  return (
    ...
      <button
        ...
+       onKeyDown={handleKeyDown}
      >
        ...
      </button>
    </div>
  );
```

_Reference: [Keyboard Accessible Buttons](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#make_functioning_keyboard_accessible_buttons), MDN._

---

## Add Focus Management for Better UX

Redirect focus when content is expanded to make navigation more intuitive for screen reader and keyboard users.

```diff lang="js" {10-12,16}
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
+   if (!isExpanded) {
+     setTimeout(() => contentRef.current && contentRef.current.focus(), 0);
+   }
  };
  ...
  return (
    ...
      <div
        ...
+       tabIndex={isExpanded ? 0 : -1}
      >
        ...
      </div>
      ...
    </div>
  );
```

_Reference: [Managing Focus in Web Content](https://webaim.org/techniques/keyboard/focus), WebAIM._

---
