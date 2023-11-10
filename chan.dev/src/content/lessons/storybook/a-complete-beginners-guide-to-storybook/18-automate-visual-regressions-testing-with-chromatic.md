---
title: Automate Visual Regression Testing with Chromatic
description: Ship UIs faster with Chromatic by automating visual and interaction tests for Storybook. Learn to connect CI/CD, streamlining stakeholder sign-off and generating versioned component documentation.
date: 2023-11-09
status: gpt
---

[Screen: Display Chromatic website and Storybook UI side by side]

Chromatic is a powerful service that automates visual regression testing for your Storybook components, making it easier to ship UIs with confidence.

[Screen: Showing the Chromatic signup or login page]

Start by creating an account on Chromatic or logging in if you already have one. Then, we'll connect Chromatic to your Storybook.

[Screen: Terminal with the project directory open]

In your terminal, navigate to your project directory. Install the Chromatic CLI tool with npx chromatic --project-token=YOUR_TOKEN, using the token you get from your Chromatic account.

[Screen: Running Chromatic CLI to set up the project]

Once installed, run the chromatic command. This will build your Storybook and upload it to Chromatic.

[Screen: Chromatic dashboard showing the build process]

Switch to the Chromatic dashboard where you'll see your Storybook being processed. Chromatic takes snapshots of each story, comparing them to previous versions.

[Screen: Highlighting the UI review and test results]

After processing, review the UI test results. Chromatic will highlight any visual changes or regressions detected.

[Screen: Integration with CI/CD pipeline]

Integrate Chromatic with your CI/CD pipeline for automated testing on every commit. Set up webhooks for Chromatic to receive notifications of changes.

[Screen: Approving changes and generating documentation]

When changes are detected, you can approve them directly in Chromatic. This ensures all stakeholders agree on the visuals before deployment. Plus, Chromatic generates versioned documentation for your components.

[Screen: Completed testing cycle with Chromatic]

By automating visual regression testing with Chromatic, you've streamlined the development process, enhancing collaboration and ensuring visual consistency across builds.
