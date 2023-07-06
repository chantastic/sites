---
title: React Server Components Announcement Notes
publishDate: 2021-01-14
description: "React Server Components announcement notes cover new packages, demo app insights, setup, and impressions. Learn how to use the server-components-demo, view deployment examples, and explore additional resources. Gain insights into this experimental feature's benefits and limitations."
---

Three weeks after the announcement of React Server Components, I finally sat down [with friends](https://twitter.com/chantastic/status/1349710359049940992?s=20) to watch the event.

These notes are just a few ideas and links I'd like to hold onto for my next pass thru the demo app.

## Announcement

[Announcement Post](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html)
<br />

[server-components-demo](https://github.com/reactjs/server-components-demo)

{% youtube-video "https://youtu.be/TQQPAU21ZUw" %}

## Discussion

Real-time [discussion in Discord](https://discord.com/channels/105756917887950848/755466593261322301/799335521787838494) with the React Podcast community.

## New packages

| Name          | Use                  | Source                                                                       | Package                                                                |
| :------------ | :------------------- | :--------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| `react-fetch` | `fetch` wrapper      | [GitHub](https://github.com/facebook/react/tree/master/packages/react-fetch) | [npm](https://www.npmjs.com/package/react-fetch)                       |
| `react-fs`    | `Postgres` wrapper   | [GitHub](https://www.npmjs.com/package/react-fs)                             | [npm](https://github.com/facebook/react/tree/master/packages/react-fs) |
| `react-pg`    | Node.js `fs` wrapper | [GitHub](https://www.npmjs.com/package/react-pg)                             | [npm](https://github.com/facebook/react/tree/master/packages/react-pg) |

## Demo App Notes

[Matt Sutkowski](https://gist.github.com/msutkowski) lead our Discord discussion group thru the demo.  
He documented his findings and first impressions [in this gist](https://gist.github.com/msutkowski/90c90d04474ce51d0e56e96bb21e980d).

### Complications

When exploring this demo, remember that it has two goals:

- Introduce folks to an experimental feature
- Illuminate areas where framework builders ([Next.js](https://nextjs.org), [Remix](https://remix.run), etc…) can start integrating

I'm in that first group of people.  
If you're also in that group, stick to the [Interesting Things to Try](https://github.com/reactjs/server-components-demo#interesting-things-to-try) section of the README.  
This section gently introduces you to the proposed developer workflow.

If you go too far off course, you'll notice quickly that there is no Router.  
This is where frameworks will pick up.

### Setup

Because this is a full stack app, you'll need to setup a full stack environment.  
The steps are detailed in the [Setup](https://github.com/reactjs/server-components-demo#setup) and [DB Setup](https://github.com/reactjs/server-components-demo#db-setup) sections of the [README](https://github.com/reactjs/server-components-demo).

I'll re-iterate a comple points with some added practical details.

#### Node

You need `node >= 14.9.0`.

If you need to manage different versions of Node.js, consider [nvm](https://github.com/nvm-sh/nvm).  
It's what I use to jump between projects with different `node` requirements.

With nvm, run `nvm install 14` in the project root and you're good to go.

#### Docker (optional)

**UPpublishDate: Docker is optional. It's available for folks who prefer to run Postgres in a cointainer. The [README has been uppublishDated](https://github.com/reactjs/server-components-demo/commit/2b9eddd49b9648468ddeab9aee0e06eaf3edce5f) to make this even clearer.**

If you prefer not to install Postgres globally, you can use `docker-compose` to run the `server-components-demo`.  
Find [platform-specific instructions here](https://docs.docker.com/compose/install/).

On a mac, the quickest path to a demo is installing the [Docker Desktop Mac App](https://docs.docker.com/docker-for-mac/install/) — which includes `docker-compose`.

#### Postgres Setup (only necessary if you didn't use Docker)

_(if you don't want to endure this step, [Rodrigo Pombo](https://twitter.com/pomber) has a [DB-less fork of `server-components-demo`](https://github.com/pomber/server-components-demo/))_

DB Setup instructions are [here](https://github.com/reactjs/server-components-demo#db-setup).

[Platform-specefic installation instructions here](https://wiki.postgresql.org/wiki/Detailed_installation_guides).  
On a mac, the quickest path to a demo is installing [Postgress.app](https://postgresapp.com).

Personally, I manage a Postgres installation with [Homebrew](https://brew.sh).

- (with `brew` command available)
  — installed Postgres with `brew install postgresql`
  — run `brew services start postgres` to start the Postgres daemon
  — run `brew services stop postgres` to stop the Postgres daemon

With Postgres setup, follow the [remaining istructions](https://github.com/reactjs/server-components-demo#db-setup) to setup and seed a database for you demo app.

## Location oddities

Something to keep in mind is that `navigate` and `location` have nothing to do with url.

The user's "location" in the app is held in state and communicated as a query parameter to server-side requests — to provide the correct data.

This clearly a void that would be filled by a meta-framework and the implementation in the DEMO is a mimimum-required effort to prove the concept.  
This is not what real code would look like.
Same sentiment for inline Postgres queries in `.server.js` components.

## Deployable demos

- [verces/react-server-components](https://github.com/vercel/next-server-components)
- [netlify/server-components-demo](https://github.com/netlify/react-server-components-demo)
- [prisma/server-component-demo](https://github.com/prisma/server-components-demo)

## Other references

- [React Server Components by Addi Osmani](https://addyosmani.com/blog/react-server-components/)

## First impressions

All things considered, this is an enjoyable experiment.  
If you stick to the [Interesting Things to Try](https://github.com/reactjs/server-components-demo#interesting-things-to-try) section, there's a lot to be learned.
I'm grateful to the React Team for openly sharing these experiments with a workable public demo.
