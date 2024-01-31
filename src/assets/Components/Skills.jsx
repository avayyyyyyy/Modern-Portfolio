import React from "react";

const Skills = () => {
  const skills = [
    {
      id: 0,
      img: "https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/ui-ux-design.7f8252c2.svg",
      title: "Full-Stack Expertise",
      desc: "Proficient in MongoDB, Express.js, React.js, and Node.js, MERN stack developers excel in both frontend and backend technologies.",
    },
    {
      id: 1,
      img: "https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/graphic-design.81ae9670.svg",
      title: "Efficient Database Management",
      desc: "Skilled in MongoDB, they design and manage databases for scalable and flexible data models, ensuring optimal application performance.",
    },
    {
      id: 2,
      img: "https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/design-service.c8c074f8.svg",
      title: "Real-Time Development Specialization",
      desc: "SMERN stack developers specialize in crafting responsive and dynamic web applications, leveraging React.js for interactive user interfaces and Node.js for server-side development.",
    },
  ];

  return (
    <div
      style={{
        borderRadius: "0 0 10px 10px",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0.5px), linear-gradient(to right, rgba(255, 255, 255, 0.25) 0.5px, transparent 0.5px)",
        backgroundSize: "100px 100px",
        backgroundColor: "#000000",
      }}
      className="w-[100vw] gap-8 flex flex-col lg:rounded-b-[100px] justify-center lg:justify-center md:h-screen items-center rounded-b-[100px] bg-zinc-900"
    >
      <div>
        <h1 className="md:text-[3em] text-3xl md:mt-40 mt-12 lg:m-auto text-white lg:text-[5em] font-bold text-center">
          What can i do for you 💪🏻
        </h1>
      </div>
      <div className="flex flex-wrap p-8 gap-9 rounded-2xl">
        {skills.map((e) => (
          <div
            key={e.id}
            className="flex flex-col items-center justify-center w-[80%] m-auto p-4 text-black bg-white md:w-64 rounded-3xl md:mx-auto"
          >
            <img
              className="bg-[#C4C4C4] p-8 rounded-full mb-3 md:mb-0"
              src="https://personal-website-raffialdo-bayu.vercel.app/_next/static/media/ui-ux-design.7f8252c2.svg"
              alt=""
            />
            <p className="my-3 font-bold text-center">{e.title}</p>
            <h1 className="text-sm text-center md:text-sm">{e.desc}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
