import React from "react";

const WhyUs = () => {
  return (
    <div className="p-10 space-y-16 mt-10 max-sm:text-center max-sm:mt-5 max-sm:p-5 max-md:text-center max-md:mt-5 max-md:p-5">
      <h2 className="text-4xl font-bold">Why to choose us ?</h2>
      <div
        className="flex flex-row justify-around max-sm:flex-col max-sm:items-center max-sm:space-y-[5rem]
      
      max-md:flex-col max-md:items-center max-md:space-y-[5rem]"
      >
        <div className="bg-blue-100 shadow-lg shadow-blue-200 p-3 relative rounded-md w-[20rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-14 h-14 text-white bg-blue-500 rounded-md absolute -top-6 p-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="mt-10 space-y-4">
            <p className="text-black font-roboto text-3xl font-bold">
              24/7 Customer Service
            </p>
            <p className="text-lg text-gray-500 font-semibold">
              We provide 24/7 Hours Customer Service. Every customer is our god.
            </p>
          </div>
        </div>
        <div className="bg-blue-100 drop-shadow-3xl p-3 relative rounded-md w-[20rem] shadow-lg shadow-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-14 h-14 text-white bg-blue-500 rounded-md absolute -top-6 p-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>

          <div className="mt-10 space-y-4">
            <p className="text-black font-roboto text-3xl font-bold">
              Professional Care Nursing Services
            </p>
            <p className="text-lg text-gray-500 font-semibold">
              Our experienced nurses and healthcare professionals provide
              unparalleled professional care to our patients.
            </p>
          </div>
        </div>
        <div className="bg-blue-100 drop-shadow-3xl p-3 relative rounded-md w-[20rem] shadow-lg shadow-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-14 h-14 text-white bg-blue-500 rounded-md absolute -top-6 p-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            />
          </svg>

          <div className="mt-10 space-y-4">
            <div className="mt-10 space-y-4">
              <p className="text-black font-roboto text-3xl font-bold">
                Low-Cost Nursing Services
              </p>
              <p className="text-lg text-gray-500 font-semibold">
                At our nursing facility, we believe that everyone deserves
                access to quality healthcare. That's why we offer low-cost
                nursing services that don't compromise on quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
