import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      id="contact"
      style={{
        borderRadius: "0 0 10px 10px",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0.5px), linear-gradient(to right, rgba(255, 255, 255, 0.25) 0.5px, transparent 0.5px)",
        backgroundSize: "100px 100px",
        backgroundColor: "#000000",
      }}
      className="w-[100vw] h-[100vh] lg:h-screen lg:w-screen  gap-8 m-auto flex flex-col justify-center lg:justify-center lg:items-center md:h-screen items-center rounded-b-[100px] bg-zinc-900"
    >
      <div className="flex flex-col lg:w-screen lg:flex lg:mt-8 text-center items-center text-white lg:gap-6 gap-11">
        <div className="lg:flex flex-col  lg:flex-row">
          <div className="lg:flex-col lg:flex">
            <div className="flex flex-col gap-12">
              <h1 className="md:text-[3em] text-4xl lg:m-auto text-white lg:text-[5em] font-bold text-center">
                Let’s start <span className="">project</span> together?
              </h1>
              <p className=" m-auto text-zinc-300">
                Contact me for questions, collaboration, <br /> conversation, or
                just saying hello. <br />
                <br />
                Thank you for stopping by here 🥹🫶🏻.
              </p>
            </div>
            <div className="w-[100vw] mt-8 flex gap-5 justify-center underline px-8">
              <Link
                className="hover:text-[#ff8312] transition-all ease-in-out  duration-100"
                to={"mailto:jabhi465@gmail.com"}
              >
                jabhi465@gmail.com
              </Link>
              <Link
                className="hover:text-[#ff8312] transition-all ease-in-out duration-100"
                to={"callto:9784138054"}
              >
                +91 9784138054
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center">
          <img
            src="https://i.pinimg.com/originals/b6/9b/4a/b69b4ab3268044c6ad1c10af7c07b888.png"
            className="w-60 h-60 rounded-full lg:w-80 lg:h-80"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-6 justify-center px-7 text-white w-screen">
        <Link
          to={"https://www.instagram.com/arey.abhi/"}
          target="_blank"
          className="hover:text-[#ff8312] transition-all ease-in-out border border-zinc-700 text-xl p-2 rounded-md duration-100"
        >
          <FaInstagram />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/shubhcodes/"}
          target="_blank"
          className="hover:text-[#ff8312] transition-all ease-in-out border border-zinc-700 text-xl p-2 rounded-md duration-100"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"https://github.com/avayyyyyyy/"}
          target="_blank"
          className="hover:text-[#ff8312] transition-all ease-in-out border border-zinc-700 text-xl p-2 rounded-md duration-100"
        >
          <FaGithub />
        </Link>
        <Link
          to={"https://twitter.com/shubhcodes"}
          target="_blank"
          className="hover:text-[#ff8312] transition-all ease-in-out border border-zinc-700 text-xl p-2 rounded-md duration-100"
        >
          <FaXTwitter />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
