import React, { useState } from "react";
import {Menu, X} from "lucide-react"
const Navbar = () => {
    const [MenuOpen , SetMenuOpen] = useState(false)
    const toggleMenu = () => SetMenuOpen (!MenuOpen)
    return (
        <>
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg ">
            {/* container mx-auto flex justify-between items-center */}
            <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer">My portfolio </h1>
                {/* Desktop Menu */}

        <ul className="hidden md:flex space-x-6">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            <li className="hover:text-gray-300 cursor-pointer">Skills</li>
            <li className="hover:text-gray-300 cursor-pointer">Profile</li>

        </ul>
        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">{MenuOpen ? <X size={28}/> : <Menu size={28}/>}</button>
            </div>
    {/* Mobile Menu */}
    {MenuOpen && (
        <ul className="md:hidden bg-blue-600 py-6 px-4 space-y-3">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            <li className="hover:text-gray-300 cursor-pointer">Skills</li>
            <li className="hover:text-gray-300 cursor-pointer">Profile</li>


        </ul>
        ) }
        </nav>
   
        </>
    )
}
export default Navbar