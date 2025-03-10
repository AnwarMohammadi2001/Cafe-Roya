import React from "react";
import img from "../assets/about1.jpg";
import img2 from "../assets/about3.jpg";
import img3 from "../assets/about4.jpg";
import img4 from "../assets/about5.jpg";
import table from "../assets/table.jpg";

const About = () => {
  return (
    <div className="bg-amber-50 overflow-hidden min-h-[100vh]  py-12">
      {/* First Row: Title */}
      <div className="text-center mb-12">
        <h1 className="text-lg font-bold text-gray-800">About Us</h1>
        <h1 className="text-3xl mt-3 font-thin text-gray-800">
          Learn More About Us
        </h1>
      </div>

      {/* Second Row: Two Sections */}
      <div className="flex max-w-[80%] mx-auto flex-col md:flex-row gap-8">
        {/* Left Section: Image */}
        <div className="w-full  flex flex-col  gap-5 md:w-1/2">
          <img
            src={img} // Replace with your image URL
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-[50vh]"
          />
          <div
            className="h-[150px] border rounded-lg bg-gray-300 flex items-center justify-center p-4 relative overflow-hidden"
            style={{
              backgroundImage: `url(${table})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Blur Overlay */}
            <div className="absolute inset-0  bg-opacity-50 backdrop-blur-xs"></div>

            {/* Content at the bottom */}
            <div className="relative z-10 text-center w-full bottom-0 mb-4">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Book a Table
              </h3>
              <p className="text-gray-200 mb-4">
                Reserve your spot for an unforgettable dining experience.
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                Reserve Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Title, Description, List, and Image */}
        <div className="w-full md:w-1/2">
          {/* Title */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            We with The Aspects Foos Professional Services
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base text-justify mb-6">
            Nestled in the heart of the city, Café Roya is more than just a
            place to eat – it’s an experience that brings together tradition,
            flavor, and warmth. Our café is inspired by the rich heritage of our
            community, offering a cozy ambiance where friends and family gather
            to share stories over a cup of freshly brewed coffee and
            mouthwatering dishes.
          </p>

          {/* List */}
          <ul className="list-disc list-inside text-sm text-gray-600 mb-6">
            {" "}
            <li>Online Ordering & Delivery</li>{" "}
            <li>Catering for Special Events</li>{" "}
            <li>Private Dining & Reservations</li>{" "}
            <li>Custom Cake & Pastry Orders</li>{" "}
          </ul>
          <p className="text-gray-600 text-base text-justify mb-6">
            Nestled in the heart of the city, Café Roya is more than just a
            place to eat – it’s an experience that brings together tradition,
            flavor, and warmth.
          </p>
          <div className="h-[130px]  grid grid-cols-2 gap-x-5">
            <div>
              <img src={img2} alt="" className="rounded-lg shadow-md" />
            </div>
            <div>
              <img src={img4} alt="" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
