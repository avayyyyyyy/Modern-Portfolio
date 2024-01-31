import React, { useEffect, useState } from "react";

const Projects = () => {
  let [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      console.log("case Study");
    } else {
      console.log("Exploration");
    }
  }, [isActive]);

  return (
    <>
      <div className="lg:w-screen lg:h-screen w-[100vw] lg:rounded-b-[100px]  gap-5 lg:pt-52 sm:mt-5  lg:mt-0 lg:text-left m-auto bg-white text-black px-2 py-12">
        <div className="lg:flex lg:justify-between flex flex-col lg:px-7 lg:flex-row justify-between items-center gap-5">
          <h1 className="lg:tezxt-8xl mt-9 lg:mt-0 md:text-5xl font-bold text-4xl">
            Featured Projects
          </h1>
          <div className="p-2 rounded-full justify-center border-2 flex gap-3 w-fit border-[#ff8312]">
            <div
              onClick={() => setIsActive(!isActive)}
              className={`lg:py-5 lg:px-6 p-3 font-semibold rounded-full text-center ${
                isActive
                  ? "bg-[#fff] text-black hover:bg-[#ffe8da] "
                  : "bg-[#ff8132] text-white"
              } `}
            >
              Exploration
            </div>
            <div
              onClick={() => setIsActive(!isActive)}
              className={`lg:py-5 font-semibold ${
                isActive
                  ? "bg-[#ff8132] text-white"
                  : "bg-[#fff] text-black hover:bg-[#ffe8da]"
              } lg:px-6 p-3 rounded-full p-auto `}
            >
              Case Study
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Projects;
