import React from "react";
import "./HintCard.css";

function HintCard(props) {
  return (
    <div className="hint-card">
      <img src={props.hintImage} alt="hint-img" className="hint-image" />
      <p className="hint-text">{props.hintText}</p>
      <a
        className="general-button natural-bg-button hint-card-button"
        href={props.videoLink}
        target="_blank"
        rel="noreferrer"
      >
        Videoyu izle
      </a>
    </div>
  );
}

export default HintCard;
