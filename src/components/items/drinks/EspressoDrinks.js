import React from "react";
import MenuPage from "../../MenuPage";

function EspressoDrinks(props) {
  const espressoDrinkCategories = [
    { name: "Espresso", items: props.items.espressoDrinks },
    { name: "Mocha", items: props.items.mochaDrinks },
    { name: "Cappuccino", items: props.items.cappuccinoDrinks },
    { name: "Macchiato", items: props.items.macchiatoDrinks },
    { name: "Americano", items: props.items.americanoDrinks },
    { name: "Doubleshot", items: props.items.doubleshotDrinks },
    { name: "Latte", items: props.items.latteDrinks },
  ];

  return (
    <MenuPage
      title="Espresso Bazlı İçecekler"
      menuHeader="Espresso Bazlı İçecekler"
      itemArray={espressoDrinkCategories}
    />
  );
}

export default EspressoDrinks;
