import { Book } from "../../data/types";
import "./inxde.css";

//   }
const Card = ({ author, summary, title }: Book) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{summary}</p>
    </article>
  );
};

export default Card;
