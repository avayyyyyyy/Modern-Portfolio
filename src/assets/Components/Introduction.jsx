import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

const Introduction = () => {
  const sliderVariants = {
    initial: {
      x: "50%",
    },
    animate: {
      x: "-100%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1500,
        ease: "linear",
      },
    },
  };

  return (
    <div className="w-full relative overflow-x-hidden overflow-y-hidden m-auto gap-9 py-11 mt-14 lg:mt-0 lg:h-screen flex flex-col justify-center items-center rounded-b-[50px] lg:rounded-b-[100px] bg-white">
      <div className="">
        <div className="flex flex-col gap-9 text-center">
          <h1 className="text-[#6C6C6C] lg:mt-7 text-base md:textl lg:text-xl">
            Holla👋, I’m{" "}
            <span className="font-bold text-black">Shubhankit Jain</span> and
            I’m a
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[1.6em] mt-5 lg:text-8xl md:text-7xl font-bold text-center">
            Full Stack Developer
          </h1>
          <h1 className="text-center text-[2.6em] md:text-6xl lg:text-8xl">
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
          className="lg:py-5 z-40 lg:px-6 p-3 rounded-full text-center hover:bg-[#ff924f] text-white bg-[#ff8132] border-2 border-[#ff8132]"
          href="/projects"
        >
          Check My <span className="font-bold">project</span> 🚀
        </a>
        <a
          className="lg:py-5 lg:px-6 z-40 bg-white flex items-center gap-2 p-3 rounded-full hover:bg-[#ffefe6] transition-all ease-in-out text-[#ff8132] border-2 border-[#ff8132] "
          href="mailto:jabhi465@gmail.com"
        >
          Email me
          <MdOutlineMail />
        </a>
      </div>
      <div className="absolute z-10 text-8xl lg:text-9xl lg:w-fit select-none text-zinc-100 bottom-0 font-bold">
        <motion.div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          variants={sliderVariants}
          animate="animate"
          initial="initial"
        >
          Code Enthusiast Web Developer Software Engineer Full Stack Developer
          Game Developer Frontend Developer Backend Developer JavaScript
          Developer Python Developer Tech Innovator Technology Enthusiast Techie
          API Developer Cybersecurity Automation Specialist Blockchain Developer
          Software Architect Code Specialist Mobile App Innovator Pixel Perfect
          Developer Framework Developer Cryptocurrency Developer Machine
          Learning Specialist Cross-Browser Compatibility Secure Coding Expert
          Responsive Design Developer Blockchain Developer Specialist Automation
          Expert API Code Guru Technology User Interface Developer Code Expert
          Web Accessibility Developer Gaming Code Master Framework Specialist
          API Developer Cybersecurity Code Wizard Software Specialist Mobile App
          Specialist Technology Wizard Code Developer AI Developer Blockchain
          Specialist Code Specialist Automation Developer API Expert Data
          Visualization Specialist Gaming Specialist Code Engineer Code
          Enthusiast Web Developer Software Engineer Full Stack Developer Game
          Developer Frontend Developer Backend Developer JavaScript Developer
          Python Developer Tech Innovator Technology Enthusiast Techie API
          Developer Cybersecurity Automation Specialist Blockchain Developer
          Software Architect Code Specialist Mobile App Innovator Pixel Perfect
          Developer Framework Developer Cryptocurrency Developer Machine
          Learning Specialist Cross-Browser Compatibility Secure Coding Expert
          Responsive Design Developer Blockchain Developer Specialist Automation
          Expert API Code Guru Technology User Interface Developer Code Expert
          Web Accessibility Developer Gaming Code Master Framework Specialist
          API Developer Cybersecurity Code Wizard Software Specialist Mobile App
          Specialist Technology Wizard Code Developer AI Developer Blockchain
          Specialist Code Specialist Automation Developer API Expert Data
          Visualization Specialist Gaming Specialist Code Engineer
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
