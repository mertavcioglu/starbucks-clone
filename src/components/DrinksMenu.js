import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuPart from "../components/MenuPart";
import LeftOfMenu from "../components/LeftOfMenu";
import Favorites from "../pages/Favorites";
import Featured from "../pages/Featured";
import MenuUpperChoices from "../components/MenuUpperChoices";

function DrinksMenu(props) {
  let menuItems = null;

  // Checks whether the props passed from upper level function is including multiple items(headers) or not.
  if (props.itemArray[0].items) {
    menuItems = props.itemArray.map((category) => (
      <MenuPart
        key={category.name}
        menuHeader={category.name}
        itemArray={category.items}
      />
    ));
  } else {
    menuItems = (
      <MenuPart menuHeader={props.menuHeader} itemArray={props.itemArray} />
    );
  }

  const [activeTab, setActiveTab] = useState("menu");
  const handleChildTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="menu-container">
      <MenuUpperChoices onChildTabClick={handleChildTabClick} />
      {activeTab === "menu" && (
        <div className="menu-main-container">
          <LeftOfMenu />
          <div className="menu-right-container">
            {props.title === "Menu" ? (
              ""
            ) : (
              <p className="menu-small-header">
                <Link
                  to="/menu"
                  className="menu-small-choice"
                  onClick={() => handleChildTabClick("menu")}
                >
                  Menu
                </Link>
                / {props.title}
              </p>
            )}
            <div className="menu-right-upper">
              <p className="menu-right-header">{props.title}</p>
              <button className="general-button besin-degerleri-button">
                ⓘ Besin Değerleri Tablosu
              </button>
            </div>

            {menuItems}
          </div>
        </div>
      )}
      {activeTab === "favorites" && <Favorites />}
      {activeTab === "featured" && <Featured />}
    </div>
  );
}

export default DrinksMenu;
