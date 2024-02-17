---
title: Analyze How Components Respond to Fixed Events with the Interactions Addon
description: Replay fixed behavior with precision using the Storybook Interactions Addon. Discover how it provides a detailed playback of testing library events, allowing you to thoroughly understand and analyze how your components react to predetermined scenarios.
date: 2023-11-09
status: post-production
egghead: https://app.egghead.io/lessons/egghead-analyze-how-components-respond-to-fixed-events-with-the-interactions-addon/edit
order: 7
---

The Storybook Interactions Addon can reliably replay user events atop your components, putting them into states that props alone can't.

This is great for collecting and debugging user flows.

Open the `Page/Logged Out` story in the code editor and Storybook UI.

Click the Shortcuts cog to ensure that the Addons Panel is visible.
Finally, focus the Controls Addon.

Note that the Interactions panel is empty for this LoggedOut story. [Point to the story code]

Now look at the `Page/Logged In` story.

First we see that the user is logged in.
But how did it get into that state?

The Interecations panel tells us exactly how.
And we can replay all of the interaction events that created it.

[Replay the events]

- Jump back to the beginning.
- We start in the logged out state of this page component.
- We `expect` to see a `Logged In` button in the document.
- We then simulate a click.
  - Which puts us in the Logged in state.
- Where we `expect` _not_ to see a `Log in` button.
- And, instead, `expect` to see a logged out button in the document.

Let's take peak the code.

- The `LoggedOut` story renders without any arguments.
- But the `LoggedIn` story defines an async play function.
  - This is what's responsible for running our interactions.
- First, we set up our canvas using and query an element.
  - We can state expectations on those elements.
  - We interact with them.
  - And that produces the visual state of the story!

Play functions can include complex sequences like clicking a button, entering text, or submitting a form. Making it possible to setup stories for any possible code state!
