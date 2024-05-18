import React from "react";
import ShimmerButton from "./magicui/shimmer-button";

const Footer = () => {
  return (
    <footer className="w-full my-20  mx-auto flex flex-col items-center">
      <div className="text-5xl font-semibold mb-2">Get in Touch</div>
      <div className="text-zinc-600">
        Got a project idea or just want to chat? Let's connect now!
      </div>
      <div className="flex justify-between items-center gap-[10px]">
        <ShimmerButton className="shadow-2xl mt-10 ">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            <a href="#">Connect with me 🚀</a>
          </span>
        </ShimmerButton>
      </div>
    </footer>
  );
};

export default Footer;
