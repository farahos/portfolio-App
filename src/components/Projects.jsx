import React, { useState, useEffect } from "react";

function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projects = [
        {
            title: "Library System",
            description: "A comprehensive web application for managing books, users, and transactions using the MERN Stack with real-time updates and advanced search functionality.",
            link: "https://librarysystem-r0al.onrender.com",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            category: "Full Stack"
        },
        {
            title: "Phishing App",
            description: "Educational web application demonstrating phishing techniques for security awareness, built with MERN Stack to help users identify and prevent cyber threats.",
            link: "https://phishing-h4is.onrender.com",
            tech: ["React", "MongoDB", "Express", "Security"],
            category: "Security"
        },
        {
            title: "School System",
            description: "Complete school management system handling students, teachers, courses, and grades with responsive design and secure user authentication.",
            link: "https://schoolsys-k5d8.onrender.com",
            tech: ["React", "Node.js", "MongoDB", "Tailwind"],
            category: "Management"
        },
        {
            title: "Typing System",
            description: "Interactive typing speed test application with real-time analytics and progress tracking using React frontend and Spring Boot backend with PostgreSQL.",
            link: "https://typing-sys.vercel.app/",
            tech: ["React", "Spring Boot", "PostgreSQL", "Tailwind"],
            category: "Productivity"
        },
        {
            title: "Bank System",
            description: "Robust banking application for account management, transactions, and customer data handling built with C# and SQL Server with enterprise-level security.",
            link: "https://github.com/farahos/bankSystem",
            tech: ["C#", "SQL Server", ".NET", "Windows Forms"],
            category: "Finance"
        }
    ];

    const technologies = {
        "React": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        "MongoDB": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        "Express": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
        "Security": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        "Tailwind": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
        "Spring Boot": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        "PostgreSQL": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        "C#": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
        "SQL Server": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        ".NET": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
        "Windows Forms": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    };

    return (
        <>
            <section id="projects" className="relative bg-white dark:bg-gray-900 py-20 px-6 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full blur-3xl opacity-40"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full blur-3xl opacity-40"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            My Projects
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A collection of projects showcasing my expertise in full-stack development, 
                            security applications, and system management solutions.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto rounded-full mt-6"></div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div 
                                key={index}
                                className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform ${
                                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                } ${
                                    hoveredProject === index ? 'scale-105' : 'hover:scale-102'
                                }`}
                                style={{ 
                                    transitionDelay: `${index * 150}ms`,
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                }}
                                onMouseEnter={() => setHoveredProject(index)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Project Header */}
                                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technology Tags */}
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-110 ${
                                                    technologies[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                                                }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Link */}
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center gap-2 w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg justify-center"
                                    >
                                        <span>View Project</span>
                                        <svg 
                                            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                
                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10"></div>
                            </div>
                        ))}
                    </div>

                    {/* GitHub Call to Action */}
                    <div className={`text-center mt-16 transition-all duration-1000 ease-out delay-700 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Want to see more?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                                Explore more of my projects, contributions, and open-source work on GitHub.
                            </p>
                            <a 
                                href="https://github.com/farahos" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                Visit My GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;