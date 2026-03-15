import React from "react";

const Contact = () => {
  return (
    <section className=" py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Fill out the form below and we will get back to you.
          </p>
        </div>

        {/* Centered Contact Form */}
        <div className="flex justify-center">
          <form className="bg-[#08142c] p-8 rounded-xl shadow-lg flex flex-col gap-3 w-full max-w-md">
            
            <div className="flex flex-col">
              <label className="mb-2 text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-[#08142c] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-gray-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="p-3 rounded-lg bg-[#08142c] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-gray-300">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="p-3 rounded-lg bg-[#08142c] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;