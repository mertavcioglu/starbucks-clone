import React from "react";
import "./MenuItem.css";
import { Link } from "react-router-dom";

function MenuItem(props) {
  return (
    <div className="menu-item-container">
      <Link to={`/menu/${props.type}/${props.path}`} className="menu-item-link">
        <img src={props.image} alt="menu-img" className="menu-item-image" />
        <p className="menu-item-text">{props.title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
