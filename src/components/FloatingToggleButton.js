import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { motion } from "framer-motion";

export default function FloatingToggleButton() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed bottom-10 right-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
        darkMode
          ? "bg-gray-800 text-white hover:bg-gray-600"
          : "bg-gray-200 text-gray-900 hover:bg-gray-100"
      }`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </motion.button>
  );
}
