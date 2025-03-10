import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Professional from "./components/Professional";
import Project from "./components/Projects";
import Skill from "./components/Skils";
import Contact from "./components/Contact";
import Certificate from "./components/Certificates";
import { ThemeProvider } from "./ThemeContext";
import FloatingToggleButton from "./components/FloatingToggleButton";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <FloatingToggleButton />
        <Header />
        <About />
        <Professional />
        <Skill />
        <Project />
        <Certificate />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
