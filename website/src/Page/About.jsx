import React from "react";
import { motion } from "framer-motion";
import team from "../image/team.jpg";

const About = () => {
  return (
    <section className="bg-[#0f2147] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Right Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 5}}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Why Choose <span className="text-blue-400">Us?</span>
            
            {/* Animated Line Under Title */}
            <motion.span
              className="absolute left-0 bottom-0 h-1 bg-blue-400 bottom-[-10px]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 5 }}
              viewport={{ once: true }}
            ></motion.span>
          </h2>

          <p className="text-gray-300 mb-6 text-lg">
            We provide cutting-edge IT solutions that help your business grow.
            Our team of experts ensures scalable, secure, and high-performance
            applications tailored to your needs.
          </p>

          {/* Features List */}
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-500 p-2 rounded-full mt-1"></div>
              <p className="text-gray-300">Experienced & skilled developers</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-500 p-2 rounded-full mt-1"></div>
              <p className="text-gray-300">Scalable & modern technology solutions</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-500 p-2 rounded-full mt-1"></div>
              <p className="text-gray-300">Reliable & dedicated support</p>
            </div>
          </div>

          <button className="mt-8 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105">
            Learn More
          </button>
        </motion.div>

        {/* Left Image */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={team}
            alt="team"
            className="w-[350px] md:w-[450px] rounded-lg shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;