import React from "react";
import DrinksMenu from "../../DrinksMenu";

function TurkishCoffee(props) {
  return (
    <DrinksMenu
      title="Türk Kahvesi"
      menuHeader="Türk Kahvesi"
      itemArray={props.items.turkishCoffee}
    />
  );
}

export default TurkishCoffee;
