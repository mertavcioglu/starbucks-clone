import React from "react";
import "./FeaturedItem.css";

function FeaturedItem(props) {
  return (
    <div className="featured-item-container">
      <img
        src={props.featuredImage}
        alt="featured-item-img"
        className="featured-item-image"
      />
      {props.featuredText}
    </div>
  );
}

export default FeaturedItem;
