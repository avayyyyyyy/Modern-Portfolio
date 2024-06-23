import { BsBriefcaseFill } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";

const Timeline = () => {
  return (
    <div className="w-full md:max-w-3xl max-w-[85%] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="relative pb-4 space-y-8">
        <div className="">
          <div className="text-sm px-3 mb-4 mx-auto py-1 w-fit bg-zinc-200 rounded-md  text-zinc-800">
            Some past
          </div>
          <h1 className="lg:text-6xl text-4xl text-center font-semibold mb-10 ">
            Highlights
          </h1>
        </div>
        <div className="relative flex items-start gap-4">
          <div className="flex-none w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center text-gray-200">
            <FaComputer className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <h3 className="md:text-lg text-base font-semibold">
              Lica Track Winner of India's first GEN AI Hackathon 🚀
            </h3>
            <div className="md:text-sm text-xs text-muted">
              Paras Madan x Nas.io <span className="mx-2">•</span> June 2024
            </div>
            <p className="mt-2 md:text-sm text-xs relaxed">
              I created a solution to help modern parents who struggle with
              coming up with new bedtime stories every day. The application,
              called <span className="font-bold text-gray-900">"StoryDev"</span>
              , uses GEN AI to allow parents to create fully customizable
              stories. StoryDev even includes a face-swapping feature through
              the LICA face swapping API.
            </p>
          </div>
        </div>
        <div className="relative flex items-start gap-4">
          <div className="flex-none w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center text-gray-200">
            <BsBriefcaseFill className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <h3 className="md:text-lg text-base font-semibold">
              Full Stack AI Developer 🧳
            </h3>
            <div className="md:text-sm text-xs text-muted">
              Freelancing <span className="mx-2">•</span> May 2014 - Present
            </div>
            <p className="mt-2 md:text-sm text-xs relaxed">
              I developed some highly intuitive AI solutions for my clients,
              addressing their unique needs and challenges. Additionally, I
              worked on several personal SaaS projects, focusing on creating
              innovative and user-friendly applications to streamline various
              tasks and improve productivity.
            </p>
          </div>
        </div>
        {/* <div className="relative flex items-start gap-4">
          <div className="flex-none w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center text-gray-200">
            <GraduationCapIcon className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">
              Bachelor of Computer Application
            </h3>
            <div className="text-sm text-muted">
              Poornima University <span className="mx-2">•</span> 2022 - 2025
            </div>
            <p className="mt-2 text-sm/relaxed">
              Completed a comprehensive program in computer science, including
              courses in algorithms, data structures, and software engineering.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Timeline;
