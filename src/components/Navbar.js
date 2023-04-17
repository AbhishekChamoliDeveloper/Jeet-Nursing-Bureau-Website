import React from "react";
import company_logo from "../assets/company_logo.png";
import MobileMenu from "./MobileMenu";

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
        <a
          className="font-semibold text-blue-400 hover:text-blue-300 text-lg"
          href="/home"
        >
          Home
        </a>
        <a
          className="font-semibold text-blue-400 hover:text-blue-300 text-lg"
          href="/about"
        >
          About
        </a>
        <a
          className="font-semibold text-blue-400 hover:text-blue-300 text-lg"
          href="/services"
        >
          Services
        </a>
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
