---
title: React has trust issues
date: 2023-12-01
status: complete
---

React's core innovation is distrust of ​the DOM​.
Other UI libraries have a fairly trusting relationship with the DOM. They coordinate via reads and writes. React does not have this same trusting relationship and defaults to write-only.
But we have to read information from the DOM eventually. The DOM is where ​user input​, ​rendered element size​, and ​document events​ originate. We need that information. Specifically, we need the rendered element height to properly animate our ShowMore component.
React exposes explicit hooks for coordination.
One of these is ​DOM refs​.
Refs do a lot in React. But, for now, we just need them to read element height from the dirty, deceptive, dangerous DOM.
Assignment
Read the React docs on ​Manipulating the DOM with Refs​. Then take what you've learned to read, and log, the ​scrollHeight​ of your rendered ShowMore component text. You should see different values when the element expanded and collapsed. (For this assignment, simply log the value, ​onClick​).
Yesterday's solution
Watch my first assignment build on YouTube.

chan
