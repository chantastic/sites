---
title: Create Engaging Component Playgrounds with Args and Controls
description: Create dynamic and engaging component playgrounds in Storybook with Args and Controls. Learn how these powerful tools create an engaging and interactive documentation experience.
date: 2023-11-09
status: draft
---

[start on the previous story with the addons panel closed, zoomed in]

When we define stories with CSF object syntax — that applies args to the component defined — we get something really cool for free.

One of those is Controls.

When involving Storybooks args system.

- Open the Addons panel and Contrals tab
- Start fiddling with the controls

We didn't write any code to get this playground.
We get it for free with Storybook's Args system and CSF Object syntax.

Once we have a new setup that we like, we can create a new story from that.

```js
export const IAmYourFather = {
	args: {
		label: 'NOOOO!',
		primary: true,
		backgroundColor: 'red',
		size: 'large',
	},
}
```
