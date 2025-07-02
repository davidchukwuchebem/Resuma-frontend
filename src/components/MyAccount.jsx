import React from "react";
import NavBar from "./NavBar";

function MyAccount() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 text-gray-800">
      <NavBar />
      <h2 className="text-2xl font-bold mb-6 text-center">My Account</h2>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto space-y-6">
        {/* Email Row */}
        <div className="flex justify-between items-center">
          <p className="font-medium">Email:</p>
          <p className="text-gray-600 break-all">shdjwdwdwbwddyw@gmail.com</p>
        </div>
        <hr className="border-gray-200" />

        {/* Password Row */}
        <div className="flex justify-between items-center">
          <p className="font-medium">Password:</p>
          <p className="text-gray-600">••••••••</p>
        </div>
        <hr className="border-gray-200" />

        {/* Logout Button */}
        <button className="w-full bg-yellow-400 text-black py-2 rounded-xl hover:bg-yellow-500 transition duration-300">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default MyAccount;
