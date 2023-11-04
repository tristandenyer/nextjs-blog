import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Custom404() {
    return (
        <Layout home>
        <Head>
            <title>404 - Page Not Found</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <h1>404 - Page Not Found</h1>
        </section>
        </Layout>
    );
  }