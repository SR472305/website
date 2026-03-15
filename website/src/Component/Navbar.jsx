import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#0b1c3d] to-[#132a52] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">
          <Link to="/">IT Solutions</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li className="hover:text-blue-400 cursor-pointer transition">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            <Link to="/Services">Services</Link>
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            <Link to="/About">About</Link>
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            <Link to="/Portfolio">Portfolio</Link>
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Get Started Button */}
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold transition">
          Get Started
        </button>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f2147] px-6 pb-6">
          <ul className="flex flex-col gap-4 text-gray-300">
            <li className="hover:text-blue-400">
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/Services" onClick={() => setOpen(false)}>Services</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/About" onClick={() => setOpen(false)}>About</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/Portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/Contact" onClick={() => setOpen(false)}>Contact</Link>
            </li>
          </ul>

          <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}