import React from "react";
import  developer  from "../image/Company-amico.png"
import Services from "./Service";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-[#0b1c3d] via-[#0f2247] to-[#08142c] text-white py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Empowering Your <br />
            <span className="text-blue-400">IT Solutions</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg">
            We build modern, scalable and high-performance web applications
            to help businesses grow in the digital world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              Get Started
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-700 transition">
              Learn More
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={developer}
            alt="developer"
            className="w-[350px] md:w-[450px] animate-bounce-slow"
          />
        </div>

      </div>
        

      <Services />
      <About />
      <Portfolio />
      <Contact />

    </section>

    
  );
};

export default Home;