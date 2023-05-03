import React, { useState, useEffect } from "react";
import "./LeftOfMenu.css";
import { Link, useLocation } from "react-router-dom";

function LeftOfMenu() {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedLink(currentPath.substring(currentPath.lastIndexOf("/") + 1));
  }, [location.pathname]);

  return (
    <div className="menu-left-container">
      <p className="menu-left-header">İçecekler</p>
      <Link
        to="/menu/drinks/espressoDrinks"
        className={selectedLink === "espressoDrinks" ? "selected-tab" : ""}
      >
        Espresso Bazlı İçecekler
      </Link>
      <Link
        to="/menu/drinks/filteredCoffee"
        className={selectedLink === "filteredCoffee" ? "selected-tab" : ""}
      >
        Filtre Kahveler
      </Link>
      <Link
        to="/menu/drinks/turkishCoffee"
        className={selectedLink === "turkishCoffee" ? "selected-tab" : ""}
      >
        Türk Kahvesi
      </Link>
      <Link
        to="/menu/drinks/refresha"
        className={selectedLink === "refresha" ? "selected-tab" : ""}
      >
        Starbucks Refresha® Drinks
      </Link>
      <Link
        to="/menu/drinks/teavanaHotTea"
        className={selectedLink === "teavanaHotTea" ? "selected-tab" : ""}
      >
        Teavana™ Sıcak Çaylar
      </Link>
      <Link
        to="/menu/drinks/teavanaTeaLatte"
        className={selectedLink === "teavanaTeaLatte" ? "selected-tab" : ""}
      >
        Teavana™ Tea Latte
      </Link>
      <Link
        to="/menu/drinks/frappucinos"
        className={selectedLink === "frappucinos" ? "selected-tab" : ""}
      >
        Frappuccino® Karışım İçecekler
      </Link>
      <Link
        to="/menu/drinks/hotChocolate"
        className={selectedLink === "hotChocolate" ? "selected-tab" : ""}
      >
        Sıcak Çikolatalar
      </Link>
      <Link
        to="/menu/drinks/bottledDrinks"
        className={selectedLink === "bottledDrinks" ? "selected-tab" : ""}
      >
        Şişelenmiş İçecekler
      </Link>
      <p className="menu-left-header">Yiyecekler</p>
      <Link
        to="/menu/foods/cakes"
        className={selectedLink === "cakes" ? "selected-tab" : ""}
      >
        Pasta ve Kekler
      </Link>
      <Link
        to="/menu/foods/cheesecakes"
        className={selectedLink === "cheesecakes" ? "selected-tab" : ""}
      >
        Cheesecakeler
      </Link>
      <Link
        to="/menu/foods/muffin"
        className={selectedLink === "muffin" ? "selected-tab" : ""}
      >
        Muffin & Cookie
      </Link>
      <Link
        to="/menu/foods/breakfast"
        className={selectedLink === "breakfast" ? "selected-tab" : ""}
      >
        Kahvaltılık Ürünler
      </Link>
      <Link
        to="/menu/foods/sandwich"
        className={selectedLink === "sandwich" ? "selected-tab" : ""}
      >
        Sandviçler
      </Link>
      <Link
        to="/menu/foods/saladAndParfait"
        className={selectedLink === "saladAndParfait" ? "selected-tab" : ""}
      >
        Salata Ve Parfeler
      </Link>
      <Link
        to="/menu/foods/snack"
        className={selectedLink === "snack" ? "selected-tab" : ""}
      >
        Atıştırmalıklar
      </Link>
      <p className="menu-left-header">Evde Kahve Keyfi</p>
      <Link
        to="/menu/coffeeAtHome/coffeeBean"
        className={selectedLink === "coffeeBean" ? "selected-tab" : ""}
      >
        Çekirdek Kahveler
      </Link>
      <Link
        to="/menu/coffeeAtHome/via"
        className={selectedLink === "via" ? "selected-tab" : ""}
      >
        VIA
      </Link>
      <Link
        to="/menu/coffeeAtHome/KapsulKahveler"
        className={selectedLink === "KapsulKahveler" ? "selected-tab" : ""}
      >
        Kapsül Kahveler
      </Link>
      <p className="menu-left-header">Kahve Ekipmanları</p>
      <Link
        to="/menu/merch/tumbler"
        className={selectedLink === "tumbler" ? "selected-tab" : ""}
      >
        Her Zaman Seninle
      </Link>
      <Link
        to="/menu/merch/brewingEquip"
        className={selectedLink === "brewingEquip" ? "selected-tab" : ""}
      >
        Demleme Ekipmanları
      </Link>
      <Link
        to="/menu/merch/brewing"
        className={selectedLink === "brewing" ? "selected-tab" : ""}
      >
        Demleme Yöntemleri
      </Link>
    </div>
  );
}

export default LeftOfMenu;
