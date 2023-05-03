import React from "react";
import MenuPage from "../../MenuPage";

function FilteredCoffee(props) {
  return (
    <MenuPage
      title="Filtre Kahveler"
      menuHeader="Filtre Kahveler"
      itemArray={props.items.filteredCoffee}
    />
  );
}

export default FilteredCoffee;
