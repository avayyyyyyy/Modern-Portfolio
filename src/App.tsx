import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduction from "./assets/Components/Introduction";
import TextReveal from "./assets/Components/TextReveal";
import ProjectsNew from "./assets/Components/ProjectsNew";
import ResumeSection from "./assets/Components/ResumeSection";
import Resume from "./assets/Components/Resume";
import { Tooltip } from "react-tooltip";
import { Toaster, toast } from "sonner";

const Home = () => {
  return (
    <div>
      <Introduction />
      <div className="bg-zinc-200 h-[2px] w-[100vw] my-10 " />
      <TextReveal />
      <div className="bg-zinc-200 h-[2px] w-[100vw] my-10 " />
      <ProjectsNew />
      <div className="bg-zinc-200 h-[2px] w-[100vw] my-10 " />
      <ResumeSection />
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
        <Tooltip id="my-tooltip" />
        <Toaster richColors expand position="top-right" />
      </div>
    </>
  );
};

export default App;
