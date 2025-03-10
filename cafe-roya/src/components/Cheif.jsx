import React from "react";
import { motion } from "framer-motion";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { chief } from "./deta";

const Chef = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="text-center max-w-[80%] mx-auto py-10">
        <h1 className="text-gray-700 text-lg">CHEFS</h1>
        <h2 className="text-gray-900 font-semibold pt-5 text-lg">
          Our Professional Chefs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-5">
          {chief.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-md overflow-hidden hover:shadow-xl  transition-all duration-300 relative group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 object-cover"
                />
                {/* Wave Shape */}
                <div className="absolute -bottom-3 -left-2 -right-2 overflow-hidden">
                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="w-full h-20"
                  >
                    <path
                      d="M0.00,49.98 C150.00,150.00 349.73,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>

                {/* Social Media Icons - Smooth Animation */}
                <motion.div className="absolute top-12 right-0 transform translate-x-full group-hover:-translate-x-3 transition-all duration-300 ease-in-out space-x-4 items-center bg-white/30 backdrop-blur-md px-2.5 py-3 rounded-lg">
                  {/* Example Social Media Icons */}
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    <CiFacebook size={24} />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-fuchsia-600">
                    <CiInstagram size={24} />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-slate-900">
                    <BsTwitterX size={20} />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-green-600">
                    <FaWhatsapp size={24} />
                  </a>
                </motion.div>
              </div>
              <div className="p-5 pb-8 ">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {item.name}
                </h1>
                <h2 className="text-lg text-gray-500">{item.job}</h2>
                <p className="text-gray-600 mt-4 text-sm mb-10">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chef;
