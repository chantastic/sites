---
title: Read More component
tags:
  - react
  - react-hooks
  - tutorial
---

## Contents

This totorial is a complete guidet to basic react hooks. It simple implementations `useState`, `useEffect`, `useRef` in a real-world component.

## Create a Component that renders children and a "Read less" button

Let's get started.
Create a Component that renders children and a "Read less" button

_(If you're sure what this code does, visit my [React Basics](/react-basics) tutorial for a primer.)_

```jsx {1, 5, 7}
// 1. Create a component that destructures children from props
function ReadMore({ children }) {
  return (
    <div>
      {/* 2. Render the children */}
      <div>{children}</div>
      {/* 3. Render a "Read less" button */}
      <button>Read less</button>
    </div>
  );
}
```

_Reference: [React Basics](https://chan.dev/react-basics), chan.dev._

---

## Hold `expanded` state with `React.useState`

<!-- Learn how to use the `useState` hook to manage the expansion state of the content. -->

```diff lang="jsx" {2}
function ReadMore({ children }) {
  // Hold the expanded state with `useState`
+  let [expanded] = React.useState(false);

  return (
    <div>
      <div>{children}</div>
      <button>Read less</button>
    </div>
  );
}
```

<!-- _Reference: [useState Hook](https://reactjs.org/docs/hooks-state.html), React Docs._ -->

---

## Conditionally Render content based on state using a ternary operator

```jsx lang="jsx" {7} del=/(less){/ ins=/{expanded .+}/
function ReadMore({ children }) {
  let [expanded] = React.useState(true);

  return (
    <div>
      <div>{children}</div>
      {/* Conditionally Render content based on state using a ternary operator. */}
      <button>Read less{expanded ? "less" : "more"}</button>
    </div>
  );
}
```

---

## Toggle State with a Button Click

<!-- Integrate the component's state with the button to allow toggling the content's visibility. -->

```diff lang="jsx" ins=/ onClick={.+}/
function ReadMore({ children }) {
  let [expanded] = React.useState(true);

  return (
    <div>
      <div>{children}</div>
      <button onClick={() => setExpanded(!expanded)}>
        Read less{expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

<!-- _Reference: [Handling Events](https://reactjs.org/docs/handling-events.html), React Docs._ -->

## Take update function from useState (second argument)

```diff lang="jsx" ins=/, setExpanded/
function ReadMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);

  return (
    <div>
      <div>{children}</div>
      <button onClick={() => setExpanded(!expanded)}>
        Read less{expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

---

## Conditionally style content container based on state

<!-- Dynamically apply CSS styles to the content based on the `isExpanded` state. -->

```jsx ins={7-11}
function ReadMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);

  return (
    <div>
      <div
        style={{
          maxHeight: expanded ? "none" : "100px",
          overflow: "hidden",
          transition: "all .5s ease",
        }}
      >
        {children}
      </div>
      <button onClick={() => setExpanded(!expanded)}>
        Read less{expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

<!-- I'm a big fan of inlining state-derived styles -->
<!-- We could be done here. state and style, real easy. but what if we want to add a nice transition with css? -->
<!-- we have some complications that we have to work thru. first try -->
<!-- whole object updates. we can't transition to 'none'. it has to be a value -->
<!-- we can only get that value from the dom -->

<!-- _Reference: [React Styling](https://reactjs.org/docs/dom-elements.html#style), React Docs._ -->

### Access content container's `scrollHeight` with `React.useRef`

```jsx ins={4, 20} ins=/(contentRef.+)[)]/
function ReadMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);

  const contentRef = useRef(null);

  return (
    <div>
      <div
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
          console.log(contentRef.current.scrollHeight);
        }}
      >
        Read less{expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

<!-- we're alerting just so we can see how it works. -->

<!-- _Reference: [useRef Hook](https://reactjs.org/docs/hooks-reference.html#useref), React Docs._ -->

---

## Query the DOM and write to the style object using `React.useEffect`

```jsx del={16} del=/maxHeight.+,/ ins={6-10} ins=/maxHeight.+;/
function ReadMore({ children }) {
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
        Read {expanded ? "less" : "more"}
      </button>
    </div>
  );
}
```

## Memoize useEffect by providing a dependencies array

```jsx ins={10} ins=/ (.expanded.)[)]/
function ReadMore({ children }) {
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
          Read {expanded ? "less" : "more"}
        </button>
      )}
    </div>
  );
}
```

Reference: [Why you shouldn't put refs in a dependency array](https://epicreact.dev/why-you-shouldnt-put-refs-in-a-dependency-array/)

---

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

## Hide button if below minimum width

<!-- needs to have state change -->

```jsx ins={3, 12, 14, 27, 35} ins=/overflowing/ ins=/setOverflowing/
function ReadMore({ children }) {
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
      {overflowing && (
        <button
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          Read {expanded ? "less" : "more"}
        </button>
      )}
    </div>
  );
}
```

---

## Create Context

```jsx
// 1. Create context
let ExpandedContext = React.createContext(true);
```

---

## Provide Context

```jsx
function ReadMore({ children }) {
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
function ReadMoreButton() {
  let expanded = React.useContext(ExpandedContext);

  return <button>Read {expanded ? "less" : "more"}</button>;
}
```

---

## Provide value and updater on Context

```diff lang="jsx" del={19, 38} ins={20, 39, 43-45} del=// ins=//
let ExpandedContext = React.createContext();

function ReadMore({ children }) {
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
        {overflowing && <ReadMoreButton />}
      </div>
    </ExpandedContext.Provider>
  );
}

function ReadMoreButton() {
  let expanded = React.useContext(ExpandedContext);
  let [expanded, setExpanded] = React.useContext(ExpandedContext);

  return (
    <button
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      Read {expanded ? "less" : "more"}
    </button>
  );
}
```

---

## (repeat the process for overflowing)

```diff lang="jsx" ins=/OverflowingContext/
let ExpandedContext = React.createContext();
+let OverflowingContext = React.createContext();

function ReadMore({ children }) {
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
-          {overflowing && <ReadMoreButton />}
+          {<ReadMoreButton />}
        </div>
+      </OverflowingContext.Provider>
    </ExpandedContext.Provider>
  );
}

function ReadMoreButton() {
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
      Read {expanded ? "less" : "more"}
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
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
```

_Reference: [Using ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), MDN._

---

## Provide a Unique ID for ARIA Controls

Ensure each expandable region can be uniquely identified, especially when multiple instances are on the page.

```diff lang="js" {5,7}
const ReadMore = ({ children }) => {
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
