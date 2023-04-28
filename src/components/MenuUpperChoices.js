import React, { useState } from "react";
import "./MenuUpperChoices.css";
import { Link } from "react-router-dom";

function MenuUpperChoices(props) {
  const [activeTab, setActiveTab] = useState("menu");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    props.onChildTabClick(tab);
  };

  return (
    <div className="menu-upper-container">
      <Link
        to="/menu"
        className={`menu-upper-choice ${
          activeTab === "menu" ? "active-tab" : ""
        }`}
        onClick={() => handleTabClick("menu")}
      >
        Menü
      </Link>
      <button
        className={`menu-upper-choice ${
          activeTab === "favorites" ? "active-tab" : ""
        }`}
        onClick={() => handleTabClick("favorites")}
      >
        Favoriler
      </button>
      <button
        className={`menu-upper-choice ${
          activeTab === "featured" ? "active-tab" : ""
        }`}
        onClick={() => handleTabClick("featured")}
      >
        Öne Çıkanlar
      </button>
    </div>
  );
}

export default MenuUpperChoices;
