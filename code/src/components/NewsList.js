import React from "react";
import Article from "./Article";

const NewsList = (props) => {
  console.log(props);
  return (
    <section>
      {props.articlesList.articles.map((singleArticle) => {
        return (
          <Article key={singleArticle.id} articleDetails={singleArticle} />
        );
      })}
    </section>
  );
};

export default NewsList;
