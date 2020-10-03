import React from "react";
import JumbotronComponent from "./NewsJumbotron";

const JumbotronList = ({ news }) => {
  return (
    <div>
      {news.map((somenews, i) => (
        <JumbotronComponent
          title={somenews.title}
          description={somenews.description}
          route={somenews.route}
          imgUrl={somenews.imgUrl}
        />
      ))}
</div>
  );
};

export default JumbotronList;