import "./Home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import HomeRightBox from "../components/HomeRightBox";
import OpenableBars from "../components/OpenableBars";
import FooterLinks from "../components/FooterLinks";
import homeVideo from "../images/home-video.mp4";
import icedShakenEspresso from "../images/iced-shaken-espresso.jpg";
import kupaTermos from "../images/kupa-termos-hepsiburada.jpg";
import kolaySiparis from "../images/kolay-siparis.jpg";
import uygulamaIndir from "../images/uygulama-indir.jpg";
import driveThru from "../images/drive-thru.jpg";
import essizDeneyim from "../images/essiz-deneyim.jpg";
import umut from "../images/umut.jpg";
import homePopup from "../images/home-popup.jpeg";
import closeButton from "../images/grey-close.svg";

function Home() {
  const [showPopUp, setshowPopUp] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getHours());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let homepageMessage;
  if (currentTime >= 5 && currentTime < 11) {
    homepageMessage = "Günaydın ☀️";
  } else if (currentTime >= 11 && currentTime < 16) {
    homepageMessage = "İyi günler ☕️";
  } else if (currentTime >= 16 && currentTime < 21) {
    homepageMessage = "İyi akşamlar ☕️";
  } else {
    homepageMessage = "İyi geceler 🌙";
  }

  return (
    <div
      className={`home-container ${showPopUp ? "" : "home-after-close-popup"}`}
    >
      <div className={`home-popup ${showPopUp ? "" : "display-none"}`}>
        <Link to="/join">
          <img
            src={homePopup}
            alt="campaign-img"
            className="home-popup-image"
          />
        </Link>
        <img
          src={closeButton}
          alt="campaign-img"
          className="home-popup-button"
          onClick={() => setshowPopUp(false)}
        />
      </div>
      <div className="home-page-left">
        <video
          autoPlay
          loop
          muted
          defaultmuted="true"
          playsinline
          preload="auto"
          className="home-page-video"
        >
          <source src={homeVideo} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
        <div className="home-page-left-text">{homepageMessage}</div>
      </div>
      <div className="home-page-right">
        <img
          src={icedShakenEspresso}
          alt="iced-shaken-espresso"
          className="iced-shaken-espresso"
        />
        <div className="yulafli">
          <p className="yulafli-header">Yulaflı lezzetler geri döndü!</p>
          <p className="yulafli-text">
            Süte alternatif yulaf lezzeti ve kahvenin eşsiz buluşması: özenle
            çalkalanarak hazırlanan Iced Shaken Espresso! Beyaz çikolata ve
            esmer şeker aromalı dönemsel lezzetlerimizle buluşmaya hazır mısın?
          </p>

          <div className="yulafli-buttons">
            <a
              href="https://www.yemeksepeti.com/city/istanbul"
              className="general-button green-button"
            >
              Yemeksepeti
            </a>
            <a
              href="https://getir.com/yemek/marka/starbucks/"
              className="general-button natural-bg-button"
            >
              GetirYemek
            </a>
          </div>
        </div>
        <div className="home-right-box-container">
          <HomeRightBox
            header="Yeni kupa ve termoslarımızla tanış! 🥳"
            image={kupaTermos}
            text="Kupa ve termos ailemizin yeni üyeleriyle tanışmaya hazır mısın?
                    🥳 Baharın renkleri ile yeni Starbucks® kupa ve termosları
                    Hepsiburada’da seni bekliyor! ☕🥳"
            greenButton={
              <a
                href="https://www.hepsiburada.com/kampanyalar/starbucks-ikonik-kupa-ve-termoslari-burada"
                className="general-button green-button"
              >
                Hepsiburada
              </a>
            }
          />
          <HomeRightBox
            image={kolaySiparis}
            text="Starbucks® Delivers ile siparişini ver, sen neredeysen kahven oraya
              gelsin!"
            greenButton={
              <a
                href="https://www.yemeksepeti.com/city/istanbul"
                className="general-button green-button"
              >
                Yemeksepeti
              </a>
            }
            whiteButton={
              <a
                href="https://getir.com/yemek/marka/starbucks/"
                className="general-button natural-bg-button"
              >
                GetirYemek
              </a>
            }
          />
          <HomeRightBox
            image={uygulamaIndir}
            text="Starbucks® Mobil Uygulaması’nın ayrıcalıklı dünyası ve güncel kampanyalardan haberdar ol."
            greenButton={
              <a href="/campaigns" className="general-button green-button">
                Hemen İncele
              </a>
            }
          />
          <HomeRightBox
            header="Arabaya servis ile ara vermeden yolculuğuna lezzet kat!"
            image={driveThru}
            text="Aracından inmeden Starbucks® Drive Thru mağazalarımızdan siparişini ver, ara vermeden yolculuğuna lezzet kat! 🚗 
                Şimdilik sınırlı mağazalarımızda: 📍Şekerpınar 📍Manavgat 📍Balıkesir O204 📍Ankara Vega Cadde 
                Yeni Drive Thru lokasyonlarımız için starbucks.com.tr'yi ziyaret etmeyi ve bizi sosyal medya hesaplarımızdan takip etmeyi unutma!"
          />
          <HomeRightBox
            header="Eşsiz bir deneyim seni bekliyor!"
            image={essizDeneyim}
            text="Egzotik bölgelerden nadir kahve çekirdeklerini özenle topladık ve Milano Roastry’de ustalıkla kavurduk. 
                Her fincan kahve ayrı bir hikaye demek ve belki de bu hikayenin bir daha tekrarı yok!"
            greenButton={
              <a
                href="/coffee/reserve"
                className="general-button green-button"
                target="_blank"
              >
                Detaylı Bilgi
              </a>
            }
          />
          <HomeRightBox
            header="Aydınlık ve umut dolu bir gelecek için birlikte olmanın önemine inanıyor, afet bölgesindeki iyileşme 
                yolculuğuna destek vermek için kaynaklarımızı ve kalplerimizi sunmaya devam ediyoruz."
            image={umut}
            text="Dünyaya yayılan büyük ailemiz sayesinde deprem bölgesindeki yaraların sarılmasında kullanılmak üzere maddi yardımlarımızı 
                ulaştırmaya devam ediyoruz. Yerel sosyal sorumluluk partnerlerimiz Tohum Otizm Vakfı ve AÇEV ile bölgede hayatın normale 
                dönmesi ve geleceğimiz olan çocuklarımız ile ailelerinin eğitim ihtiyaçlarının desteklenmesi için projelerimizi 
                hayata geçiriyoruz. Deprem bölgesinde gerçekleştirdiğimiz yardım çalışmalarıyla ilgili detaylı bilgi için;"
            greenButton={
              <a
                href="/responsibility/community"
                className="general-button green-button"
                target="_blank"
              >
                Daha fazla bilgi
              </a>
            }
          />
        </div>
        <OpenableBars paddingClass="noPadding" />
        <FooterLinks paddingClass="noPadding" />
      </div>
    </div>
  );
}

export default Home;
