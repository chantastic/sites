import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {data.allYoutubeVideo.edges.map(({ node: video }) => (
      <li key={video.id}>
        {video.title}
        <img src={video.thumbnail.url} />
      </li>
    ))}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allYoutubeVideo {
      edges {
        node {
          id
          title
          channelTitle
          description
          thumbnail {
            height
            url
            width
          }
          publishedAt(fromNow: true)
        }
      }
      totalCount
    }
  }
`
