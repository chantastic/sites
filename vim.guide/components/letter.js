import Link from "next/link";
import Header from "./header";
import YouTube from "./youtube-embed";
import NewsletterCTA from "./newsletter-cta";
import "system-ui.css"

export default ({ letter, code, ...props }) => (
  <main className="system-ui">
    <Header />
    <section>
      <h1>Append with {letter}</h1>
      <Link href="/">
        Go Home
      </Link>
      <YouTube code={code} />

      <NewsletterCTA />
    </section>
  </main>
);
