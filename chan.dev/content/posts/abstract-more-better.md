---
title: Abstract more, better
date: 2020-04-16
---

I have one rule when abstracting code: create one abstraction per problem.

If you must say "and" when describe an abstraction, you haven't finished abstracting.

Unfortunately, people are sneaky with "and".  
They use "with" instead.

> This is a dropdown component with accessibility and style baked in. Aren't you so lucky that I made it so easy?

Don't fall for it.

Repeat it with "and":

> Dropdown _and_ accessibility _and_ styling huh? Sounds overreach-y.

Yes, it's hard to separate abstractions well.  
No, it's not impossible.  
No, separating at "and"s doesn't exclude you also providing a default composition.

While it might sound sweet to avoid understanding the individual complexities of all three problems _and_ their intersection, accepting overreaching abstractions exchanges the momentary discomfort of learning something with a long-term dependency on a personality or preference.

Do you trust this personality?  
Will they be a fair collaborator?  
Will they intelligently add capabilities as you need them?  
Can they be trusted with the keys to all the "and"s?

No.

The salesperson puts all their energy into the sale, not support.

Stable abstractions are those with personalities removed.  
They should live and die by their utility.

Solutions that are properly separated by "and"s can composed, recompose, and decompose gracefully.

Like evolution, useless abstractions fade away while useful ones replicate and extend their reach.

Isolated accessibility tools can be remixed into new, unanticipated expressions of dropdowns.  
Isolated styles can be partially applied to default browser elements and reach beyond zeitgeist of framework.

Mark might have you believe that I'm [anti-abstraction](https://twitter.com/markdalgleish/status/1250625893891891200), I'm not.  
The problem is that we don't make enough, cleanly isolated abstractions.

I want abstractions — with standard interfaces — that can compose, recompose, and decompose gracefully over time.
And I want lots of them so that product is never beholden to personality or preference.

_(A [less popular version of "Hot Garbage: Clean Code is Dead"](https://www.youtube.com/watch?v=7ri10aE-Idc) covers with with code.)_
