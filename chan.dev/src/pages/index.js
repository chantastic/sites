import React from "react"
import { graphql, Link } from "gatsby"
import { Styled } from "theme-ui"
export default ({ data }) => (
  <>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
    <section>
      <ul>
        {data.allBlogPost.edges.map(post => (
          <li key={post.node.tile}>
            <Styled.a
              as={Link}
              css={{
                textDecoration: `none`,
              }}
              to={post.node.slug}
            >
              {post.node.title}
            </Styled.a>
          </li>
        ))}

        <li>
          <Styled.a
            as={Link}
            css={{
              textDecoration: `none`,
            }}
            to="/blog"
          >
            ...more
          </Styled.a>
        </li>
      </ul>
    </section>
  </>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allBlogPost(limit: 3, sort: { order: DESC, fields: date }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
