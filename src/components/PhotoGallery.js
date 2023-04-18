import React from "react";

import image1 from "../assets/WhatsApp Image 2023-04-17 at 1.08.20 PM.jpeg";
import image2 from "../assets/WhatsApp Image 2023-04-17 at 1.09.03 PM.jpeg";
import image3 from "../assets/WhatsApp Image 2023-04-17 at 1.09.04 PM (1).jpeg";
import image4 from "../assets/WhatsApp Image 2023-04-17 at 1.09.04 PM.jpeg";

const PhotoGallery = () => {
  return (
    <div
      id="gallary"
      className="flex flex-col items-center justify-center mt-24"
    >
      <h2 className="text-4xl font-bold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
        <div className="border border-white rounded-lg overflow-hidden shadow-lg">
          <img
            src={image1}
            alt="Jeet Nursing Bureau provides expert home healthcare and patient care services in the Delhi-NCR area, including Delhi, Gurugram, and Faridabad."
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
