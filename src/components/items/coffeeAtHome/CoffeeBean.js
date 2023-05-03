import React from "react";
import MenuPage from "../../MenuPage";

function CoffeeBean(props) {
  const coffeeBeanCategories = [
    { name: "Kısa Süreliğine Seninle", items: props.items.forShortTime },
    { name: "Blonde Roast Kahveler", items: props.items.blondeRoastCoffees },
    { name: "Medium Roast Kahveler", items: props.items.mediumRoastCoffees },
  ];

  return (
    <MenuPage
      title="Çekirdek Kahveler"
      menuHeader="Çekirdek Kahveler"
      itemArray={coffeeBeanCategories}
    />
  );
}

export default CoffeeBean;
