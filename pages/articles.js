import { useEffect, useState } from "react";
import utilStyles from "../styles/utils.module.css";
import cardStyles from "../styles/cards.module.css";
import Date from "../components/date";

export default function Articles() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tristandenyer"
        );
        const data = await res.json();
        const items = data.items;
        setItems(items);
      } catch {
        setError(true);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return (
      <section>
        <div>
          <h3>Latest Articles</h3>
          <ul>
            <p>Failed to fetch data, please try again later.</p>
          </ul>
          <a
            href={"https://medium.com/@tristandenyer"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            Read on Medium
          </a>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div>
        <hr></hr>
        <h2>Latest Posts on Medium</h2>
        <p>
          As I have been working on being a more effective and intentional
          manager, I have also been sharing out my learnings along the way.
        </p>
        <ul className={cardStyles.cards}>
          {items?.map((item, index) => (
            <li key={index}>
              <small className={utilStyles.lightText}>
                {item.pubDate && <Date dateString={item.pubDate} />}
              </small>
              <p>
                <a
                  href={item.link}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  {item.title}
                </a>
              </p>
            </li>
          ))}
        </ul>
        <a
          href={"https://tristandenyer.medium.com/"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          Read more on Medium 🡕
        </a>
      </div>
    </section>
  );
}
