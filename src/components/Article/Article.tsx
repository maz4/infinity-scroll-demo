import React from "react";
import { ArticlesData } from "../../helpers/helpers";

interface ArticleProps {
  article: ArticlesData;
  id?: string;
}

const Article = ({ article, id }: ArticleProps): JSX.Element => {
  const { title, body, img } = article;
  return (
    <div className="article" id={id}>
      <h2 className="article__title">{title}</h2>
      <p className="article__body">{body}</p>
      <img className="article__img" src={img} alt={title} />
    </div>
  );
};

export default Article;
