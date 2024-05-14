import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-white md:text-2xl text-lg  sm:justify-start">
            <span className="text-orange-500  font-bold">Shubh</span>Codes
          </div>

          <p className="mt-4 text-center md:text-lg text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
