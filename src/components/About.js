import React from "react";

import nurse from "../assets/nurse.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="p-10 flex flex-row  justify-center text-center space-x-5 max-sm:flex-col max-sm:space-x-0 max-sm:items-center max-sm:p-6"
    >
      <img
        src={nurse}
        alt="jeet nurses bureau logo"
        className="h-[20rem] rounded-md max-sm:h-[15rem]"
      />
      <div className="space-y-5 p-4 text-start max-sm:text-center">
        <h2 className="text-4xl font-bold max-sm:text-3xl">
          Want to know about us ?
        </h2>
        <p className="text-md text-gray-400">
          Jeet Nursing Bureau is a reliable and efficient organization that
          provides high-quality nursing and home care services registered by
          Ministry of Micro, Small and Medium Enterprises ( Udhyam Registration
          Certificate: UDYAM-DL-06-0058662).
          <br />
          <br />
          Our team of highly skilled and qualified professionals offers a wide
          range of services, including nursing care, physiotherapy, maid
          services, and security guards, among others.
          <br />
          <br />
          Our nursing care services provide personalized care to clients of all
          ages, from infants to the elderly, while our physiotherapy services
          offer customized treatment plans to help clients recover from
          injuries, surgeries, and illnesses.
          <br />
          <br />
          We also offer maid services to assist clients with household chores
          and security guard services to ensure the safety and security of our
          clients and their property. <br />
          <br />
          Our commitment to excellence and exceptional care has earned us a
          solid reputation as a premier provider of nursing and home care
          services. Trust us to keep your home and loved ones happy, healthy,
          and safe.
        </p>
      </div>
    </section>
  );
};

export default About;
