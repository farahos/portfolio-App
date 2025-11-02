import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

import Home from "./components/Home";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check system preference or saved preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    };

    return (
        <>
            <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        
                        <Route path="/Contacts" element={<Contact />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/Skills" element={<Skills />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;