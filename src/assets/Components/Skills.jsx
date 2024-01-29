import React from "react";

const Skills = () => {
  return (
    <div
      style={{}}
      className="w-screen h-screen m-auto gap-8 flex flex-col justify-center items-center rounded-b-[100px] bg-zinc-900"
    >
      <div>
        <h1 className="md:text-[4em] text-white lg:text-[5em] sm:text-[4em] font-bold text-center">
          What can i do for you 📍
        </h1>
      </div>
      <div className="flex gap-9  p-8 rounded-2xl flex-wrap">
        <div className="bg-white text-black w-full md:w-64 p-4 flex flex-col justify-center items-center rounded-xl md:mx-auto">
          <img
            className="bg-[#C4C4C4] p-8 rounded-full mb-3 md:mb-0"
            src="https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/ui-ux-design.7f8252c2.svg"
            alt=""
          />
          <p className="text-center font-bold my-3">UI/UX Design</p>
          <h1 className="text-center text-sm md:text-sm">
            Designing interfaces that are effective and easy to use by users and
            customers
          </h1>
        </div>
        <div className="bg-white text-black w-full md:w-64 p-4 flex flex-col justify-center items-center rounded-xl md:mx-auto">
          <img
            className="bg-[#C4C4C4] p-8 rounded-full mb-3 md:mb-0"
            src="https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/graphic-design.81ae9670.svg"
            alt=""
          />
          <p className="text-center font-bold my-3">UI/UX Design</p>
          <h1 className="text-center text-sm md:text-sm">
            Designing interfaces that are effective and easy to use by users and
            customers
          </h1>
        </div>
        <div className="bg-white text-black w-full md:w-64 p-4 flex flex-col justify-center items-center rounded-xl md:mx-auto">
          <img
            className="bg-[#C4C4C4] p-8 rounded-full mb-3 md:mb-0"
            src="https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/design-service.c8c074f8.svg"
            alt=""
          />
          <p className="text-center font-bold my-3">UI/UX Design</p>
          <h1 className="text-center text-sm md:text-sm">
            Designing interfaces that are effective and easy to use by users and
            customers
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
