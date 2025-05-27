import React from "react";
import image from "../assets/farah.jpg";

const Profile = () =>{

    return (
        <>
        <div className="flex flex-col items-center justify-center py-10 px-4 bg-gray-100 min-h-screen">
            <h2 className="text-4xl  text-blue-600 font-bold mb-6">My Profile</h2>

            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
                        <img src={image}  alt="Profile" className="w-full h-full object-cover"/>
                

            </div>
            <h2 className="text-3xl font-semibold mt-4">Abdullahi Abdirzak Hassan</h2>
            <p className="text-gray-600 text-center max-w-md mt-2">Full Stack Developer | React, Tailwind, Spring Boot | Passionate about building clean & responsive web apps.</p>
            <div className="flex gap-4 mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2 shadow transition duration-300 cursor-pointer">Follow Me</button>
                <button className="bg-gray-600 hover:bg-gray-900 text-white px-5 py-2 rounded-full shadow transition duration-300 cursor-pointer">Chat Now</button>

            </div>
            <div>
                <p>Code with purpose, design with passion.</p>
            </div>
        </div>
        </>
    )
}
export default Profile