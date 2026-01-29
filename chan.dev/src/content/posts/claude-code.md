---
title: Claude Code - Patterns and Practices
date: 2026-01-28
tags: ["claude-code", "ai", "workflow"]
---

A collection of patterns, practices, and learnings for using Claude Code effectively.

## 2026

### Boris Cherny's Setup

Boris Cherny created Claude Code and shared how he personally uses it. Key insight: his setup is surprisingly vanilla - Claude Code works great out of the box.

**How to work like Boris:**

- **Run Claude in parallel**: Keep 10-15 sessions going simultaneously - 5 in terminal with OS notifications, 5-10 in browser. Treat AI as schedulable capacity, not a single-use tool.
- **Default to Opus 4.5 with thinking**: It's slower, but requires less steering. A right slow answer beats a wrong fast answer when you factor in iteration cost.
- **Maintain shared CLAUDE.md in git**: When Claude makes mistakes, document them immediately. Update it multiple times per week. Turn errors into team-wide guardrails.
- **Tag Claude in PR reviews**: Set up a GitHub action so Claude can update CLAUDE.md based on code review feedback. Embed agents into your collaborative workflow.
- **Iterate in Plan mode first**: Don't jump straight to auto-accept. Work through the plan until you're satisfied, then switch modes for implementation.
- **Build slash commands for repetitive work**: Create custom commands like `/commit-push-pr` for workflows you run dozens of times daily.
- **Use subagents as workflow primitives**: Treat specialized agents (code-simplifier, verify-app) as reusable building blocks, not monolithic solutions.
- **Automate formatting with PostToolUse hooks**: Let hooks handle code formatting automatically to prevent CI failures.
- **Pre-allow safe commands via `/permissions`**: Don't skip permissions entirely - use `/permissions` to whitelist safe bash commands across your team.
- **Share MCP configs across the team**: Check in configurations for tools like Slack, BigQuery, and Sentry so everyone benefits.
- **Always provide verification loops**: Give Claude browser access to test UI changes iteratively. This 2-3x's the quality of results.
- **Optimize for iteration cost, not token speed**: You don't trust AI - you instrument it. Build systems that reliably produce what you need.

**Full thread:**

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I'm Boris and I created Claude Code. Lots of people have asked how I use Claude Code, so I wanted to show off my setup a bit.<br><br>My setup might be surprisingly vanilla! Claude Code works great out of the box, so I personally don't customize it much.<br><br>There is no one correct way to…</p>&mdash; Boris Cherny (@bcherny) <a href="https://twitter.com/bcherny/status/2007179832300581177?ref_src=twsrc%5Etfw">January 28, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

**Sources:**
- [Original Twitter thread](https://twitter.com/bcherny/status/2007179832300581177)
- [Thread summary by Karo Zieminski](https://karozieminski.substack.com/p/boris-cherny-claude-code-workflow)
