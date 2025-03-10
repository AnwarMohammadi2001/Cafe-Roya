import React from "react";
import img from "../assets/news.jpg";

const Newsletter = () => {
  return (
    <div
      className="relative w-full h-72 my-5 bg-cover bg-center flex items-center justify-around"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Left colored section */}
      <div className="absolute inset-0 bg-yellow-600 clip-diagonal-left opacity-80"></div>
       {/* right colored section */}
      <div className="absolute inset-0 clip-diagonal-right bg-black opacity-60 "></div>
      <div className="text-center relative z-10">
        <h3 className="text-white text-2xl font-bold">
          Stay Informed About Special Offers
        </h3>
      </div>
      <div className="text-center bg-white relative z-10 border flex justify-end w-[450px] rounded-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 w-full bg-white placeholder:text-black border-gray-300 focus:outline-none relative z-20"
        />
        <button className="px-4 py-2 bg-yellow-600 text-white hover:bg-yellow-700">
          Subscribe
        </button>
      </div>

      {/* Content */}
    </div>
  );
};

export default Newsletter;
