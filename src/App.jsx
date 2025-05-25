import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


const App = () =>{
    return (
      <>
     
      <Navbar/>
     <Hero/>
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