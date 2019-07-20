module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {},
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
  siteMetadata: {
    // Used for the site title and SEO
    title: `chan.dev`,
    // Used to provide alt text for your avatar
    author: `back on my old shit`,
    // Used for SEO
    description: `weekly musings about creativity and web development`,
    // Used for social links in the root footer
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/chantastic`,
      },
      {
        name: `github`,
        url: `https://github.com/chantastic`,
      },
    ],
  },
}
