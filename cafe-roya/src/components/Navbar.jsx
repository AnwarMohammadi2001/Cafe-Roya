import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";

const navItems = [
  { id: 1, name: "Home" },
  { id: 2, name: "About Us" },
  { id: 3, name: "Menu" },
  { id: 4, name: "Chefs" },
  { id: 5, name: "Gallery" },
  { id: 6, name: "Contact" },
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
              className="hover:text-gray-900 text-lg cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex space-x-4 text-gray-600">
          <Search className="w-6 h-6 cursor-pointer hover:text-gray-800" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-800" />
          <User className="w-6 h-6 cursor-pointer hover:text-gray-800" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
