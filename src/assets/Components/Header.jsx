import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function clicked() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="hidden w-[70%] z-50 lg:flex lg:fixed lg:top-12 items-center justify-evenly p-10 rounded-full bg-[#000] ">
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
        <h1 className="text-2xl font-bold text-white select-none">
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

      <div className="fixed top-0 z-[110] flex items-center justify-between w-full p-4 bg-black lg:hidden">
        <Link
          to={"/"}
          onClick={() => setIsOpen(false)}
          className="font-bold text-[#fff] text-lg select-none"
        >
          <span>•</span> Shubhankit Jain <span>•</span>
        </Link>
        {isOpen ? (
          <RxCross2
            onClick={clicked}
            className="text-xl text-white cursor-pointer"
          />
        ) : (
          <IoIosMenu
            onClick={clicked}
            className="text-xl text-white cursor-pointer"
          />
        )}
      </div>

      <div
        className={`fixed ${
          isOpen ? "top-10" : "top-[-1000px]"
        }  flex flex-col gap-4 py-4 z-[100] text-center transition-all ease-in-out duration-150 text-white bg-black w-[100vw]  drop-shadow-md lg:hidden`}
      >
        <hr className="h-[5px] bg-[#ff8312]" />
        <Link
          className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
          to={"/about"}
          onClick={clicked}
        >
          About
        </Link>
        <Link
          className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
          to={"/skills"}
          onClick={clicked}
        >
          Skills
        </Link>
        <Link
          className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
          to={"/resume"}
          onClick={clicked}
        >
          Resume
        </Link>
        <Link
          className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
          to={"/project"}
          onClick={clicked}
        >
          Project
        </Link>
        <Link
          className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
          to={"/contact"}
          onClick={clicked}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Header;
