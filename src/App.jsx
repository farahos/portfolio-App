import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Landing from "./components/Landing";

import Home from "./components/Home";

const App = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <>
            <div className={darkMode ? "dark" : ""}>
                <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-900">
                    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/About" element={<About />} />
                            
                            <Route path="/Contacts" element={<Contact />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/Skills" element={<Skills />} />
                            <Route path="/Landing" element={<Landing />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
