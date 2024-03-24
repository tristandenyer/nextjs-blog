import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/work.js";
import Link from "next/link";
import Date from "../components/date";
import Articles from "./articles.js";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.tileBackground}>
      <div className={styles.gradientBackground}>
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
            <meta property="og:title" content={siteTitle} />
            <meta
              property="og:description"
              content="I use decades of technical experience and a uniquely creative
              approach to envision, design and deliver scalable solutions."
            />
            <meta
              property="og:image"
              content="/images/tristan-denyer-unfurl.jpg"
            />
          </Head>
          <section className={utilStyles.headingMd}>
            <p>
              I use decades of technical experience and a uniquely creative
              approach to envision, design and deliver scalable solutions.
              Working closely with my leadership and cross-functional teams, I'm
              able to elegantly solve our most complex challenges.
            </p>
            <p>
              I also take great pride in my management style. Using progressive
              hiring and training methods, I devised a systematic approach to
              inspiring, elevating and providing accountability. As a result of
              these methods, my team has consistently exceeded our goals while
              also maintaining the lowest turnover in the engineering
              department.
            </p>
          </section>
          <hr></hr>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/work/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    {date && <Date dateString={date} />}
                  </small>
                </li>
              ))}
            </ul>
          </section>
          <Articles />
        </Layout>
      </div>
    </div>
  );
}
