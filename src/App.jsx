import "./App.css";
import Hero from "./Pages/Hero/Hero";
import gitHub from "./assets/Github.png";
import figma from "./assets/Figma.png";
import dribble from "./assets/Dribble.png";
import Navbar from "./Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import MobileNav from "./Components/Navbar/MobileNav";

function App() {
  return (
    <>
      <div className="bg-backgroundPrimary font-code">
        {/* <div className="fixed top-0 left-4 hidden md:flex flex-col justify-center items-center ">
          <div className="w-[0.5px] h-32 bg-white mb-1"></div>
          <Link to="" target="_blank">
            <FaGithub className="text-2xl mb-2 text-white hover:text-customPurple"/>
          </Link>
          <Link to="" target="_blank">
            <IoLogoFigma className="text-2xl mb-2 text-white hover:text-customPurple"/>
          </Link>
          <Link to="" target="_blank">
            <MdOutlineAlternateEmail className="text-2xl mb-2 text-white hover:text-customPurple"/>
          </Link>
        </div> */}
        <div className="md:mx-36">
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          {/* <MobileNav /> */}
        </div>
      </div>
    </>
  );
}

export default App;
