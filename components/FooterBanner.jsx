import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          {/* <p>{footerBanner.discount}</p> */}
          <h3>{footerBanner.largeText2}</h3>
          {/* <h1>{footerBanner.largeText1}</h1> */}
        </div>

        <div className="right">
          <p>{footerBanner.smallText}</p>
          <p>{footerBanner.discount}</p>

          {/* <Link href={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link> */}
        </div>
      </div>
      <img src={urlFor(footerBanner.image)} className="footer-banner-image" />
    </div>
  );
};

export default FooterBanner;
