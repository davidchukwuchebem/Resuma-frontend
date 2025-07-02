import React from 'react';
import logo from "../assets/Frame 44.png";

function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white animate-fade-in">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-20 h-20 mb-4 animate-bounce" />

      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign In</h1>
      <p className="text-sm text-gray-600 text-center max-w-sm mb-4">
        No Password Needed — just enter your email and we’ll send you a secure link to access your account. If you’re new, we’ll create one for you instantly.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <button className="bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition duration-300 ease-in-out">
          CONTINUE WITH GOOGLE
        </button>
        <button className="bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition duration-300 ease-in-out">
          CONTINUE WITH GITHUB
        </button>
        <button className="bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition duration-300 ease-in-out">
          CONTINUE WITH EMAIL
        </button>
      </div>
    </div>
  );
}

export default SignIn;
