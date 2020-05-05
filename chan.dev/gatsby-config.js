module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
      },
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        // basePath defaults to `/`
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `chan.dev`,
    author: `chantastic`,
    description: ``,
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
