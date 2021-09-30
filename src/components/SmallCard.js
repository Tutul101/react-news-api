import React from "react";
import "./css/SmallCard.css";
export const SmallCard = (props) => {
  const linked_url = props.news.story.url;
  const image_url =
    "https://images.thequint.com/" + props.news.story["hero-image-s3-key"];
  const headline = props.news.story.headline;
  const summary = props.news.story.summary;
  return (
    <>
      <a href={linked_url}>
        <div className="card-image-wrapper">
          <figure>
            <picture>
              <img src={image_url} alt="news image 3"></img>
            </picture>
          </figure>
        </div>
      </a>
      <a href={linked_url}>
        <h1 className="headline-type-4">{headline}</h1>
      </a>
      <a className="summary-link">
        <span className="summary">{summary}</span>
      </a>
    </>
  );
};
