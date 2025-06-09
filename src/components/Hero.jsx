import { Link } from 'react-router-dom';
import React from "react";
import farahoz from "../assets/FarahCv.pdf";


const Hero = () =>{
    return (
        <>
        <section className="bg-white py-20 px-6 text-center mb-5">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl mb-4 font-bold text-blue-700">Hi My Name is Abdullhi Abdirzak Hassan</h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6">Full-Stack Developer on building web applications
          using React & Spring Boot</p>
          <div className='flex justify-center gap-5'>

          <button className="bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 px-6 py-3 transition duration-300"><Link to="/contacts">Contact Me</Link> </button>
         <button className="bg-gray-200 text-black font-semibold rounded-full hover:bg-gray-400 px-6 py-3 transition duration-300"><a href={farahoz} download="FarahCv.pdf">Download Cv</a></button>
          </div>
          </div>

          
        </section>
        </>
    )
}
export default Hero