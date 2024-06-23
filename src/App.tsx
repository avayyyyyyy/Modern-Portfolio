import React from "react";
import Introduction from "./assets/Components/Introduction";
import { BrowserRouter } from "react-router-dom";
import TextReveal from "./assets/Components/TextReveal";
import ProjectsNew from "./assets/Components/ProjectsNew";
import ResumeSection from "./assets/Components/ResumeSection";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <BrowserRouter>
        <Introduction />
        <div className="bg-zinc-200 h-[2px] w-[100vw] my-10 " />
        <TextReveal />
        <div className="bg-zinc-200 h-[2px] w-[100vw] my-10 " />
        <ProjectsNew />
        <div className="bg-zinc-200 h-[2px] w-[100vw] my-10 " />
        <ResumeSection />
      </BrowserRouter>
    </div>
  );
};

export default App;
