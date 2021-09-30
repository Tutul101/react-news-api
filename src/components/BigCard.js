import React from "react";
import "./css/BigCard.css";
export const BigCard = (props) => {
  // console.log("In Big Card component");
  // console.log(props.news);
  //   const host_url = "https://www.thequint.com/";
  //   const slug_url = props.news.story.slug;
  //   console.log(slug_url);
  const linked_url = props.news.story.url;
  const image_url =
    "https://images.thequint.com/" + props.news.story["hero-image-s3-key"];
  const headline = props.news.story.headline;
  const summary = props.news.story.summary;
  // console.log(image_url);
  // console.log(linked_url);
  return (
    <div className="custom-story-card-1">
      <div className="card-1-container">
        <a href={linked_url}>
          <div className="card-image-wrapper">
            <figure className="news-image-dynamic">
              <picture className="news-image">
                <img
                  src={image_url}
                  data-src={image_url}
                  type="image/webp"
                  className="photo"
                  alt="news story "
                ></img>
              </picture>
            </figure>
          </div>
        </a>
        <a className="headline-link" href={linked_url}>
          <h1 className="headline headine-type-1">{headline}</h1>
        </a>
        <a className="summary-link" href={linked_url}>
          <span className="summary">{summary}</span>
        </a>
      </div>
    </div>
  );
};
