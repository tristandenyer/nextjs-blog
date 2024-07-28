import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// These styles apply to every route in the application
import "/app/globals.css";

const name = "Tristan Denyer";
export const siteTitle = "Tristan Denyer, San Francisco, CA";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#6ea2b8"
        />
        <meta name="msapplication-TileColor" content="#6ea2b8" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="I use decades of technical experience and a uniquely creative
          approach to envision, design and deliver scalable solutions."
        />
        <meta
          property="og:image"
          content={`/images/tristan-denyer-unfurl.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <div className="grid grid-cols-3 gap-5 text-slate-600 text-xs justify-items-center mb-4">
              <div>
                <span className="text-slate-400 text-xs pr-2">//</span>
                Engineering Manager
              </div>
              <div>
                <span className="text-slate-400 text-xs pr-2">//</span>
                Team Builder & Coach
              </div>
              <div>
                <span className="text-slate-400 text-xs pr-2">//</span>
                Former UX Designer
              </div>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
