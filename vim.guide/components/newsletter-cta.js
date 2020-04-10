import React from "react";

export default class extends React.Component {
  render() {
    let script = `<script async data-uid="d25e8ea6e4" src="https://chantastic.ck.page/d25e8ea6e4/index.js"></script>`;

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: script,
        }}
      />
    );
  }
}
