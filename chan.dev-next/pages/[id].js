import Layout from "../components/layout";
import { getNoteData, getAllNoteIds } from "../lib/notes";
import Head from "next/head";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";

export default function Note({ noteData }) {
  return (
    <Layout>
      {/* <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article> */}
      <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllNoteIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const noteData = await getNoteData(params.id);

  return {
    props: {
      noteData,
    },
  };
}
