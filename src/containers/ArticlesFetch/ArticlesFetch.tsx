import React, { useEffect, useState } from "react";
import { ArticlesData } from "../../helpers/helpers";
import Article from "../../components/Article";
import "./Articles.css";

const ArticlesFetch = () => {
  const [articles, setArticles] = useState<ArticlesData[]>([]);
  const [loadingState, setLoadingState] = useState<
    "loading" | "error" | "ready"
  >("loading");

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await fetch("/articles");
      const articles = await data.json();

      setArticles([...articles]);
      setLoadingState("ready");
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries, observer) => {
        const lastCard = entries[0];

        if (!lastCard.isIntersecting) {
          return;
        }

        setLoadingState("loading");
        const data = await fetch("/articles");
        const articles = await data.json();
        setArticles((previousArticles) => [...previousArticles, ...articles]);
        setLoadingState("ready");

        observer.unobserve(lastCard.target);
      },
      {
        rootMargin: "0px 0px -500px 0px",
      }
    );

    if (articles.length !== 0) {
      observer.observe(document.querySelector("#last-article") as HTMLElement);
    }

    return () => {
      observer.unobserve(
        document.querySelector("#last-article") as HTMLElement
      );
    };
  }, [articles]);

  return (
    <div>
      {articles.length !== 0 &&
        articles.map((article, index) => {
          const articleCopy = Object.assign({}, article);
          articleCopy.title = `Article ${index}`;
          return (
            <Article
              id={articles.length - 1 === index ? "last-article" : ""}
              key={index}
              article={articleCopy}
            />
          );
        })}
      {loadingState === "loading" && <p>Loading...</p>}
    </div>
  );
};

export default ArticlesFetch;
