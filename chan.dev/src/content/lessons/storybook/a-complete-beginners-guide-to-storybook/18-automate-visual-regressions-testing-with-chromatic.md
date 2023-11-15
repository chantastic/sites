---
title: Automate Visual Regression Testing with Chromatic
description: Ship UIs faster with Chromatic by automating visual and interaction tests for Storybook. Learn to connect CI/CD, streamlining stakeholder sign-off and generating versioned component documentation.
date: 2023-11-09
status: removed
---

[be logged into github. requires github. do everything in Arc split browser]

- Under project, we'll click the `Create a repository` button (to get this on GitHub)
  - Give it a name
- Login at chromatic.com (the easiest to fallow-along with is github)
- Add new project
  - Select the Repo we just created
- run `npm install --save-dev chromatic`
- run the build command with the token
- make a change and send a second build for comparision
- not that it captures everything, including our interactions
