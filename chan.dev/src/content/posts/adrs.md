---
title: ADR — Architecture Decision Record
description: 'Overcome decision fatigue with Architecture Decision Records (ADRs), a structured format for documenting decisions and consequences.'
publishDate: 2022-12-28
---

Decision fatigue is real and it sucks.

When decisions aren't clear, people feel jerked around.

For 8 years, I worked at an organization that was allergic to decisions.
Rather, they'd make decisions and then weasel out of them when things got challenging.

From that experience, I came to believe that ["disagree and commit"](https://en.wikipedia.org/wiki/Disagree_and_commit) is a toxin — where leaders and managers aren't required to commit the same contributors.

Sticking to a decision requires a form of agreement, line-in-the-sand, waypoint, etc.
For me, it started small with a folder of markdown files called `decisions`. It was a blame-free way for anyone to peer into past decisions, learn how we came to that decision, and determine if the place we found ourselves was inside or outside of what we had predicted.

Earlier this year, I learned that [Shopify uses "decision logs" to unite their teams](https://youtu.be/2LMaihPQKus?t=1717) around decisions.

<div data-responsive-youtube-container>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2LMaihPQKus?si=KrVGzulcNOe-vP9x&amp;start=1717" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

But how is a decision log tracked? What's the format? How are changes superseded?

My directory of markdown files was pretty ad-hoc.
And I didn't get into the nitty-gritty of Shopify's approach with Ryan.

## Welcome Architecture Decision Records

I saw this tweet by Charity Majors and the term "decision record" hooked me.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Yeeesssss!! Lowkey obsessed with decision records/ADRs right now. If I were starting a new company (which I *am not,* and *will never*) I would be using these from day one.<br><br>And not just for technical decisions, either. For any decision with a blast radius of &gt;1 group. <a href="https://t.co/Zi4ndzSNA0">https://t.co/Zi4ndzSNA0</a></p>&mdash; Charity Majors (@mipsytipsy) <a href="https://twitter.com/mipsytipsy/status/1601441441196040192?ref_src=twsrc%5Etfw">December 10, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">My usual beef with reference architectures is that they launder the creators&#39; assumptions into &quot;best practices&quot; without helping you put your own needs in context. <br><br>Turns out there&#39;s a cheat code to get past this problem, and the team that built &quot;Emblem Giving&quot; found it: <a href="https://t.co/Y1IBIxmYYB">pic.twitter.com/Y1IBIxmYYB</a></p>&mdash; Forrest Brazeal (@forrestbrazeal) <a href="https://twitter.com/forrestbrazeal/status/1593354888821592066?ref_src=twsrc%5Etfw">November 17, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The [Architecture Decision Record is a document format described by Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions). Each record requires a few pieces of information:

- publishDate
- decision
- status
- context
- consequences

Consequences is my favorite. Because, when the going gets tough, the tough start wining about the known consequences of their own decisions.

## Money by mouth

I'm using the ADR structure on a number of projects — personal and professional, this year and next.
In fact, [I just committed my first decision record to this very site](https://github.com/chantastic/sites/commit/50c28be923a19eea193f6273ee956b885a9e9f1a) using the command line tool [adr-tools](https://github.com/npryce/adr-tools)!

I'll let you know how it goes.

And if you're using them, let me know how they're working!

<!--
Some follow up:
- On the power of making a decision (most productive time at work coming from a manpublishDate: "just use Rails")
- Doc on ADR tools
-->
