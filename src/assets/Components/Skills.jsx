import React from "react";

const Skills = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0.5px), linear-gradient(to right, rgba(255, 255, 255, 0.25) 0.5px, transparent 0.5px)",
        backgroundSize: "100px 100px",
        backgroundColor: "#000000",
      }}
      className="w-screen h-screen m-auto gap-8 flex flex-col justify-center items-center rounded-b-[100px] bg-zinc-900"
    >
      <div>
        <h1 className="md:text-[4em] text-white lg:text-[5em] sm:text-[4em] font-bold text-center">
          What can i do for you 😌
        </h1>
      </div>
      <div className="flex gap-9  p-8 rounded-2xl flex-wrap">
        <div className="bg-white text-black w-full md:w-64 p-4 flex flex-col justify-center items-center rounded-xl md:mx-auto">
          <img
            className="bg-[#C4C4C4] p-8 rounded-full mb-3 md:mb-0"
            src="https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/ui-ux-design.7f8252c2.svg"
            alt=""
          />
          <p className="text-center font-bold my-3">Full-Stack Expertise</p>
          <h1 className="text-center text-sm md:text-sm">
            Proficient in MongoDB, Express.js, React.js, and Node.js, MERN stack
            developers excel in both frontend and backend technologies.
          </h1>
        </div>
        <div className="bg-white text-black w-full md:w-64 p-4 flex flex-col justify-center items-center rounded-xl md:mx-auto">
          <img
            className="bg-[#C4C4C4] p-8 rounded-full mb-3 md:mb-0"
            src="https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/graphic-design.81ae9670.svg"
            alt=""
          />
          <p className="text-center font-bold my-3">
            Efficient Database Management
          </p>
          <h1 className="text-center text-sm md:text-sm">
            Skilled in MongoDB, they design and manage databases for scalable
            and flexible data models, ensuring optimal application performance.
          </h1>
        </div>
        <div className="bg-white text-black w-full md:w-64 p-4 flex flex-col justify-center items-center rounded-xl md:mx-auto">
          <img
            className="bg-[#C4C4C4] p-8 rounded-full mb-3 md:mb-0"
            src="https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/design-service.c8c074f8.svg"
            alt=""
          />
          <p className="text-center font-bold my-3">
            Real-Time Development Specialization
          </p>
          <h1 className="text-center text-sm md:text-sm">
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
