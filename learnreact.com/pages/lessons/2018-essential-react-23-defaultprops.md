<Head>
  <title>Learn React | Essential React > defaultProps</title>
</Head>

# Essential React

## defaultProps

<iframe width="560" height="315" src="https://www.youtube.com/embed/2UJhhLzumRs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Now our `withPokemon` higher order component still has some opinions about rendering. This `loading…` state is uncustomizable, it would always render this `div` with three periods. It’s not even a proper ellipsis. Now to show you that higher order components and render props are not mutually exclusive, I’d like to use a render prop to customize this. We’ll start with the implementation and get into an error state. We’ll render `this.props.renderLoading`. Now we haven’t defined that prop where we’re using it yet, so we’re obviously going to get an error here. That said, it would be nice to present a default, and react components have a very nice `api` for this. In my component, I can use the `static` keyword to define some static fields. In my case, I want to define default props. Now, this isn’t something I’m making up., this is part of the React component `api`, and that’s going to be an object. And here I’m just going to define the `renderLoading` prop. It’s a render prop so it's going to be a function, and just to make it work we can use the same dumb `loading…` that we used before. [Example]. Now let’s prove that this is customizable by updating our application. We’ll go down here to `fetchComponent`. Along with `id`, we’re going to pass in `renderLoading` as a prop. We pass in a function, and some type of element. Here, I’ll use `h1`, and the text `FETCHING POKEMON!`. Now that was just too fast to be seen, so I’m going to go up and turn off my wifi for a second. So wifi is off, we refresh, and `FETCHING POKEMON` we have. Alright let’s get that internet back on real quick. So, as a recap, we can now add this `renderLoading` render prop, and to implement that optional render prop, we use `defaultProps` using the `static` keyword. We then just provide our default optional props, which is, in this case, `div` with `loading…`.
