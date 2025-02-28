import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-16 px-4">
      <div className="flex justify-center space-x-4 mb-4">
        <span className="bg-purple-200 text-purple-700 px-4 py-1 rounded-full">
          No agent fee
        </span>
        <span className="bg-green-200 text-green-700 px-4 py-1 rounded-full">
          No hidden charges
        </span>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
        Rent your next house today <br /> directly from the landlord
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        We make renting easy. Connect directly with landlords and secure your ideal home hassle-free!
      </p>
      <div className="flex justify-center">
        <img src="/rent.png" alt="House Illustration" className="w-80 md:w-96" />
      </div>
      <div className="flex justify-center mt-6 text-gray-700">
        <span className="flex items-center space-x-2">
          <span role="img" aria-label="lock">🔒</span>
          <span>100% Secure & Verified Listings</span>
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
