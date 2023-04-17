import React from "react";
import { Link } from "react-scroll";

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
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                duration={2500}
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </Link>
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
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                duration={2500}
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </Link>
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
          src={semiNurse}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
        <div className="space-y-5 max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Semi-Nurse
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              Jeet Nursing Bureau offers semi-nursing services in Delhi, Delhi
              NCR, Gurugram, Haryana, and Faridabad. Their experienced nurses
              provide personalized care such as wound care, medication
              administration, vital sign monitoring, and assistance with daily
              activities. They prioritize quality care and compassionate service
              for their patients.
            </p>
            <div>
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                duration={2500}
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col-reverse space-y-2 max-sm:space-y-reverse max-sm:space-x-0 h-auto shadow-xl">
        <div className="space-y-5 text-end max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Nurse Services
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              Jeet Nursing Bureau provides professional nursing services in
              Delhi, Delhi NCR, Gurugram, Haryana, and Faridabad. Their nurses
              are highly qualified and experienced, offering specialized care
              for patients with a range of medical needs. From wound care to
              medication management, they provide personalized care to ensure
              patient comfort and well-being. With their commitment to quality
              care and compassionate service, Jeet Nursing Bureau is a top
              choice for those seeking professional nursing services in the
              region.
            </p>
            <div>
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                duration={2500}
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <img
          src={nurse}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
      </div>

      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col max-sm:space-y-2 max-sm:space-x-0 h-auto shadow-xl">
        <img
          src={babySitter}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
        <div className="space-y-5 max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Baby Sitter Services
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              Jeet Nursing Bureau offers reliable baby-sitting services in
              Delhi, Delhi NCR, Gurugram, Haryana, and Faridabad. Their trained
              and experienced baby-sitters provide personalized care and
              attention to children, ensuring their safety and well-being.
              Whether it's for a few hours or an entire day, parents can trust
              Jeet Nursing Bureau to provide exceptional care for their
              children. With their commitment to quality and safety, Jeet
              Nursing Bureau is a trusted choice for those seeking professional
              baby-sitting services in the regi
            </p>
            <div>
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                duration={2500}
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col-reverse space-y-2 max-sm:space-y-reverse max-sm:space-x-0 h-auto shadow-xl">
        <div className="space-y-5 text-end max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Mother Baby Sitter Services
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              Jeet Nursing Bureau provides mother baby-sitter services in Delhi,
              Delhi NCR, Gurugram, Haryana, and Faridabad. Their experienced
              mother baby-sitters offer specialized care and assistance to new
              mothers, helping them with tasks such as feeding, bathing, and
              changing their babies. They also provide personalized care and
              attention to the newborn, ensuring their comfort and well-being.
              With their commitment to quality care and compassionate service,
              Jeet Nursing Bureau is a top choice for those seeking mother
              baby-sitter services in the region.
            </p>
            <div>
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                duration={2500}
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <img
          src={motherBabySitter}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
      </div>

      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col max-sm:space-y-2 max-sm:space-x-0 h-auto shadow-xl">
        <img
          src={maid}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
        <div className="space-y-5 max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Maid Services
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              Jeet Nursing Bureau offers reliable maid services in Delhi, Delhi
              NCR, Gurugram, Haryana, and Faridabad. Their maids are trained and
              experienced in providing a range of services such as cleaning,
              cooking, laundry, and other household tasks. They understand the
              unique needs of each household and provide personalized service to
              ensure customer satisfaction. With their commitment to quality
              service and professionalism, Jeet Nursing Bureau is a trusted
              choice for those seeking reliable maid services in the region.
            </p>
            <div>
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                duration={2500}
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col-reverse space-y-2 max-sm:space-y-reverse max-sm:space-x-0 h-auto shadow-xl">
        <div className="space-y-5 text-end max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Accupressure Services
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              Jeet Nursing Bureau provides professional acupressure services in
              Delhi, Delhi NCR, Gurugram, Haryana, and Faridabad. Their trained
              and experienced acupressure therapists offer personalized
              treatments to help relieve pain, reduce stress, and improve
              overall well-being. They use a range of techniques to stimulate
              pressure points on the body and promote healing. With their
              commitment to quality care and customer satisfaction, Jeet Nursing
              Bureau is a top choice for those seeking professional acupressure
              services in the region.
            </p>
            <div>
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                duration={2500}
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <img
          src={accupressure}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
      </div>

      <div className="flex flex-row items-center justify-center space-x-6 bg-white rounded-lg max-sm:flex-col max-sm:space-y-2 max-sm:space-x-0 h-auto shadow-xl">
        <img
          src={bodyMassage}
          alt="physcio therapy"
          className="h-[15rem] rounded-tl-lg rounded-bl-lg max-sm:rounded-lg max-sm:h-full"
        />
        <div className="space-y-5 max-sm:text-center">
          <h1 className="text-black text-3xl font-bold max-sm:text-2xl">
            Body Massage Services
          </h1>
          <div className="p-2 space-y-8 max-sm:pb-5">
            <p className="text-md text-gray-500 font-roboto max-sm:text-sm">
              Jeet Nursing Bureau provides professional body massage services in
              Delhi, Delhi NCR, Gurugram, Haryana, and Faridabad. Their trained
              and experienced massage therapists offer personalized treatments
              to help relieve muscle tension, reduce stress, and promote
              relaxation. They use a range of techniques such as Swedish, deep
              tissue, and aromatherapy to tailor each massage to the specific
              needs of the individual. With their commitment to quality service
              and customer satisfaction, Jeet Nursing Bureau is a trusted choice
              for those seeking professional body massage services in the
              region.
            </p>
            <div>
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                duration={2500}
                className="rounded-md py-2 px-8 text-white font-semibold bg-blue-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
