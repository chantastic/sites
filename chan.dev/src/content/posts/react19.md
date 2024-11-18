---
title: "React 19: The Big Picture"
date: 2024-11-04
mermaid: true
---

<style>
[data-slide] {
  min-height: 100vh;
  padding-top: 1em;
}

[data-slide] h2 {
  margin-top: 0;
}
</style>

<section data-slide>

## Trends in React 19

1. Encourages **TypeScript** 🧙
1. Endorses **Testing-Library** 🐙
1. Embraces **compilers** 🤖
1. Engages **the platform** 🌐
</section>


<section data-slide>

## React 19 feature quadrants

<div class="mermaid not-prose">
quadrantChart
    x-axis Internal --> External
    y-axis Removed APIs --> New APIs
    quadrant-1 Depends
    quadrant-2 At release
    quadrant-3 Today
    quadrant-4 Tomorrow
    React Compiler: [0.5, 0.9]
    RSC and Server Actions: [0.75, 0.75]
    Actions: [0.25, 0.8]
    "Metadata, scripts, and stylesheets": [0.25, 0.7]
    PropTypes and defaultProps: [0.5, 0.35]
    PropTypes and defaultProps: [0.5, 0.35]
    Legacy Render: [0.5, 0.25]
    Legacy Context: [0.25, 0.3]
    Testing Utilities: [0.25, 0.2]
    SECRET_INTERNALS: [0.75, 0.2]
</div>
</section>

<section data-slide>

## API Removals

<div class="flex flex-col gap-0 sm:flex-row sm:gap-12">
    <div>

### React

- [`propTypes`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-proptypes-and-defaultprops)
- [`defaultProps`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-proptypes-and-defaultprops)
- [`contextTypes`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-removing-legacy-context)
- [`getChildContext`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-removing-legacy-context)
- [string `refs`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-string-refs)
- [`createFactory`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-createfactory)
- [Module pattern factories](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-module-pattern-factories)
  </div>
  <div>

### React DOM
- [`test-utils`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-react-dom-test-utils)
- [`ReactDOM.render`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-reactdom-render)
- [`ReactDOM.hydrate`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-reactdom-hydrate)
- [`unmountComponentAtNode`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-unmountcomponentatnode)
- [`findDOMNode`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-reactdom-finddomnode)

### Other
- [`PropTypes`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-proptypes-and-defaultprops)
- [`react-test-renderer/shallow`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-react-test-renderer-shallow)
  </div>
  </div>

