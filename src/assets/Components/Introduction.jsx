import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { useParams } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="w-full m-auto gap-9 h-[100vh] lg:h-screen flex flex-col justify-center items-center rounded-b-[50px] lg:rounded-b-[100px] bg-white">
      <div>
        <div className="flex flex-col text-center">
          <h1 className="text-[#6C6C6C] lg:mt-7 text-base md:textl lg:text-xl">
            Holla👋, I’m{" "}
            <span className="font-bold text-black">Shubhankit Jain</span> and
            I’m a
          </h1>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[2.6em] lg:text-8xl md:text-7xl font-bold text-center">
            Full Stack Developer
          </h1>
          <h1 className="text-center text-[2.2em] md:text-6xl lg:text-8xl">
            based in <span className="font-bold">India</span>!
          </h1>
        </div>
      </div>
      <div>
        <p className="w-[40vh] lg:w-[50vw] text-center px-4">
          I love creating websites and gaming, doing freelance work and focusing
          on designing digital products that are easy on users and customers ❤️.
        </p>
      </div>
      <div className="flex justify-between items-center gap-[10px]">
        <a
          className="lg:py-5 lg:px-6 p-3 rounded-full text-center hover:bg-[#ff924f] text-white bg-[#ff8132] border-2 border-[#ff8132]"
          href="/projects"
        >
          Check My <span className="font-bold">project</span> 🚀
        </a>
        <a
          className="lg:py-5 lg:px-6 flex items-center gap-2 p-3 rounded-full hover:bg-[#ffefe6] transition-all ease-in-out text-[#ff8132] border-2 border-[#ff8132] "
          href="mailto:jabhi465@gmail.com"
        >
          Email me
          <MdOutlineMail />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
