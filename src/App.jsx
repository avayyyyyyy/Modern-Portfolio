import Introduction from "./assets/Components/Introduction";
import Header from "./assets/Components/Header";
import { BrowserRouter } from "react-router-dom";
import About from "./assets/Components/About";
import Projects from "./assets/Components/Projects";
import Skills from "./assets/Components/Skills";
import Contact from "./assets/Components/Contact";
import MouseCursor from "./assets/Components/MouseCursor";
import Resume from "./assets/Components/Resume";
import Footer from "./assets/Components/Footer";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto bg-black">
      <BrowserRouter>
        <MouseCursor />
        <Header />
        <Introduction />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
