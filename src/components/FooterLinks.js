import React from "react";
import "./FooterLinks.css";
import { Link } from "react-router-dom";

function FooterLinks(props) {
  return (
    <footer className={`footer-links ${props.paddingClass}`}>
      <div className="social-links">
        <a
          href="https://www.facebook.com/StarbucksTurkiye"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-facebook fa-2xl"></i>
        </a>
        <a
          href="https://www.instagram.com/starbucks_tr/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </a>
        <a
          href="https://www.youtube.com/c/StarbucksTr"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-youtube fa-2xl"></i>
        </a>
        <a
          href="https://twitter.com/StarbucksTR"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-twitter fa-2xl"></i>
        </a>
        <a
          href="https://www.tiktok.com/@starbucks_turkiye"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-tiktok fa-2xl"></i>
        </a>
      </div>
      <Link
        to="https://content.sbuxtr.com/static/docs/tr/personaldisc.html"
        target="_blank"
      >
        Kişisel Veri Aydınlatma Metni
      </Link>
      <Link
        to="https://content.sbuxtr.com/static/docs/tr/terms.html"
        target="_blank"
      >
        Kullanım Koşulları
      </Link>
      <Link to="/cerez">Çerez Tercihleri</Link>
      <Link to="/nutrition">Besin Değerleri Tablosu</Link>
      <Link to="/egift">Gift Card</Link>
      <Link to="/contact">Bize Ulaşın</Link>
      <Link to="/press">Basın</Link>
      <button className="general-button natural-bg-button language-button">
        English
      </button>
    </footer>
  );
}

export default FooterLinks;
