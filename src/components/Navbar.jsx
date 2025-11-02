import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);
  //  const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    
  

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check system preference for dark mode
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            toggleDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const navItems = [
        { path: "/", label: "Home" },
       
        { path: "/About", label: "About" },
        { path: "/Skills", label: "Skills" },
        { path: "/Projects", label: "Projects" },
        { path: "/Contacts", label: "Contact" }
    ];

    return (
        <>
            <nav className={`
                fixed top-0 w-full z-50 transition-all duration-500 ease-in-out
                ${scrolled 
                    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl py-3' 
                    : 'bg-white dark:bg-gray-900 py-5'
                }
            `}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="text-2xl font-bold cursor-pointer group relative"
                    >
                        <span className="text-gray-900 dark:text-white transition-colors duration-300">
                            Portfolio
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link 
                                    to={item.path}
                                    className="
                                        relative text-gray-700 dark:text-gray-300 font-medium 
                                        transition-all duration-300 ease-out
                                        hover:text-gray-900 dark:hover:text-white
                                        group
                                    "
                                >
                                    {item.label}
                                    <span className="
                                        absolute -bottom-1 left-0 w-0 h-0.5 
                                        bg-gradient-to-r from-gray-900 to-gray-600 
                                        dark:from-white dark:to-gray-300
                                        transition-all duration-300 ease-out
                                        group-hover:w-full
                                    "></span>
                                </Link>
                            </li>
                        ))}
                        
                        {/* Dark Mode Toggle */}
                        <li>
                               <button
                onClick={toggleDarkMode}
                className="
                    p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                    text-gray-700 dark:text-gray-300
                    transition-all duration-300 ease-in-out
                    hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700
                    hover:shadow-lg
                "
                aria-label="Toggle dark mode"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
                        </li>
                    </ul>

                    {/* Mobile Toggle Button */}
                    <div className="flex items-center space-x-4 md:hidden">
                        {/* Dark Mode Toggle for Mobile */}
                        <button
                            onClick={toggleDarkMode}
                            className="
                                p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                                text-gray-700 dark:text-gray-300
                                transition-all duration-300
                                hover:scale-110
                            "
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        
                        <button 
                            onClick={toggleMenu}
                            className="
                                p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                                text-gray-700 dark:text-gray-300
                                transition-all duration-300
                                hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700
                            "
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`
                    md:hidden transition-all duration-500 ease-in-out overflow-hidden
                    ${menuOpen 
                        ? 'max-h-96 opacity-100 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg' 
                        : 'max-h-0 opacity-0'
                    }
                `}>
                    <ul className="py-6 px-6 space-y-4">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link 
                                    to={item.path}
                                    onClick={toggleMenu}
                                    className="
                                        block text-gray-700 dark:text-gray-300 font-medium 
                                        py-3 px-4 rounded-lg transition-all duration-300
                                        hover:bg-gray-100 dark:hover:bg-gray-800
                                        hover:text-gray-900 dark:hover:text-white
                                        hover:translate-x-2 hover:shadow-md
                                    "
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            
            {/* Add top padding for fixed navbar */}
            <div className="h-20"></div>
        </>
    );
};

export default Navbar;