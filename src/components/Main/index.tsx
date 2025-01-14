import { useState } from "react";
import initBooks from "../../data/books";
import { Category } from "../../data/types";
import useGetParams from "../../hooks/useGetParams";
import useSetBooks from "../../hooks/useSetBooks";
import Card from "../Card";
import Pagination from "../Pagination";
import { ITEMS_PER_PAGE } from "../Pagination/constant";
import styles from "./index.module.css";

const Main = () => {
  const [books, setBooks] = useState(initBooks);
  const [choosenCategory, setChosenCategory] = useState<Category>();

  const initPage = useGetParams("page") ?? 1;
  const [page, setPage] = useState(initPage);

  const url = window.location;
  const booksCount = books.length;
  const numberOfBooksToDisplay = Number(page) * ITEMS_PER_PAGE;

  const booksToDisplay = books.slice(
    (Number(page) - 1) * ITEMS_PER_PAGE,
    numberOfBooksToDisplay
  );

  useSetBooks(url, setChosenCategory, setBooks);

  const onClick = (category: Category) => {
    const urlSearchParams = new URLSearchParams(url.search);

    if (urlSearchParams.has("category")) {
      urlSearchParams.delete("category");
    }

    if (urlSearchParams.has("page")) {
      urlSearchParams.delete("page");
    }

    setChosenCategory(category);
    urlSearchParams.append("category", category);

    window.history.pushState({}, "", `?${urlSearchParams.toString()}`);
  };

  const handleClickPagination = (page: number) => {
    const urlSearchParams = new URLSearchParams(url.search);

    urlSearchParams.set("page", page.toString());

    setPage(page);

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
        {booksToDisplay.map((book) => {
          return <Card {...book} key={book.airId} />;
        })}
      </main>
      <Pagination onClick={handleClickPagination} count={booksCount} />
    </>
  );
};

export default Main;
