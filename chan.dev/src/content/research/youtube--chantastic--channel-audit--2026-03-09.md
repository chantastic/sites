---
title: Chantastic Channel Audit
description: A close look at the chantastic YouTube catalog. What's pulling, what's sitting, and where the growth actually is.
snapshotDate: 2026-03-09
kind: audit
subject:
  name: chantastic
  type: creator-channel
  url: https://www.youtube.com/@chantastic
tags: [research, content-strategy, youtube, creator]
tldr: The channel grows when it feels like learning in public. Series mostly sit. Vim, terminal, and AI tooling do the heavy lifting.
status: draft
priorities:
  - title: Double down on learning-in-public standalone videos
    summary: These are the videos with life in them. They beat the series work and feel most like the channel at its best.
    impact: high
    effort: low
  - title: Keep leaning into Vim, terminal, and AI tooling
    summary: This is the cleanest overlap between audience demand, creator interest, and past proof.
    impact: high
    effort: low
  - title: Stop treating YouTube like a course platform
    summary: YouTube is rough on sequential learning. If an episode cannot stand alone, it usually sinks.
    impact: high
    effort: medium
  - title: Sharpen titles around verdicts and personality
    summary: The best titles do not just name the tool. They carry a reaction, a verdict, or a point of view.
    impact: medium
    effort: low
---

## Context

- Goal: Have fun. Learn in public. Share the ride.
- Audience: Broad dev community. Web folks, tool nerds, curious builders.
- Constraints: Solo creator. Irregular output. Limited time against everything else life and work want.

## Snapshot

- Date: 2026-03-09
- Data source: `yt-dlp` flat-playlist catalog
- Scope: 216 videos
- Limits: `yt-dlp` rate limiting blocked individual enrichment, so this pass leans on titles, runtimes, and view counts from the catalog pull.

## Channel Summary

| Metric | Value |
| --- | --- |
| Total videos | 216 |
| Total views | 335,266 |
| Average views | 1,552 |
| Median views | 386 |
| 25th percentile | 211 views |
| 75th percentile | 878 views |
| 90th percentile | 2,506 views |
| 95th percentile | 5,560 views |
| Max views | 38,652 |

**This is a spiky channel.** The top 8 videos, just 3.7% of the catalog, account for about 52% of total views. Half the catalog sits below 386 views.

A few videos pull hard.
Most do not.

That does not mean the channel is weak. It means the signal is there, but it is concentrated.

## Format Breakdown

### By Content Type

| Format | Videos | Avg Views | Median Views | Total Views | Avg Duration |
| --- | --- | --- | --- | --- | --- |
| Vim/Neovim (standalone) | 3 | 23,727 | 22,652 | 71,182 | 6:10 |
| Cursor/AI Tools | 5 | 6,009 | 3,012 | 30,049 | 22:47 |
| Docs/Writing Tools | 1 | 18,276 | 18,276 | 18,276 | 19:17 |
| Deployment/Backend | 2 | 8,255 | 8,255 | 16,511 | 5:21 |
| VIM ALPHABET (series) | 25 | 3,487 | 1,442 | 87,192 | 4:15 |
| Essential React (series) | 25 | 521 | 331 | 13,045 | 2:07 |
| React Content (misc) | 73 | 684 | 251 | 49,992 | 6:32 |
| Essential npm (series) | 16 | 71 | 54 | 1,140 | 1:51 |
| Gear/Lifestyle | 1 | 3,176 | 3,176 | 3,176 | 10:48 |
| Other/Misc | 62 | 651 | 425 | 40,401 | 8:59 |

### By Title Pattern (standalone videos only)

| Pattern | Videos | Avg Views | Median Views |
| --- | --- | --- | --- |
| "I..." / "My..." (personal experience) | 11 | 7,728 | 689 |
| "How to / How I" | 3 | 7,736 | 299 |
| Tool review / First look / Crash course | 5 | 4,421 | 1,225 |
| Question hook ("Are you...?", "Can...?") | 8 | 2,049 | 678 |
| Other | 46 | 1,206 | 635 |

