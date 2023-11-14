---
title: Analyze How Components Respond to Fixed Events with the Interactions Addon
description: Replay fixed behavior with precision using the Storybook Interactions Addon. Discover how it provides a detailed playback of testing library events, allowing you to thoroughly understand and analyze how your components react to predetermined scenarios.
date: 2023-11-09
status: draft
---

The Storybook Interactions Addon lets you replay predefined events and scenarios, providing a precise analysis of component responses.
It's invaluable for debugging and validating interaction flows.

Open the `Page/Logged Out` story in Storybook and in the editor.

Note that this full page composition lets us simulate logging in and out.

Open the Interactions panel tab.

- Ensure that Addons are visible
- And that the Interactions tab is selected.

Note that the Interactions panel is empty for this LoggedOut story.

(possible note: no props)

Now let's go to the Page Logged In story.

We see that unlink logged out, this story starts in the logged in state.
But how did it get into that state?
Our interecations panel tells us exactly how.
And we can replay all of the interaction events that created it.

[Replay the events]

- Let's replay these interactions from the beginning.
- We start in the logged out state of this page component.
- We expect to see a `Logged In` button
- We the click that button.
  - Which puts us in the Logged in state.
- Where we expect _not_ to see o `Log in` button.
- And, instead, expect to see a logged out button.

These look like jest assertions and testing-library events.
But how'd they get here?

Let's the `Page.stories` module.

- The `LoggedOut` story renders without any arguments.
- But the `LoggedIn` story defines an async play function.
  - This is what's responsible for running our interactions.
  - Let's check it out.
- We set up our canvas using and query an element `testing-library`
  - we can state expectations on those elements
  - interact with them

Play functions includes sequences like clicking a button, entering text, or submitting a form.
Use the userEvent library from '@storybook/test' to simulate these user actions.
