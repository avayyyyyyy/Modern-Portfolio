import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
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
              <p className="w-[60vw] m-auto text-zinc-300">
                Contact me for questions, collaboration, conversation, or just
                saying hello. Thank you for stopping by here 🍀.
              </p>
            </div>
            <div className="w-[100vw] mt-8 flex gap-5 justify-center underline px-8">
              <Link
                className="hover:text-[#ff8312] transition-all ease-in-out duration-100"
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
            className="w-60 h-64 rounded-full lg:w-80 lg:h-80"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-6 justify-center px-7 fixed bottom-10 text-white w-screen">
        <Link className="hover:text-[#ff8312] transition-all ease-in-out duration-100">
          Instagram
        </Link>
        <Link className="hover:text-[#ff8312] transition-all ease-in-out duration-100">
          LinkedIn
        </Link>
        <Link className="hover:text-[#ff8312] transition-all ease-in-out duration-100">
          GitHub
        </Link>
        <Link className="hover:text-[#ff8312] transition-all ease-in-out duration-100">
          x
        </Link>
      </div>
    </div>
  );
};

export default Contact;
