---
title: Observe Component Behavior with Actions Addon
descrisption: Gain unparalleled insight into component behavior with the Storybook Actions Addon. Learn to log every click, hover, and focus event, providing a clear window into real-time component responses.
date: 2023-11-09
status: draft
---

To see the Actions panel:

- visit any store.
  - I'll start with Button
- Make sure the Addons panel is visible and Actions table selected.
  You can find the Actions panel on any story, where the addons panel is enabled.

Every time I click this button, I see that the `onClick` event is being logged.

This doesn't just work with common event names.
It also works with custom event names.

Open the `Header` story `Logged Out`.

- As we click the `Log in` button, we see the custom `onLogin` event called
- And as we click the `Sign up` button, we see the custom event the `onCreateAccount` event called

So, what's making this work?

To work across Storybook, this handler is implemented at a global level in the `.storybook/preview` module.
It simply observes any `on*` arguments provided to components and logs them to the actions panel.

We can disable this high-level observer and see that these no longer fire.
These can be defined closer to the component, which we'll cover in lesson #X.

Something like this prevents a lot of extranious `console.log` that may accidentally get committed to code.