**[React 18.3 warns for all removed APIs.](https://github.com/facebook/react/blob/main/CHANGELOG.md#1831-april-26-2024)**  
**[`react-codemod` is available for project-wide migrations.](https://github.com/reactjs/react-codemod)**

</section>

<section data-slide>

## You can't get fired with React 19
❌ [SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#libraries-depending-on-react-internals-may-block-upgrades)  
✅ [_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#libraries-depending-on-react-internals-may-block-upgrades)

*([Over 12k files with this reference in GitHub](https://github.com/search?q=SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED&type=code))*
</section>

<section data-slide>

## Type Safety and React 19

### Runtime prop-checking removed

```diff lang="tsx" ins=/\= 'Hello, world!'/ ins=/: Props/
- import PropTypes from 'prop-types';
-
- Heading.propTypes = {
-   text: PropTypes.string,
- };
- Heading.defaultProps = {
-   text: 'Hello, world!',
- };

+ interface Props {
+   text?: string;
+ }

export function Heading({ text = 'Hello, world!' }: Props) {
  return <h1>{text}</h1>;
}
```

## TypeScript improvements and changes
- [Removed deprecated TS types](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-deprecated-typescript-types)

### [Better useReducer typings](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#better-usereducer-typings)
```diff lang="tsx"
- useReducer<React.Reducer<State, Action>>((state, action) => state)
+ useReducer((state: State, action: Action) => state)
```

### [`useRef` requires an argument](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#ref-cleanup-required)

```diff lang="tsx"
- useRef();
+ useRef(undefined);
// consiquently, MutableRef is now deprecated
```

### [`ref` cleanup required](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#ref-cleanup-required)

```diff lang="tsx"
- <div ref={current => (instance = current)} />
+ <div ref={current => {instance = current}} />
```

### [`ReactElement` changed from `any` to `unknown`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#changes-to-the-reactelement-typescript-type)
```
type Example = ReactElement["props"];
//   ^? Now 'unknown' (not 'any')
//   (Has no effect where type arguments are passed)
```

### [The JSX namespace in TypeScript](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#the-jsx-namespace-in-typescript)
```diff title="global.d.ts"
+ declare module "react" {
    namespace JSX {
      interface IntrinsicElements {
        "my-element": {
          myElementProps: string;
        };
      }
    }
+ }
```

*See the [React 19 RC Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#typescript-changes) for details and codemods.*

</section>

## Testing and React 19
- EoL for `react-test-renderer`

## Compilation and React 19
- React Compiler
- React Server Components
- Server Actions

## The Web Platform and React 19
- Better Web Components support
- Utilizing <form>
- Direct support for document metadata resources


## New Deprecations
- [`element.ref`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#deprecated-element-ref)
- [`react-test-renderer`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#deprecated-react-test-renderer)
---

Before I got into full-time Developer Education, I worked for half a decade as a frontend architect for a multi-application SaaS.  
And a big part of my role was to break down and company-wide refactors into achievable pieces.

When React 18 was released, I produced a migration guide.  
And, today, I'm going to share the same thing for React 19.  

Today, I'll be your migration architect.  

This is a high-level overview — not in depth.  
My hope is that you use this video, the supporting doc, or my course to dive deeper into any topic

But first, who the hell am I?

I'm chan (@chantastic).  
I work at WorkOS, where we build the best login box on the planet: AuthKit.  
And it's free for 1M monthly active users and works with any tech stack.  
If you need secure authentication, it's irresponsible not to use it.

Before that I:  
Hosted React Podcast.  
And created beginner-friendly React resources like reactpatterns reactcheatsheet.  
Helped tell the story of React in the React Documentary.  

Let's get into this migration.

## React adds client-side capabilities
### Actions
### `use` (it's not a hook)
### Native document metadata support
- Not an end to APIs like `react-helmet` but a better foundation

## Conclusion
React 19 is an important upgrade, even if you're only building client-side apps.  
The elimination of long-deprecated APIs clarifies the surface area of the library.  
And new capabilities around actions, native metadata support, and post-condition context codify patterns that were previously contested (but popular among developers) (or even just hard to do, like blocking render until external scripts and stylesheets are loaded).
This gives us a React Way to rally around.
I'm very excited about this.

React Compiler brings great ergonomic advantages from libraries like Svelte and Solid te React.  
Making it possible to write code that is easier to write, read, and maintain - without sacrificing performance.

Server Compoents and Server Actions promise a path forward for React devs to operate more full-stack.
This future is still unfolding and best practices, patterns, and APIs will unfold over the coming years.


---

- [React 19 RC Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
  - v18.3 is identical to 18.2 but produces warnings for deprecated APIs and required changes.
  - [New JSX transformer is required.](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
    - `ref` as prop
    - migration types are available
    - [Typescript changes](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#typescript-changes)
      - (lots here to cover)
  - New deprecations
    - `element.ref`
  - Removals (React 19 takes out the trash)
    - Legacy Context (`contextTypes` and `childContextTypes`)
    - string refs
    - module pattern factories
    - React.createFactory
    - react-test-renderer/shallow (must install package: `react-shallow-renderer`) but also use `react-testing-libdrary` instead
      - `react-test-renderer`
    - `act` is only remaining test tool and it comes in `react`. `react-dom/test-utils` is head.
    - ReactDOM.render -> ReactDOM.createRoot
    - ReactDOM.hydrate -> ReactDOM.hydrateRoot
    - unmountComponentAtNode -> root.unmount().
    - unmountComponentAtNode -> root.unmount().
    - findDOMNode (use a ref)
    - StrictMode: When double rendering in Strict Mode in development, useMemo and useCallback will reuse the memoized results from the first render during the second render
    - UMD builds no longer published. will need to use an ESM-based CDN like esm.sh
    - catchall for any of your code (or your dependencies) that use `SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`. you know what you did.
      - [Over 12k files with this line in GitHub](https://github.com/search?q=SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED&type=code)

- [React 19 RC](https://react.dev/blog/2024/04/25/react-19) What's new
  - Actions. "By convention, functions that use async transitions are called “Actions”. Actions automatically manage submitting data for you"
  - useOptimistic (atop actions)
    - React.useActionState
    - <form> Actions (automatically submit forms with actions)
      - <forrm action={}>: https://react.dev/reference/react-dom/components/form
      - <input action={}>: https://react.dev/reference/react-dom/components/input
      - <button action={}>
      - forms are automatically reset form for uncontrolled components. can be reset manually with `requestFormReset` React DOM API
    - useFormStatus
  - useActionState
    - accepts function to call
    - returns a wrapped Action to call. return the last result of the Action as `data` and the pending state as `pending`
      - (you may have heard this previously as `useFormState`. that's gone now)
  - useFormStatus (reads status of parent form, as if form was contexnt provider)
    - https://react.dev/reference/react-dom/hooks/useFormStatus
  - useOptimistic. show final state before success: https://react.dev/reference/react/useOptimistic
  - `use`
    - read promise with use and react suspends
    - !does not support promises created in render. React will warn.
    - use can read context after early returns (no children case). useContext couldn't do this because of hooks rules.
  - React Server Components
    - This is really only relevant to bundler authors, framework authors and those using a framework (in which case, the APIs you use will vary dramatically based on the framework)
    - https://react.dev/reference/rsc/server-components
  - Server Actions
    - https://react.dev/reference/rsc/server-actions
  - Access ref as a prop
  - Diffs for hydration errors
  - <Context> as a provider (vs <Context.Provider>, future deprecation)
  - Context breaks down in RSCs
  - ref's support cleanup functions (like useEffect, deprecation warning. can't call ref withnull)
    - (in TS) returning anything from a ref will error
    - codemod: no-implicit-ref-callback-return
  - useDeferredValue takes a default now
  - Support for document metadata
    - title, meta, link, can all be used inline (with interpolated values)
    - ensured to work across client-only, streaming SSR, and Server Component use cases
    - doesn't exactly replace react-helmet, but for inserts only. there's no active concept of merging (router-intergated)
  - Stylesheet support
    - precedence "default", "high" (ensures that required - external - stylesheets load before view)
    - works by utilizing suspense boundaries
    - automatically de-duped between component uses
      - <link> https://react.dev/reference/react-dom/components/link
      - <style> https://react.dev/reference/react-dom/components/style
    - basically same thing for scripts: https://react.dev/reference/react-dom/components/script
    - preloading resources: https://react.dev/reference/react-dom#resource-preloading-apis
    - automatically resolves hydration errors of unkown elements
    - better hydration errors
    - Support for Custom Elements



<script>
function goToPreviousHeading() {
  const headings = document.querySelectorAll('[data-slide]');
  const currentPosition = window.scrollY;

  
  const previousHeadings = Array.from(headings).filter(heading => {
    return heading.getBoundingClientRect().top < -10;
  });
  
  if (previousHeadings.length > 0) {
    const previousHeading = previousHeadings[previousHeadings.length - 1];
    console.log(previousHeading)
    previousHeading.scrollIntoView({behavior: 'smooth'});
  }
}

function goToNextHeading() {
  const headings = document.querySelectorAll('[data-slide]');
  
  const currentPosition = window.scrollY;
  
  const nextHeading = Array.from(headings).find(heading => {
    return heading.getBoundingClientRect().top > 10;
  });
  
  if (nextHeading) {
    nextHeading.scrollIntoView({behavior: 'smooth'});
  }
}

document.addEventListener('keydown', function(event) {
  // Use Ctrl+N (or Cmd+N on Mac) to trigger the function
  if ((event.ctrlKey) && event.key === 'n') {
    event.preventDefault();
    goToNextHeading();
  }
  if ((event.ctrlKey) && event.key === 'p') {
    event.preventDefault();
    goToPreviousHeading();
  }
});
</script>

