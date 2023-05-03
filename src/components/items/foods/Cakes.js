import React from "react";
import MenuPage from "../../MenuPage";

function Cakes(props) {
  return (
    <MenuPage
      title="Pasta ve Kekler"
      menuHeader="Pasta ve Kekler"
      itemArray={props.items.cakes}
    />
  );
}

export default Cakes;
