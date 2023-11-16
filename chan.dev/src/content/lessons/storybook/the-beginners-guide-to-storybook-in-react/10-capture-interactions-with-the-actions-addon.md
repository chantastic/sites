---
title: Capture Interactions with Actions Addon
description: Seamlessly capture and analyze user interactions with the Actions Addon. Learn to log events — like click, hover, focus, and more — to elevate manual testing and debugging.
date: 2023-11-09
status: draft
---

[React specific]
[maybe use an example where I add `console.log` to the demo]

`console.log` just works, right?
It sure does, but we can do better in Storybook.

Let's use Storybook Actions to persistant `console.log` spies on our components.

- In component meta, add an `argTypes` object
- Add a `key` for the event prop you'd like to observe
- Finally, provide an object with the `action` string you'd like to log.

Now the Actions Addon Panel will log `onClick` actions!

```diff lang="js" title="src/components/Button.stories.js"
export default {
	component: Button,
+	argTypes: {onClick: {action: 'onClick fired'}},
}
```

(Note: you may see a different event prop, depending on the framework you're using. Just make sure that it matches the prop name.)

Let's add some actions to the `Page` component too…

[Open the source code]

The `Page` uses a number of `on{Events}`.
We could match each individually (like we did for button).
or we could match all of them via regex.

- Add an `argTypes` object to component meta.
- Add an `actions` object and in it
  - Define `argTypesRegex`
  - Spyng on all events that start with(`^`) `on` and match any number of additional characters (`.*`)

```diff lang="js" title="src/components/Page.stories.js"
export default {
	component: Header,
  parameters: {
+   actions: { argTypesRegex: '^on[A-Z].*' },
  }
}
```
