import React from "react";
import "./css/NewsTopCard.css";
export const NewsTopCard = (props) => {
  const linked_url = props.news.story.url;
  const image_url =
    "https://images.thequint.com/" + props.news.story["hero-image-s3-key"];
  const headline = props.news.story.headline;
  return (
    <div className="custom-story-card-3">
      <div className="custom-story-card-grid">
        <a href={linked_url}>
          <div className="card-image-wrapper">
            <figure class="figure">
              <picture class="image">
                <img src={image_url} className="photo"></img>
              </picture>
            </figure>
          </div>
        </a>
        <a href={linked_url} className="headline-link">
          <h2 className="headline headline-type-3">{headline}</h2>
        </a>
      </div>
    </div>
  );
};
