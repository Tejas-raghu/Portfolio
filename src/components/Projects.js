import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Projects() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div id="project" className={`py-12 px-6 transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h3 className={`text-3xl font-semibold border-b-4 inline-block pb-1 mb-8 ${darkMode ? "border-gray-400" : "border-gray-600"}`}>
          Other Projects
        </h3>

        {/* Project Cards */}
        <div className="space-y-6">
          <div className={`p-6 shadow-lg rounded-lg border-l-4 transition-all duration-300 ${darkMode ? "bg-gray-800 border-gray-500" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900  border-gray-800"}`}>
            <h4 className="text-xl font-semibold">Food Delivery Application</h4>
            <ul className="list-disc pl-5 mt-2">
              <li>Developed a Food Delivery App utilizing the MERN stack (MongoDB, Express.js, React, Node.js).</li>
              <li>Designed an intuitive frontend with React for seamless user browsing.</li>
              <li>Implemented user authentication using JWT for secure access.</li>
            </ul>
            <p className="mt-2"><strong>Tech Used:</strong> MongoDB, ReactJS, NodeJS, ExpressJS, HTML, CSS, JWT</p>
            <a href="https://github.com/Tejas-raghu/FoodDelivery-MERN/tree/master" target="_blank" rel="noopener noreferrer" className={`inline-block mt-4 px-5 py-2 rounded-md shadow-md transition duration-300 ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}`}>
              View
            </a>
          </div>

          <div className={`p-6 shadow-lg rounded-lg border-l-4 transition-all duration-300 ${darkMode ? "bg-gray-800 border-gray-500" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900  border-gray-800"}`}>
            <h4 className="text-xl font-semibold">B2B Order Amount Prediction</h4>
            <p className="mt-2">Developed and implemented an efficient Machine Learning solution using Python, Numpy, Pandas, and ML libraries to forecast customer order amounts based on historical customer behavior.</p>
            <p className="mt-2"><strong>Tech Used:</strong> Python, Pandas, Seaborn, Matplotlib, Numpy, Scikit-learn</p>
            <a href="https://github.com/Tejas-raghu/Order_Amount_Prediction_ML" target="_blank" rel="noopener noreferrer" className={`inline-block mt-4 px-5 py-2 rounded-md shadow-md transition duration-300 ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}`}>
              View
            </a>
          </div>

          <div className={`p-6 shadow-lg rounded-lg border-l-4 transition-all duration-300 ${darkMode ? "bg-gray-800 border-gray-500" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900  border-gray-800"}`}>
            <h4 className="text-xl font-semibold">Weather Application</h4>
            <p className="mt-2">Created a weather application built with HTML/CSS, JavaScript, and RapidAPI. It provides real-time weather data, hourly and daily forecasts, and an interactive map for multiple locations.</p>
            <p className="mt-2"><strong>Tech Used:</strong> HTML, CSS, JavaScript, RapidAPI</p>
            <a href="https://github.com/Tejas-raghu/WeatherApp" target="_blank" rel="noopener noreferrer" className={`inline-block mt-4 px-5 py-2 rounded-md shadow-md transition duration-300 ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}`}>
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
