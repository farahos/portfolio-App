import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Profile from "./components/Profile";


const App = () =>{
    return (
      <>
     
      <Navbar/>
     <Hero/>
     <Profile/>
     <Projects/>
     <About/>
     <Skills/>
     <Contact/>
     <Footer/>
      {/* 
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>  */}
      </>
    )
}
export default App