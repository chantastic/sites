---
title: React 19
date: 2024-11-04
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

## React 19 Takes out the trash

React 19 removes a lot of long-standing APIs.

We can use v18.3 to `warn` about these APIs in the console.
v18.3 is identical to v18.2 (save for the warnings).

We'll cover the breaking changes and the wider-represented tread for React.

(this guide is more accurate than the blog post, which has some errors)
(i also found AI to be very inconsistent in knowing how best to migrate the suggestions)
:

[React Codemods](https://github.com/reactjs/react-codemod?tab=readme-ov-file#react-codemods-):
### replace-reactdom-render
### replace-string-ref
### replace-act-import
React fully embraces 'react-testing-library' approach.
### replace-use-form-state
React fully supports form-based submission approach.
### prop-types-typescript
React fully embraces TypeScript reality.

```diff lang="tsx"
import PropTypes from 'prop-types';

export function Heading({ text }) {
  return <h1>{text}</h1>;
}
Heading.propTypes = {
  text: PropTypes.string,
};
Heading.defaultProps = {
  text: 'Hello, world!',
};
```

```bash title="codemod"
npx react-codemod replace-prop-types-typescript
```

```diff lang="tsx"
interface Props {
  text?: string;
}
function Heading({text = 'Hello, world!'}: Props) {
  return <h1>{text}</h1>;
}
```

## React adds client-side capabilities
### Actions
### `use` (it's not a hook)
### Native document metadata support
- Not an end to APIs like `react-helmet` but a better foundation

## React to the The Future©
### Compiler
- Inspiration from compiled frameworks
### Server Components
- What server components are
- What server components are not
### Server Actions
- What server actions are
- What server actions are not

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







