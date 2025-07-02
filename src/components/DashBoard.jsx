import React from "react";

import createTemp from "../assets/Frame 45.png";
import Template from "../assets/Frame 50.png";
import icon from "../assets/Vector (1).png";
import NavBar from "./NavBar";

function DashBoard() {
  return (
    <section className="min-h-screen px-6 py-8 bg-gray-50 text-gray-800">
      {/* Header */}
       <NavBar/>

      {/* Templates Section */}
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-4">Choose Templates</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <img src={createTemp} alt="Create Template" className="rounded-xl cursor-pointer hover:scale-105 transition" />
          <img src={Template} alt="Template" className="rounded-xl cursor-pointer hover:scale-105 transition" />
          <img src={Template} alt="Template" className="rounded-xl cursor-pointer hover:scale-105 transition" />
          <img src={Template} alt="Template" className="rounded-xl cursor-pointer hover:scale-105 transition" />
          <img src={Template} alt="Template" className="rounded-xl cursor-pointer hover:scale-105 transition" />
        </div>
      </div>

      {/* Divider */}
      <hr className="mb-8 border-gray-300" />

      {/* My Resumes Section */}
      <div>
        <h1 className="text-2xl font-bold mb-4">My Resumes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-between hover:shadow-lg transition"
            >
              <img src={Template} alt="Resume Thumbnail" className="rounded mb-3 w-full object-cover" />
              <div className="flex items-center justify-between w-full">
                <p className="font-semibold">Resume</p>
                <img src={icon} alt="Options" className="w-5 h-5 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DashBoard;
