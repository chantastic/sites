const path = require("path")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, getNode, actions }) => {
  // const { createNodeField } = actions;
  // if (node.internal.type === `Episode`) {
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: `/radio/${node.id}`,
  //   });
  // }
}

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    const episodeTemplate = path.resolve("./src/templates/episode.js")
    const episodeQuery = `
      {
        allFeedSimplecast {
          edges {
            node {
              itunes {
                episode
              }
            }
          }
        }
      }
    `

    resolve(
      graphql(episodeQuery).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allFeedSimplecast.edges.forEach(edge => {
          actions.createPage({
            path: edge.node.itunes.episode,
            component: episodeTemplate,
            context: {
              id: edge.node.itunes.episode,
            },
          })
        })
      })
    )
  })
}
