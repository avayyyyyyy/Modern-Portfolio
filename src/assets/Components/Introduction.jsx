import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Introduction = () => {
  return (
    <div className="w-screen h-screen m-auto gap-8 flex flex-col justify-center items-center rounded-b-[100px] bg-white">
      <div>
        <h1 className="text-[#6C6C6C] text-xl">
          Holla👋, I’m Shubhankit Jain and I’m a
        </h1>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-[600%] font-bold text-center">
          Full Stack Developer
        </h1>
        <h1 className="text-8xl text-center">
          based in <span className="font-bold">India</span>!
        </h1>
      </div>
      <div>
        <p className="w-[90vh] text-center px-4">
          I love creating websites and gaming, doing freelance work and focusing
          on designing digital products that are easy on users and customers ❤️.
        </p>
      </div>
      <div className="flex justify-between gap-[10vh]">
        <a
          className="py-5 px-6 rounded-full hover:bg-[#ff924f] text-white bg-[#ff8132] border-2 border-[#ff8132]"
          href="#"
        >
          Check My <span className="font-bold">project</span> 🚀
        </a>
        <a
          className="py-5 flex items-center gap-2 px-6 rounded-full hover:bg-[#ffefe6] transition-all ease-in-out text-[#ff8132] border-2 border-[#ff8132] "
          href="#"
        >
          Email me
          <MdOutlineMail />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
