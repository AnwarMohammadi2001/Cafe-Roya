import React from "react";
import booking from "../assets/booking.jpg";

const BookTable = () => {
  return (
    <div className=" text-center my-10 ">
      <h1 className="text-gray-700 text-lg">Book A Table</h1>
      <h2 className="text-gray-900 font-semibold pt-5 text-lg">
        Book Your Stay With Us
      </h2>
      <div className="max-w-[80%] mx-auto flex mt-5 flex-col md:flex-row items-center justify-center">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/3">
          <img
            src={booking}
            alt="Booking Table"
            className="w-full h-[480px] object-cover  "
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-2/3 p-10 h-[480px] flex justify-center items-center bg-gray-100">
          <form className="space-y-6 w-full">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border border-gray-300 bg-amber-50  focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300  bg-amber-50  focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border border-gray-300  bg-amber-50  focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="date"
                className="p-3 border border-gray-300 bg-amber-50   focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <input
                type="time"
                className="p-3 border border-gray-300 bg-amber-50  focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <input
                type="number"
                placeholder="Amount of People"
                className="p-3 border border-gray-300 bg-amber-50  focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/* Third Row */}
            <div>
              <textarea
                placeholder="Message"
                className="p-3 border border-gray-300 bg-amber-50  w-full focus:outline-none focus:ring-1 focus:ring-red-500"
                rows="6"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className=" p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
