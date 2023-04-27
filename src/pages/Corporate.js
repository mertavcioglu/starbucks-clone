import React from "react";
import "./Corporate.css";
import kurumsalSatis from "../images/kurumsal-satis.jpeg";
import OpenableBars from "../components/OpenableBars";
import FooterLinks from "../components/FooterLinks";

function Corporate() {
  return (
    <div className="corporate-container">
      <div className="left-of-page">
        <img
          src={kurumsalSatis}
          alt="corporate-sales"
          className="corporate-image"
        />
      </div>
      <div className="corporate-page-right">
        <div className="corporate-explaination-div">
          <p className="corporate-header">Starbucks® Kurumsal Satış</p>
          <p className="corporate-text">
            Kupa ve termoslardan demleme ekipmanlarımıza, çekirdek
            kahvelerimizden kurumsal kartlarımıza; tüm Starbucks® ürünleri
            burada!
          </p>
          <p className="corporate-text">
            Kurumsal ihtiyaçlarınıza yönelik kupa, termos, demleme ekipmanları,
            çekirdek kahveler, kurumsal hediye kartları ve dönemsel hediye
            alternatifleri için
            <span className="corporate-mail">
              kurumsalsatis.tur@alshaya.com
            </span>
            mail adresi üzerinden dilediğiniz zaman bizimle iletişime
            geçebilirsiniz.
          </p>
          <p className="corporate-header">Kurumsal Starbucks® Card Hakkında:</p>
          <p className="corporate-text">
            Kurumsal Starbucks® Card, kurumların çalışanlarına özel olarak
            sunabileceği, tekrar yükleme özelliği bulunmayan, ön ödemeli bir
            hediye kartıdır. Starbucks® Türkiye mağazalarında
            gerçekleştirilecek, perakende ürünleri haricindeki tüm
            alışverişlerde kullanılabilmektedir. Kurumsal Starbucks® Card’ın 20
            adet ve üzerindeki toplu alımlar için satışı yapılmaktadır.
          </p>
          <p className="corporate-text">
            Kurumsal Starbucks® Card, Alshaya tarafından yönetilen tüm
            Starbucks® Türkiye mağazalarında içerisindeki bakiye tükenene kadar
            kullanılabilmekte ve iadesi yapılamamaktadır. Mağaza listemize
            Starbucks® Mobil Uygulaması’ndan veya Starbucks® Türkiye adresinden
            ulaşabilirsiniz.
          </p>
          <div className="corporate-buttons">
            <a
              href="https://www.starbucks.com.tr/menu/coffeeAtHome/coffeeBean"
              className="general-button green-button"
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a>
            <a
              href="https://d2j7ortnjfum1q.cloudfront.net/files/catalog.pdf"
              className="general-button green-button"
              target="_blank"
              rel="noreferrer"
            >
              Perakende Ürün Kataloğu
            </a>
          </div>
        </div>
        <OpenableBars />
        <FooterLinks />
      </div>
    </div>
  );
}

export default Corporate;
