import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export default function IndexPage(props) {
  console.log(props)

  return (
    <Layout>
      <SEO title="Home" />

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <ul>
          {props.data.allFeedSimplecast.edges.map(({ node }) => (
            <Link to={node.itunes.episode} aria-label={`View ${node.title}`}>
              <li key={node.id}>{node.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    allFeedSimplecast {
      edges {
        node {
          author
          title
          link
          itunes {
            duration
            episode
          }
          contentSnippet
          content {
            encoded
          }
          creator
          pubDate
          id
        }
      }
    }
  }
`
