import React from "react";
import Link from "next/link";
import Image from "next/image";
import pic1 from "../assets/p1.jpg";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Chutti Pattu's Ethnic Collections</Link>
      </p>
      <Image src={pic1} width={50} height={50} alt="chutti" />

      {/* <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button> */}
    </div>
  );
};

export default Navbar;
