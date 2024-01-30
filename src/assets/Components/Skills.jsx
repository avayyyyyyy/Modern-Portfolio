import React from "react";

const Skills = () => {
  return (
    <div
      style={{
        borderRadius: "0 0 10px 10px",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0.5px), linear-gradient(to right, rgba(255, 255, 255, 0.25) 0.5px, transparent 0.5px)",
        backgroundSize: "100px 100px",
        backgroundColor: "#000000",
      }}
      className="w-[100vw] gap-8 flex h-[100vh] flex-col justify-center lg:justify-center md:h-screen items-center rounded-b-[100px] bg-zinc-900"
    >
      <div>
        <h1 className="md:text-[3em] text-2xl md:mt-40 mt-80 h-fit lg:m-auto text-white lg:text-[5em] font-bold text-center">
          What can i do for you 💪🏻
        </h1>
      </div>
      <div className="flex flex-wrap p-8 gap-9 rounded-2xl">
        <div className="flex flex-col items-center justify-center w-full p-4 text-black bg-white md:w-64 rounded-xl md:mx-auto">
          <img
            className="bg-[#C4C4C4] p-8 rounded-full mb-3 md:mb-0"
            src="https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/ui-ux-design.7f8252c2.svg"
            alt=""
          />
          <p className="my-3 font-bold text-center">Full-Stack Expertise</p>
          <h1 className="text-sm text-center md:text-sm">
            Proficient in MongoDB, Express.js, React.js, and Node.js, MERN stack
            developers excel in both frontend and backend technologies.
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-4 text-black bg-white md:w-64 rounded-xl md:mx-auto">
          <img
            className="bg-[#C4C4C4] p-8 rounded-full mb-3 md:mb-0"
            src="https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/graphic-design.81ae9670.svg"
            alt=""
          />
          <p className="my-3 font-bold text-center">
            Efficient Database Management
          </p>
          <h1 className="text-sm text-center md:text-sm">
            Skilled in MongoDB, they design and manage databases for scalable
            and flexible data models, ensuring optimal application performance.
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-4 text-black bg-white md:w-64 rounded-xl md:mx-auto">
          <img
            className="bg-[#C4C4C4] p-8 rounded-full mb-3 md:mb-0"
            src="https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/design-service.c8c074f8.svg"
            alt=""
          />
          <p className="my-3 font-bold text-center">
            Real-Time Development Specialization
          </p>
          <h1 className="text-sm text-center md:text-sm">
            Full stack developer specialize in making dynamic web applications,
            leveraging React.js for interactive user interfaces and Node.js for
            server-side development.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
