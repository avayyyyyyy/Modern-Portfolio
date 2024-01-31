import React from "react";
import Introduction from "./assets/Components/Introduction";
import Header from "./assets/Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./assets/Components/About";
import Projects from "./assets/Components/Projects";
import Skills from "./assets/Components/Skills";
import Contact from "./assets/Components/Contact";
import MouseCursor from "./assets/Components/MouseCursor";

const App = () => {
  window.addEventListener("mousemove", () => {});

  return (
    <div className="flex flex-col items-center justify-center m-auto bg-black">
      <BrowserRouter>
        <MouseCursor />
        <Header />
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  );
};

export default App;
