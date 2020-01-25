<Head>
  <title>Learn React | Essential React > Fetching pokeapi data</title>
</Head>

# Essential React

## Fetching pokeapi data

<iframe width="560" height="315" src="https://www.youtube.com/embed/6UXKUC5yPJY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Once again we’re going to jump headlong into the abyss into an empty Javascript file, so if you have the project from the last lesson still open, just delete it all. You don’t need it, we’re going to start over again and reinforce some of the things you’ve already learned. For right now, I want to set up some data that comes from an `api`. To do that I am going to use this site, “Pokeapi”. It’s at Pokeapi.org. They have a really cool `api` that’s open and lets you play with some fun data. So let’s just grab this url, and we use `fetch` to get that data. Now I’m just going to assume that works and we don’t have any problems and just handle the working case, in which case we’ll have a response and we’ll call `.json` on it. Just to verify that we actually have that request working properly, let’s take the resulting data and `console.log` it. Right now, we are not getting anything, so I’m going to open my console to see what’s up. We’re getting blocked because we’re using HTTP, and we’re mixing that with our sandbox here, which is HTTPS. We can fix that by changing that to HTTPS. We are in business, so close that console, we’re getting that there. Now what I want to make is something that actually shows a pokemon, so I’m going to use the `api` for getting a specific pokemon, and because I’m a nerd I know that the first one is bulbasaur. This is great, we’re all the data that we need. Now, I want to make this a callable function, so I’m going to take that out, we don’t want a `console.log` anymore now that we know that it is working, and I’m going to wrap it in a function. [Example]. What we’ll do is we’ll take an `id` as an argument, and we’ll change this up just a little bit. We’re going to us Javascript template strings and interpolate the `id` that we get. Now we can call this function in our apps, call it with an `id`, get that pokemon as `.json` data.
