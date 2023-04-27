import React from "react";
import "./Rewards.css";
import ThreeOptions from "../components/ThreeOptions";
import HintCard from "../components/HintCard";
import OpenableBars from "../components/OpenableBars";
import FooterLinks from "../components/FooterLinks";
import starbucksRewards from "../images/logo-sb-rewards.png";
import touchCoffee from "../images/touch-coffee.png";
import hint1 from "../images/hint1.jpg";
import hint2 from "../images/hint2.jpg";
import hint3 from "../images/hint3.jpg";
import hint4 from "../images/hint4.jpg";

function Rewards() {
  return (
    <div className="rewards-container">
      <div className="left-of-page rewards-page-left">
        <img
          src={starbucksRewards}
          alt="starbucks-rewards"
          className="starbucks-rewards-image"
        />
      </div>
      <div className="rewards-page-right">
        <p className="rewards-header">
          Starbucks yıldızlarıyla ayrıcalıklar cebinde!
        </p>
        <p className="rewards-text">
          Siparişini hızlıca verip yıldızlarını biriktirmeye başla. Yeterli
          yıldıza ulaştığındaysa hediye içeceğini yudumla!
        </p>
        <p className="rewards-header">Yıldız yağmuruna yakalandın! </p>
        <p className="rewards-text">Yıldızlarının avantajlarını öğren.</p>
        <ThreeOptions
          optionOneHeader="Hoş Geldin 15⭐"
          optionTwoHeader="15⭐"
          optionThreeHeader="İyi ki Doğdun!"
          optionOneText="Starbucks Mobil’I indirip ilk kez hesap oluşturan ve 75 TL 
          yükleme yapan herkesin 15 ⭐ değerindeki Tall boy içeceği bizden!"
          optionTwoText="Her 15 yıldız topladığında, 1 Tall boy içecek ikramımızla bizdensin."
          optionThreeText="Yeni yaşına Starbucks’tan ikram 1 Tall boy içecekle başla. 
          Çünkü 15 ⭐ hediyemiz hesabında! E içimizden geldi."
        />
        <div className="touch-coffee">
          <p className="touch-coffee-top-text">
            Starbucks® uygulamasını indirin, yıl boyunca bol yıldızlı
            kampanyaları kaçırmayın!
          </p>
          <div className="touch-coffee-bottom">
            <img
              src={touchCoffee}
              alt="touch-coffee"
              className="touch-coffee-image"
            />
            <div className="touch-coffee-right">
              <p className="touch-coffee-header">Kahveye dokunun</p>
              <p className="touch-coffee-text">
                Yeni gelen dönemsel ürünleri, size özel kampanya tekliflerini
                görmek ve beklemeden hızlıca telefonunuzdan ödeme yapabilmek
                için Starbucks® uygulamasını kullanın. İşte bu kadar kolay!
              </p>
              <a
                href="https://starbuckstr.page.link/app"
                target="_blank"
                rel="noreferrer"
                className="general-button natural-bg-button"
              >
                İndir
              </a>
            </div>
          </div>
        </div>
        <p className="rewards-header">Nasıl mı? Çok kolay!</p>
        <p className="rewards-small-header">
          Yıldız kazanmak düşündüğünden daha kolay!
        </p>
        <p className="rewards-text">
          Yıldızların dünyasına Starbucks hesabını oluşturak adımını at.
          Birbirinden farklı güzellikler için Yıldız Yağmuru’nu da kontrol
          etmeyi unutma.
        </p>
        <ThreeOptions
          optionOneHeader="Hesabını oluştur"
          optionTwoHeader="Para yükle & öde"
          optionThreeHeader="Yıldız topla & hediye kazan"
          optionOneText="Kaydolmak çok kolay, çok hızlı! Hemen Starbucks Mobil Uygulama’sını 
          indir, yıldız kazandıran kampanyalarımızı kaçırma."
          optionTwoText="Hesabınızda hep para olsun, böylece her zaman kahve içmeye hazır olursunuz."
          optionThreeText="Aldığınız her içecek için 1 yıldız kazanırsınız. Hızlı bir şekilde toplanmalarını izleyin!"
          joinButton={
            <a
              href="https://starbuckscardtr.com/join"
              target="_blank"
              rel="noreferrer"
              className="general-button natural-bg-button"
            >
              Kayıt Ol
            </a>
          }
          heightDiv="heightDiv"
          flexColumn="flexColumn"
        />
        <p className="rewards-header">
          Starbucks Rewards dünyasının Green ve Gold üyelik ayrıcalıklarını
          keşfedin!
        </p>
        <div className="memberships">
          <div className="green-membership">
            <div className="membership-header green-header">GREEN ÜYELİK</div>
            <div className="membership-triangle green-triangle"></div>
            <div className="membership-text-div green-text-div">
              <p className="membership-text green-text membership-first-text">
                ⭐ Yıl içinde bir kez Starbucks ürünü almak şartıyla doğum
                günlerinde Tall boy ikram içecek
              </p>
              <p className="membership-text green-text">
                ⭐ Yıldızlarla alınan Tall boy ikram içeceklerde ekstra shot,
                şurup veya krema arasından herhangi 2’siyle kişiselleştirme
                hakkı.
              </p>
              <p className="membership-text green-text">
                ⭐ Green üyelikten Gold üyeliğe geçiş yapan üyelerimize dilediği
                boy 1 adet ikram icecek hakkı.
              </p>
            </div>
          </div>
          <div className="gold-membership">
            <div className="membership-header gold-header">GOLD ÜYELİK</div>
            <div className="membership-triangle gold-triangle"></div>
            <div className="membership-text-div gold-text-div">
              <p className="membership-text gold-text membership-first-text">
                ⭐ Yıldızlarla alınan içeceklerde dilediğin boy ikram hakkı.
              </p>
              <p className="membership-text gold-text">
                ⭐ Yıldızlarla alınan içeceklerde ekstra shot, şurup veya krema
                arasında herhangi 2’siyle kişiselleştirme hakkı
              </p>
              <p className="membership-text gold-text">
                ⭐ Doğum günlerinde dilediğin boy ikram içecek hakkı.
              </p>
              <p className="membership-text gold-text">
                ⭐ Doğum gününe özel tatlı kategorisinde seçili ürünlerde %50
                indirim
              </p>
              <p className="membership-text gold-text">
                ⭐ Her içecekte shot, şurup veya krema arasından 1 adet
                kişiselleştirme hakkı.
              </p>
              <p className="membership-text gold-text">
                ⭐ Gold üyelere özel yıl boyu kampanya ve ayrıcalıklar.
              </p>
              <p className="membership-text gold-small-text">
                1 yıl içerisinde içecek alışverişlerinden 120 ⭐ kazanan
                misafirler Gold üye olmaya hak kazanacaklardır. Kampanyalardan
                kazanılan yıldızlarda geçerli değildir. Değişen Gold üyeliğe
                geçiş şartları, mevcut Gold üyelerin üyelik tipini etkilemez.
              </p>
            </div>
          </div>
        </div>
        <p className="rewards-header">Başlamak için yararlı ipuçları</p>
        <div className="hints-div">
          <HintCard
            hintImage={hint1}
            hintText="Starbucks® Mobil Uygulaması'da Şifre Nasıl Değiştirilir ?"
            videoLink="https://www.youtube.com/watch?v=bou9aBO5kVk"
          />
          <HintCard
            hintImage={hint2}
            hintText="Starbucks® Mobil Uygulaması'nda Kart Nasıl Oluşturulur ?"
            videoLink="https://www.youtube.com/watch?v=MMSzZGR03i0"
          />
          <HintCard
            hintImage={hint3}
            hintText="Starbucks® Gift Card'ındaki Bakiye Starbucks Mobil Uygulaması'na nasıl aktarılır ?"
            videoLink="https://www.youtube.com/watch?v=_uUHqmkXzTI"
          />
          <HintCard
            hintImage={hint4}
            hintText="Starbucks® Mobil Uygulaması'na Masterpass Hesabı Nasıl Eklenir ?"
            videoLink="https://www.youtube.com/watch?v=JsRfnpn5jBE"
          />
        </div>
        <div className="any-questions-div">
          <p className="any-questions-header">Sorularınız var mı?</p>
          <p className="any-questions-text">
            Sana her açıdan yardımcı olmak isteriz. Soruların varsa rahatça
            barista’larımıza sorabilirsin. Veya en çok merak edilen soruların
            yanıtına aşağıdan ulaşabilirsin.
          </p>
          <a
            href="https://content.sbuxtr.com/static/docs/tr/help.html"
            target="_blank"
            rel="noreferrer"
            className="general-button natural-bg-button"
          >
            Keşfet
          </a>
        </div>
        <OpenableBars />
        <FooterLinks />
      </div>
    </div>
  );
}

export default Rewards;
