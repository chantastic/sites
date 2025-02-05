---
title: Manipulate Story State with Play Functions and Testing Library Events
description: Bring your UI narrative to life with Storybook Play functions. Use Testing Library to create stories from user events — perfectly simulating real-world usage.
date: 2023-11-09
egghead: https://app.egghead.io/lessons/egghead-manipulate-story-state-with-play-functions-and-testing-library-events/edit
status: draft
order: 11
---

Let's build up a story that utilizes user events.

[Show `Page` component code].

Start by creating a new component file: `src/components/Page.js`.

- `import` the `Page` component.
- Assign in to `component` on story meta
- And export a single story that rendres the page in its no-args logged-out state.

```diff lang="js" title="Page.stories.js"
+import {Page} from './Page'
+
+export default {
+	component: Page,
+}
+
+export const LoggedOut = {}
```

Great!
Now we have a story that renders this page.

We can interact with it right in Storybook.
And see that clicking the `Log in` button renderes the logged in state of the component.
But there's a problem.

We can't use args to make a new story for this.
We have to actually click this button.

If you've been testing UI as long as I have, you know that manual testing is a recipe for bugs.

Fortunately, Storybook automatically simplate user events: Play functions.

Let's implement one.

- Add a story. I'll name mine `LoggedIn`
  - By default, it renders in the default logged in state. That's expected.
- Define a `play` property on the story object.
- Assign an anonymous async function that takes `context` as an argument.
- Use the `within` helper to create a testing `canvas`.
- And query that `canvas` for a `Log in` button, using a `testing-library` query.
- Finally, simulate a user click event, using `testing-library` events.

```diff lang="js" title="Page.stories.js"
+ import { within, userEvent } from '@storybook/test';

import {Page} from './Page'

export default {
	component: Page,
}

export const LoggedOut = {}

+export const LoggedIn = {
+	play: async (context) => {
+		const canvas = within(context.canvasElement)
+		const loginButton = canvas.getByRole('button', {
+			name: /Log in/i,
+		})
+		await userEvent.click(loginButton)
+	},
+}
```

Once we arrive at the desired (`LoggedIn`) state, for our story, we can also make assertions about what we expect to see.

- Query the canvas again for the `Log out` button.
- `expect` it `toBeInTheDocument`

```diff lang="js" title="Page.stories.js" ins=/, expect/
import { within, userEvent, expect } from '@storybook/test';

export const LoggedIn = {
	play: async (context) => {
		const canvas = within(context.canvasElement)
		const loginButton = canvas.getByRole('button', {
			name: /Log in/i,
		})

		await userEvent.click(loginButton)

+		const logoutButton = canvas.getByRole('button', {
+			name: /Log out/i,
+		})
+		await expect(logoutButton).toBeInTheDocument()
	},
}
```

With Play function, simple examples like this or complex user flows.
This is an incredible way to bring UI narratives to life and protect real-world experiences.
