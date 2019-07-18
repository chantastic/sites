exports.createPages = async ({ actions: { createPage } }) => {
  // // `getPokemonData` is a function that fetches our data
  // const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])

  // // Create a page that lists all Pokémon.
  // createPage({
  //   path: `/`,
  //   component: require.resolve("./src/templates/all-pokemon.js"),
  //   context: { allPokemon },  })

  // Create a page for each Pokémon.
  let courses = [
    {
      title: "React Basics (2014)",
      slug: "2014-react-basics",
      lessons: [
        { slug: "1-render-getting-started", title: "render - getting started" },
        { slug: "2-createelement", title: "createElement" },
        { slug: "3-jsx", title: "JSX" },
        { slug: "4-createclass", title: "createClass" },
        { slug: "5-jsx-transformer", title: "JSX Transformer" },
      ],
    },
    {
      title: "2018-essential-npm",
      slug: "2018-essential-npm",
      lessons: [
        { slug: "2018-essential-npm-1-overview", title: "Course Overview" },
        { slug: "2018-essential-npm-2-install-npm", title: "Get NPM" },
        { slug: "2018-essential-npm-3-npm-help", title: "npm help" },
        { slug: "2018-essential-npm-4-h-flag", title: "-h flag" },
        { slug: "2018-essential-npm-5-npm-install", title: "npm install" },
        { slug: "2018-essential-npm-6-npm-ls", title: "npm ls" },
        { slug: "2018-essential-npm-7-g-flag", title: "-g flag" },
        { slug: "2018-essential-npm-8-npm-root", title: "npm root" },
        { slug: "2018-essential-npm-9-npm-uninstall", title: "npm uninstall" },
        { slug: "2018-essential-npm-10-npm-init", title: "npm init" },
        {
          slug: "2018-essential-npm-11-package-json-dependencies",
          title: "package.json dependencies",
        },
        {
          slug: "2018-essential-npm-12-npm-outdated-and-npm-update",
          title: "npm outdated and npm update",
        },
        {
          slug: "2018-essential-npm-13-npm-prune",
          title: "npm prune",
        },
        {
          slug: "2018-essential-npm-14-npm-docs-npm-repo-and-npm-issues",
          title: "npm docs, npm repo, and npm issues",
        },
        {
          slug: "https://learnreact.com/lessons/2018-essential-npm-15-npx",
          title: "npx",
        },
        {
          slug: "2018-essential-npm-16-summary",
          title: "Course Summary",
        },
      ],
    },
    { title: "2018-essential-react", slug: "", lessons: [] },
    { title: "2018-the-context-api", slug: "", lessons: [] },
    { title: "function-components", slug: "", lessons: [] },
    { title: "style-with-components", slug: "", lessons: [] },
  ]

  courses.forEach(course => {
    createPage({
      path: `/courses/${course.slug}/`,
      component: require.resolve("./src/templates/course.js"),
      context: { course },
    })

    course.lessons.forEach(lesson => {
      createPage({
        path: `/lessons/${lesson.slug}/`,
        component: require.resolve("./src/templates/lesson.js"),
        context: { course, lesson },
      })
    })
  })
}
