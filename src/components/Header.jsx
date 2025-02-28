import React from "react";

const Header = () => {
    return (
      <header className="flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-blue-600 text-xl font-bold">RentDirect</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Listings</a>
          <a href="#" className="hover:text-blue-600">About</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Find a home now
        </button>
      </header>
    );
  };
  
  export default Header;