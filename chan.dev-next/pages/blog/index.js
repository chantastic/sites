import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Static Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
