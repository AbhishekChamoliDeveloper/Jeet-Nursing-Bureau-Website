import React from "react";
import nurse from "../assets/Nurse_with_old_man.jpg";

const ContactUs = () => {
  return (
    <div className="flex flex-col p-10 items-center justify-center space-y-3 mt-8">
      <h1 class="text-black text-4xl font-sans font-bold leading-[4rem]">
        Contact Us
      </h1>
      <div className="flex flex-row items-start space-x-10 border-[2px] rounded-lg justify-center bg-white shadow-md max-sm:items-center max-sm:space-x-0">
        <img
          src={nurse}
          alt="nurse"
          className="rounded-tl-lg rounded-bl-lg h-[28rem] max-sm:hidden"
        />
        <form className="flex flex-col space-y-10 p-2 max-sm:shadow-3xl">
          <div className="flex flex-row items-center justify-center space-x-8">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-400 p-2 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-400 p-2 rounded-lg"
            />
          </div>

          <select class="border border-gray-400 p-2 rounded-lg">
            <option value="" disabled selected>
              Select Your Service
            </option>
            <option value="option1">Maid</option>
            <option value="option2">Guard</option>
            <option value="option3">Semi Nurse</option>
            <option value="option4">Baby Sitter</option>
            <option value="option5">Mother Baby-Care</option>
            <option value="option6">Physiotherapy</option>
            <option value="option7">Accupressure</option>
            <option value="option8">Body Massage</option>
          </select>

          <input
            type="text"
            placeholder="Your Mobile Number"
            className="border border-gray-400 p-2 rounded-lg"
          />
          <div class="relative">
            <input
              type="text"
              placeholder=""
              class="border border-gray-400 p-2 rounded-lg h-[5rem] w-full"
            />
            <label
              for="message"
              class="absolute top-0 left-0 mt-2 ml-2 text-gray-500 text-xs"
            >
              Your Message
            </label>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
