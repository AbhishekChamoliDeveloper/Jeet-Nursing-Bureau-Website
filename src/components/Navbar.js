import React from "react";
import company_logo from "../assets/company_logo.png";
import MobileMenu from "./MobileMenu";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-around p-3 max-sm:justify-between">
      <a href="/">
        <img
          src={company_logo}
          alt="jeet nurses bureau logo"
          className="h-10"
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
          to="reviews"
          spy={true}
          smooth={true}
          duration={1500}
          className="font-semibold text-blue-400 hover:text-blue-300 text-lg"
        >
          Reviews
        </Link>
      </div>

      <a
        href="/career"
        className="rounded-md py-2 px-8 text-white font-semibold bg-yellow-500 max-sm:hidden"
      >
        Career
      </a>
    </div>
  );
};

export default Navbar;
