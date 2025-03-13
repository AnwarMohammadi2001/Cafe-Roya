import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Moon icon for dark mode
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice"; // Adjust the import path as needed

const navItems = [
  { id: 1, name: "Home", path: "#" },
  { id: 2, name: "About Us", path: "#about" },
  { id: 3, name: "Menu", path: "#menu" },
  { id: 4, name: "Chefs", path: "#chef" },
  { id: 5, name: "Gallery", path: "#gallery" },
  { id: 6, name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode); // Access dark mode state from Redux

  // Set dark or light class based on the darkMode state

  const iconClass = darkMode ? "text-yellow-400" : "text-gray-600"; // Change icon color based on dark mode

  return (
    <nav className={`backdrop-blur-xs rounded-full dark:bg-gray-900`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">☕</div>
          <span className="text-2xl font-semibold font-Roboto">Cafe Roya</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-gray-900 relative dark:text-white text-lg group cursor-pointer"
            >
              <a href={item.path}>{item.name}</a>
              <span className="absolute text-gray-800 h-[2px] left-0 transform w-full -bottom-1 scale-x-0  group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 bg-gray-800"></span>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex space-x-4">
          {/* Dark Mode Toggle */}
          {darkMode ? (
            <FaSun
              className={`w-6 h-6 cursor-pointer ${iconClass}`}
              onClick={() => dispatch(toggleDarkMode())}
              onMouseDown={(e) => e.preventDefault()} // Prevents focus issues
            />
          ) : (
            <FaMoon
              className={`w-6 h-6 cursor-pointer ${iconClass}`}
              onClick={() => dispatch(toggleDarkMode())}
              onMouseDown={(e) => e.preventDefault()} // Prevents focus issues
            />
          )}

          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-800" />
          <User className="w-6 h-6 cursor-pointer hover:text-gray-800" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
