import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/work";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} key="desc" />
        <meta
          property="og:title"
          content={`${postData.title} | Tristan Denyer`}
        />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content="/images/tristan-denyer-unfurl.jpg" />
      </Head>
      <hr></hr>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {postData.date && <Date dateString={postData.date} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <hr></hr>
    </Layout>
  );
}
