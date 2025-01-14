import { ITEMS_PER_PAGE } from "./constant";
import styles from "./index.module.css";
type PaginationProps = {
  count: number;
  onClick: (page: number) => void;
};

const Pagination = ({ count, onClick }: PaginationProps) => (
  <nav>
    <p>{count}</p>
    <ul className={styles.list}>
      {Array.from({ length: count / ITEMS_PER_PAGE }).map((_, index) => (
        <li key={index}>
          <a onClick={() => onClick(index + 1)}>{index + 1}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Pagination;
