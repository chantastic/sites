---
title: Observe Component Behavior with Actions Addon
descrisption: Gain unparalleled insight into component behavior with the Storybook Actions Addon. Learn to log every click, hover, and focus event, providing a clear window into real-time component responses.
date: 2023-11-09
status: post-production
egghead: https://app.egghead.io/lessons/egghead-observe-component-behavior-with-actions-addon/edit
order: 6
---

We've all added `console.log` statements to validate a component interface.
With Storybook Actions, that's a thing of the past!

- Open a `Button` sample story.
- Click the Shortcuts cog to ensure that the Addons Panel is visible.
- Finally, focus the Actions Addon.

Storybook can intercept events and log them to the Actions Addon Panel.
Every time I click this button, I see that the `onClick` event is being logged.

This doesn't just work with common events.
It also works with custom event names.

Open the `Header` story `Logged Out`.

- As we click the `Log in` button, we see the custom `onLogin` event called.
- And as we click the `Sign up` button, we see the custom event the `onCreateAccount` event called

So, what's making this work?

To work across every Story, this handler is implemented at a global level in `.storybook/preview` module config module.
It observes any `on*` props on a component interface.

We can disable this high-level observer and see that these no longer fire.

This is a fairly advanced default. So I'll show you a more direct way to do this in stories and components, later in the course.

Actions prevent a lot of extranious `console.log`ing and protects your code from accidentally committed debugging code.
