import React, { useEffect, useState } from "react";
import { getArticles, ArticlesData } from "../../helpers/helpers";
import Article from "../../components/Article";
import "./Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState<ArticlesData[]>([]);
  const [loadingState, setLoadingState] = useState<
    "loading" | "error" | "ready"
  >("loading");

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();

      setArticles([...data]);
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
        const data = await getArticles();
        // setArticles((previousArticles) => [...previousArticles, ...data]);
        setArticles([...articles, ...data]);
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

export default Articles;
