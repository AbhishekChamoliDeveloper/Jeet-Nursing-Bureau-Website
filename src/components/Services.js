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
    <div className="flex flex-col justify-center items-center space-y-10 p-10 mt-10 max-sm:mt-0 max-sm:p-6">
      <h2 className="text-4xl font-bold">Services Provided By Us.</h2>
      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col max-sm:space-y-2 max-sm:space-x-0 h-auto">
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
                className="rounded-md py-2 px-8 text-white font-semibold bg-yellow-500"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-blue-400 rounded-lg">
        <div className="space-y-5 text-end">
          <h1 className="text-white text-3xl font-bold">Guard Service</h1>
          <div className="p-1 flex text-end">
            <p className="text-md text-blue-100 font-roboto">
              Jeet Nursing Bureau provides reliable and efficient security guard
              services to ensure the safety and security of our clients and
              their property. Our highly trained and experienced security guards
              are available 24/7 to protect against theft, vandalism, and other
              potential security risks. We work closely with clients to
              understand their specific security needs and develop a customized
              security plan to meet those needs.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className="rounded-md py-2 px-8 text-white font-semibold bg-yellow-500"
            >
              Book Now
            </a>
          </div>
        </div>

        <img
          src={guard}
          alt="physcio therapy"
          className="h-[15rem] rounded-tr-lg rounded-br-lg"
        />
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-blue-400 rounded-lg">
        <img
          src={semiNurse}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg"
        />
        <div className="space-y-5">
          <h1 className="text-white text-3xl font-bold">Semi-nurse Service</h1>
          <div className="p-1">
            <p className="text-md text-blue-100 font-roboto">
              Jeet Nursing Bureau offers semi-nursing services to clients who
              require regular assistance with their daily activities but do not
              require full-time nursing care. Our team of highly skilled and
              compassionate semi-nurses provides personalized care to help
              clients maintain their independence and improve their quality of
              life.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className="rounded-md py-2 px-8 text-white font-semibold bg-yellow-500"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-blue-400 rounded-lg">
        <div className="space-y-5 text-end">
          <h1 className="text-white text-3xl font-bold">Nursing Service</h1>
          <div className="p-1 flex text-end">
            <p className="text-md text-blue-100 font-roboto">
              Jeet Nursing Bureau provides high-quality nursing services to
              clients of all ages, from infants to the elderly. Our team of
              highly trained and experienced nurses offers personalized care to
              meet the unique needs of each client, whether it be for medical
              care, post-operative care, or ongoing care for chronic illnesses.
              We provide 24/7 nursing care services, ensuring that clients
              receive the care they need around the clock.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className="rounded-md py-2 px-8 text-white font-semibold bg-yellow-500"
            >
              Book Now
            </a>
          </div>
        </div>

        <img
          src={nurse}
          alt="physcio therapy"
          className="h-[15rem] rounded-tr-lg rounded-br-lg"
        />
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-blue-400 rounded-lg">
        <img
          src={babySitter}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg"
        />
        <div className="space-y-5">
          <h1 className="text-white text-3xl font-bold">Baby Sitter Service</h1>
          <div className="p-1">
            <p className="text-md text-blue-100 font-roboto">
              At Jeet Nursing Bureau, we offer reliable and professional
              babysitting services to parents who need a break or have important
              commitments. Our team of experienced and trustworthy babysitters
              provides a safe and nurturing environment for children of all
              ages, from infants to toddlers and beyond. We understand the
              importance of finding a reliable and trustworthy babysitter, which
              is why we conduct thorough background checks and only hire the
              best candidates.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className="rounded-md py-2 px-8 text-white font-semibold bg-yellow-500"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-blue-400 rounded-lg">
        <div className="space-y-5 text-end">
          <h1 className="text-white text-3xl font-bold">
            Mother Baby Sitter Service
          </h1>
          <div className="p-1 flex text-end">
            <p className="text-md text-blue-100 font-roboto">
              Jeet Nursing Bureau offers specialized mother-baby sitting
              services to support new mothers during the postpartum period. Our
              team of experienced and compassionate mother-baby sitters provides
              assistance with newborn care, breastfeeding, and other tasks that
              new mothers may find challenging or overwhelming.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className="rounded-md py-2 px-8 text-white font-semibold bg-yellow-500"
            >
              Book Now
            </a>
          </div>
        </div>

        <img
          src={motherBabySitter}
          alt="physcio therapy"
          className="h-[15rem] rounded-tr-lg rounded-br-lg"
        />
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-blue-400 rounded-lg">
        <img
          src={maid}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg"
        />
        <div className="space-y-5">
          <h1 className="text-white text-3xl font-bold">Maid Service</h1>
          <div className="p-1">
            <p className="text-md text-blue-100 font-roboto">
              Jeet Nursing Bureau provides professional and reliable maid
              services to clients who need help with household chores. Our team
              of experienced and trained maids are skilled in various household
              tasks, including cleaning, laundry, cooking, and more. We
              understand the importance of finding a trustworthy and efficient
              maid, which is why we conduct thorough background checks and only
              hire the best candidates.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className="rounded-md py-2 px-8 text-white font-semibold bg-yellow-500"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-blue-400 rounded-lg">
        <div className="space-y-5 text-end">
          <h1 className="text-white text-3xl font-bold font-roboto">
            Acupressure Service
          </h1>
          <div className="p-1">
            <p className="text-md text-blue-100">
              Jeet Nursing Bureau offers effective and relaxing acupressure
              services to promote holistic healing and wellness. Our team of
              skilled acupressure therapists use finger pressure and other
              techniques to stimulate specific pressure points on the body,
              helping to alleviate pain, reduce stress and anxiety, and promote
              relaxation.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className="rounded-md py-2 px-8 text-white font-semibold bg-yellow-500"
            >
              Book Now
            </a>
          </div>
        </div>
        <img
          src={accupressure}
          alt="physcio therapy"
          className="h-[15rem] rounded-tr-lg rounded-br-lg"
        />
      </div>
      <div className="flex flex-row items-center justify-center space-x-6 bg-blue-400 rounded-lg">
        <img
          src={bodyMassage}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg"
        />
        <div className="space-y-5">
          <h1 className="text-white text-3xl font-bold">
            Body Massage Service
          </h1>
          <div className="p-1">
            <p className="text-md text-blue-100 font-roboto">
              Jeet Nursing Bureau offers rejuvenating body massage services to
              promote relaxation and wellness. Our team of skilled and
              experienced massage therapists use a variety of techniques to
              target specific areas of tension and promote overall relaxation.
              We understand the importance of finding a trusted and professional
              massage therapist, which is why we only hire qualified candidates
              with extensive training and experience in the field.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className="rounded-md py-2 px-8 text-white font-semibold bg-yellow-500"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
