import React from "react";
import ProjectCard from "./ProjectCard";

const data = [
  {
    image: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
    name: "Opinify - Feedback Collection SaaS",
    trending: true,
    techStack: ["NextJS", "Prisma", "Typescript", "Firebase", "TailwindCSS"],
    shortDesc:
      "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
    date: "August 2024",
    Github: "https://github.com/avayyyyyyy/opinify",
    LiveLink: "https://opinify.in/",
  },
  {
    image: "https://utfs.io/f/f41ae507-be30-4221-9809-97f80f78f847-lphjht.webp",
    name: "BaatSheet - Chat with PDF",
    trending: true,
    techStack: ["NextJS", "Langchain", "Pinecone", "Firebase", "Shadcn UI"],
    shortDesc:
      "BaatSheet is a platform that allows you to chat with your PDFs. It's a interactive way to communicate with your Documents.",
    date: "May 2024",
    Github: "https://github.com/avayyyyyyy/baatsheet",
    LiveLink: "https://baat-sheet.vercel.app/",
  },

  {
    image: "https://utfs.io/f/035b9037-8519-4d74-8e4d-0fbca39ab083-va0yy.webp",
    name: "Piggy Banker - Finance Tracking App",
    trending: true,
    techStack: ["NextJS", "Typescript", "Prisma", "Tanstack Query", "NextAuth"],
    shortDesc:
      "It is a finance tracking app that helps you manage your money, track your expenses, and save more.",
    date: "Jan 2024",
    Github: "https://github.com/avayyyyyyy/piggy-banker",
    LiveLink: "https://piggy-banker.vercel.app/",
  },
  {
    image: "https://utfs.io/f/fabf40ec-956e-495e-83d7-24ac093cee60-qei8wt.webp",
    name: "Ape Armor - Custom case brand",
    trending: true,
    techStack: ["NextJS", "Typescript", "KindeAuth", "Shadcn UI", "Prisma"],
    shortDesc:
      "Your all-in-one solution for efficiently creating some cool custom back case for your iPhone.",
    date: "May 2024",
    Github: "https://github.com/avayyyyyyy/ApeArmor",
    LiveLink: "https://ape-armor.vercel.app/",
  },

  {
    image: "https://utfs.io/f/b199c915-585e-4897-a7a9-5b5612e499dd-zihdxl.webp",
    name: "Tweet Craft - AI Tweet Generator",
    trending: true,
    techStack: ["NextJS", "KindeAuth", "TailwindCSS"],
    shortDesc:
      "TweetCraft revolutionizes tweeting with AI-generated content! Input your topic, choose a mood, and voila - viral tweets at your fingertips. Share, copy, or tweet directly from the app for instant engagement!",
    date: "May 2024",
    Github: "https://github.com/avayyyyyyy/tweet-craft",
    LiveLink: "https://tweet-craft-iota.vercel.app/",
  },
  {
    image: "https://utfs.io/f/4b474f0e-382b-4ef0-aa9e-c1571a43daaf-q2nukk.webp",
    name: "Note Nest - Notes Taking App",
    trending: true,
    techStack: ["NextJS", "Typescript", "Prisma", "Shadcn UI", "KindeAuth"],
    shortDesc:
      "Created a complete Full Stack SAAS application using the latest Modern Framework called NextJs 14.",
    date: "Jan 2024",
    Github: "https://github.com/avayyyyyyy/abhi-saas",
    LiveLink: "https://note-nest-avay.vercel.app/",
  },
];

function ProjectsNew() {
  return (
    <div className="lg:max-w-[60vw] max-w-[80vw] mx-auto mb-1 lg:mb-20 ">
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
      <div className="grid md:grid-cols-2 grid-cols-1">
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
