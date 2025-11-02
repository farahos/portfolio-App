import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import farahoz from "../assets/FarahCv.pdf";
// Import your profile picture - make sure to add your actual image file
import profileImage from "../assets/farahpoi.jpg"; // Update this path to your actual image

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
        <section className="relative bg-white dark:bg-gray-900 py-20 px-6 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className={`transition-all duration-1000 ease-out transform ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}>
                        {/* Main Heading with Typing Animation */}
                        <div className={`transition-all duration-1000 ease-out transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                Hi, I'm <span className="text-gray-900 dark:text-white">farahoz</span>
                            </h1>
                        </div>

                        {/* Subheading */}
                        <div className={`transition-all duration-1000 ease-out delay-300 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <h2 className="text-2xl md:text-3xl mb-4 font-semibold text-gray-700 dark:text-gray-300">
                                Abdullhi Abdirzak Hassan
                            </h2>
                        </div>

                        {/* Description */}
                        <div className={`transition-all duration-1000 ease-out delay-500 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Full-Stack Developer specializing in modern web applications 
                                using the <span className="font-semibold text-gray-800 dark:text-gray-200">MERN Stack</span>
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-6 items-center transition-all duration-1000 ease-out delay-700 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            {/* Contact Button */}
                            <Link 
                                to="/contacts" 
                                className="
                                    group relative bg-gray-900 dark:bg-white text-white dark:text-gray-900 
                                    font-semibold rounded-full px-8 py-4 transition-all duration-300 ease-out
                                    hover:scale-105 hover:shadow-2xl hover:bg-gray-700 dark:hover:bg-gray-200
                                    transform hover:-translate-y-1 flex items-center justify-center
                                "
                            >
                                <span className="relative z-10">Contact Me</span>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>

                            {/* Download CV Button */}
                            <a 
                                href={farahoz} 
                                download="Abdullhi_Abdirzak_CV.pdf"
                                className="
                                    group relative bg-transparent text-gray-900 dark:text-white 
                                    font-semibold rounded-full px-8 py-4 transition-all duration-300 ease-out
                                    border-2 border-gray-300 dark:border-gray-600
                                    hover:scale-105 hover:shadow-xl hover:border-gray-900 dark:hover:border-white
                                    hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1 flex items-center justify-center
                                "
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Download CV
                                    <svg 
                                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className={`grid grid-cols-3 gap-6 mt-12 transition-all duration-1000 ease-out delay-900 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">1+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">5+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">1000+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Picture Section */}
                    <div className={`transition-all duration-1000 ease-out delay-300 transform ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>
                        <div className="relative">
                            {/* Main Profile Image Container */}
                            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800 rounded-full blur-xl opacity-50 animate-pulse"></div>
                                
                                {/* Image Container */}
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group">
                                    <img 
                                        src={profileImage} 
                                        alt="Abdullhi Abdirzak Hassan"
                                        className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-200 rounded-full animate-float"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-gray-500 to-gray-300 dark:from-gray-500 dark:to-gray-300 rounded-full animate-float delay-1000"></div>
                                <div className="absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-400 rounded-full animate-float delay-500"></div>

                                {/* Status Indicator */}
                                <div className="absolute bottom-8 right-8">
                                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-lg">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap justify-center gap-3 mt-8">
                                {["React", "JavaScript", "Java", "Spring Boot", "MongoDB", "Tailwind"].map((tech, index) => (
                                    <div 
                                        key={tech}
                                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow hover:scale-105 transition-all duration-300"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className={`mt-16 text-center transition-all duration-1000 ease-out delay-1000 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500">
                        <span className="text-sm font-medium">Scroll to explore</span>
                        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute bottom-10 left-10 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full opacity-60 animate-float"></div>
            <div className="absolute top-20 right-20 w-6 h-6 bg-gray-400 dark:bg-gray-500 rounded-full opacity-40 animate-float delay-1000"></div>
            <div className="absolute bottom-32 right-32 w-3 h-3 bg-gray-500 dark:bg-gray-400 rounded-full opacity-70 animate-float delay-500"></div>
        </section>
        </>
    )
}

export default Hero;