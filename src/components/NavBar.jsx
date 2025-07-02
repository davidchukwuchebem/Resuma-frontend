import React from 'react'
import logo from "../assets/Frame 44.png";
import profilePics from "../assets/Avatar.png";
function NavBar() {
  return (
    <header className="flex justify-between items-center mb-10">
         <img src={logo} alt="Logo" className="w-28 h-auto" />
         <img src={profilePics} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-black" />
       </header>
  )
}

export default NavBar