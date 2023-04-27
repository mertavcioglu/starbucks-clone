import React from "react";
import "./Featured.css";
import FeaturedItem from "../components/FeaturedItem";
import featured01 from "../images/featured/featured01.webp";
import featured02 from "../images/featured/featured02.webp";
import featured03 from "../images/featured/featured03.webp";
import featured04 from "../images/featured/featured04.webp";
import featured05 from "../images/featured/featured05.webp";
import featured06 from "../images/featured/featured06.webp";

function Featured() {
  return (
    <div className="featured-container">
      <FeaturedItem
        featuredImage={featured01}
        featuredText="Starbucks® Şehir Temalı Kupa Serisi - Türkiye"
      />
      <FeaturedItem
        featuredImage={featured02}
        featuredText="Starbucks® Klasik Seri Termos - Yarı saydam Yeşil Renkli 355ml"
      />
      <FeaturedItem
        featuredImage={featured03}
        featuredText="Starbucks® Klasik Seri Termos - Yeşil Renkli 444ml"
      />
      <FeaturedItem
        featuredImage={featured04}
        featuredText="Starbucks® Klasik Seri Termos - Mat Yeşil - Siyah Renkli 355ml"
      />
      <FeaturedItem featuredImage={featured05} featuredText="House Blend" />
      <FeaturedItem
        featuredImage={featured06}
        featuredText="Starbucks® Klasik Seri Kupa - Gri 355ml"
      />
    </div>
  );
}

export default Featured;
