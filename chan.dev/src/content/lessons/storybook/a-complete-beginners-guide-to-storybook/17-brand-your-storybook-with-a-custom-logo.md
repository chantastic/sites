---
title: Brand Your Storybook with a Custom Logo
description: Personalize your Storybook workspace by adding a custom logo. Learn how to make your component library an integral part of your project's identity.
date: 2023-11-09
status: gpt
---

[Screen: Storybook interface with default logo]

Branding your Storybook helps to integrate the design language of your project or company. Let's add a custom logo to your Storybook workspace.

[Screen: Locate the .storybook/manager.js file]

First, open the .storybook/manager.js file. This is where you can customize the Storybook manager interface, which includes branding elements like the logo.

[Screen: Show how to import the custom logo]

If you don't have a manager.js file, create one. Then, import your custom logo at the top of this file: import myLogo from './myLogo.svg';.

[Screen: Writing the theme customization code]

Next, create a theme object and set the brandImage property to your imported logo:

javascript
Copy code
import { create } from '@storybook/theming';

const myTheme = create({
base: 'light',
brandTitle: 'My Company Storybook',
brandUrl: 'https://mycompany.com',
brandImage: myLogo,
});
[Screen: Apply the theme to Storybook]

Now apply this theme to Storybook by exporting it in the manager.js file:

javascript
Copy code
import { addons } from '@storybook/addons';

addons.setConfig({
theme: myTheme,
});
[Screen: Restart Storybook to see the new logo]

Restart Storybook to apply the changes. You should now see your custom logo in the top left corner, replacing the default Storybook icon.

[Screen: Encouraging to explore further customization options]

Feel free to explore further customizations such as changing the brand title or the theme colors to match your company's branding guidelines.

[Screen: Completed Storybook UI with custom branding]

With your new logo in place, your Storybook now carries the identity of your project or brand, creating a more cohesive development experience.
