import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Skills() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`py-12 px-6 transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h3 className={`text-3xl font-semibold border-b-4 inline-block pb-1 mb-8 ${darkMode ? "border-gray-400" : "border-gray-600"}`}>
          Skills
        </h3>

        {/* Skills List */}
        <ul className="space-y-4 list-disc pl-5">
          <li>
            <strong className="text-lg">Programming Languages:</strong> C, C++, Python, JavaScript, HTML, CSS, VueJS
          </li>
          <li>
            <strong className="text-lg">Libraries/Frameworks:</strong> React JS, Express JS, Node JS, NuxtJS, Dot Net, VueJS
          </li>
          <li>
            <strong className="text-lg">Tools / Platforms:</strong> GitHub, VS Code, Eclipse, Postman, Visual Studio Code 2022, Azure
          </li>
          <li>
            <strong className="text-lg">Databases:</strong> SQL, MongoDB
          </li>
        </ul>
      </div>
    </div>
  );
}