### Standalone vs. Series

| Type | Videos | Avg Views | Median Views |
| --- | --- | --- | --- |
| Standalone | 73 | 2,770 | 637 |
| Series episodes | 143 | 930 | 289 |

### By Duration

| Duration | Videos | Avg Views | Median Views | Max Views |
| --- | --- | --- | --- | --- |
| Shorts (<1min) | 14 | 569 | 271 | 2,987 |
| Quick (1-3min) | 90 | 673 | 360 | 10,229 |
| Medium (3-10min) | 64 | 2,330 | 637 | 29,071 |
| Long (10-30min) | 42 | 2,601 | 386 | 38,652 |
| Very Long (30min+) | 6 | 1,385 | 758 | 3,865 |

## Top 20 Videos

| # | Views | Duration | Title |
| --- | --- | --- | --- |
| 1 | 38,652 | 11:14 | My New Terminal for 2025 -- setup, neovim, and TMUX, oh my! |
| 2 | 29,071 | 3:55 | Why Learn Vim in 2019? VIM ALPHABET |
| 3 | 22,652 | 3:49 | How I use neovim in VS Code -- The Ultimate Code Editor |
| 4 | 20,712 | 16:55 | i tried Cursor... and it's good? (writing python with AI) |
| 5 | 19,368 | 4:33 | Move UP DOWN LEFT RIGHT with HJKL in VIM -- VIM ALPHABET |
| 6 | 18,276 | 19:17 | Pandoc Crash Course |
| 7 | 15,467 | 5:35 | I deployed PocketBase the WRONG WAY -- Code along |
| 8 | 10,229 | 2:20 | Connect useState and useEffect to Update Components with Data |
| 9 | 9,878 | 3:28 | Are you using Vim and VS Code together the right way? |
| 10 | 6,211 | 2:07 | Dispatch Async Actions in useReducer |
| 11 | 5,560 | 5:26 | How to Quit Vim -- VIM ALPHABET |
| 12 | 5,261 | 13:46 | React 18 startTransition, useTransition, and Suspense for data-fetching |
| 13 | 4,574 | 5:39 | Append Text in Vim with A -- VIM ALPHABET |
| 14 | 3,865 | 35:50 | I gave up on Homebrew (Installing Nix on macOS) |
| 15 | 3,176 | 10:48 | My Ultimate Travel Bag for 2025 |
| 16 | 3,170 | 25:10 | I'm switching! Cursor AI made me a Vue Developer |
| 17 | 3,084 | 16:40 | Run Open Models like DeepSeek locally with LM Studio |
| 18 | 3,012 | 5:53 | Please shut up, Cursor... |
| 19 | 2,987 | 0:53 | Course overview -- Essential React |
| 20 | 2,616 | 5:32 | Change Text in Vim with C -- VIM ALPHABET |

## Findings

### 1. There are really two channels here

Mode A is the one with heat.

These are the standalone "learning in public" videos. Personal takes on tools, setups, and workflows. "I tried..." "My new..." "I gave up on..." That lane is where the breakout videos live. Eleven videos in that shape average 7,728 views.

Mode B is the library.

These are the courses and series: Essential React, Essential npm, VIM ALPHABET, React Context, and the rest of the sequence-heavy work. They make up most of the catalog, 143 of 216 videos, and average only 930 views. Outside of VIM ALPHABET, most of them sit in the 100-500 range.

So the story is pretty plain: standalone experience videos beat series episodes by about 3x on average and a little over 2x on median.

Mode A is where the growth is.
Mode B is where the archive is.

### 2. Vim, terminal, and tooling are the home turf

The top 5 videos by views are all about Vim, Neovim, or terminal setup. VIM ALPHABET alone accounts for 87,192 views, or 26% of the channel's total views. The standalone Vim and Neovim videos average 23,727 views. Nothing else is close.

