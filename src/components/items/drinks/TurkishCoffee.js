import React from "react";
import MenuPage from "../../MenuPage";

function TurkishCoffee(props) {
  return (
    <MenuPage
      title="Türk Kahvesi"
      menuHeader="Türk Kahvesi"
      itemArray={props.items.turkishCoffee}
    />
  );
}

export default TurkishCoffee;
