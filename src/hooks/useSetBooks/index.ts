import { useEffect } from "react";
import initBooks from "../../data/books";
import { Book, Category } from "../../data/types";

const useSetBooks = (
  url: Location,
  setChosenCategory: (category: Category) => void,
  setBooks: (books: Book[]) => void
) => {
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(url.search);

    if (urlSearchParams.has("category")) {
      const category = urlSearchParams.get("category");

      if (category) {
        setChosenCategory(category as Category);

        setBooks(
          initBooks.filter((book) => book.categories.includes(category))
        );
      } else {
        setBooks(initBooks);
      }
    }
  }, [url.search, setChosenCategory, setBooks]);
};

export default useSetBooks;
