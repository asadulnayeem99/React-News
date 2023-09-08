import React, { useEffect, useState } from "react";
import News from "../News/News";
const TopHeadlines = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2023-08-08&sortBy=publishedAt&apiKey=56d6c0cb5e714bcdafbe1017539ab779";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);
  return (
    <div>
      <h1>Top Headlines {articles.length}</h1>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
};

export default TopHeadlines;
