import React from "react";
import { BiGlobe } from "react-icons/bi";
import AnimatedGradientText from "./magicui/animated-gradient";
import { cn } from "../../../lib/utils";
import { FaCode } from "react-icons/fa";

function ProjectCard({
  i,
  name,
  image,
  date,
  shortDesc,
  tags,
  github,
  trending,
  deployed,
}) {
  return (
    <>
      <div className="max-w-sm mb-10 hover:shadow-md  flex flex-col justify-between mx-auto  border border-gray-200 duration-100 rounded-md py-4 px-3">
        <div>
          <div>
            <img className="rounded-lg" src={image} alt="" />
          </div>
          <div>
            {trending && (
              <AnimatedGradientText className="mt-3 ">
                🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  #{++i} Best
                </span>
              </AnimatedGradientText>
            )}
            <div className="font-semibold text-sm mt-2 ">{name}.</div>
          </div>
          <div className="text-xs text-zinc-600 mb-2 mt-1">{date}</div>
          <div className="text-xs text-zinc-500">
            <div>{shortDesc}</div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 my-4">
            {tags.map((e) => {
              return (
                <div
                  key={e}
                  className="text-xs text-black rounded-md  bg-zinc-200 px-2 py-1"
                >
                  {e}
                </div>
              );
            })}
          </div>
          <div className="flex gap-2">
            <div className="bg-black hover:bg-black/70 flex gap-2 items-center  text-white w-fit px-3 py-1.5  rounded-md  text-xs">
              {" "}
              <a target="_blank" className="flex gap-2" href={deployed}>
                <BiGlobe size={16} /> Website
              </a>
            </div>

            <div className="bg-black hover:bg-black/70 flex gap-2 items-center  text-white w-fit px-3 py-1.5  rounded-md  text-xs">
              {" "}
              <a target="_blank" className="flex gap-2" href={github}>
                {" "}
                <FaCode size={16} />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
