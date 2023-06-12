import React from "react";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h3>{footerBanner.largeText2}</h3>
        </div>

        <div className="right">
          <p>{footerBanner.smallText}</p>
          <p>{footerBanner.discount}</p>
        </div>
      </div>
      <img src={urlFor(footerBanner.image)} className="footer-banner-image" />
    </div>
  );
};

export default FooterBanner;
