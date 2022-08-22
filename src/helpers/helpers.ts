export interface ArticlesData {
  title: string;
  body: string;
  img: string;
}

export const articles = [
  {
    title: "Article 1",
    body: "Article body 1",
    img: "https://www.fillmurray.com/800/600",
  },
  {
    title: "Article 2",
    body: "Article body 2",
    img: "https://www.fillmurray.com/800/600",
  },
  {
    title: "Article 3",
    body: "Article body 3",
    img: "https://www.fillmurray.com/800/600",
  },
];

export const getArticles = (): Promise<ArticlesData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            title: "Article 1",
            body: "Article body 1",
            img: "https://www.fillmurray.com/800/600",
          },
          {
            title: "Article 2",
            body: "Article body 2",
            img: "https://www.fillmurray.com/800/600",
          },
          {
            title: "Article 3",
            body: "Article body 3",
            img: "https://www.fillmurray.com/800/600",
          },
        ]),
      1000
    );
  });
};
