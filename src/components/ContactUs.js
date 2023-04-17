import React, { useState } from "react";
import nurse from "../assets/Nurse_with_old_man.jpg";
import { useFormspark } from "@formspark/use-formspark";
import env from "react-dotenv";

import "./custom.css";

const FORMSPARK_FORM_ID = env.FORM_ID;

const ContactUs = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = { name, email, service, mobile, message };

    try {
      setIsSubmitting(true);
      await submit(query);
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      alert(
        "Error while submitting from please try again. or Give use call on 8800364656"
      );
      console.log(err);
    }
  };
  return (
    <div
      id="contactus"
      className="flex flex-col p-10 items-center justify-center space-y-3 mt-8 max-sm:p-4"
    >
      <h1 class="text-black text-4xl font-sans font-bold leading-[4rem]">
        Contact Us
      </h1>
      {isSubmitted ? (
        <div className="bg-green-500 text-white rounded-lg p-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="text-lg font-medium">
            Thank you for contacting us. We will call you under 30 minutes or
            you can call us directly at 8800364656.
          </p>
        </div>
      ) : (
        <div className="flex flex-row items-start space-x-10 border-[2px] rounded-lg justify-center bg-white shadow-md max-sm:items-center max-sm:space-x-0 max-sm:w-full max-sm:bg-none max-sm:p-5">
          <img
            src={nurse}
            alt="nurse"
            className="rounded-tl-lg rounded-bl-lg h-[28rem] max-sm:hidden"
          />
          <form className="flex flex-col space-y-10 p-2 max-sm:shadow-3xl max-sm:w-full">
            <div className="flex flex-row items-center justify-center space-x-8 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-10 max-sm:w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-400 p-2 rounded-lg max-sm:w-full"
                onChange={handleNameChange}
                disabled={isSubmitting}
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-400 p-2 rounded-lg max-sm:w-full"
                onChange={handleEmailChange}
                disabled={isSubmitting}
              />
            </div>

            <select
              class="border border-gray-400 p-2 rounded-lg"
              onChange={handleServiceChange}
            >
              <option value="" disabled selected>
                Select Your Service
              </option>
              <option value="Maid">Maid</option>
              <option value="Guard">Guard</option>
              <option value="Semi-Nurse">Semi Nurse</option>
              <option value="Baby-Sitter">Baby Sitter</option>
              <option value="Mother-Baby-Sitter">Mother Baby-Care</option>
              <option value="Physiotherapy">Physiotherapy</option>
              <option value="Accupressure">Accupressure</option>
              <option value="Body-Massage">Body Massage</option>
            </select>

            <input
              type="text"
              placeholder="Your Mobile Number"
              className="border border-gray-400 p-2 rounded-lg"
              onChange={handleMobileChange}
              disabled={isSubmitting}
            />
            <div class="relative">
              <input
                type="text"
                placeholder=""
                class="border border-gray-400 p-2 rounded-lg h-[5rem] w-full"
                onChange={handleMessageChange}
                disabled={isSubmitting}
              />
              <label
                for="message"
                class="absolute top-0 left-0 mt-2 ml-2 text-gray-500 text-xs"
              >
                Your Message
              </label>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`bg-blue-700 hover:bg-blue-500 ${
                isSubmitting ? "bg-blue-200" : "bg-blue-700"
              } text-white font-bold py-2 px-4 rounded`}
            >
              {isSubmitting ? (
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                "Contact Us"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
