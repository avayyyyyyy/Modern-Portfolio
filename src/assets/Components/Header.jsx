import React from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="hidden w-[70%] lg:flex lg:fixed lg:top-12 items-center justify-evenly p-10 rounded-full bg-[#000] ">
        <Link
          className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-lg  focus:underline-offset-1 focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
          to="/skills"
        >
          Skills
        </Link>
        <h1 className="font-bold text-[#ff8132] text-white text-2xl select-none">
          <span>•</span> Shubhankit jain <span>•</span>
        </h1>
        <Link
          className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
          to="#"
        >
          Resume
        </Link>
        <Link
          className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
          to="/projects"
        >
          Project
        </Link>
        <Link
          className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
          to="/contact"
        >
          Contact
        </Link>
      </div>

      <div className="fixed top-0 flex items-center justify-between w-full p-4 bg-black lg:hidden">
        <Link to={"/"} className="font-bold text-[#ff8132] text-lg select-none">
          <span>•</span> Shubhankit Jain <span>•</span>
        </Link>
        <IoIosMenu className="text-xl text-white" />
      </div>
    </>
  );
};

export default Header;
