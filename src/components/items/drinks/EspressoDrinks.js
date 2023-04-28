import React from "react";
import DrinksMenu from "../../DrinksMenu";

function EspressoDrinks(props) {
  const drinkCategories = [
    { name: "Espresso", items: props.items.espressoDrinks },
    { name: "Mocha", items: props.items.mochaDrinks },
    { name: "Cappuccino", items: props.items.cappuccinoDrinks },
    { name: "Macchiato", items: props.items.macchiatoDrinks },
    { name: "Americano", items: props.items.americanoDrinks },
    { name: "Doubleshot", items: props.items.doubleshotDrinks },
    { name: "Latte", items: props.items.latteDrinks },
  ];

  return (
    <DrinksMenu
      title="Espresso Bazlı İçecekler"
      menuHeader="Espresso Bazlı İçecekler"
      itemArray={drinkCategories}
    />
  );
}

export default EspressoDrinks;
