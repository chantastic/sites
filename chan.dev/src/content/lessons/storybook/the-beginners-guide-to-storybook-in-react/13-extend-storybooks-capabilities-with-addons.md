---
title: Extend Storybook's Capabilities with Addons
description: Storybook boasts a vibrant ecosystem of ready-made addons. Learn how to install and register the Accessibility Addon and promote UI inclusivity.
date: 2023-11-09
status: draft
---

Storybook is just the beginning.

[Screen: Addons page](https://storybook.js.org/integrations)

There are hundreds of community-made addons for Storybook that make Storybook even more powerful.

Let me show you my favorite Addon: [The Accessibility Addon](https://storybook.js.org/addons/@storybook/addon-a11y/) — built and maintained by the Storybook team.

Kill your Stoyrbook server.

Add the package to your project, using your preferred package manager.

```bash
yarn add @storybook/addon-a11y --dev
```

Then register the addon in the `.storybook/main` module.

```js title="main.js"
export default {
	addons: ['@storybook/addon-a11y'],
}
```

Start the server again and test it out!

We have a new Addon panel tab for Accessibility.
Our regular `Button` passes everything. No problem.

This works on our full `Page` too!

We see a couple violations: color contrast.
And this is where focusing elements is valuable.
We can see exactly which element triggered the violation.

Making the web accessible to all is a critical part of great UI development.
This addon makes it easier than ever to test for inclusivity.
