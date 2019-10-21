import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import "../../gatsby-resp-image-image_override.css"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Follow{" "}
    <Styled.a href="https://twitter.com/chantastic" target="_blank">
      chantastic
    </Styled.a>
    {` `} on Twitter.
  </Fragment>
)
