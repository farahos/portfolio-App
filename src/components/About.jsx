import React, { useState, useEffect } from "react";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const technologies = [
        { name: "React.js", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
        { name: "SpringBoot Java", category: "Backend" },
        { name: "JavaScript", category: "Frontend" },
        { name: "HTML/CSS", category: "Frontend" },
        { name: "SQL", category: "Database" },
        { name: "Node.js", category: "Backend" },
        { name: "MongoDB", category: "Database" }
    ];

    const stats = [
        { number: "1+", label: "Years Experience" },
        { number: "5+", label: "Projects Completed" },
        // { number: "1000+", label: "Students Taught" },
        { number: "5+", label: "Technologies" }
    ];

    return (
        <>
            <section id="about" className="relative bg-white dark:bg-gray-900 py-20 px-6 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -left-20 w-60 h-60 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full blur-3xl opacity-40"></div>
                    <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full blur-3xl opacity-40"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className={`space-y-6 transition-all duration-1000 ease-out delay-300 transform ${
                            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        }`}>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                                    I'm <span className="font-bold text-gray-900 dark:text-white">Abdullahi Abdirzak Hassan</span>, a passionate Full-Stack Developer based in 
                                    <span className="font-semibold text-gray-800 dark:text-gray-200"> Mogadishu, Somalia</span>. 
                                    I specialize in creating modern, responsive web applications that deliver exceptional user experiences.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 delay-100">
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    With expertise in <span className="font-semibold text-gray-800 dark:text-gray-200">React.js & Tailwind CSS</span> for frontend development 
                                    and <span className="font-semibold text-gray-800 dark:text-gray-200">SpringBoot Java</span> for robust backend solutions, 
                                    I build scalable applications that solve real-world problems.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 delay-200">
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    I'm also passionate about sharing knowledge and teach programming in Somali through my YouTube channel, 
                                    covering essential topics like <span className="font-semibold text-gray-800 dark:text-gray-200">HTML, CSS, JavaScript, SQL</span>, 
                                    and modern development practices to empower the next generation of developers.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Stats & Technologies */}
                        <div className={`space-y-8 transition-all duration-1000 ease-out delay-500 transform ${
                            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}>
                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div 
                                        key={index}
                                        className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
                                    >
                                        <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Technologies */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                                    Technologies & Skills
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {technologies.map((tech, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 group"
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                                                {tech.name}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded-full">
                                                {tech.category}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center">
                                {/* <a 
                                    href="https://youtube.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                    Visit My YouTube Channel
                                </a> */}
                            </div>
                        </div>
                    </div>

                    {/* Additional Info Section */}
                    <div className={`mt-16 text-center transition-all duration-1000 ease-out delay-700 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                "I believe in <span className="font-semibold text-gray-900 dark:text-white">continuous learning</span> and 
                                <span className="font-semibold text-gray-900 dark:text-white"> community empowerment</span> through technology education."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
