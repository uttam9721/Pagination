import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
    const { card } = useContext(ShopContext);
  return (
    <nav className="w-full mb-5 bg-gray-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          MyStore 🛒
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Products</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-3 py-1 rounded bg-gray-800 text-sm outline-none"
          />

          {/* Cart */}
          <button className="bg-white text-black px-4 py-1 rounded font-semibold hover:bg-gray-200">
            Cart ({card.length})
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;