import React from "react";

export default class extends React.Component {
  render() {
    let script = `<script async data-uid="d25e8ea6e4" src="https://f.convertkit.com/d25e8ea6e4/3c6afa9e51.js" />`;

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: script
        }}
      />
    );
  }
}
