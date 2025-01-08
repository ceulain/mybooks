import { useEffect, useState } from "react";
import initBooks from "../../data/books";
import { Category } from "../../data/types";
import Card from "../Card";
import styles from "./index.module.css";

const Main = () => {
  const [books, setBooks] = useState(initBooks);
  const [choosenCategory, setChosenCategory] = useState<Category>();
  const url = window.location;

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(url.search);

    if (urlSearchParams.has("category")) {
      const category = urlSearchParams.get("category");

      if (category) {
        setBooks(
          initBooks.filter((book) => book.categories.includes(category))
        );
      } else {
        setBooks(initBooks);
      }
    }
  }, [url.search]);

  const onClick = (category: Category) => {
    const urlSearchParams = new URLSearchParams(url.search);

    if (urlSearchParams.has("category")) {
      urlSearchParams.delete("category");
    }

    setChosenCategory(category);
    urlSearchParams.append("category", category);

    window.history.pushState({}, "", `?${urlSearchParams.toString()}`);
  };

  return (
    <>
      <label>
        Select catégories:
        <select
          value={choosenCategory}
          onChange={(e) => onClick(e.target.value as Category)}
        >
          {Object.values(Category).map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <main className={styles.main}>
        {books.map((book) => {
          return <Card {...book} key={book.airId} />;
        })}
      </main>
    </>
  );
};

export default Main;
