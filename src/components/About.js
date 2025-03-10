import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../ThemeContext";
import FloatingToggleButton from "../components/FloatingToggleButton";

export default function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900"}`}
    >
      <FloatingToggleButton />
      <div className="max-w-3xl text-center md:text-left">
        {/* Title with Underline */}
        <h3
          className={`text-3xl font-semibold mb-4 relative inline-block after:content-[''] after:w-full after:h-[2px] after:absolute after:left-0 after:bottom-[-4px] ${darkMode ? "after:bg-white" : "after:bg-gray-900"}`}
        >
          About Me
        </h3>

        {/* About Description */}
        <p
          className={`text-lg leading-relaxed transition-all ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          Fascinated by solving puzzles and logical thinking, I chose software development. The continuous evolution of this field and its impact captivated me. Beyond college, I explored web development through projects, gaining confidence in building applications.
          <br /><br />
          Currently, I work as a Software Developer, where I apply my skills to build efficient, scalable, and user-friendly applications. I enjoy tackling complex challenges and continuously learning to enhance my expertise in full-stack development.
        </p>

        {/* GitHub Button */}
        <a
          href="https://github.com/Tejas-raghu"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex items-center gap-3 px-6 py-3 border rounded-full font-medium transition-all duration-300 ${darkMode ? "border-white text-white hover:bg-white hover:text-gray-900" : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"}`}
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          View My Work
        </a>
      </div>
    </section>
  );
}
