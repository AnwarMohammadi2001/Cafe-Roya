import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/Newsletter";
import Menus from "../components/Menu/Menus";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";

const Home = () => {
  return (
    <div>
      <header className="fixed w-full mt-5 z-60 ">
        <div className="container mx-auto max-w-6xl">
          <Navbar />
        </div>
      </header>
      <main className="mt-12">
        <Hero />
        <About />
        <Newsletter />
        <WhyChooseUs />
        <Menus />
        <Testimonials />
        <Events />
      </main>
    </div>
  );
};

export default Home;
