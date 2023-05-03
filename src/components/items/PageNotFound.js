import React from "react";
import MenuPage from "../MenuPage";

function PageNotFound(props) {
  return (
    <MenuPage
      menuHeader="We are working on to fix this page..."
      itemArray={props.items.pageNotFound}
    />
  );
}

export default PageNotFound;
