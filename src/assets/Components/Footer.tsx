import React from "react";
import ShimmerButton from "./magicui/shimmer-button";

const Footer = () => {
  return (
    <footer className="lg:w-[60vw] w-[80vw]  lg:my-20 my-10  mx-auto flex flex-col items-center">
      <div className="text-5xl font-semibold mb-2">Get in Touch</div>
      <div className="text-zinc-600 text-center">
        Got a project idea or just want to chat? Say hi now!
      </div>
      <div className="flex justify-between items-center gap-[10px]">
        <a
          href="https://drive.google.com/file/d/1HHD5stjYrvF6ZvfbRuBoQ5JKiUqgIHgq/view?usp=sharing"
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
    </footer>
  );
};

export default Footer;
