import React, { useState } from "react";
import "./OpenableBars.css";
import { Link } from "react-router-dom";

function OpenableBars(props) {
  const [divVisibility, setDivVisibility] = useState({
    hakkimizda: false,
    kahve: false,
    sosyalSorumluluk: false,
    starbucksDelivers: false,
  });
  const toggleDivVisibility = (divName) => {
    setDivVisibility({
      ...divVisibility,
      [divName]: !divVisibility[divName],
    });
  };
  return (
    <div className={`openable-bars ${props.paddingClass}`}>
      <div
        className="bar-list-item"
        onClick={() => toggleDivVisibility("hakkimizda")}
      >
        Hakkımızda
        <button className="openable-bars-expand-button">❯</button>
      </div>
      {divVisibility.hakkimizda && (
        <ul className="openable-list">
          <Link to="/about-us/our-heritage">Tarihçe</Link>
          <Link to="/about-us/company-information">Şirketimiz</Link>
          <Link to="/coffeehouse">Mağazalarımız</Link>
        </ul>
      )}

      <div
        className="bar-list-item"
        onClick={() => toggleDivVisibility("kahve")}
      >
        Kahve
        <button className="openable-bars-expand-button">❯</button>
      </div>
      {divVisibility.kahve && (
        <ul className="openable-list">
          <Link to="/coffee/reserve">Starbucks Reserve</Link>
          <Link to="/coffee/supply-roastry-blending">
            Kahve Tedariği & Kavurma & Harmanlama
          </Link>
          <Link to="/coffee/roast">Kavurma Profiline Göre Kahveler</Link>
          <Link to="/coffee/how-to-brew">Nasıl Mükemmel Kahve Hazırlanır</Link>
          <Link to="/coffee/faq">Kahve SSS</Link>
        </ul>
      )}

      <div
        className="bar-list-item"
        onClick={() => toggleDivVisibility("sosyalSorumluluk")}
      >
        Sosyal Sorumluluk
        <button className="openable-bars-expand-button">❯</button>
      </div>
      {divVisibility.sosyalSorumluluk && (
        <ul className="openable-list">
          <Link to="/responsibility/sourcing">Etik ticaret</Link>
          <Link to="/responsibility/community">Topluma katkı</Link>
          <Link to="/responsibility/environment">Çevre</Link>
          <Link to="/responsibility/diversity">Çeşitlilik</Link>
          <Link to="/responsibility/sustainability">Sürdürülebilirlik</Link>
        </ul>
      )}

      <div
        className="bar-list-item"
        onClick={() => toggleDivVisibility("starbucksDelivers")}
      >
        <Link className="home-starbucks-delivers-button" to="/delivers">
          Starbucks Delivers
        </Link>
        <button className="openable-bars-expand-button">❯</button>
      </div>
      {divVisibility.starbucksDelivers && (
        <ul className="openable-list">
          <Link to="/delivers/delivery-yemeksepeti">Yemeksepeti</Link>
          <Link to="/delivers/delivery-getir">Getir</Link>
        </ul>
      )}
    </div>
  );
}

export default OpenableBars;
