import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const Testimonials = () => {
  return (
    <div id="reviews" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What our customers are saying
          </p>
        </div>
        <div className="mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-900">
                  Jeet Nursing Service provided exceptional care to my father.
                  Their team of professional and compassionate nurses ensured
                  that he was comfortable and received the best care possible. I
                  highly recommend Jeet Nursing Service for anyone in need of
                  quality nursing care.
                </p>
                <div className="mt-4">
                  <p className="text-base font-medium text-gray-900">
                    Rakesh Sharma
                  </p>
                  <p className="text-base font-medium text-indigo-600">
                    Doctor
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-900">
                  it was a relief to have Jeet Nursing Service take care of my
                  mother. Their team of skilled nurses provided her with the
                  best care possible and kept us informed every step of the way.
                  Thank you, Jeet Nursing Service, for providing us with peace
                  of mind.
                </p>
                <div className="mt-4">
                  <p className="text-base font-medium text-gray-900">
                    Priya Sharma
                  </p>
                  <p className="text-base font-medium text-indigo-600">
                    Marketing Manager
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-900">
                  Their team of dedicated and knowledgeable nurses took care of
                  my father during his illness, and ensured that he was
                  comfortable and well-cared for. We cannot thank them enough
                  for their exceptional service.
                </p>
                <div className="mt-4">
                  <p className="text-base font-medium text-gray-900">
                    Rajat Sinha
                  </p>
                  <p className="text-base font-medium text-indigo-600">
                    Business Owner
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-900">
                  As a teacher, I often have a busy schedule, and it was
                  difficult for me to take care of my grandmother after her
                  surgery. But Jeet Nursing Service made it all possible. Their
                  team of caring and professional nurses took care of her every
                  need, and provided her with excellent care and attention.
                </p>
                <div className="mt-4">
                  <p className="text-base font-medium text-gray-900">
                    Aarti Singh
                  </p>
                  <p className="text-base font-medium text-indigo-600">
                    Teacher
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
