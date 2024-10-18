import books from "../../data/books";
import Card from "../Card";
import "./index.css";

const Main = () => {
  return (
    <main>
      {books.map((book) => {
        return <Card {...book} />;
      })}
    </main>
  );
};

export default Main;
