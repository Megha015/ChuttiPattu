import { React, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import pic1 from "../assets/p1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="navbar-container">
      <p className="logo" data-aos="slide-right">
        <Link href="/">Chutti Pattu&apos;s Ethnic Collections</Link>
      </p>
      <Image src={pic1} width={50} height={50} alt="chutti" />
    </div>
  );
};

export default Navbar;
