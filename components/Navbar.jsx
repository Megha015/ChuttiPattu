import React from "react";
import Link from "next/link";
import Image from "next/image";
import pic1 from "../assets/p1.jpg";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Chutti Pattu&apos;s Ethnic Collections</Link>
      </p>
      <Image src={pic1} width={50} height={50} alt="chutti" />
    </div>
  );
};

export default Navbar;
