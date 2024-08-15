import React from "react";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ResumeSection = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="md:text-sm text-xs px-3 mb-4 mx-auto py-1 w-fit bg-zinc-200 rounded-md  text-zinc-900">
                Yess, I'm looking for opportunities 😇
              </div>
              <h1 className="lg:text-4xl text-xl w-[70%] mx-auto  text-center font-semibold mb-10 ">
                Click the button below to download my resume...
              </h1>
            </div>
            <Link
              to={
                "https://drive.google.com/uc?export=download&id=1dFgwXRC3_E8fu3dFnRtE8Gl8ropAS0O8"
              }
              target="_blank"
              download
              className="inline-flex items-center justify-center rounded-full bg-black hover:bg-black/80 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Download{" "}
              <HiDocumentArrowUp size={16} className="ml-2 rotate-[180deg] " />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeSection;
