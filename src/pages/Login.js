import React from "react";
import "./Login.css";
import OpenableBars from "../components/OpenableBars";
import FooterLinks from "../components/FooterLinks";
function Login() {
  function onSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="login-container">
      <div className="left-of-page">
        <div className="login-left-text">Giriş</div>
      </div>
      <div className="login-page-right">
        <div className="login-div">
          <form className="login-form" action="submit" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Telefon Numarası veya Email Adresi"
              className="login-input"
            />
            <p className="login-input-text">
              (Lütfen ülke kodunuz ile başlayan telefon numaranızı veya email
              adresinizi girin.Örn. 905****** veya abc@xyz.com)
            </p>
            <input
              type="password"
              placeholder="Şifre"
              className="login-input"
            />
            <p className="login-input-text forgot-password">
              Şifrenizi mi unuttunuz ?
            </p>
            <button type="submit" className="sign-button login-div-button">
              Giriş
            </button>
          </form>
        </div>
        <OpenableBars />
        <FooterLinks />
      </div>
    </div>
  );
}

export default Login;
