import React from "react"
import { Helmet } from "react-helmet"

export default function({ children }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/normalize.css@7.0.0/normalize.css"
        />
        <link rel="stylesheet" href="https://unpkg.com/cf.css@0.0.1" />
        <link rel="stylesheet" href="https://unpkg.com/minions.margin@0.3.0" />
        <link rel="stylesheet" href="https://unpkg.com/rem-point@1.0.0" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.border-width@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.border-top-width@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.border-bottom-width@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.outline-width@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.font-weight@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.position@0.3.0"
        />
        <link rel="stylesheet" href="https://unpkg.com/minions.display@0.3.0" />
        <link rel="stylesheet" href="https://unpkg.com/minions.flex@0.3.0" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.flex-direction@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.flex-grow@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.flex-shrink@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.flex-basis@0.3.1"
        />
        <link rel="stylesheet" href="https://unpkg.com/minions.float@0.3.0" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.font-weight@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.align-items@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.text-align@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.font-style@0.3.0"
        />
        <link rel="stylesheet" href="https://unpkg.com/minions.width@0.3.0" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.width@0.3.0/dist/material/width--mn.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.width@0.3.0/dist/material/width--md.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.width@0.3.0/dist/material/width--lg.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.text-decoration@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.line-height@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.justify-content@0.3.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/minions.list-style-type@0.3.0"
        />
      </Helmet>
      {children}
    </>
  )
}
