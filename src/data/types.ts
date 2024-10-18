type SizeThumbnails = "small" | "large" | "full";

type Thumbnails = Record<
  SizeThumbnails,
  {
    url: string;
    width: number;
    height: number;
  }
>;

type Cover = {
  id: string;
  url: string;
  filename: string;
  type: string;
  thumbnails: Thumbnails;
  size: number;
};

export type Book = {
  author: string;
  isbn?: string;
  title: string;
  airId: string;
  couverture: Cover | null;
  pages: number | null;
  summary?: string;
  difficulte: number;
  categories: string[];
  types?: string[];
  main_objectives: string[];
  secondary_objectives: string[];
  score: number;
  parution?: string;
  procure_link?: string;
  amazon_link?: string;
  fnac_link?: string;
  asin?: string;
  isbn13?: string;
  status?: string;
  skip?: boolean;
};
