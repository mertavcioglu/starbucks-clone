import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import Favorites from "./Favorites";
import Featured from "./Featured";

function Menu() {
  const [activeTab, setActiveTab] = useState("menu");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="menu-container">
      <div className="menu-upper-container">
        <button
          className={`menu-upper-choice ${
            activeTab === "menu" ? "active" : ""
          }`}
          onClick={() => handleTabClick("menu")}
        >
          Menü
        </button>
        <button
          className={`menu-upper-choice ${
            activeTab === "favorites" ? "active" : ""
          }`}
          onClick={() => handleTabClick("favorites")}
        >
          Favoriler
        </button>
        <button
          className={`menu-upper-choice ${
            activeTab === "featured" ? "active" : ""
          }`}
          onClick={() => handleTabClick("featured")}
        >
          Öne Çıkanlar
        </button>
      </div>
      {activeTab === "menu" && (
        <div className="menu-main-container">
          <div className="menu-left-container">
            <p className="menu-left-header">İçecekler</p>
            <Link to="/menu/drinks/espressoDrinks">
              Espresso Bazlı İçecekler
            </Link>
            <Link to="/menu/drinks/filteredCoffee">Filtre Kahveler</Link>
            <Link to="/menu/drinks/turkishCoffee">Türk Kahvesi</Link>
            <Link to="/menu/drinks/refresha">Starbucks Refresha® Drinks</Link>
            <Link to="/menu/drinks/teavanaHotTea">Teavana™ Sıcak Çaylar</Link>
            <Link to="/menu/drinks/teavanaTeaLatte">Teavana™ Tea Latte</Link>
            <Link to="/menu/drinks/frappucinos">
              Frappuccino® Karışım İçecekler
            </Link>
            <Link to="/menu/drinks/hotChocolate">Sıcak Çikolatalar</Link>
            <Link to="/menu/drinks/bottledDrinks">Şişelenmiş İçecekler</Link>
            <p className="menu-left-header">Yiyecekler</p>
            <Link to="/menu/foods/cakes">Pasta ve Kekler</Link>
            <Link to="/menu/foods/cheesecakes">Cheesecakeler</Link>
            <Link to="/menu/foods/muffin">Muffin & Cookie</Link>
            <Link to="/menu/foods/breakfast">Kahvaltılık Ürünler</Link>
            <Link to="/menu/foods/sandwich">Sandviçler</Link>
            <Link to="/menu/foods/saladAndParfait">Salata Ve Parfeler</Link>
            <Link to="/menu/foods/snack">Atıştırmalıklar</Link>
            <p className="menu-left-header">Evde Kahve Keyfi</p>
            <Link to="/menu/coffeeAtHome/coffeeBean">Çekirdek Kahveler</Link>
            <Link to="/menu/coffeeAtHome/via">VIA</Link>
            <Link to="/menu/coffeeAtHome/Kapsül%20Kahveler">
              Kapsül Kahveler
            </Link>
            <p className="menu-left-header">Kahve Ekipmanları</p>
            <Link to="/menu/merch/tumbler">Her Zaman Seninle</Link>
            <Link to="/menu/merch/brewingEquip">Demleme Ekipmanları</Link>
            <Link to="/menu/merch/brewing">Demleme Yöntemleri</Link>
          </div>
          <div className="menu-right-container">menu icececekler fotolar</div>
        </div>
      )}
      {activeTab === "favorites" && <Favorites />}
      {activeTab === "featured" && (
        <div className="featured-container">
          <Featured />
        </div>
      )}
    </div>
  );
}

export default Menu;
