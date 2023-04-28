import React from "react";
import DrinksMenu from "../../DrinksMenu";

function FilteredCoffee(props) {
  return (
    <DrinksMenu
      title="Filtre Kahveler"
      menuHeader="Filtre Kahveler"
      itemArray={props.items.filteredCoffee}
    />
  );
}

export default FilteredCoffee;
