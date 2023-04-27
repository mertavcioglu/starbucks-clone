import React from "react";
import "./CampaignCard.css";

function CampaignCard(props) {
  return (
    <div className="campaign-card">
      <img
        src={props.campaignImage}
        alt="campaign-img"
        className="campaign-image"
      />
      <div className="campaign-card-text-area">
        <p className="campaign-header">{props.campaignHeader}</p>
        <p className="campaign-text">{props.campaignText}</p>
        <div className="campaign-buttons">
          {props.greenButton}
          {props.whiteButton}
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
