import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/Newsletter";
import Menus from "../components/Menu/Menus";

const Home = () => {
  return (
    <div>
      <header className="fixed w-full mt-5 z-60 ">
        <div className="container mx-auto max-w-6xl">
          <Navbar />
        </div>
      </header>
      <div className="mt-12">
        <Hero />
        <About />
        <Newsletter />
        <WhyChooseUs />
        <Menus />
      </div>
    </div>
  );
};

export default Home;
