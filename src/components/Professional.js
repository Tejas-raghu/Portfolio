import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function ProfessionalExperience() {
  const {darkMode} = useContext(ThemeContext);
  return (
    <div className={`py-12 px-6 transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h3 className={`text-3xl font-semibold border-b-4 inline-block pb-1 mb-8 ${darkMode ? "border-gray-400" : "border-gray-600"}`}>
          Professional Experience
        </h3>

        {/* Experience Cards */}
        <div className="space-y-6">
          {/* HighRadius */}
          <div className={`p-6 shadow-lg rounded-lg border-l-4 transition-all duration-300 ${darkMode ? "bg-gray-800 border-gray-500" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900 border-gray-800"}`}>
            <h4 className="text-xl font-semibold">Field Assist | Software Developer</h4>
            <p className="mt-2 leading-relaxed">
              <ul>
                <li> Currently employed as an SDE, actively developing and maintaining web application user interfaces using Vue.js and Nuxt.js,
                   adhering to best practices and coding standards.</li>
                <li>Collaborating with a team to implement features, resolve bugs, and enhance user experience.</li>
                <li>Contributing to .NET backend APIs by developing, maintaining, and optimizing server-side logic and database interactions.</li>
              </ul>
            </p>
          </div>
          <div className={`p-6 shadow-lg rounded-lg border-l-4 transition-all duration-300 ${darkMode ? "bg-gray-800 border-gray-500" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900 border-gray-800"}`}>
            <h4 className="text-xl font-semibold">HighRadius | Product Engineer Intern</h4>
            <p className="mt-2 leading-relaxed">
              Developed predictive ML model for customer order forecasting, integrated into a Full-Stack Invoice
              Management App using ReactJS, Java Servlets, and JDBC for web development and database
              management.
            </p>
            <a
              href="https://github.com/Tejas-raghu/Invoice_Management_system_HRC"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block mt-4 px-5 py-2 rounded-md shadow-md transition duration-300 ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}`}
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
