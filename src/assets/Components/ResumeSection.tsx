import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const ResumeSection = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="text-sm px-3 mb-4 mx-auto py-1 w-fit bg-zinc-200 rounded-md  text-zinc-800">
                Want my resume?
              </div>
              <h1 className="lg:text-6xl text-4xl w-[60%] mx-auto  text-center font-semibold mb-10 ">
                Click the button below to download
              </h1>
            </div>
            <Link
              to={
                "https://drive.google.com/uc?export=download&id=1dFgwXRC3_E8fu3dFnRtE8Gl8ropAS0O8"
              }
              target="_blank"
              download
              className="inline-flex h-10 items-center justify-center rounded-full bg-black hover:bg-black/80 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Download Resume{" "}
              <BiDownArrow size={16} className="ml-2 rotate-[270deg] " />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeSection;
