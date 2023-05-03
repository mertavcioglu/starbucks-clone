import React from "react";
import MenuPage from "../../MenuPage";

function Cheesecakes(props) {
  return (
    <MenuPage
      title="Cheesecakeler"
      menuHeader="Cheesecakeler"
      itemArray={props.items.cheesecakes}
    />
  );
}

export default Cheesecakes;
