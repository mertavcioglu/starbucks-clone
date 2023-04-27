import React from "react";
import "./Header.css";
import headerLogo from "../images/logo-icon2.png";
import { Link } from "react-router-dom";
import locationIcon from "../images/location-icon.svg";

function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <Link to="/starbucks-clone">
          <img src={headerLogo} alt="header-logo" className="header-logo" />
        </Link>
        <Link to="/rewards">STARBUCKS REWARDS</Link>
        <Link to="/menu">MENÜ</Link>
        <Link to="/campaigns">KAMPANYALAR</Link>
        <Link to="/egift">E-GIFT</Link>
        <Link to="/corporate">KURUMSAL SATIŞ</Link>
      </div>
      <div className="header-right">
        <Link
          to="https://www.starbucks.com.tr/stores"
          target="_blank"
          className="stores"
        >
          <img
            src={locationIcon}
            alt="location-svg"
            className="location-icon"
          />
          Mağazalarımız
        </Link>
        <Link
          to="https://shayakahve.com.tr/"
          target="_blank"
          className="general-button green-button"
        >
          Alışverişe Başla
        </Link>
        <Link to="/login" className="general-button login-button">
          Giriş
        </Link>
        <Link to="/join" className="general-button join-button">
          Hemen Katıl
        </Link>
      </div>
    </header>
  );
}

export default Header;
