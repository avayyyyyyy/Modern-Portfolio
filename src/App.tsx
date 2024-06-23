import React from "react";
import Introduction from "./assets/Components/Introduction";
import { BrowserRouter } from "react-router-dom";
import TextReveal from "./assets/Components/TextReveal";
import ProjectsNew from "./assets/Components/ProjectsNew";
import ResumeSection from "./assets/Components/ResumeSection";
import Timeline from "./assets/Components/Timeline"; // Import the Timeline component

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <BrowserRouter>
        <Introduction />
        <div className="bg-zinc-200 h-[2px] w-[100vw] my-10 " />
        <TextReveal />
        <div className="bg-zinc-200 h-[2px] w-[100vw] my-10 " />
        {/* <Timeline /> Use the imported Timeline component */}
        {/* <div className="bg-zinc-200 h-[2px] w-[100vw] my-10 " /> */}
        <ProjectsNew />
        <div className="bg-zinc-200 h-[2px] w-[100vw] my-10 " />
        <ResumeSection />
        {/* <div className="bg-zinc-200 h-[2px] w-[100vw] my-10 " /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
