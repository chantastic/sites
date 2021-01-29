---
title: Schedule Netlify Builds with GitHub Actions, Chron, and Webhooks
description: "Netlify build hooks are webhooks with one function: re-build your site when called. Any POST request to your Netlify build hook triggers a build. And you can POST to this hook right from your repo, using GitHub Actions…"
date: 2021-01-28
layout: layouts/post.njk
og:
  image: "https://chan.dev/og-image/schedule-a-netlify-builds-with-github-actions.jpg"
---

## Instructions

Add this GitHub Action to your repo at
`.github/workflows/schedule-netlify-build.yml`

```yml
# .github/workflows/schedule-netlify-build.yml

name: Schedule Netlify Build
on:
  schedule:
    # Customize schedule expression at crontab.guru
    # This one runs at 800 UTC daily
    - cron: "0 8 * * *"
jobs:
  build:
    name: Call Netlify build hook
    runs-on: ubuntu-latest
    steps:
      - name: Curl request
        run: curl -X POST -d {} #YOUR_BUILD_HOOK_URL#
```

### Tailor your cron schedule

Determine a build schedule and use [crontab.guru](https://crontab.guru) to describe it as a cron schedule expression.

```diff
-    # This one runs at 800 UTC daily
-   - cron: "0 8 * * *"
+    # This one runs every 6 hours
+   - cron: "* */6 * * *"
```

### Generate a Netlify build hook

Netlify build hooks are webhooks with one function: re-build your site when called. Any `POST` request to your Netlify build hook triggers a build.

Generate a new build hook here:
**Site settings > Build & deploy > Continuous deployment > Build hooks**.

![Settings path: Site settings > Build & deploy > Continuous deployment > Build hooks](https://d33wubrfki0l68.cloudfront.net/51b3c2b9b2cb2eb70fd9631385a2b0d2bc60b1ea/45997/images/configure-builds-build-hooks.png)
<small>Image from [Netlify build hooks documentation](https://docs.netlify.com/configure-builds/build-hooks/)</small>

_You have to name your hook. The name doesn't make much difference as long as it's unique and descriptive to you._

### Paste your build hook into the GitHub Action

```diff
-        run: curl -X POST -d {} #YOUR_BUILD_HOOK_URL#
+        run: curl -X POST -d {} https://api.netlify.com/build_hooks/#GENERATED_BUILD_HOOK_URL
```

### Push!

Push your new workflow up to your repository and watch the **Actions** tab. You'll seeing scheduled jobs show up, according to your schedule.

Here's what to expect: https://github.com/LunchDevCommunity/community-calendar/actions

## Extra credit

Get fancy and ensure that nobody spams your build hook with a [GitHub Action environment variables](https://docs.github.com/en/actions/reference/environment-variables).

## A Story

### Dynamic Site; Static Builds

Over at [lunch.dev](https://www.lunch.dev), we've built a [calendar of events](https://events.lunch.dev) in [Eleventy](https://www.11ty.dev) (a slick static site generator).

Events are listed under **Upcoming** and **Past** event headings based on their date. Because Eleventy generates static sites, that deterimation happens at build time.

If we want to keep data fresh, **we have to manually re-build the site at least once per day**.

Using Netlify build hooks, we can automate those builds on a schedule!

Paired with GitHub Actions, the cron job and build hook url stay in our code, not a third-party service.

## Resources

- [GitHub Workflow: `schedule` event](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events)
- [crontab.guru](https://crontab.guru)
- [Netlify build hooks](https://docs.netlify.com/configure-builds/build-hooks/)
- [lunch.dev community-calendar GitHub Actions source](https://github.com/LunchDevCommunity/community-calendar/blob/main/.github/workflows/main.yml)
- [time.is/UTC](https://time.is/UTC)
- [Schedule Your Netlify Build with GitHub Actions](https://ericjinks.com/blog/2019/netlify-scheduled-build/)
- [Schedule Netlify builds with GitHub Actions](https://www.ronaldsvilcins.com/2020/12/23/schedule-netlify-builds-with-github-actions/)

**Watch me and the lunch.dev crew struggle thru this the first time**

{% youtube-video "https://youtu.be/155Q4gDU1Uo" %}
