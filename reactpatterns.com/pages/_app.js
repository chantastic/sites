import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { initGA, logPageView } from "../modules/analytics";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    initGA();
    logPageView();
    Router.router.events.on("routeChangeComplete", logPageView);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title key="title">React Patterns</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta
            key="description"
            name="description"
            content="React patterns from beginners to advanced developers. Simple examples, short descriptions, and quality advice."
          />
        </Head>
        <div style={{ maxWidth: "30em" }}>
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}
