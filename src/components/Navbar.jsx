import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white shadow-md px-6 py-4">
      <nav className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold text-green-600">Recipe Finder</p>
        </div>

        <div className="flex space-x-6 text-gray-700 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-green-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/favorite"
            className="hover:text-green-600 transition-colors duration-200"
          >
            Favorite
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
