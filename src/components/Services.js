import React from "react";

import physio from "../assets/physiotherapy.jpg";
import guard from "../assets/guard.jpg";
import semiNurse from "../assets/semi-nurse.jpg";
import nurse from "../assets/nurse.jpg";
import babySitter from "../assets/babySitter.jpg";
import motherBabySitter from "../assets/mothter-baby-sitter.jpg";
import maid from "../assets/maid.jpg";
import accupressure from "../assets/accupressure.jpg";
import bodyMassage from "../assets/body-massage.jpeg";

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col justify-center items-center space-y-20 p-10 mt-10 max-sm:mt-0 max-sm:p-6"
    >
      <h2 className="text-4xl font-bold">Services Provided By Us.</h2>
      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col max-sm:space-y-2 max-sm:space-x-0 h-auto shadow-xl">
        <img
          src={physio}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
        <div className="space-y-5 max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Physiotherapy
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              At Jeet Nursing Bureau, we provide physiotherapy services to help
              clients recover from injuries, surgeries, and illnesses. Our team
              of highly skilled and experienced physiotherapists creates
              personalized treatment plans to meet the unique needs of each
              client, promoting movement, reducing pain, and restoring function
              to the body.
            </p>
            <div>
              <a
                href="/contact"
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col-reverse space-y-2 max-sm:space-y-reverse max-sm:space-x-0 h-auto shadow-xl">
        <div className="space-y-5 text-end max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Guard Service
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              Jeet Nursing Bureau provides reliable and efficient security guard
              services to ensure the safety and security of our clients and
              their property. Our highly trained and experienced security guards
              are available 24/7 to protect against theft, vandalism, and other
              potential security risks. We work closely with clients to
              understand their specific security needs and develop a customized
              security plan to meet those needs.
            </p>
            <div>
              <a
                href="/contact"
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <img
          src={guard}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col max-sm:space-y-2 max-sm:space-x-0 h-auto shadow-xl">
        <img
          src={physio}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
        <div className="space-y-5 max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Physiotherapy
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              At Jeet Nursing Bureau, we provide physiotherapy services to help
              clients recover from injuries, surgeries, and illnesses. Our team
              of highly skilled and experienced physiotherapists creates
              personalized treatment plans to meet the unique needs of each
              client, promoting movement, reducing pain, and restoring function
              to the body.
            </p>
            <div>
              <a
                href="/contact"
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col-reverse space-y-2 max-sm:space-y-reverse max-sm:space-x-0 h-auto shadow-xl">
        <div className="space-y-5 text-end max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Guard Service
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              Jeet Nursing Bureau provides reliable and efficient security guard
              services to ensure the safety and security of our clients and
              their property. Our highly trained and experienced security guards
              are available 24/7 to protect against theft, vandalism, and other
              potential security risks. We work closely with clients to
              understand their specific security needs and develop a customized
              security plan to meet those needs.
            </p>
            <div>
              <a
                href="/contact"
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <img
          src={guard}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col max-sm:space-y-2 max-sm:space-x-0 h-auto shadow-xl">
        <img
          src={physio}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
        <div className="space-y-5 max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Physiotherapy
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              At Jeet Nursing Bureau, we provide physiotherapy services to help
              clients recover from injuries, surgeries, and illnesses. Our team
              of highly skilled and experienced physiotherapists creates
              personalized treatment plans to meet the unique needs of each
              client, promoting movement, reducing pain, and restoring function
              to the body.
            </p>
            <div>
              <a
                href="/contact"
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col-reverse space-y-2 max-sm:space-y-reverse max-sm:space-x-0 h-auto shadow-xl">
        <div className="space-y-5 text-end max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Guard Service
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              Jeet Nursing Bureau provides reliable and efficient security guard
              services to ensure the safety and security of our clients and
              their property. Our highly trained and experienced security guards
              are available 24/7 to protect against theft, vandalism, and other
              potential security risks. We work closely with clients to
              understand their specific security needs and develop a customized
              security plan to meet those needs.
            </p>
            <div>
              <a
                href="/contact"
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <img
          src={guard}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col max-sm:space-y-2 max-sm:space-x-0 h-auto shadow-xl">
        <img
          src={physio}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
        <div className="space-y-5 max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Physiotherapy
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              At Jeet Nursing Bureau, we provide physiotherapy services to help
              clients recover from injuries, surgeries, and illnesses. Our team
              of highly skilled and experienced physiotherapists creates
              personalized treatment plans to meet the unique needs of each
              client, promoting movement, reducing pain, and restoring function
              to the body.
            </p>
            <div>
              <a
                href="/contact"
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col-reverse space-y-2 max-sm:space-y-reverse max-sm:space-x-0 h-auto shadow-xl">
        <div className="space-y-5 text-end max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Guard Service
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              Jeet Nursing Bureau provides reliable and efficient security guard
              services to ensure the safety and security of our clients and
              their property. Our highly trained and experienced security guards
              are available 24/7 to protect against theft, vandalism, and other
              potential security risks. We work closely with clients to
              understand their specific security needs and develop a customized
              security plan to meet those needs.
            </p>
            <div>
              <a
                href="/contact"
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <img
          src={guard}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
      </div>
    </div>
  );
};

export default Services;
