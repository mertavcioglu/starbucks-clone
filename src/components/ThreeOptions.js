import React, { useState } from "react";
import "./ThreeOptions.css";
import option1 from "../images/option1.png";
import option2 from "../images/option2.png";
import option3 from "../images/option3.png";

function ThreeOptions(props) {
  const [divVisibility, setDivVisibility] = useState({
    option1: true,
    option2: false,
    option3: false,
  });

  const toggleDivVisibility = (divName) => {
    setDivVisibility((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((name) => {
        newState[name] = name === divName;
      });
      return newState;
    });
  };

  return (
    <div>
      <div className={`three-options-div ${props.heightDiv}`}>
        <div
          className={`three-options-item option1 ${props.flexColumn}`}
          style={{
            opacity: divVisibility.option1 ? 1 : 0.5,
            fontWeight: divVisibility.option1 ? 700 : 500,
          }}
          onClick={() => toggleDivVisibility("option1")}
        >
          <img src={option1} alt="option1" className="three-options-image" />
          {props.optionOneHeader}
        </div>
        <div
          className={`three-options-item option2 ${props.flexColumn}`}
          style={{
            opacity: divVisibility.option2 ? 1 : 0.5,
            fontWeight: divVisibility.option2 ? 700 : 500,
          }}
          onClick={() => toggleDivVisibility("option2")}
        >
          <img src={option2} alt="option2" className="three-options-image" />
          {props.optionTwoHeader}
        </div>
        <div
          className={`three-options-item option3 ${props.flexColumn}`}
          style={{
            opacity: divVisibility.option3 ? 1 : 0.5,
            fontWeight: divVisibility.option3 ? 700 : 500,
          }}
          onClick={() => toggleDivVisibility("option3")}
        >
          <img src={option3} alt="option3" className="three-options-image" />
          {props.optionThreeHeader}
        </div>
      </div>
      {divVisibility.option1 && (
        <div className="three-options-openable">
          <img
            src={option1}
            alt="option1"
            className="three-options-openable-image"
          />
          <div className="three-options-openable-right">
            <p className="three-options-openable-header">
              {props.optionOneHeader}
            </p>
            <p className="three-options-openable-text">{props.optionOneText}</p>
            {props.joinButton}
          </div>
        </div>
      )}
      {divVisibility.option2 && (
        <div className="three-options-openable">
          <img
            src={option2}
            alt="option2"
            className="three-options-openable-image"
          />
          <div className="three-options-openable-right">
            <p className="three-options-openable-header">
              {props.optionTwoHeader}
            </p>
            <p className="three-options-openable-text">{props.optionTwoText}</p>
            {props.joinButton}
          </div>
        </div>
      )}
      {divVisibility.option3 && (
        <div className="three-options-openable">
          <img
            src={option3}
            alt="option3"
            className="three-options-openable-image"
          />
          <div className="three-options-openable-right">
            <p className="three-options-openable-header">
              {props.optionThreeHeader}
            </p>
            <p className="three-options-openable-text">
              {props.optionThreeText}
            </p>
            {props.joinButton}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThreeOptions;
