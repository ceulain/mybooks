import Card from "../../components/Card";
import books from "../../data/books";

const Books = () => {
  const filteredBooks = books.filter((book) => {
    return book.categories.includes("Sciences et technologies");
  });

  return (
    <main>
      <h1>Sciences et Technologies</h1>

      {filteredBooks.map((book) => {
        return <Card {...book} />;
      })}
    </main>
  );
};

export default Books;
