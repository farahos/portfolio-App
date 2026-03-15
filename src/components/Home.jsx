import About from "./About";
import Contact from "./Contacts";
import Hero from "./Hero";
import Landing from "./Landing";

import Projects from "./Projects";
import Skills from "./Skills";


function Home() {
  return (
    <>
     <Hero/>
     <Skills/>
     <About/>
     <Projects/>
     <Contact/>
     <Landing/>
    </>
  );
}
export default Home;
