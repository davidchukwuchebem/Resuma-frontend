import React from 'react';
import logo from "../assets/Frame 44.png";

function SignWithEmail() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white animate-fade-in">
      {/* Logo with subtle bounce */}
      <img src={logo} alt="Logo" className="w-20 h-20 mb-6 animate-bounce" />

      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign in with Email</h1>

      {/* Subtitle */}
      <p className="text-sm text-gray-600 text-center max-w-sm mb-6">
        We'll send you a secure sign-in link. No password needed.
      </p>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full max-w-sm px-4 py-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
      />

      {/* Button */}
      <button className="bg-black text-white w-full max-w-sm py-3 rounded-xl hover:bg-gray-800 transition duration-300 ease-in-out">
        Send me a magic link
      </button>
    </div>
  );
}

export default SignWithEmail;
