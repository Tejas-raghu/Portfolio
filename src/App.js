
import './App.css';
import Header from "./components/Header"
import About from "./components/About"
import Professional from "./components/Professional"
import Project from "./components/Projects"
import Skill from "./components/Skils"
import Contact from "./components/Contact"
import Certificate from "./components/Certificates"

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Professional/>
      <Skill/>
      <Project/>
      <Certificate/>
      <Contact/>
    </div>
  );
}

export default App;
