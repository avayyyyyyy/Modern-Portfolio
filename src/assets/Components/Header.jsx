import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const links = [
    {
      id: 0,
      name: "Home",
      link: "#home",
    },
    {
      id: 1,
      name: "About",
      link: "#about",
    },
    {
      id: 3,
      name: "Skills",
      link: "#skills",
    },
    {
      id: 4,
      name: "Resume",
      link: "https://drive.google.com/file/d/1iRQy-O9x7cb6an9GTv2w9ZbkqZ4xwn8F/view?usp=drivesdk",
    },
    {
      id: 5,  
      name: "Project",
      link: "#project",
    },
    {
      id: 6,
      name: "Contact",
      link: "#contact",
    },
  ];

  const linkFirst = links.splice(0, links.length / 2);
  const linkSecond = links.splice(linkFirst);

  const [isOpen, setIsOpen] = useState(false);

  function clicked() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="hidden w-[70%] z-50 lg:flex lg:fixed lg:top-12 items-center justify-evenly p-10 rounded-full bg-[#000] ">
        {linkFirst.map((e) => {
          return (
            <a
              key={e.id}
              className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
              href={e.link}
            >
              {e.name}
            </a>
          );
        })}
        <h1 className="text-2xl font-bold text-white select-none">
          <span>•</span> Shubhankit jain <span>•</span>
        </h1>
        {linkSecond.map((e) => {
          return (
            <a
              key={e.id}
              className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
              href={e.link}
            >
              {e.name}
            </a>
          );
        })}
      </div>

      <div className="fixed top-0 z-[1000] flex items-center justify-between w-full p-4 bg-black lg:hidden">
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
        {linkFirst.map((e) => {
          return (
            <a
              key={e.id}
              className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
              href={e.link}
              onClick={clicked}
            >
              {e.name}
            </a>
          );
        })}
        {linkSecond.map((e) => {
          return (
            <a
              key={e.id}
              className="text-lg focus:underline focus:text-[#ff8132] text-zinc-400 hover:text-[#ff8132] transition-all ease-in-out"
              href={e.link}
              onClick={clicked}
            >
              {e.name}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Header;
