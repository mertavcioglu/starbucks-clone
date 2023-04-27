import React from "react";
import "./HomeRightBox.css";

function HomeRightBox(props) {
  return (
    <div className="home-right-box">
      <img
        src={props.image}
        alt="home-right-box-img"
        className="home-right-box-image"
      />
      <div className="home-right-box-right-div">
        <p className="home-right-box-header">{props.header}</p>
        <p className="home-right-box-text">{props.text}</p>
        <div className="home-right-box-buttons">
          {props.greenButton}
          {props.whiteButton}
        </div>
      </div>
    </div>
  );
}

export default HomeRightBox;
