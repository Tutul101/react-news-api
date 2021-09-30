import React from "react";
import "./css/NewsTop.css";
export const NewsTop = (props) => {
  console.log(props.news.story);
  const linked_url = props.news.story.url;
  const headline = props.news.story.headline;
  console.log(linked_url);
  return (
    <div className="custom-story-card-2">
      <a href={linked_url}>
        <h2 className="headline headline-type-2">{headline}</h2>
      </a>
    </div>
  );
};
