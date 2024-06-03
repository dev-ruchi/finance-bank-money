import React from "react";
import logo from "../assets/Group.svg";

const Navbar = () => {
  return (
    <div className="p-4">
      <ul className="flex items-center space-x-12 text-2xl text-bold text-gray-800">
        <img src={logo} alt="" className="mb-4 ml-16" />
        <li className="hover:text-gray-300 text-red-700">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-gray-300">
          <a href="#about-us">About Us</a>
        </li>
        <li className="hover:text-gray-300">
          <a href="#pricing">Pricing</a>
        </li>
        <li className="hover:text-gray-300">
          <a href="#features">Features</a>
        </li>

        <li className="ml-32">
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
            Download
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
