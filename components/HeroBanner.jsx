import { React, useEffect } from "react";
import { urlFor } from "../lib/client";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroBanner = ({ heroBanner }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.name}</p>
        <h3 data-aos="fade-up">{heroBanner.midText}</h3>
        <h3 data-aos="zoom-in-down">{heroBanner.largeText1}</h3>
        <img
          data-aos="zoom-in-right"
          src={urlFor(heroBanner.image)}
          alt="chutti"
          className="hero-banner-image"
        />
        <div className="button">
          {/* <Link href={`/product/${heroBanner.product}`}>
            <button> {heroBanner.buttonText}</button>
          </Link> */}
          {heroBanner.buttonText}
        </div>
        <div className="desc">
          <h3 data-aos="flip-up">{heroBanner.desc}</h3>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
