import React from "react";

import nurse from "../assets/Nurse_with_old_man.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen border-t-[1px] border-t-gray-300 p-10 flex flex-row items-center justify-center space-x-10 w-full max-sm:flex-col-reverse max-sm:p-6 max-sm:min-h-0">
      <div className="flex flex-col items-start space-y-6 max-sm:text-center max-sm:items-center">
        <h1 class="text-black text-6xl font-sans font-bold leading-[4rem] max-sm:text-5xl">
          Find The Perfect Caregiver For Your Loved One Easily.
        </h1>
        <p className="text-xl text-gray-500 font-roboto max-sm:text-lg">
          your one-stop-shop for top-quality nursing and home care services.
          From maids to guards, nurses to physiotherapists, we have everything
          you need to keep your home and loved ones happy, healthy, and safe.
        </p>
        <div className="flex flex-row items-center justify-center space-x-4 max-sm:flex-col max-sm:space-x-0">
          <a
            href="/contact"
            className="rounded-md py-2 px-8 text-white font-bold bg-gradient-to-r from-green-400 to-blue-500"
          >
            Book Now
          </a>
          <p className="text-blue-200">or</p>
          <p className="text-blue-400 font-semibold">
            {" "}
            Give us call at 8800364656
          </p>
        </div>
      </div>
      <img
        src={nurse}
        alt="old man with patient"
        className="h-[25rem] rounded-xl drop-shadow-3xl max-sm:hidden"
      />
    </div>
  );
};

export default Hero;
