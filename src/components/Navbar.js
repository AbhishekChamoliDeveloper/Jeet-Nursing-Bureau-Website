import React, { useState, useEffect } from "react";
import company_logo from "../assets/company_logo.png";
import MobileMenu from "./MobileMenu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const top = window.pageYOffset;

    if (top > 10) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className={`flex bg-white ${
        !visible ? "fixed  z-40" : ""
      } flex-row items-center justify-around p-3 max-sm:justify-between transition-all delay-1000 ease-in-out w-full`}
    >
      <a href="/">
        <img
          src={company_logo}
          alt="jeet nurses bureau logo"
          className="h-16"
        />
      </a>

      <MobileMenu />

      <div className="flex flex-row items-center justify-center space-x-6 max-sm:hidden">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={1500}
          className="font-semibold text-blue-400 hover:text-blue-300 text-lg"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={1500}
          className="font-semibold text-blue-400 hover:text-blue-300 text-lg"
        >
          About
        </Link>
        <Link
          to="contactus"
          spy={true}
          smooth={true}
          duration={1500}
          className="font-semibold text-blue-400 hover:text-blue-300 text-lg"
        >
          Contact Us
        </Link>
        <Link
          to="gallary"
          spy={true}
          smooth={true}
          duration={1500}
          className="font-semibold text-blue-400 hover:text-blue-300 text-lg"
        >
          Gallary
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={2500}
          className="font-semibold text-blue-400 hover:text-blue-300 text-lg"
        >
          Services
        </Link>
      </div>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdrB--xq_k92RKdoOZ6FjOLv-9wkb8K5_qqfyAon19uTR9j5w/viewform"
        className="rounded-md py-2 px-8 text-white font-semibold bg-yellow-500 max-sm:hidden hover:bg-yellow-400 transition-all duration-500 ease-in-out"
      >
        Career
      </a>
    </div>
  );
};

export default Navbar;
