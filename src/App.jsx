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
    <div className="bg-black m-auto flex flex-col justify-center items-center">
      <BrowserRouter>
        <MouseCursor />
        <Header />
        <Routes>
          <Route path={"/"} element={<Introduction />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/skills"} element={<Skills />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
