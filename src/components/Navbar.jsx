import React, { useState } from "react";
import {Menu, X} from "lucide-react"
import { Link } from "react-router-dom";


const Navbar = () => {
    const [MenuOpen , SetMenuOpen] = useState(false)
    const toggleMenu = () => SetMenuOpen (!MenuOpen)
    return (
        <>
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg ">
            {/* container mx-auto flex justify-between items-center */}
            <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer"><Link to={"/"}>My PortFolio</Link> </h1>
                {/* Desktop Menu */}

        <ul className="hidden md:flex space-x-6">
            
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to={"/Profile"}>Profile</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to={"/About"}>About</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to={"/Skills"}>Skills</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to={"/Projects"}>Projects</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to={"/Contacts"}>Contact</Link></li>


        </ul>
        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">{MenuOpen ? <X size={28}/> : <Menu size={28}/>}</button>
            </div>
    {/* Mobile Menu */}
    {MenuOpen && (
        <ul className="md:hidden bg-blue-600 py-6 px-4 space-y-3">
          
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to={"/Profile"} onClick={toggleMenu}>Profile</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to={"/About"} onClick={toggleMenu}>About</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to={"/Skills"} onClick={toggleMenu}>Skills</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to={"/Projects"} onClick={toggleMenu}>Projects</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to={"/Contacts"} onClick={toggleMenu}>Contact</Link></li>




        </ul>
        ) }
        </nav>
   
        </>
    )
}
export default Navbar