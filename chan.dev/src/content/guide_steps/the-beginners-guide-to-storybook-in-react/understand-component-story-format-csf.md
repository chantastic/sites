---
title: Understand Component Story Format (CSF)
description: Easily capture discrete UI states using Component Story Format (CSF). Discover this straightforward approach to writing stories that are portable, composable, and easily testable. Revolutionizing your UI development workflow.
date: 2023-11-09
egghead: https://app.egghead.io/lessons/egghead-understand-component-story-format-csf/edit
status: post-production
order: 8
---

[ensure that addon panel is disabled. we want to showcase it in the next lesson.]

Now that we've covered the bulk of Storybook's UI (and where it intersets with code),
Let's talk about defining stories of our own.

This is done with Component Story Format.

Let's be bold and delete all of the sample stories.
And while we're at it change the directory to `components` (as it would likely appear in a real project).

- Create a new file titled `Button.stories.js`.
- Import the `Button` component.
- Assign that `Button` component to `component` on the default export.
  - This default export is often referred to as "component meta".
- That's it!
  - Now we have a Storybook component, ready for stories.

```diff lang="js" title="src/components/Button.stories.js"
+import {Button} from './Button.jsx'
+
+export default {
+	component: Button,
+}
```

To add our first story,

- Export a named function.
  - I'll call mine `MyFirstStory` and assign an empty object.
- With just that empty object, we see a new story appear in the sidebar.

```diff lang="js" title="src/components/Button.stories.js"
import {Button} from './Button.jsx'

export default {
	component: Button,
}

+export const MyStory = {}
```

It's a silly Story tho. Let's flesh this meager button out with some args.

Remember that Storybook uses `args` to provide UI Controls in the Addons Panel.
Let's define the first label:

```diff lang="js" title="src/components/Button.stories.js"
import {Button} from './Button.jsx'

export default {
	component: Button,
}

export const MyStory = {
+	args: {
+		label: 'My Button',
+	},
}
```

Notice that we aren't using a templating language to render our stories.
CSF object syntax automatically spreads args onto components for use.
This creates an incredibly terse syntax where only the difference between stories are showcased.
