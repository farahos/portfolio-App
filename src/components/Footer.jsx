import React from "react";
const Footer = () =>{
    return (
        <>
        <footer className="bg-blue-600 text-white text-center py-6 mt-10">
            <p className="text-sm">© {new Date().getFullYear()} Abdulahi Ugaas. All rights reserved.</p>
            <div className="mt-2 space-x-4">
                <a href="https://github.com/farahos?tab=repositories" className="hover:underline">Github</a>
                <a href="" className="hover:underline">LinkedIn</a>
            </div>
        </footer>
        </>
    )

}
export default Footer