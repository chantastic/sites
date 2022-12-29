---
title: ADR — Architecture Decision Record
date: 2022-12-28
layout: layouts/post.njk
---

Decision fatigue is real and it sucks.

For 8 years, I worked at an organization that was allergic to decisions.
Rather, they'd make decisions and then weasel out of them when things got challenging.

From that experience, I came to believe that ["disagree and commit"](https://en.wikipedia.org/wiki/Disagree_and_commit) is a toxin — if leaders and managers aren't equally required to commit.

Of course, honoring a decision, requires a form of written agreement.
I started small with a folder of markdown files called `decisions`. It was a blame-free way for anyone to peer into the past, see why everyone made the decision they did, and determine if the the current shortcomings are still within the predicted bounds.

Earlier this year, I was delighted to learn that [Shopify uses "decision logs" to unite their teams](https://youtu.be/2LMaihPQKus?t=1717) around decisions.

{% youtube-video 'https://youtu.be/2LMaihPQKus?t=1717' %}

But how is a decision log tracked? What's the format? How are changes superseded?

My directory of markdown files was pretty ad-hoc.
And I didn't get into the nitty-gritty of Shopify's approach with Ryan.

## Welcome Architecture Decision Records

I saw this tweet by Charity Majors and the term "decision record" imediately peaked my interest.

{% tweet 'https://twitter.com/mipsytipsy/status/1601441441196040192?s=20' %}

The [Architecture Decision Record is a document format described by Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions). Each record requires a few pieces of information:

- date
- decision
- status
- context
- consequences

Consequences is my favorite. Because, when the going gets tough, the tough start wining about the known consequences of their own decisions.

## Money by mouths

I'm using the ADR structure on a number of projects — personal and professional this year and next.
In fact, [I just committed my first decision record to this very site](https://github.com/chantastic/sites/commit/50c28be923a19eea193f6273ee956b885a9e9f1a) using the command line tool [adr-tools](https://github.com/npryce/adr-tools)!

I'll let you know how it goes.

And if you're using them, let me know how they're working!

<!--
Some follow up:
- On the power of making a decision (most productive time at work coming from a mandate: "just use Rails")
- Doc on ADR tools
-->
