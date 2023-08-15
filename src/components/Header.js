import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Leetcode from "../leetcode.svg";
import './Header_CSS.css';
import Resume from "../Resume.pdf";

export default function Header() {
  const [typewriterText, setTypewriterText] = useState('');

  useEffect(() => {
    const targetText = "TEJASVI  RAGHUVNASHI";
    let currentIndex = 0;

    const interval = setInterval(() => {
      setTypewriterText(targetText.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === targetText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="header"> 
      <h5>HEY, I'M </h5>
      <h3>{typewriterText}</h3>

      <div className="social-links">
        <a
          href = "https://github.com/Tejas-raghu"
          target = "_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a href="https://leetcode.com/Tejas_Raghu/" target="_blank" rel="noopener noreferrer">
          <img src={Leetcode} alt="Leetcode Logo" />
        </a>

        <a
          href = "https://www.linkedin.com/in/tejasvi-raghuvanshi-98072022b/"
          target = "_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <nav className="nav-links">
          <a href={Resume} download="Resume.pdf">Resume</a>
          <a href="#about">About</a>
          <a href="#professional">Professional Experience</a>
          <a href="#skill">Skills</a>
          <a href="#project">Projects</a>
          <a href="#certificate">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
