import React, { useState } from "react";
import Starters from "./Starters";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Desserts from "./Desserts";
import Drinks from "./Drinks";
import IceCream from "./IceCream";

const menuItems = [
  { name: "Starters", component: <Starters /> },
  { name: "Breakfast", component: <Breakfast /> },
  { name: "Lunch", component: <Lunch /> },
  { name: "Desserts", component: <Desserts /> },
  { name: "Drinks", component: <Drinks /> },
  { name: "Ice Cream", component: <IceCream /> },
];

const Menus = () => {
  const [activeMenu, setActiveMenu] = useState("Starters");

  return (
    <div className="p-6">
      <div className="text-center space-y-3 py-5">
        <h2 className="text-lg font-semibold">Our Menu</h2>
        <h3 className="text-3xl text-gray-600">Check Our Cafe Roya Menu</h3>
      </div>
      <div className="flex  justify-center mt-6 gap-5 mb-6">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`px-4 py-2  transition-colors text-lg hover:border-red-700  border-b-2 border-gray-300 duration-300 ${
              activeMenu === item.name
                ? "text-gray-800 border-red-700"
                : "text-gray-800"
            }`}
            onClick={() => setActiveMenu(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="flex max-w-[80%] mx-auto flex-col min-h-[60vh] md:flex-row gap-10">
        {menuItems.find((item) => item.name === activeMenu)?.component}
      </div>
    </div>
  );
};

export default Menus;
