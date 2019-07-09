import Link from "next/link";
import Header from "../components/header";
import AlphabetPage from "./alphabet/index";
import "system-ui.css"

export default () => (
  <main className="system-ui">
    <Header />
    <section>
      <Link href="/about">
        <a>Go to About <span>Me</span></a>
      </Link>
    </section>
    <section>
      <h2>Alphabet (Normal)</h2>
      <AlphabetPage />
    </section>
  </main>
);
