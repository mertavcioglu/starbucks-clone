import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

import MenuPart from "../components/MenuPart";
import LeftOfMenu from "../components/LeftOfMenu";
import Favorites from "./Favorites";
import Featured from "./Featured";
import MenuUpperChoices from "../components/MenuUpperChoices";

import cover_drink_01 from "../images/menu-items/covers/cover_drink_01.webp";
import cover_drink_02 from "../images/menu-items/covers/cover_drink_02.webp";
import cover_drink_03 from "../images/menu-items/covers/cover_drink_03.webp";
import cover_drink_04 from "../images/menu-items/covers/cover_drink_04.webp";
import cover_drink_05 from "../images/menu-items/covers/cover_drink_05.webp";
import cover_drink_06 from "../images/menu-items/covers/cover_drink_06.webp";
import cover_drink_07 from "../images/menu-items/covers/cover_drink_07.webp";
import cover_drink_08 from "../images/menu-items/covers/cover_drink_08.webp";
import cover_drink_09 from "../images/menu-items/covers/cover_drink_09.webp";
import cover_drink_10 from "../images/menu-items/covers/cover_drink_10.webp";
import cover_food_01 from "../images/menu-items/covers/cover_food_01.webp";
import cover_food_02 from "../images/menu-items/covers/cover_food_02.webp";
import cover_food_03 from "../images/menu-items/covers/cover_food_03.webp";
import cover_food_04 from "../images/menu-items/covers/cover_food_04.webp";
import cover_food_05 from "../images/menu-items/covers/cover_food_05.webp";
import cover_food_06 from "../images/menu-items/covers/cover_food_06.webp";
import cover_food_07 from "../images/menu-items/covers/cover_food_07.webp";
import cover_home_01 from "../images/menu-items/covers/cover_home_01.webp";
import cover_home_02 from "../images/menu-items/covers/cover_home_02.webp";
import cover_home_03 from "../images/menu-items/covers/cover_home_03.webp";
import cover_equipment_01 from "../images/menu-items/covers/cover_equipment_01.webp";
import cover_equipment_02 from "../images/menu-items/covers/cover_equipment_02.webp";
import cover_equipment_03 from "../images/menu-items/covers/cover_equipment_03.webp";

function Menu(props) {
  const drinks = [
    {
      id: 1,
      type: "drinks",
      image: cover_drink_01,
      title: "Espresso Bazlı İçecekler",
      path: "espressoDrinks",
    },
    {
      id: 2,
      type: "drinks",
      image: cover_drink_02,
      title: "Filtre Kahveler",
      path: "filteredCoffee",
    },
    {
      id: 3,
      type: "drinks",
      image: cover_drink_03,
      title: "Türk Kahvesi",
      path: "turkishCoffee",
    },
    {
      id: 4,
      type: "drinks",
      image: cover_drink_04,
      title: "Türk Çayı",
      path: "turkish",
    },
    {
      id: 5,
      type: "drinks",
      image: cover_drink_05,
      title: "Starbucks Refresha® Drinks",
      path: "refresha",
    },
    {
      id: 6,
      type: "drinks",
      image: cover_drink_06,
      title: "Teavana™ Sıcak Çaylar",
      path: "teavanaHotTea",
    },
    {
      id: 7,
      type: "drinks",
      image: cover_drink_07,
      title: "Teavana™ Tea Latte",
      path: "teavanaTeaLatte",
    },
    {
      id: 8,
      type: "drinks",
      image: cover_drink_08,
      title: "Kahve Bazlı Frappuccino®",
      path: "frappucinos",
    },
    {
      id: 9,
      type: "drinks",
      image: cover_drink_09,
      title: "Sıcak Çikolatalar",
      path: "hotChocolate",
    },
    {
      id: 10,
      type: "drinks",
      image: cover_drink_10,
      title: "Şişelenmiş İçecekler",
      path: "bottledDrinks",
    },
  ];
  const foods = [
    {
      id: 1,
      type: "foods",
      image: cover_food_01,
      title: "Pasta ve Kekler",
      path: "cakes",
    },
    {
      id: 2,
      type: "foods",
      image: cover_food_02,
      title: "Cheesecakeler",
      path: "cheesecakes",
    },
    {
      id: 3,
      type: "foods",
      image: cover_food_03,
      title: "Muffin & Cookie",
      path: "muffin",
    },
    {
      id: 4,
      type: "foods",
      image: cover_food_04,
      title: "Kahvaltılık Ürünler",
      path: "breakfast",
    },
    {
      id: 5,
      type: "foods",
      image: cover_food_05,
      title: "Sandviçler",
      path: "breakfast",
    },
    {
      id: 6,
      type: "foods",
      image: cover_food_06,
      title: "Salata Ve Parfeler",
      path: "saladAndParfait",
    },
    {
      id: 7,
      type: "foods",
      image: cover_food_07,
      title: "Atıştırmalıklar",
      path: "snack",
    },
  ];
  const coffeeAtHome = [
    {
      id: 1,
      type: "coffeeAtHome",
      image: cover_home_01,
      title: "Çekirdek Kahveler",
      path: "coffeeBean",
    },
    {
      id: 2,
      type: "coffeeAtHome",
      image: cover_home_02,
      title: "VIA",
      path: "via",
    },
    {
      id: 3,
      type: "coffeeAtHome",
      image: cover_home_03,
      title: "Kapsül Kahveler",
      path: "capsuleCoffee",
    },
  ];
  const coffeeEquipments = [
    {
      id: 1,
      type: "merch",
      image: cover_equipment_01,
      title: "Her Zaman Seninle",
      path: "tumbler",
    },
    {
      id: 2,
      type: "merch",
      image: cover_equipment_02,
      title: "Demleme Ekipmanları",
      path: "brewingEquip",
    },
    {
      id: 3,
      type: "merch",
      image: cover_equipment_03,
      title: "Demleme Yöntemleri",
      path: "brewing",
    },
  ];

  const [activeTab, setActiveTab] = useState("menu");
  const handleChildTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="menu-container">
      <MenuUpperChoices onChildTabClick={handleChildTabClick} />
      {activeTab === "menu" && (
        <div className="menu-main-container">
          <LeftOfMenu />
          <div className="menu-right-container">
            {props.title === "Menu" ? (
              ""
            ) : (
              <p className="menu-small-header">
                <Link
                  to="/menu"
                  className="menu-small-choice"
                  onClick={() => handleChildTabClick("menu")}
                >
                  Menu
                </Link>
                / {props.title}
              </p>
            )}
            <div className="menu-right-upper">
              <p className="menu-right-header">{props.title}</p>
              <button className="general-button besin-degerleri-button">
                ⓘ Besin Değerleri Tablosu
              </button>
            </div>
            <MenuPart menuHeader="İçecekler" itemArray={drinks} />
            <MenuPart menuHeader="Yiyecekler" itemArray={foods} />
            <MenuPart menuHeader="Evde Kahve Keyfi" itemArray={coffeeAtHome} />
            <MenuPart
              menuHeader="Kahve Ekipmanları"
              itemArray={coffeeEquipments}
            />
          </div>
        </div>
      )}
      {activeTab === "favorites" && <Favorites />}
      {activeTab === "featured" && <Featured />}
    </div>
  );
}

export default Menu;
