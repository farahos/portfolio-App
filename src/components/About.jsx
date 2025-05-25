import React from "react";
const About = () =>{
    return (
        <>
       <section id="About" className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl mb-6 text-blue-700 font-bold ">About Me </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
                   I'm <span className="font-semibold text-blue-600">Abdullahi Abdirzak Hassan</span> a Full-Stack Developer based in 
                Mogadishu, Somalia. 
                I enjoy creating modern 
                web applications using <span className="font-semibold text-blue-600">React Js & Tailwin Css</span> on the frontend and <span className="font-semibold text-blue-600">SpringBoot Java</span> on the backend.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
                I also teach programming
                 in Somali through my YouTube channel, 
                 covering topics like HTML, CSS,
                  JavaScript, SQL, and more.
            </p>
        </div>

       </section>
        </>
    )
}
export default About