import Introduction from "./assets/Components/Introduction";
import { BrowserRouter } from "react-router-dom";
import Footer from "./assets/Components/Footer";
import TextReveal from "./assets/Components/TextReveal";
import ProjectsNew from "./assets/Components/ProjectsNew";

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
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
