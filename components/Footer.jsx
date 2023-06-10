import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        {" "}
        {<AiOutlineCopyrightCircle />} 2023 Chutti Pattu All rights reserved
      </p>
      <p className="icons">
        <a href="https://www.instagram.com/chuttipattu/" target="_blank">
          <AiFillInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100090116794902"
          target="_blank"
        >
          <AiFillFacebook />
        </a>
      </p>
    </div>
  );
};

export default Footer;
