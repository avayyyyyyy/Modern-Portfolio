import { motion } from "framer-motion";
import Meteors from "./magicui/meteors";
import ShimmerButton from "./magicui/shimmer-button";
// import RadialGradient from "../Components/magicui/radial-gradient";

const Introduction = () => {
  const sliderVariants = {
    initial: {
      x: "40%",
    },
    animate: {
      x: "-100%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 4500,
        ease: "linear",
      },
    },
  };

  return (
    <div
      id="home"
      className="w-full relative overflow-x-hidden  m-auto gap-9 py-11 lg:mt-0 lg:h-screen  h-[90vh] flex flex-col justify-center items-center  bg-white"
    >
      <Meteors number={30} />
      {/* <RadialGradient /> */}

      <div className="z-40">
        <div className="flex flex-col gap-9 text-center">
          <h1 className="text-[#6C6C6C] lg:mt-7 text-base md:textl lg:text-xl">
            Holla👋, I’m{" "}
            <span className="font-bold text-black">Shubhankit Jain</span> and
            I’m a
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[2em] mt-5 lg:text-8xl md:text-7xl font-bold text-center">
            Full Stack Developer
          </h1>
          <h1 className="text-center text-[1.6em] md:text-6xl lg:text-8xl">
            based in <span className="font-bold">India</span>!
          </h1>
        </div>
      </div>
      <div>
        <p className="w-[40vh] lg:w-[50vw] text-center text-sm  px-4">
          I love creating websites and gaming, doing freelance work and focusing
          on designing digital products that are easy on users and customers ❤️.
        </p>
      </div>
      <div className="flex justify-between items-center gap-[10px]">
        <a
          href="https://github.com/avayyyyyyy/"
          rel="noreferrer"
          target="_blank"
        >
          <ShimmerButton className="shadow-2xl mt-10 ">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Connect with me 🚀
            </span>
          </ShimmerButton>
        </a>
      </div>
      <div className="absolute z-10 h-fit text-6xl lg:text-9xl lg:w-fit select-none text-zinc-100 bottom-0 font-bold">
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
