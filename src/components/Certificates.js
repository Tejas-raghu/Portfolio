import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Certificates() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div id="certificate" className={`py-12 px-6 transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h3 className={`text-3xl font-semibold border-b-4 inline-block pb-1 mb-8 ${darkMode ? "border-gray-400" : "border-gray-600"}`}>Certificates</h3>

        {/* Certificate List */}
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>HackerRank Problem Solving (Basic) -</strong> <a href="https://www.hackerrank.com/certificates/01db8d09e440" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">HackerRank</a></li>
          <li><strong>HackerRank Problem Solving (Intermediate) -</strong> <a href="https://www.hackerrank.com/certificates/e3e0af2951a9" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">HackerRank</a></li>
          <li><strong>HackerRank SQL (Basic) -</strong> <a href="https://www.hackerrank.com/certificates/24413e7db549" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">HackerRank</a></li>
          <li><strong>HackerRank SQL (Intermediate) -</strong> <a href="https://www.hackerrank.com/certificates/24413e7db549" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">HackerRank</a></li>
          <li><strong>AWS Academy Graduate -</strong> <a href="https://drive.google.com/file/d/1321OKquswMe3lTyDsyJgzuHDHTlQaWD5/view" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">AWS</a></li>
          <li><strong>HackerRank React (Basic) -</strong> <a href="https://www.hackerrank.com/certificates/8fefdde341c4?test_finished=true" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">HackerRank</a></li>
          <li><strong>Agile with Atlassian Jira </strong></li>
        </ul>
      </div>
    </div>
  );
}
