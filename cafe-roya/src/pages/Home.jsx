import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <header className="fixed w-full mt-5 z-50 ">
        <div className="container mx-auto max-w-6xl">
          <Navbar />
        </div>
      </header>
      <div className="mt-12">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
