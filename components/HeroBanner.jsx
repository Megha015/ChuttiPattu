import Link from "next/link";
import React from "react";
import pic1 from "../assets/p1.jpg";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.name}</p>
        <h3>{heroBanner.midText}</h3>
        <h3>{heroBanner.largeText1}</h3>
        <img
          src={urlFor(heroBanner.image)}
          alt="chutti"
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button> {heroBanner.buttonText}</button>
          </Link>

          <div className="desc">
            <h3>{heroBanner.desc}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
