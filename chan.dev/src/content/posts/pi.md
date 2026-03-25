---
title: pi
publishDate: 2026-03-24
tags: [ai, tools, vim]
---

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XzZgLDL0wZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>

I have a pattern.

Watches, power tools, keyboard layouts, microphones, PC builds — when I find a new thing, it eats me.  
I know this about myself.  
So when [Pi][pi] showed up on my radar a month ago, I didn't try it.

I knew exactly what would happen.  
I'd get into it, it would be good, and then I'd have to deal with the implications.

## the pattern

Every few years, the layer I'm working on starts to feel unstable.

Favorite text editors stop getting updates. TextMate, Sublime Text 2 — both dead.  
So in 2009, I learned [Vim](/vim). And Dvorak. At the same time.  
While my newborn was in the hospital with pediatric cancer.

Grasping for control, probably.  
But the logic was sound: invest in the transferrable thing. The thing a layer below. The thing that doesn't depend on someone else's business model.

I did the same with React. Everyone was building libraries and augmentations. I pressed into [fundamentals](/react-basics). And as those libraries lost favor, hunkering down on React panned out.

Financially, I'm the same way. Dave Ramsey Baby Steps or GTFO.

For me, freedom is being capable.

## the fear

I've built a lot on Claude Code. [Skills](/2026), [production pipelines](/rules-for-content), workflows I use daily.

And Anthropic is tightening the harness. They block [OpenCode](https://github.com/nicepkg/opencode). They block OpenClaw. Claude Code is their sticky product and they don't want you getting that sticky feeling with another agent.

If they change pricing, API access, or their stance on custom harnesses — and there are signs all three could shift — I'd have to rebuild everything.

That's the layer feeling unstable again.

## pi is the neovim of coding agents

If Claude Code is VS Code, Pi is NeoVim.

That analogy either excites you or warns you off.

Pi doesn't have a chatty onboarding flow. It has documentation and expects you to read it. The first thing I did was ask Pi what it can do. It read its own README and summarized it.  
RTFM, bro.

The core pitch is one line: *"Pi follows a philosophy of aggressive extensibility with minimal core."*  
No built-in sub agents.  
No plan mode.  
No permission popups.  
But you can build any of those as TypeScript extensions.

You start with nothing. You build up exactly what you need.  
Nothing you don't.

## what I actually found

I gave myself twenty minutes on camera. Here's what stood out.

**Multi-model switching.** I logged in with both Anthropic and OpenAI accounts. Thirty seconds each. Now I can swap between Claude and GPT mid-session with `Ctrl+P`. My skills, extensions, config — all of it works regardless of model. That's the hedge.

**Your skills already work everywhere.** There's an open standard called [Agent Skills][agentskills] — originally developed by Anthropic, now adopted across tools. A directory with a `SKILL.md` file, YAML frontmatter, and everything else is freeform. My Claude Code skills already followed this format. I asked Pi what I'd lose going cross-agent and the answer was: "Honestly, nothing."

There's a universal path (`~/.agents/skills/`) that both Pi and Claude Code check. Put your skills there and they work in both. I didn't have to commit to anything.

**Extensions are TypeScript.** Access to tools, commands, keyboard shortcuts, events, the full TUI. I installed a community questionnaire extension by dropping a `.ts` file into `~/.pi/agent/extensions/` and restarting. It worked.

And yes — you can run Doom in Pi. I'm not saying this is a selling point.  
I'm not *not* saying it either.

## what I'm doing about it

I moved my skills directory to the universal path so both tools see them.  
I configured Pi with my preferred models as a fallback.  
And I started building extensions for the things I keep wishing Claude Code did differently.

Building against the least common denominator forces my skills to be portable. And if I ever need the full power of Claude Code's agent teams, I can upgrade into that path selectively. But the fundamentals travel with me.

Hard mode requires you to understand the technology.  
That's always been the unlock.

The twenty minutes are up.  
The consuming has begun.

🧰 chan

Using Pi? Building agent skills?  
Hit me up — I'd love to see what you're doing with it.

[pi]: https://pi.dev
[agentskills]: https://agentskills.io
[shitty]: https://shittycodingagent.ai
