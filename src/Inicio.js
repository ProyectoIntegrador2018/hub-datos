import React, { useState, useEffect } from "react";
import JumbotronList from "./components/ListOfNews";

function News() {
  const [news, setNews] = useState(null);

  const splitNews = (newsList) => {
    const newsChunks = [];
    while (newsList.length) {
      newsChunks.push(newsList.splice(0, 3));
    }
    return newsChunks;
  };

  useEffect(() => {//Function to fecth data from db
    const fetchProjects = async () => {
   

      let newsList = [
        {
          title: "10K Challenge",
          description: "10K Description",
          route: "/Proyectos/Detalles",
          imgUrl:'"https://blog.educacionit.com/wp-content/uploads/2019/04/blog-educacionit-12.jpg"'
        },
        {
          title: "Universities for Founders MTY",
          description: "Universities for Founders Description",
          route: "/Proyectos/Detalles",
          imgUrl:'"https://www.labelium.com/blog/wp-content/uploads/2020/06/data-science-retail.jpg"'
        },
        {
          title: "Universities for Founders MTY",
          description: "Universities for Founders Description",
          route: "/Proyectos/Detalles",
          imgUrl:'"https://www.american.edu/programs/shared/data-science/images/datascience-og.jpg"'
        }
      ];

      const newsChunks = splitNews(newsList);

      setNews(newsChunks);
    };

    fetchProjects();
  }, []);

  return (
    <div className="pb-3">
            {news
              ? news.map((newsDeck, i) => (
                  <JumbotronList
                    news={newsDeck}
                  />
                ))
              : ""}
    </div>
  );
}

export default News;