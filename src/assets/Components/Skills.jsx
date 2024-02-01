import React, { useState } from "react";

const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const skills = [
    {
      id: 0,
      img: <i className="ri-device-line"></i>,
      title: "Full-Stack Expertise",
      desc: "Proficient in MongoDB, Express.js, React.js, and Node.js, MERN stack developers excel in both frontend and backend technologies.",
    },
    {
      id: 1,
      img: <i className="ri-database-2-line"></i>,
      title: "Efficient Database Management",
      desc: "Skilled in MongoDB, they design and manage databases for scalable and flexible data models, ensuring optimal application performance.",
    },
    {
      id: 2,
      img: <i className="ri-code-s-slash-line"></i>,
      title: "Real-Time Development Specialization",
      desc: "MERN stack developers specialize in crafting responsive and dynamic web applications, leveraging React.js for interactive user interfaces and Node.js for server-side development.",
    },
  ];

  const getContainerStyles = () => {
    const baseStyles = {
      borderRadius: "0 0 10px 10px",
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0.5px), linear-gradient(to right, rgba(255, 255, 255, 0.25) 0.5px, transparent 0.5px)",
      backgroundSize: "100px 100px",
      backgroundColor: "#000000",
      borderBottomLeftRadius: "100px",
      borderBottomRightRadius: "100px",
    };

    if (width <= 768) {
      return {
        ...baseStyles,
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
      };
    } else if (768 <= width) {
      return {
        ...baseStyles,
        borderBottomLeftRadius: "100px",
        borderBottomRightRadius: "100px",
      };
    }

    return baseStyles;
  };

  return (
    <div className="bg-white w-screen">
      <main
        style={getContainerStyles()}
        className="w-full gap-8 flex flex-col lg:py-32 lg:gap-20 lg:rounded-b-[100px] justify-center items-center bg-zinc-900"
      >
        <div>
          <h1 className="md:text-[3em] text-[2rem] rounded-b-[50px] lg:rounded-b-[100px] mt-12 lg:m-auto text-white lg:text-[5em] font-bold text-center">
            What can i do for you
          </h1>
        </div>
        <div className="flex flex-wrap p-8 pb-24 lg:p-2 gap-11 lg:gap-24 rounded-2xl">
          {skills.map((e) => (
            <div
              key={e.id}
              className="flex flex-col items-center justify-center lg:w-96 md:justify-evenly w-[80%] m-auto p-4 text-black bg-white md:h-96 md:w-64 rounded-3xl md:mx-auto"
            >
              <div
                className="bg-[#ff8312] text-white text-4xl p-6 lg:p-8 rounded-full mb-3 md:mb-0"
                alt=""
              >
                {e.img}
              </div>
              <h1 className="my-3 font-bold text-xl text-center">{e.title}</h1>
              <p className="text-sm text-center lg:text-lg md:text-sm">
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Skills;
