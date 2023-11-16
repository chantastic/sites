---
title: Configure Storybook with Global Stylesheets and Fonts
description: Ensure your Storybook environment mirrors your production setup. Learn to add global stylesheets and fonts, creating a consistent look and feel across your project and component library.
date: 2023-11-09
status: draft
---



[Screen: Open the .storybook/preview.js file in the code editor]

To align your Storybook environment with your production setup, we'll add global stylesheets and fonts. This ensures consistency in the look and feel of your components during development.

[Screen: Demonstrating how to import global CSS]

In your .storybook/preview.js file, import your global CSS file. Use a statement like import '../src/styles.css'; to bring in styles that are applied throughout your app.

[Screen: Displaying a web page with custom fonts and styles applied]

If your project uses custom fonts, make sure these are included in your global stylesheet. Specify @font-face declarations or import them from a web font service.

[Screen: Show Storybook reflecting the new global styles]

With the styles imported, open Storybook to see the changes reflected across all components. Your components should now display with the global styles and fonts applied, just as they would in your app.

[Screen: Highlighting the consistency between Storybook and the production environment]

Inspect your components for visual consistency. The goal is to have them look identical to how they would appear in your production environment.

[Screen: Encouraging checking responsiveness and theme adherence]

Check different components in Storybook to ensure they respond to the global styles and fonts appropriately. This includes testing responsiveness and adherence to your design system's theme.

[Screen: Save changes and commit to version control, if applicable]

After verifying the styles, save your changes. If you're using version control, commit these changes to maintain a record of the update.

[Screen: Completed Storybook setup mirroring the production environment]

Now, your Storybook environment is a more accurate representation of your production app, making it an even more effective tool for developing and testing your UI components.
