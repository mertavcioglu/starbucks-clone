import React from "react";
import "./Campaigns.css";
import option1 from "../images/option1.png";
import option2 from "../images/option2.png";
import option3 from "../images/option3.png";
import CampaignCard from "../components/CampaignCard";
import campaign01 from "../images/campaigns/campaign01.gif";
import campaign02 from "../images/campaigns/campaign02.jpeg";
import campaign03 from "../images/campaigns/campaign03.jpeg";
import campaign04 from "../images/campaigns/campaign04.jpeg";
import campaign05 from "../images/campaigns/campaign05.jpeg";
import campaign06 from "../images/campaigns/campaign06.jpeg";
import campaign07 from "../images/campaigns/campaign07.png";
import campaign08 from "../images/campaigns/campaign08.jpeg";
import campaign09 from "../images/campaigns/campaign09.jpeg";
import campaign10 from "../images/campaigns/campaign10.png";
import campaign11 from "../images/campaigns/campaign11.jpeg";
import campaign12 from "../images/campaigns/campaign12.jpeg";
import campaign13 from "../images/campaigns/campaign13.jpeg";
import campaign14 from "../images/campaigns/campaign14.jpeg";
import campaign15 from "../images/campaigns/campaign15.jpeg";
import campaign16 from "../images/campaigns/campaign16.jpeg";
import campaign17 from "../images/campaigns/campaign17.jpeg";
import campaign18 from "../images/campaigns/campaign18.jpeg";
import campaign19 from "../images/campaigns/campaign19.jpeg";
import campaign20 from "../images/campaigns/campaign20.jpeg";
import campaign21 from "../images/campaigns/campaign21.jpeg";
import campaign22 from "../images/campaigns/campaign22.jpeg";
import OpenableBars from "../components/OpenableBars";
import FooterLinks from "../components/FooterLinks";

