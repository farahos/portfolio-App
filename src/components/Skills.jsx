import React from 'react';

const skills = [
  "Java",
  "Python",
  "JavaScript",
  "C#",
  
  "Spring Boot",
  "React",
 
];

const Skills = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-6 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600" >My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-800 py-3 px-4 rounded shadow hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
