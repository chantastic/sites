---
title: React Conf Q&A
date: 2024-05-15
tags:
  - found
  - note
---

I’ve had the unique privilege of being at every React conf.

This is my first time on the React Conf stage.

My proposal was simple:

1. I want Q&A to hear from the React Core team
2. People ask bad questions. I’m sorry. You just do. Mean people are just faster to a microphone than nice people.
3. I want to ask 8 great questions

So here we are.

1. Questions about React Compiler
2. Questions about RSCs and React 19
3. Stuff happening in the community

This stage right now has the highest concentration of “Container Component articles”. If you google Container components I’ll be that you’ll be less than 2 clicks away from seeing Dan, Jason, or I.

—

Elm came to market at a very similar time as React.

But because Elm is also a language, it has a world class compiler errors. Frameworks like Svelte came out the gate as a UI compiler.

Lauren, I know that it was important to you to get the DX of the complier right. Can you share a few areas where you "sweat the details"?And did UI languages like Elm and Svelte play a part in how you’ve tailored messaging?

—

JSX and compilers have had an incredibly symbiotic history. First with JSX and Babel saddling up to each other for the win. And more recently with TypeScript.React has had an advantaged position with language compilers.

Satya, Does the new compiler mean that this relationships is over (or just changing)?If so, how does that effect interoperability with TypeScript and community support thru definitiley-typed?
(possible follow-up: I’ve seen some disappointment around React Compiler being released as a Babel plugin. What thoughts do you have to address other targets like typescript and SWC)
—

Mofei, watching your presentation, I was reminded of React’s original “virtual DOM.”For the first time, we could write interactive UI declaratively.But after a decade of jQuery, it just felt weird to release fine-grained control of DOM updates.I get this same sense from React.I’ve come to almost prize my hard-won knowledge around crafting the perfect `useMemo`.
Do you see people continuing to write React w/o the compiler? Or will that feel as antiquated as writing React without JSX? And how has sentiment and trust been been in your rollouts at Meta?

—

Dan, watching your talk I felt like I understood the layered architecture of React server components for the first time. And I know that this level of clarity takes a lot of open discussion and communication with the community. Something you’ve always done a tremendous job with.Seth opened the conference with React’s unique position as being an active R&D project where novel ideas can be tested at the scale of Meta.But there’s some real cultural challenges here.Where sometimes the explorations of the React team get interpreted as bible.And while React hasn’t changed demonstrably over the years, there’s this constant feeling of churn around best practice.
It’s even become a bit of a meme that the React docs are your twitter history.

How do we, as a community, productively engage with the open research nature of React?And do so with the same curiosity that you show?

—

Jason

With a compiler, we can clearly abstract away repetitive performance methods(like React useMemo). But there have always been minor irritations around JSX (self-closing tags, DOM attributes (vs HTML attributes), svg attribute support, etc. With React compiler, do you see opportunities to address these longstanding inconveniences?And (if you’ll entertain us even further) what classifications of developer experience do you see React Compiler targeting in the future?

—

Josh, I was SO stoked to see the new ergonomics you showed around HTML.

Tools like react-helmet have handled head elements in user land (for almost as long as React has been around)…

What made React 19 the right time to pull that functionality into the React framework. And were there any surprises incorporating it at a framework level?

(Follow-up: obviously all React projects are F-words. Can you tell us what the codename for HTML work was?

—

Satya

—

React’s success has resulted in some JS language casualties.
`Object.observe` was the first and most notable.
But web components _also_ suffered a major blow to React’s declarative component model.Now, conversely, we’re seeing a LOT of traction around signals.It seems like every non-React framework has signals now.And there’s even language proposal.Joe, Do you think that we’ll see React signals?Or are signals orthogonal to React?

—

React has seen a number of new APIs.

Most targeted at UI developers.Some targeted at framework authors.And now even some for machines (React Compiler).

Andrew, today you introduced new action and optimistic rendering hooks.Do you see these are developer-focused APIs or framework-level APIs?And if our framework already provides higher-level APIs, which should we prefer?
—

## Community

My last question is as existential one. (You can’t have me asking questions without at least one :)).

At React Conf, we are UI developers. A space where React is the dominant framework.
And you’ve communicated how React can keep up with the ecosystem, adapt to the competitive framework landscape, and innovate in new application development models.

But we’re seeing AI explode. Vercel is doing impressive work in generative UI using terrific primitives from Radix. Add React compiler and that automatically generated UI is now automatically efficient.
How do we — UI developers — adapt our skill to stay relevant over the next 5 years?
What skills should we hold onto, what skills should we readily hand off to technology, and what skills should we add?
