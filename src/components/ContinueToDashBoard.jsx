import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import checkIcon from "../assets/Vector.png";
import logo from "../assets/Frame 44.png";

function ContinueToDashBoard() {
  useEffect(() => {
    // 🎉 Launch confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white animate-fade-in text-center">
      <img src={logo} alt="Logo" className="w-20 h-20 mb-6 animate-bounce" />

      <h1 className="text-3xl font-bold text-gray-800 mb-2">Success 🎉</h1>

      <p className="text-gray-600 text-base mb-6 max-w-md">
        Verified! You’re all set. Welcome aboard 🚀
      </p>

      <img src={checkIcon} alt="Check Icon" className="w-14 h-14 mb-6 animate-pulse" />

      <button className="bg-black text-white w-full max-w-xs py-3 rounded-xl hover:bg-gray-800 transition duration-300 ease-in-out">
        Continue to Dashboard
      </button>
    </div>
  );
}

export default ContinueToDashBoard;