function Campaigns() {
  return (
    <div className="campaigns-container">
      <div className="left-of-page">
        <div className="campaigns-left-text">Kampanyalar</div>
      </div>
      <div className="campaigns-page-right">
        <div className="campaigns-rewards-div">
          <p className="campaigns-rewards-header">STARBUCKS® REWARDS</p>
          <div className="rewards-images-div">
            <div className="rewards-option-item">
              <img
                src={option1}
                alt="option1"
                className="rewards-option-image"
              />
              <p className="rewards-option-text">Hesap oluşturun</p>
            </div>
            <div className="rewards-option-item">
              <img
                src={option2}
                alt="option1"
                className="rewards-option-image"
              />
              <p className="rewards-option-text">Para yükleyin</p>
            </div>
            <div className="rewards-option-item">
              <img
                src={option3}
                alt="option1"
                className="rewards-option-image"
              />
              <p className="rewards-option-text">
                Yıldız toplayın, ikram içecek kazanın
              </p>
            </div>
          </div>
        </div>
        <div className="campaigns-div">
          <CampaignCard
            campaignImage={campaign01}
            campaignHeader="Arkadaşını Davet Et” özelliğimizi keşfettin mi?"
            campaignText="Artık arkadaşlarını uygulamamıza davet edip, ilk bakiyesini yükleterek 5⭐ kazanabilirsin! 😉"
          />
          <CampaignCard
            campaignImage={campaign02}
            campaignHeader="Starbucks® Mobil’de Green ve Gold Üyelik!⭐️"
            campaignText="Starbucks® Mobil’de Green ve Gold üyelikler ile avantajların tadını çıkar."
            greenButton={
              <a
                href="/responsibility/community"
                className="general-button green-button"
                target="_blank"
              >
                Gold
              </a>
            }
            whiteButton={
              <a
                href="https://getir.com/yemek/marka/starbucks/"
                className="general-button natural-bg-button"
              >
                Green
              </a>
            }
          />
          <CampaignCard
            campaignImage={campaign03}
            campaignHeader="🚨 Kırmızı etiketli ürünlerde sürprizler!"
            campaignText="Mağazamızda altında kırmızı etiket bulunan birbirinden şık kupa ve termoslar özel fiyatlarıyla seni bekliyor! 🥳"
            greenButton={
              <a
                href="/responsibility/community"
                className="general-button green-button"
                target="_blank"
              >
                Alışverişe Başla!
              </a>
            }
          />
          <CampaignCard
            campaignImage={campaign04}
            campaignHeader="Bir sonraki durak Starbucks!"
            campaignText="İstanbulkart ile bir sonraki durak Starbucks! Starbucks’ta ödeme yapmak için artık İstanbulkart bakiyeni Starbucks® Mobil Uygulaması’na aktarabilir, ödemeni kolaylıkla tamamlayabilirsin."
          />
          <CampaignCard
            campaignImage={campaign05}
            campaignHeader="Yeniden kullanılabilir bardak ve termosunla yine bekleriz! ☘️"
            campaignText="Starbucks® Yeniden Kullanılabilir Bardakları tekrar tekrar kullanabileceğini biliyor muydun? 🌱 Üstelik artık mağazalarımızdan bu bardaklarla içeceğini alanlar +1⭐ kazanıyor! 🌳"
          />
          <CampaignCard
            campaignImage={campaign06}
            campaignHeader="Birbirimize umut olmaya devam ediyoruz ."
            campaignText="Aydınlık ve umut dolu bir gelecek için birlikte olmanın önemine inanıyor , afet bölgesindeki iyileşme yolculuğuna destek vermek için kaynaklarımızı ve kalplerimizi sunmaya devam ediyoruz."
          />
          <CampaignCard
            campaignImage={campaign07}
            campaignHeader="Wings’e özel 5.000 Mil Puan seni bekliyor!"
            campaignText="Shayakahve.com.tr’den Wings kartınla yapacağın ilk 750 TL ve üzeri 
            alışverişine, 5.000 Mil Puan hediye!"
            greenButton={
              <a
                href="/responsibility/community"
                className="general-button green-button"
                target="_blank"
              >
                Alışverişe Başla!
              </a>
            }
          />
          <CampaignCard
            campaignImage={campaign08}
            campaignHeader="Yıldıza Dönüşen Miller! ✈️⭐☕"
            campaignText="Türk Hava Yolları Miles&Smiles hesabında biriken milleri Starbucks® Mobil Uygulaması’yla yıldıza dönüştür, Starbucks’tan her 15 ⭐’a içecek ikramının tadını çıkar!"
          />
          <CampaignCard
            campaignImage={campaign09}
            campaignHeader="Kahven Paycell’den hediye! 🥳"
            campaignText="Starbucks Mobil® uygulaması üzerinden Turkcell faturana yansıtarak 100 TL ve üzeri yükleme yapana Paycell’den kahve hediye ☕"
            greenButton={
              <a
                href="/responsibility/community"
                className="general-button green-button"
                target="_blank"
              >
                Paycell
              </a>
            }
          />
          <CampaignCard
            campaignImage={campaign10}
            campaignHeader="Axess’ten ikram kahve!"
            campaignText="Juzdan’dan Starbucks® hesabına 150 TL ve üzeri bakiye yükle, 15⭐ hediye!"
            greenButton={
              <a
                href="/responsibility/community"
                className="general-button green-button"
                target="_blank"
              >
                Juzdan
              </a>
            }
          />
          <CampaignCard
            campaignImage={campaign11}
            campaignHeader="Artık GetirYemek siparişlerin de yıldızlı!"
            campaignText="Starbucks® Delivers ile GetirYemek üzerinden vereceğin Starbucks® 
            siparişlerinde her 75 TL'ye 1⭐️ hediye!"
            greenButton={
              <a
                href="https://getir.com/yemek/marka/starbucks/"
                className="general-button green-button"
                target="_blank"
                rel="noreferrer"
              >
                GetirYemek
              </a>
            }
          />
          <CampaignCard
            campaignImage={campaign12}
            campaignHeader="2.sine %50 az öde! ☕🎉"
            campaignText="17 Nisan - 31 Temmuz tarihleri arasında kahve keyfini ikiye katla! 
            Starbucks’tan alacağın Starbucks Tribute Blend™ çekirdek kahvelerin 2.sine %50 az öde! 🥳"
          />
          <CampaignCard
            campaignImage={campaign13}
            campaignHeader="Hediye kahve Tosla’dan! 🥳"
            campaignText="Tosla uygulamasından Starbucks® hesabına 150 TL ve üzeri ilk bakiye 
            yüklemende 15⭐, yani 1 içecek hediye! 🎈 Unutma, son gün 30 Nisan! 😉"
          />
          <CampaignCard
            campaignImage={campaign14}
            campaignHeader="Kısa süreliğine seninle!"
            campaignText="2 yeni lezzetimizle tanışmaya hazır mısın? Bu aya özel tatlı ve tuzlu yiyeceklerimizi keşfet 👀"
            greenButton={
              <a
                href="https://getir.com/yemek/marka/starbucks/"
                className="general-button green-button"
                target="_blank"
                rel="noreferrer"
              >
                GetirYemek
              </a>
            }
            whiteButton={
              <a
                href="https://www.yemeksepeti.com/city/istanbul"
                target="_blank"
                rel="noreferrer"
                className="general-button natural-bg-button"
              >
                Yemeksepeti
              </a>
            }
          />
          <CampaignCard
            campaignImage={campaign15}
            campaignHeader="Kahven anında hazır! ⏰"
            campaignText="İster sıcak su, ister sıcak süt ekle. Starbucks® VIA ile kahve keyfi dilediğin yerde seninle! 🤎☕"
            greenButton={
              <a
                href="/responsibility/community"
                className="general-button green-button"
                target="_blank"
              >
                Alışverişe Başla!
              </a>
            }
          />
          <CampaignCard
            campaignImage={campaign16}
            campaignHeader="Seçili Starbucks® çekirdek kahveler 15⭐ hediyeli!"
            campaignText="Mağazalarımızdan yapacağın birbirinden lezzetli Starbucks® çekirdek kahve alışverişlerinde 15⭐seni bekliyor!"
          />
          <CampaignCard
            campaignImage={campaign17}
            campaignHeader="Yulaflı lezzetler geri döndü 🧊☕"
            campaignText="Süte alternatif yulaf lezzeti ve kahvenin eşsiz buluşması: 
            özenle çalkalanarak hazırlanan Iced Shaken Espresso!"
            greenButton={
              <a
                href="https://getir.com/yemek/marka/starbucks/"
                className="general-button green-button"
                target="_blank"
                rel="noreferrer"
              >
                GetirYemek
              </a>
            }
            whiteButton={
              <a
                href="https://www.yemeksepeti.com/city/istanbul"
                target="_blank"
                rel="noreferrer"
                className="general-button natural-bg-button"
              >
                Yemeksepeti
              </a>
            }
          />
          <CampaignCard
            campaignImage={campaign18}
            campaignHeader="2.sine %50 az öde!"
            campaignText="🎉shayakahve.com.tr’den alacağın tüm Starbucks® 250g çekirdek kahvelerde 2.sine %50 az öde! ☕"
            greenButton={
              <a
                href="/responsibility/community"
                className="general-button green-button"
                target="_blank"
              >
                Alışverişe Başla!
              </a>
            }
          />
          <CampaignCard
            campaignImage={campaign19}
            campaignHeader="3⭐ hediyeli sandviçler!"
            campaignText="Günlük hazırladığımız sandviçler, seçili mağazalarımıza özel 3⭐ hediyesiyle! En yakın mağazayı keşfetmek için tıkla 👉🏻"
          />
          <CampaignCard
            campaignImage={campaign20}
            campaignHeader="Fırından yeni çıktı! 🥐"
            campaignText="Sıcacık kruvasanlar 3⭐ hediyesiyle seni bekliyor! Seçili mağazalarımıza özel yıldızlı kruvasanları keşfetmek için tıkla 👉🏻"
          />
          <CampaignCard
            campaignImage={campaign21}
            campaignHeader="Bulutların üzerinde bir lezzet! ⛅️😍"
            campaignText="Mavi ahududu aromalı yeni lezzetimiz Blue Raspberry Cloud Frappuccino®, 
            kısa bir süreliğine seni bulutların üzerine çıkarmak için geliyor! 💙"
            greenButton={
              <a
                href="https://getir.com/yemek/marka/starbucks/"
                className="general-button green-button"
                target="_blank"
                rel="noreferrer"
              >
                GetirYemek
              </a>
            }
            whiteButton={
              <a
                href="https://www.yemeksepeti.com/city/istanbul"
                target="_blank"
                rel="noreferrer"
                className="general-button natural-bg-button"
              >
                Yemeksepeti
              </a>
            }
          />
          <CampaignCard
            campaignImage={campaign22}
            campaignHeader="Mastercard 💚 Starbucks’tan müjde! 🎉"
            campaignText="5 ⭐’lı hafta sonları seni bekliyor!🧡☕ Starbucks® Mobil Uygulaması’nda Masterpass™’e kayıtlı Mastercard logolu kartınla yapacağın 150 TL ve üzeri yüklemelerde 5⭐ hediye!"
          />
        </div>
        <OpenableBars />
        <FooterLinks />
      </div>
    </div>
  );
}

export default Campaigns;
