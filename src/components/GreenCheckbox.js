import React from "react";
import "./GreenCheckbox.css";

function GreenCheckbox(props) {
  return (
    <div class="checkbox-wrapper-4">
      <input class="inp-cbx" id={props.checkboxId} type="checkbox" />
      <label class="cbx" for={props.checkboxId}>
        <span>
          <svg width="12px" height="10px">
            <use href="#check-4" />
          </svg>
        </span>
      </label>
      <svg class="inline-svg">
        <symbol id="check-4" viewbox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </div>
  );
}

export default GreenCheckbox;
