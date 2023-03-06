import React from "react";

const Article = (props) => {
  console.log(props);
  return (
    <article className="article">
      <h2>{props.articleDetails.title}</h2>
      <p>{props.articleDetails.description}</p>
      <p>
        {new Date(props.articleDetails.date).toLocaleDateString("en-UK", {
          weekday: "long",
          month: "long",
        })}
      </p>
      <img src={props.articleDetails.image} alt="Nicolas Cage" />
      <div className="tag-container">
        {props.articleDetails.tags.map((tag) => {
          return (
            <span key={tag} className="tag">
              {tag}
            </span>
          );
        })}
      </div>
    </article>
  );
};

export default Article;
