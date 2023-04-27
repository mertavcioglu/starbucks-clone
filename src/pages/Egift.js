import React from "react";
import "./Egift.css";
import { Link } from "react-router-dom";

function Egift() {
  return (
    <div className="egift-container">
      <div className="egift-bakiye-sorgula">
        <div className="bakiye-sorgula-left">
          Gift Card?
          <button className="general-button natural-bg-button">
            Bakiye Sorgula
          </button>
        </div>
        <div className="bakiye-sorgula-right">Kullanım Koşulları</div>
      </div>
      <div className="egift-warning">
        <div className="warning-explanation">
          E-Gift almak ve hediye göndermek icin lütfen giriş yapın. Eğer Rewards
          program üyesi değilseniz Üye Ol butonuna tıklayarak üye olabilirsiniz.
        </div>
        <div className="egift-warning-buttons">
          <Link
            to="/starbucks-clone"
            className="general-button green-button go-back-button"
          >
            Geri Dön
          </Link>
          <Link to="/login" className="general-button green-button">
            Giriş Yap
          </Link>
          <Link to="/join" className="general-button green-button">
            Hemen Katıl
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Egift;
