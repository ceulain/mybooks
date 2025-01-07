import books from "../../data/books";
import Card from "../Card";
import styles from "./index.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      {books.map((book) => {
        return <Card {...book} />;
      })}
    </main>
  );
};

export default Main;
