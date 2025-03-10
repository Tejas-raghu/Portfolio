import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from "react-type-animation";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-900"
      } transition-all duration-500`}
    >
      {/* Floating Background Shape */}
      <motion.div
        className="absolute w-40 h-40 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full opacity-30"
        initial={{ x: -50, y: -50 }}
        animate={{ x: 50, y: 50 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Navigation Bar */}
      <header className="mt-5 mr-5 absolute top-0 right-0 flex justify-end w-full text-sm">
        <nav className="hidden md:flex space-x-6 mt-3 mr-6">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          className="ml-4 px-4 py-2 border rounded-full"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </header>

      {/* Main Content */}
      <div className="text-center mt-20">
        <TypeAnimation
          sequence={[
            "Hey, I'm Tejasvi Raghuvanshi.", 2000,
            "A Full Stack Developer.", 1500,
            "Passionate about clean and maintainable code.", 1500,
            "Bridging the gap between design and functionality.", 1500,
            "Committed to continuous learning and growth.", 1500,
          ]}
          wrapper="h1"
          className="text-5xl font-bold leading-tight"
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* Floating LinkedIn Icon */}
      <motion.a
        href="https://www.linkedin.com/in/tejasvi-raghuvanshi-98072022b/"
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute top-20 right-20 text-4xl p-3 rounded-full shadow-lg ${
          darkMode ? "text-white bg-gray-700 hover:bg-gray-600" : "text-gray-700 bg-gray-300 hover:bg-gray-100"
        }`}
        initial={{ rotate: -15, y: -20 }}
        animate={{ rotate: 15, y: 20 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        whileHover={{ scale: 1.15, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </motion.a>

      {/* Floating Resume Button */}
      <motion.a
        href="/Resume.pdf"
        download="Resume.pdf"
        className={`absolute top-20 left-20 px-6 py-3 font-semibold rounded-lg shadow-lg ${
          darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-400 text-gray-800 hover:bg-gray-100"
        }`}
        initial={{ y: -10, rotate: 5 }}
        animate={{ y: 10, rotate: -5 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.15, backgroundColor: darkMode ? "#0A66C2" : "#0A66C2", color: "white" }}
      >
        📄 Resume
      </motion.a>
    </div>
  );
}
