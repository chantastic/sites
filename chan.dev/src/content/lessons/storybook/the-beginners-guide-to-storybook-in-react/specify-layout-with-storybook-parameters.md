---
title: Specify Layout with Storybook Parameters
description: Take control of story presentation with Storybook Parameters. Expertly adjust the layout to ensure ideal rendering for viewers.
date: 2023-11-09
status: post-production
order: 12
---

Story objects use Parameters to set configuration in Storybook.

Let's use a common Storybook Parameter (`layout`) to learn how they work.

In this `Page` component, our default layout produces a little padding around the component.
But for a full page, we may prefer to see the story `fullscreen`.

- Add a `parameters` object to the `LoggedIn` Story
- Then define `layout: 'fullscreen'`

Now the Story takes up the whole canvas.

```diff lang="js" title="src/components/Page.stories.js"
export const LoggedIn = {
+	parameters: {
+		layout: 'fullscreen'
+	}
  // ...
}
```

But now `LoggedIn` and `LoggedOut` have different layouts.
That's confusing.

We could fix that by duplicating the parameter.
But that's a bit cumbersome.

```diff lang="js" title="src/components/Page.stories.js"
export const LoggedIn = {
+	parameters: {
+		layout: 'fullscreen'
+	}
  // ...
}
```

A better way to is to move the layout parameter to the component meta.
This applies the parameter to all stories.

```diff lang="js" title="src/components/Page.stories.js
export default {
	component: Button
+	parameters: {
+		layout: 'fullscreen'
+	}
}
```

There's another stardard layout that works great for atomic components like `Button`.

[Open button file]

At the component level, let's define our `parameters` object.
And apply the layout `centered`.
This puts the component right in the middle of the canvas.

```diff lang="js" title="src/components/Button.stories.js
export default {
	component: Button,
+	parameters: {
+		layout: 'fullscreen'
+	}
}
```

And just to be thorough, if we wanted to overwrite back to the dafault for a single story.
We can use the third (default) layout `padded`.

```diff lang="js" title="src/components/Button.stories.js
export const MyFirstStory = {
+	parameters: {
+		layout: 'padded'
+	}
	// ...
}
```

This is just one way to use parameters to communicate confugiration to Storybook.
But the pattern is the same across options and addons.
