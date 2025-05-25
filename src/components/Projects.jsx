import React from "react";
function Projects(){
    const project = [
        {
            title: "Apartment Rental Syystem",
            description: "Web application for managing apartment rentals using React, Tailwind CSS, Spring Boot & PostgreSQL.",
            link: "https://github.com/farah/apartment-rental",
        },
        {
            title: "Typing Syystem",
            description: "Web application for managing apartment rentals using React, Tailwind CSS, Spring Boot & PostgreSQL.",
            link: "https://github.com/farah/apartment-rental",
        },
          {
            title: "Typing Syystem",
            description: "Web application for managing apartment rentals using React, Tailwind CSS, Spring Boot & PostgreSQL.",
            link: "https://github.com/farah/apartment-rental",
        },
          {
            title: "Typing Syystem",
            description: "Web application for managing apartment rentals using React, Tailwind CSS, Spring Boot & PostgreSQL.",
            link: "https://github.com/farah/apartment-rental",
        },
      
    ]
    return (
        <>
        <section id="" className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-bold text-blue-700 mb-10 text-3xl text-center ">My Projects</h2>
                <div className="grid md:grid-cols-2 gap-8 ">
                    {project.map((project , index) =>(

                   
                    <div key={index} className="bg-gray-100 rounded-lg  p-6  shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="mb-4 text-gray-700 ">{project.description}</p>
                       
                        <a href=" {project.link}" target="-blank" rel="noopener noreferrer" className="bg-blue-600 font-medium  hover:underline rounded-full text-white px-3 py-2"> View The Project</a>
                    </div>
                     ))}
                </div>
            </div>
        </section>
        </>
    )
}
export default Projects