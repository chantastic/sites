import Link from "next/link";
import Header from "../components/header";
import YouTube from "../components/youtube-embed";

export default () => (
  <main>
    <Header />
    <section>
      <h1>Why learn Vim?</h1>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <YouTube code="JDlTEAnpELQ" />
    </section>
  </main>
);
