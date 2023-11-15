---
title: Specify Layout with Storybook Parameters
description: Take control of story presentation with Storybook Parameters. Expertly adjust the layout to ensure ideal rendering for viewers.
date: 2023-11-09
status: draft
---

[possibl move up. keeping all button stories together]
[goal: learn how to apply parameters to components]

```js
parameters: {
	layout: 'centered' // 'fullscreen', 'padded' (default)
}
```

1. complete at story level
1. move up to component level

---

[Screen: Storybook UI showcasing a default component view]

Storybook Parameters give you the power to customize the presentation of your stories, ensuring they look perfect on any device.

[Screen: Code editor with a story file open]

To get started, open your story file. We'll begin by adjusting the layout parameter to control the sizing and positioning of your component within the canvas.

[Screen: Adding the layout parameter to the story]

Add a parameters object to your default export and set the layout property. You can specify values like 'fullscreen', 'padded', or 'centered' to suit your needs.

[Screen: Viewing the component in different layout modes]

Switch to your Storybook canvas to see the impact. Your component now adheres to the specified layout, illustrating how it will be framed in different contexts.

[Screen: Highlighting the Viewport addon]

Next, let's tackle different device dimensions with the Viewport addon. This tool allows you to mimic the screen sizes of tablets, phones, and desktops.

[Screen: Adjusting viewport settings within the story parameters]

In your story's parameters, configure the viewport settings. Define the default size and any custom dimensions that are relevant to your design.

[Screen: Showing the component rendering in various viewport sizes]

Go back to your Storybook and use the Viewport addon to switch between different screen simulations. Observe your component's responsiveness and adaptability.

[Screen: Emphasizing the importance of responsive testing]

Responsive testing is crucial in a multi-device world. Storybook Parameters and the Viewport addon enable you to conduct thorough testing across a spectrum of display sizes.

[Screen: Completing the responsive checks]

With these settings dialed in, you've taken full control of your story's presentation, ensuring your UI is consistent and adaptive no matter where it's viewed.