This makes sense.

The topic has search demand.
It ages well.
And it fits the channel voice.

This is not rented land. It is home turf.

### 3. AI and Cursor are the strongest second lane

Five Cursor and AI videos average 6,009 views. The top Cursor video, at 20,712 views, is the fourth biggest video on the channel.

This lane also runs longer, averaging 22:47, and seems to pull a broader audience than the pure Vim crowd.

So while Vim and terminal work look like the core identity, AI tooling looks like the biggest growth-side side quest.

### 4. React has volume, but not much pull

There are 73 React-related videos here. They average only 684 views.

The React videos that do work are usually narrow standalones built around one hook, one concept, one thing figured out. `useState` plus `useEffect`. `useReducer`. Something concrete.

The course-style React work mostly sits.

That tracks too. React tutorial land is crowded. It is hard to win there on completeness or polish against channels with teams behind them.

But a sharp "I figured this out" React video can still hit.

### 5. The pocket is 3-15 minutes

Medium-length videos, 3-10 minutes, and longer videos, 10-30 minutes, both average around 2,500 views.

That is the pocket.

Long enough to say something.
Short enough to feel easy to click.

The sub-3-minute stuff is a different story. There are 104 of those videos, almost half the catalog, and they average only about 650 views. Most of those micro-tutorials just do not get found.

### 6. Recent work is pulling harder

The most recent 30 videos average 3,800 views. The rest of the catalog averages 1,189. Recent median is 758 versus 360 for the older work.

That is a real lift.

The simplest read is that the channel has more momentum now than it used to, and a lot of that seems tied to the terminal and Cursor era.

### 7. Series fall off a cliff

In Essential React and Essential npm, the overview video gets 3-10x the views of the episodes that follow.

This is the classic YouTube course trap.

People do not use YouTube like a course platform. They drop in for the thing they need, not for the full sequence.

VIM ALPHABET works because each episode stands alone. "How to Quit Vim" is a searchable problem. It does not need the rest of the series to make sense.

## Recommendations

### 1. Double down on learning-in-public standalone videos

This is the clearest bet in the whole report.

These videos are about 3x stronger than series episodes. More importantly, they feel like the channel. They sound like you. They carry both the lesson and the point of view.

So make that the default format.

One video.
One experience.
One takeaway.

### 2. Keep making Vim, terminal, and tooling content

This is the strongest fit between proof, interest, and identity.

Twenty-six percent of all channel views come from Vim content alone. The audience already trusts this lane. And there is no shortage of new tools, setups, or config shifts to react to.

Keep going.

### 3. Lean into AI and Cursor content as a growth vector

Five videos. Thirty thousand views. A 6,009 average.

That is enough signal.

The "I tried X" frame works especially well here because the space is moving fast and people want a real reaction, not a brochure.

### 4. Rethink the course and series format

Outside VIM ALPHABET, the series numbers are rough. The npm series averages 71 views. React Context averages 243.

So either:

- stop making course-shaped YouTube content, or
- only make episodes that can stand on their own

That second option is the VIM ALPHABET lesson. Each episode has to solve a real, searchable problem by itself.

### 5. Title with personality and specificity

The best titles here do two jobs at once:

- tell me what this is about
- tell me how you feel about it

That is the move.

"My New Terminal for 2025" works better than a generic setup title.
"I deployed PocketBase the WRONG WAY" works better than a sterile how-to.
"Please shut up, Cursor..." works because it already has a point of view.

The tool is the subject.
The reaction is the hook.

## Limitations

- Upload dates are not available in flat-playlist output, so this report cannot calculate views-per-day or do reliable time-series comparisons across videos.
- Subscriber count was not included in the available dataset.
- Engagement rates such as likes and comments require individual video enrichment.
- Traffic sources are only available in YouTube Analytics.
- Audience retention is only available in YouTube Studio.

If a future pass can get enrichment through cleanly, the picture gets sharper.

Especially around chronology, engagement, and retention.
