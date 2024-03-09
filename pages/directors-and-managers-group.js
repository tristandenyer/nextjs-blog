import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>
          Join the Directors and Managers Group | Moderated by Tristan Denyer
        </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Directors and Managers Group</h1>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          This is an open call for the new Directors and Managers group&mdash;a
          private group that meets weekly online for 90 minutes of active work
          on personal growth.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h3>Vision</h3>
        <p>
          To create a safe space for Directors and Managers to come together and
          grow personally and professionally through a shared collective.
        </p>
        <h3>Mission</h3>
        <p>
          D/M Group connects Directors and Managers by creating an intentional
          and safe space for sharing their stories, educating each other,
          collaborating on issues, and advocating for the collective so that we
          may experience grounding and growth.
        </p>
        <h3>What Group looks like</h3>
        <p>
          The Group is heavily inspired by the groups I have attended, and
          benefitted from.
        </p>
        <ul>
          <li className={utilStyles.listItem}>
            <strong>Moderated.</strong> The conversation is kept moving to the
            best of their ability, and language or actions that are not
            supportive of an inclusive group are handled immediately, and
            in-situ, where appropriate.
          </li>
          <li className={utilStyles.listItem}>
            <strong>Subscription based.</strong> Group members pay for attending
            the group, and there would be an option (encouraged) for monthly
            subscription at a discounted rate. No refunds for no-shows.
          </li>
          <li className={utilStyles.listItem}>
            <strong>Fast-paced.</strong> The Group I am looking to attract is
            professionals intentional in the process of improving their lives
            now. Weekly attendance is a must to keep the pace of the discussion,
            and momentum of the growth. Breaks for long months and holidays are
            built in.
          </li>
          <li className={utilStyles.listItem}>
            <strong>Integrity.</strong> The Group works best when members show
            up consistently, not just in how they show up but how often. 100%
            attendance is strongly recommended, 75% attendance (monthly) is
            minimum.
          </li>
          <li className={utilStyles.listItem}>
            <strong>Right-sized.</strong> The group membership will be capped at
            15 people, to start. This allows for inclusive discussion, and
            breakout rooms.
          </li>
          <li className={utilStyles.listItem}>
            <strong>Structured.</strong> Each group session will have a basic
            structure that also allows for unstructured time, as needed.
          </li>
          <li className={utilStyles.listItem}>
            <strong>Goals.</strong> There are goals of the Group (professional
            growth, self-worth), and individual goals. (Thinking the individual
            goals as a collective should inform the goals of the Group as a
            function.)
          </li>
          <li className={utilStyles.listItem}>
            <strong>Supporting channels.</strong> We can use supporting channels
            (WhatsApp or Slack, TBD) to foster inter-session discussions that
            may arise. This can also be used for times where we have 'homework'
            or activities that happen outside the Group timeslot.
          </li>
          <li className={utilStyles.listItem}>
            <strong>Private / Closed.</strong> The Group is private. It is not
            recorded, and we all rely on the shared understanding that the
            discussions stay in Group.
          </li>
          <li className={utilStyles.listItem}>
            <strong>Guests.</strong> There may be a need for a guest speaker to
            join to share knowledge or run a workshop. This would be agreed upon
            by the Group beforehand, and the topic would be something the
            collective was interested in. Members may not bring guests to the
            Group unannounced.
          </li>
        </ul>
      </section>
    </Layout>
  );
}
