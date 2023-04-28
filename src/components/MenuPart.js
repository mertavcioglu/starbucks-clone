import React from "react";
import "./MenuPart.css";
import MenuItem from "../components/MenuItem";
function MenuPart(props) {
  return (
    <div className="menu-section-container">
      <div className={`menu-section-header ${props.menuHeaderClass}`}>
        {props.menuHeader}
      </div>
      <div className="menu-items-container">
        {props.itemArray?.map((item) => (
          <MenuItem
            key={item.id}
            image={item.image}
            title={item.title}
            path={item.path}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuPart;
