import React from "react";
import "./Favorites.css";
import favorites from "../images/favorites.png";
import { Link } from "react-router-dom";

function Favorites() {
  return (
    <div className="favorites-container">
      <img src={favorites} alt="favorites" className="favorites-image" />
      <p className="favorites-header">Favori ürünler</p>
      <p className="favorites-text">
        Sevdiğiniz ürünleri işaretlemek için kalp ikonunu kullanın, buradan
        tekrar hızlıca ulaşın.
      </p>
      <div className="favorites-buttons">
        <Link
          to="/login"
          className="general-button login-button favorites-button"
        >
          Giriş
        </Link>
        <Link to="/join" className="general-button join-button">
          Hemen Katıl
        </Link>
      </div>
    </div>
  );
}

export default Favorites;
