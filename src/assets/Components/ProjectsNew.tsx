import React from "react";
import ProjectCard from "./ProjectCard";

const data = [
  {
    image: "/ApeArmor.webp",
    name: "Ape Armor - Custom case brand",
    trending: true,
    techStack: ["NextJS", "KindeAuth", "Shadcn UI", "Prisma"],
    shortDesc:
      "Your all-in-one solution for efficiently creating some cool custom back case for your iPhone.",
    date: "May 2024",
    Github: "https://github.com/avayyyyyyy/ApeArmor",
    LiveLink: "https://ape-armor.vercel.app/",
  },
  {
    image: "/Abhi-saas.webp",
    name: "Notes With Ease - Notes Taking App",
    trending: false,
    techStack: ["NextJS", "Prisma", "Shadcn UI", "KindeAuth"],
    shortDesc:
      "Created a complete Full Stack SAAS application using the latest Modern Framework called NextJs 14.",
    date: "Jan 2024",
    Github: "https://github.com/avayyyyyyy/abhi-saas",
    LiveLink: "https://abhi-saas.vercel.app/",
  },
];

function ProjectsNew() {
  return (
    <div className="max-w-[60vw] mb-20 ">
      <div className="flex flex-col items-center mb-10  justify-center">
        <div className="text-sm px-3 py-1  w-fit bg-zinc-200 rounded-md mb-4  text-zinc-800">
          My Projects
        </div>
        <h1 className="text-6xl font-semibold mb-4 ">
          Check out my latest work
        </h1>
        <p className="text-lg text-zinc-600 mx-10  text-center">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
      </div>
      <div className="grid grid-cols-2">
        {data.map((e) => (
          <ProjectCard
            key={e.LiveLink}
            date={e.date}
            deployed={e.LiveLink}
            github={e.Github}
            image={e.image}
            name={e.name}
            shortDesc={e.shortDesc}
            tags={e.techStack}
            trending={e.trending}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsNew;
