---
title: Manipulate Story State with Play Functions and Testing Library Events
description: Bring your UI narrative to life with Storybook Play functions. Use Testing Library to create stories from user events — perfectly simulating real-world usage.
date: 2023-11-09
status: draft
---

CSF has a second way to define stories: play functions.

Play functions are a way to create stories from user events and simulation interactions.

[Show `Page` during intro]

Let's learn how they work by creating new stories for the `Page` component.

```js
import {Page} from './Page'

export default {
	component: Page,
}

export const LoggedOut = {}
```

When a user is logged in, this page component looks completely different.

The way that the component is designed, this isn't something that we control via props.

We actually have to click this button.

Storybook provides a way to do that automatically, via play functions.

- start with a new story - `Loggedin`
- add an async play function definition to the story object

```js
export const LoggedIn = {
	play: async (context) => {
		const canvas = within(context.canvasElement)
		const loginButton = canvas.getByRole('button', {
			name: /Log in/i,
		})

		await expect(loginButton).toBeInTheDocument()
	},
}
```

```js
export const LoggedIn = {
	play: async (context) => {
		const canvas = within(context.canvasElement)
		const loginButton = canvas.getByRole('button', {
			name: /Log in/i,
		})

		await userEvent.click(loginButton)

		const logoutButton = canvas.getByRole('button', {
			name: /Log out/i,
		})
		await expect(logoutButton).toBeInTheDocument()
	},
}
```

---

[Screen: Storybook's UI with a focus on an interactive component within a story]

In this session, we'll animate our UI stories using Play Functions and integrate Testing Library events for a realistic simulation of user interactions.

[Screen: Code editor with a story file open]

Start by opening a story file where you've defined a component that reacts to user events, like a form or a button.

[Screen: Importing userEvent from '@storybook/testing-library' and writing a play function]

Import userEvent from '@storybook/testing-library'. Below your component story, write a play function which Storybook will use to simulate user behaviors.

[Screen: Demonstrating userEvent to simulate clicks and inputs]

Inside your play function, utilize userEvent methods to simulate interactions. For instance, use userEvent.click() to simulate clicks, or userEvent.type() to simulate typing into an input field.

[Screen: Running the play function in Storybook and observing the actions]

With the play function defined, run your story. Watch as the actions you scripted are carried out automatically in the Storybook Canvas, just like a user would do.

[Screen: Emphasizing the importance of simulating user flows]

Through Play Functions, you can script complex user flows, testing how your component responds to a series of interactions, ensuring your UI can handle real-world use.

[Screen: Adjusting the play function to refine the user interaction simulation]

Refine your play function to perfect the interaction sequence. This iterative process allows you to simulate the exact user behavior you expect in your application.

[Screen: Storybook UI showing the component after the play function has run]

By incorporating Play Functions and Testing Library events, you've brought your UI narrative to life, providing a dynamic way to demonstrate and test your components.

```

```
