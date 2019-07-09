import React from "react"
import { graphql, Link } from "gatsby"

export default function Episode({
  data: { feedSimplecast: episode },
  ...props
}) {
  return (
    <>
      <h1>
        <Link to="/">React Podcast</Link>
      </h1>
      <main>
        <div style={{ maxWidth: "32em" }}>
          <h1>{episode.title}</h1>
          <section style={{ maxWidth: "600px" }}>
            <iframe
              frameborder="0"
              height="200px"
              scrolling="no"
              seamless
              src={`https://embed.simplecast.com/${
                episode.enclosure.url.split("/")[3].split(".")[0]
              }?color=3d3d3d`}
              width="100%"
            ></iframe>
          </section>
          <div>{episode.enclosure.length}</div>
          <div>{episode.enclosure.url}</div>
          <div>{episode.itunes.duration}</div>
          <div>{episode.itunes.episode}</div>
          <div dangerouslySetInnerHTML={{ __html: episode.content.encoded }} />
        </div>
      </main>
    </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    feedSimplecast(itunes: { episode: { eq: $id } }) {
      id
      contentSnippet
      link
      title
      enclosure {
        length
        url
        type
      }
      itunes {
        duration
        episode
      }
      content {
        encoded
      }
    }
  }
`
