import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Home from "./components/Home";


const App = () =>{
    return (
        <>
        <div>
            
    <Navbar/>    
    <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Contacts" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>

            <Route path="/Skills" element={<Skills/>}/>



        </Routes>
    </main>
     <Footer/>
        </div>
          
           
        </>
    )
}
export default App