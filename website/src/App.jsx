// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Page/Home";
import Services from "./Page/Service";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Portfolio from "./Page/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar will appear on all pages */}
      <Navbar />

      {/* Define Routes for your pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {/* Footer will appear on all pages */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;