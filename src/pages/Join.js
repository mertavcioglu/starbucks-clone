import React from "react";
import "./Join.css";
import OpenableBars from "../components/OpenableBars";
import FooterLinks from "../components/FooterLinks";
import GreenCheckbox from "../components/GreenCheckbox";
function Join() {
  function onSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="join-container">
      <div className="left-of-page">
        <div className="join-left-text">Hesap Oluştur</div>
      </div>
      <div className="join-page-right">
        <div className="join-div">
          <form className="join-form" action="submit" onSubmit={onSubmit}>
            <p className="join-header">KIŞISEL BILGILER</p>
            <input type="text" placeholder="İlk isim" className="join-input" />
            <input type="text" placeholder="Soy isim" className="join-input" />
            <p className="join-header">HESAP GÜVENLİĞİ</p>
            <input
              type="email"
              placeholder="Email adresi"
              className="join-input"
            />

            <input
              type="tel"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              maxlength="12"
              placeholder="Telefon Numarası"
              className="join-input"
            />
            <p className="join-input-text">
              Lütfen ülke kodunuz ile başlayan telefon numaranızı girin.Örn.
              905******
            </p>
            <input type="password" placeholder="Şifre" className="join-input" />
            <input
              type="text"
              placeholder="Yıldızlı Davet Kodu (Varsa)"
              className="join-input"
            />
            <p>
              Kişisel verileriniz,
              <span className="join-green-text">Aydınlatma Metni</span>
              kapsamında işlenecektir.
            </p>
            <div className="join-checkbox-div">
              <GreenCheckbox checkboxId="1" />
              <p className="join-checkbox-text">
                Kimlik, iletişim, lokasyon, pazarlama ve müşteri işlem ve işlem
                güvenliği verilerimin barındırma amacıyla yurt dışında mukim
                hizmet sağlayıcı Amazon Web Services Inc. ile ve Mobil Uygulama
                içerik yönetimi amacıyla Google Inc. ile paylaşılmasını kabul
                ediyorum.
              </p>
            </div>
            <p className="join-header-black">Kullanım Sözleşmesi</p>
            <div className="join-checkbox-div">
              <GreenCheckbox checkboxId="2" />
              <p className="join-checkbox-text">
                <span className="join-green-text join-bottom-green-text">
                  Starbucks Card Programı Üyelik Sözleşmesi ve Program Kullanım
                  Koşulları'nı
                </span>
                okudum ve kabul ediyorum
              </p>
            </div>
            <p className="join-header-black">Tercihler</p>
            <div className="join-checkbox-div">
              <GreenCheckbox checkboxId="3" />
              <div>
                <p className="join-checkbox-text">
                  Aydınlatma Metni uyarınca kimlik, iletişim, pazarlama ve
                  müşteri işlem verilerimin ürün ve hizmetlerin beğeni, kullanım
                  alışkanlıklarım ve ihtiyaçlarıma göre özelleştirilerek
                  önerilmesi, sunulması ve tanıtılması, anket ve memnuniyet
                  çalışmaları gerçekleştirilmesi ve fırsatlar sağlanması ile
                  iletişim bilgilerime ticari elektronik ileti gönderilmesi ve
                  kampanyalar hakkında bilgilendirilmem amaçları ile işlenmesini
                  ve bu kapsamda tedarikçiler ile paylaşılmasını kabul ediyorum.
                </p>
                <div className="join-checkbox-div join-checkbox-small-div">
                  <GreenCheckbox checkboxId="4" />
                  <p className="join-checkbox-text">
                    Evet, Starbucks'tan SMS almak istiyorum
                  </p>
                </div>
                <div className="join-checkbox-div join-checkbox-small-div">
                  <GreenCheckbox checkboxId="5" />
                  <p className="join-checkbox-text">
                    Evet, Starbucks'tan Email almak istiyorum
                  </p>
                </div>
              </div>
            </div>
            <p className="join-checkbox-text">
              Mağazalarımızda Starbucks Mobil Uygulaması, nakit veya kredi kartı
              ile alışveriş yapabilir, ürün ve hizmetlerimizden
              faydalanabilirsiniz.
            </p>
            <button type="submit" className="sign-button join-div-button">
              Hesap Oluştur
            </button>
          </form>
        </div>
        <OpenableBars />
        <FooterLinks />
      </div>
    </div>
  );
}

export default Join;
