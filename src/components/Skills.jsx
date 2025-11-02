import React, { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      name: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 70 },
        { name: "JavaScript", level: 65 },
        { name: "HTML/CSS", level: 70 },
        { name: "Tailwind CSS", level: 60 },
      
      ]
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Java", level: 70 },
       
        { name: "Python", level: 40 },
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 70 }
      ]
    },
    {
      name: "Database",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 65 },
        { name: "PostgreSQL", level: 30 },
        { name: "SQL Server", level: 75 },
      
      ]
    },
    {
      name: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 50 },
       
        { name: "REST APIs", level: 60 },
        { name: "C#", level: 75 },
        { name: "Linux", level: 30 }
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(category => category.skills);
  
  const filteredSkills = activeCategory === "All" 
    ? allSkills 
    : skillCategories.find(cat => cat.name === activeCategory)?.skills || [];

  return (
    <section id="skills" className="relative bg-white dark:bg-gray-900 py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            A comprehensive overview of my technical expertise and proficiency levels across different technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ease-out delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
              activeCategory === "All"
                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                activeCategory === category.name
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`transition-all duration-1000 ease-out delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {activeCategory === "All" ? (
            // Show all categories in a grid
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div 
                  key={category.name}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-200 h-3 rounded-full transition-all duration-1000 ease-out group-hover:scale-105"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show filtered skills in a detailed view
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">
                  {skillCategories.find(cat => cat.name === activeCategory)?.icon}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeCategory} Skills
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSkills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-100 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 ease-out delay-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies 
              and best practices in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow">
                Currently Learning: Advanced React Patterns
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow">
                Next.js & Server Components
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;