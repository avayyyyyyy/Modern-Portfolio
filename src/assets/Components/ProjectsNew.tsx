import React from "react";
import ProjectCard from "./ProjectCard";

const data = [
  {
    image: "https://utfs.io/f/4cf5c9a0-b660-4f4c-9c71-0ddc5da994c1-eprfmx.webp",
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
    image: "https://utfs.io/f/08688fe5-1d71-43d8-824b-a23146cd2082-zi28gn.png",
    name: "Tweet Craft - AI Tweet Maker",
    trending: true,
    techStack: ["NextJS", "KindeAuth", "TailwindCSS", "Prisma"],
    shortDesc:
      "TweetCraft revolutionizes tweeting with AI-generated content! Input your topic, choose a mood, and voila – viral tweets at your fingertips. Share, copy, or tweet directly from the app for instant engagement!",
    date: "May 2024",
    Github: "https://github.com/avayyyyyyy/tweet-craft",
    LiveLink: "https://tweet-craft-iota.vercel.app/",
  },
  {
    image: "https://utfs.io/f/32278d95-50be-4b8e-8a94-fcedc59658cc-aet91n.webp",
    name: "Note Nest - Notes Taking App",
    trending: true,
    techStack: ["NextJS", "Prisma", "Shadcn UI", "KindeAuth"],
    shortDesc:
      "Created a complete Full Stack SAAS application using the latest Modern Framework called NextJs 14.",
    date: "Jan 2024",
    Github: "https://github.com/avayyyyyyy/abhi-saas",
    LiveLink: "https://note-nest-avay.vercel.app/",
  },
];

function ProjectsNew() {
  return (
    <div className="lg:max-w-[60vw] max-w-[80vw] mb-1 lg:mb-20 ">
      <div className="flex flex-col items-center mb-10  justify-center">
        <div className="text-sm px-3 py-1  w-fit bg-zinc-200 rounded-md mb-4  text-zinc-800">
          My Projects
        </div>
        <h1 className="lg:text-6xl text-4xl  text-center  font-semibold mb-4 ">
          Check out my latest work
        </h1>
        <p className="lg:text-lg text-sm  text-zinc-600 mx-10  text-center">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        {data.map((e, i) => (
          <ProjectCard
            i={i}
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
