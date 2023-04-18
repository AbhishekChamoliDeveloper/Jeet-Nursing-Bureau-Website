import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import nurse from "../assets/Nurse_with_old_man.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen border-t-[1px] border-t-gray-300 p-10 flex flex-row items-center justify-center space-x-10 w-full max-sm:flex-col-reverse max-sm:p-6 max-sm:min-h-0 max-md:flex-col-reverse max-md:p-6 max-md:min-h-0
      "
    >
      <div
        className="flex flex-col items-start space-y-6 max-sm:text-center max-sm:items-center
      max-md:text-center max-md:items-center
      "
      >
        <motion.h1
          className="text-black text-6xl font-sans font-bold leading-[4rem] max-sm:text-3xl max-md:text-4xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        >
          Jeet Nursing Bureau - Exceptional Caregiver Services for Your Loved
          Ones.
        </motion.h1>
        <motion.p
          className="text-xl text-gray-500 font-roboto max-sm:text-lg max-md:text-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Trust Jeet Nursing Bureau as Your One-Stop-Shop for Top-Quality
          Nursing and Home Care Services in Delhi NCR, Gurugram, Haryana, and
          Faridabad. From Maids to Physiotherapists, Our Expert Caregivers Keep
          Your Home and Loved Ones Happy, Healthy, and Safe.
        </motion.p>
        <div className="flex flex-row items-center justify-center space-x-4 max-sm:flex-col max-sm:space-x-0 max-md:flex-col max-md:space-x-0">
          <Link
            to="contactus"
            spy={true}
            smooth={true}
            duration={2500}
            className="rounded-md py-2 px-8 text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 cursor-pointer hover:bg-green-400 ease-in-out"
          >
            Book Now
          </Link>

          <p className="text-blue-200">or</p>
          <p className="text-blue-400 font-semibold">
            {" "}
            Give us call at 8800364656
          </p>
        </div>
      </div>
      {/* <img
        src={nurse}
        alt="old man with patient"
        className="h-[25rem] rounded-xl drop-shadow-3xl max-sm:hidden max-md:hidden"
      /> */}

      <motion.img
        src={nurse}
        alt="old man with patient"
        className="h-[25rem] rounded-xl drop-shadow-3xl max-sm:hidden max-md:hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
    </div>
  );
};

export default Hero;
