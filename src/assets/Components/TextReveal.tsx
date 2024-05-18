import React from "react";
import TextRevealByWord from "./magicui/text-reveal";

function TextReveal() {
  return (
    <div className="z-10 flex min-h-[16rem] w-full items-center justify-center bg-white">
      <TextRevealByWord text="I love to build using React, Next.js, Tailwindcss, PostgresSQL and Prisma. 🚀" />
    </div>
  );
}

export default TextReveal;
