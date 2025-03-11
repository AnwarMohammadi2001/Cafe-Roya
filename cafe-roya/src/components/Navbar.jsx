import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { FaSun } from "react-icons/fa";

const navItems = [
  { id: 1, name: "Home", path: "#" },
  { id: 2, name: "About Us", path: "#about" },
  { id: 3, name: "Menu", path: "#menu" },
  { id: 4, name: "Chefs", path: "#chef" },
  { id: 5, name: "Gallery", path: "#gallary" },
  { id: 6, name: "Contact", path: "#cntact" },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-100/50 backdrop-blur-xs rounded-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-gray-800">☕</div>
          <span className="text-2xl font-semibold text-gray-800">
            Cafe Roya
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-800">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-gray-900 relative text-lg group cursor-pointer"
            >
              <a href={item.path}> {item.name}</a>
              <span className="absolute text-gray-800 h-[2px] left-0 transform w-full -bottom-1 scale-x-0 tra group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 bg-gray-800"></span>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex space-x-4 text-gray-600">
          <FaSun className="w-6 h-6 cursor-pointer hover:text-gray-800" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-800" />
          <User className="w-6 h-6 cursor-pointer hover:text-gray-800" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
