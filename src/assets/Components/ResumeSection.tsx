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
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Download My Resume
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Click the button below to download my resume.
              </p>
            </div>
            <Link
              to={
                "https://drive.google.com/uc?export=download&id=1GsQSQIhseq8Ojd9sxIjGI1WQhB_isjC-"
              }
              download
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Download Resume <BiDownArrow size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeSection;
