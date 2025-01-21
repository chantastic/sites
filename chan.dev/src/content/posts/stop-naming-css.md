---
title: Stop naming CSS
date: 2016-04-28
dateUpdated: 2025-01-19
tags:
  - found
  - note
  - talk
---

(A talk idea about atomic CSS)

Stop naming CSS

---

blissful ignorance

things i've learned about writing CSS that "scales down" to support newer developers.


# Abstractions

I wanted a layer above inline that could work with any pipeline. I wanted the same tools that I used on work sites to work with personal sites. I also wanted to be able to reliably recreate it on the fly. And it needed to work on all of our work platforms. Rails, nose, our three make-shift module systems, Jekyll and middle ma'am

# I have one guiding principle, that I should be able to plug something right into an HTML file and be able to play Ruth and publish a site. I shouldn't need a build system and NPM to publish stupid sites I think up.

---

Semantic CSS is dead and components killed it.

---

CSS in CSS

The early abstraction... Where we recreate what we know.

The long-term extraction, where we attempt to find something closer to the metal.

CoffeeScrip vs Babel

Sass vs Post

---

The reason we needed semantics before was because the Dom was the source of truth.

Now, it's an artifact and data is truth.

---

CSS Mastery

When web apps were starting we were told that we could solve problems by using more of the language features

We got onto the idea of features.

But year over year the industry has moved to using fewer and fewer features.

Ids, attributes, elements, all the features of sass (in grepable).

I think that there is no end to what features we shouldn't use... Until we inevitably get back to online styles.

But there's one big problem with inline styles: media-queries.

I believe that eventually this will get solved and we'll have better style APIs.

But until then, I want to talk about again minimizing the surface of CSS.

Removing composed classes. And, to an extent, removing naming.

### naming is hard

For any non-trivial piece of UI, no two people are going to create the same name for something. And it's something that is notoriously difficult to create rules around. Naming, extensibly, is an art. This is why we devote commities to it and they still get it wrong.

( point, components get named in a place where it doesn't even really matter because you can change it at import ).

---

Our constraints.

X devs, 6 designers.

Designers do everything from videos, graphic design, etc, to front end development.

-- There's little time to think in terms of best practices, reveiw, and establish patterns.

We have a 10 year old app.

-- we needed patterns that worked just as reliably in 10 year old apps (pre BEM, pre SPA, pre RWD, all the three letter acronyms as they do today

It needs to spawn technology.

-- rails apps, some nose micro apps, middleman, jekyll, React, Batman.js, and possibly Pheonix

?? What's the minim viable abstraction?

?? What works with all the great tools out there? PostCSS/Autoprefixer, CSS modules

?? What gives us the most flexibility between build systems?

?? What conventions are easy enough to internalize that, as classes are added, they are added consistently?

?? How do we write components that can be instantaneously shared between apps without adding stylesheets?

?? How do we take advantage of caching?

?? How can the classes be easily overridden? ( a problem with inline )

BONUS: how can we enforce relational styles and theming moving forward?

---

First of all, if you aren't concerned about responsive web design or can ship different versions to different devices. You can pretty much tune out at this point. Just use online styles. It has all the workflow benefits, it's first-class, etc.

I like JSX styles and rebass for this.

There are plenty of sites that don't do RWD. Rightfully so. It's painfully difficult.

In a lot of sites, you could get by with some clever max width and flexbox

---

Separation of concerns is a great mantra.

But on the fronted, they'd separation is in file name alone. Coupling always exists.

Examples of where this breaks down

---

CSS Fashion is determined by how hard the pattern is to use in practice

---

What did we accomplish? Well, at the end of the day, not a whole lot.

Sass put CSS in Ruby
Less in JS 
We out it in JSX and JS-like modules.

This is, again, short sighted.

Now, someday I hope that we have proper APIs for media-query aware elements. But until then, I want media-query CSS in CSS, where I can use it in any project, regardless of buildstep or tribal team knowledge.  CSS in CSS.

---

Intro

When I started working on the web, I looked around at all these super smart people and said to myself "you are nothing like these people. These people are actually smart. You're just cunning. But every smart person has something that have to do and hate. Do it for them"

So what does every developer hate?

That's right. CSS

CSS is the most convoluted system to ever use the word class. When people talk about wanting multiple inheritance in their language I always remind them of CSS.

Now, this plan worked out great. I'm still as dumb as ever but have a lot of Job security.

Now, there's been a lot happening in the CSS world. And I know a lot of you are just trying to make a decision on CSS that you aren't going to have to remake in 6 months.

This talk isn't to persuade to toward a certain ideology or framework but to tell you about the trends I've seen, as someone who lives and breathes CSS and the bets I'm making for myself and my team.

I want to start by saying that there aren't good solutions here. Only pragmatic ones.

Keep this tweet from Martin Fowler in mind as you listen to me.

---

The problem with semantics:

"Row" is in every framework. What does a "row" look like in every framework that supports RWD?

That's right, it's a column.

All our semantics will eventually degrade.

Maybe one day we'll have a VR Web browser, with a third plane and our semantics will break again.

(Intro to the idea of separating this out: column@mobile row@desktop)

---

Last year, I talked about inline styles. I think inline styles are great, and the future, once we solve this little problem: media queries.

There's just no way to access this and solve all of the first, render use-cases without extracting CSS in a bull step.

That's fine but it concerns me any time I co-opt the way I write styles to a framework. Think about Rails and the Asset Pipeline.

In retrospect, as a JS developer, you might think this doesn't apply. But this is a cautionary tail from someone who has had an impossible time working in an ecosystem not tailored toward my needs in a different language.

Rails = WEBACK, et al
CSS = JS in Rails

---

!!!

CSS is hard because it demands that you solve organizational problems with rules. And people are notoriously bad at adhering to rules. And rules arenotoriously bad at keeping up with technology/creativity.

So, the question for me has been how to put the rules in a place where people don't feel as stifled.


---


The tging I like about inline styles is that they are so close to the metal. Add top that the libraries you have today, and that closeness disappears.

