import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Contact() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div id="contact" className={`py-12 px-6 transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h3 className={`text-3xl font-semibold border-b-4 inline-block pb-1 mb-8 ${darkMode ? "border-gray-400" : "border-gray-600"}`}>Contact</h3>

        {/* Contact Details */}
        <div className="space-y-4">
          <p className="text-lg">
            <strong>Email: </strong>
            <a href="mailto:tejasviraghuvanshi3@gmail.com" className="text-gray-800 hover:underline">
              rg.tejasvi@gmail.com
            </a>
          </p>
          <p className="text-lg">
            <strong>Phone: </strong>
            <span className="text-black dark:text-gray-500">8077185801</span>
          </p>
        </div>
      </div>
    </div>
  );
}
