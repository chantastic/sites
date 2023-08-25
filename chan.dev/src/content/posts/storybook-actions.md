---
title: Storybook Actions in Action
description: Stop using `console.log` to debug component events. Upgrade to event mocks with Storybook Actions. (Storybook 6 and 7).
tags: [storybook, component-driven-development]
publishDate: 2023-08-24
references:
  - https://storybook.js.org/docs/react/essentials/actions
tldr: |
  Stop using `console.log` to drive component implementation.
  Upgrade to event mocks with Storybook Actions.
  - 👻 Actions are defined in stories, not component code
  - 👀 Actions can be shared across all stories
  - 🤝 Actions can be triggered by interactions (using testing-library/dom)
shoutouts:
  - storybook
---

![](./storybook-actions/storybook-actions_cover.png)

Let's talk about `console.log`-driven development.
We all do it.
So, instead of fighting it, let's _upgrade_ it with Storybook Actions.

:::hidden-script

Let's dive in…
:::

## Feature instability and mitigations

Storybook actions are a feature of Storybook 6 and 7.

There's an [active design proposal](https://github.com/storybookjs/storybook/discussions/23649) to make them work like conventional testing mocks. This would be a welcome change, imo.

Knowing that a change is on the horizon, let's focus on the features of the current API that will remain (or migrate easily with codemods).

## Feature Overview

In a fresh Storybook 7 installation ([sandboxes here](https://storybook.new/)), we find two example components configured to use Storybook actions.

The included Button stories log the common event — `onClick` — when clicked. Logs can then be expanded to show full event details.

![Story for Button that has been clicked. The Actions tab shows a logged `onClick` common event. This includes the React Event details](./storybook-actions/storybook-actions_button.png)
​
Heading stories also log events but this time with custom events `onLogin` and `onCreateAccount`. These events are logged when the respective buttons are clicked.

![Story for Heading that has had Login and Sign up buttons clicked. The Actions tab shows a logged `onLogin` and `onCreateAccount` custom events. These include the React Event details](./storybook-actions/storybook-actions_logged-out.png)

<!-- The Page stories are different. Even though they compose the Heading and Button components, no events are logged. This happens because the event callback props aren't part of the Page component interface.

![Story for Page no actions logged. This happens because the Page does not have a any events exposed as part of it's interface](./storybook-actions/storybook-actions_page.png) -->

Actions pair perfectly with [Storybook interactions][]. Interactions are a way to document component states thru simulated user input. Interactions trigger their corresponding actions.

[Storybook interactions]: https://storybook.js.org/docs/react/essentials/interactions#page-top

![Story for Page that has had Login and Sign up buttons. The Log in button was clicked via Storybook interactions (play function), using testing-library/dom. The Interactions tab shows that the event was executed. And the Actions tab shows that the callback was called, with the React Event details.](./storybook-actions/storybook-actions_page-interaction.png)

:::hidden-script

Upgrade your `console-log`-driven development workflow with Storybook Actions.

Storybook actions can log event details, across stories, for both common and custom events.

(full segment script)

We have more videos on how to use this. So follow for more component-driven development tips.
:::

## Add actions with argTypes

Let's define actions for the example Button component.

- Open the story file and locate component `meta`.
- Add an `argTypes` property if one doesn't exist.
- Add an `onClick` property (this needs to match the component prop name).
- Set the value to `{ action: "clicked" }`. (The logged text can be anything we like.)

```tsx ins={9}
// Button.stories.tsx
// (surronding code omitted)
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "onClick" },
  },
} satisfies Meta<typeof Button>;
```

Now click your button in Storybook and watch the Actions log!

![Animated gif of React Events being logged as the Button story is clicked.](./storybook-actions/storybook-actions_button-actions.gif)

:::hidden-script

Inspect actions in Storybook without litering your implementation with `console.log` statements!

(full segment script)

This is a great way to test and log event data without touching implementation code.

We have more videos on how to use this. So follow for more component-driven development tips.
:::

## Test actions with interactions

Let's add an interaction to the example Button component.

- Create or find a new story.
- Add a `play` function to the story object.
- Within the `canvasElement`, find the button.
- then simulate a click event.

```tsx ins={6-12}
// Button.stories.tsx
// (surronding code omitted)
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", {
      name: /Button/i,
    });
    await userEvent.click(button);
  },
};
```

Now the story will run the interaction when it loads. Logging both the interaction and the action — in their respective tabs.

![Image of an interaction story that automatically plays a user event over a story. An interaction is logged and an 1 action is showing as logged in the Actions tab.](./storybook-actions/storybook-actions_button-interaction.png)

:::hidden-script

Storybook actions and interactions are a match made in heaven.
:::

## Lessons learned

`console.log`-driven development is something I do when driving out a component implementation. It's a quick, cheap way to ensure that events are hooked up (early in the process).

But log statements has one **huge drawback**: they live in component code. And I'm guilty of pushing a log (or a few dozen) into production.

Storybook actions let you validate implementation in story files, leaving component code alone.
