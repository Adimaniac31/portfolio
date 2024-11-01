import React from 'react';
import Navbar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import ProjectList from './Components/ProjectList';
import ContactList from './Components/ContactList';
import Skills from './Components/Skills';
import Experience from './Components/Experience';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div id="about" className="mb-10">
        <AboutMe />
      </div>
      <div id="projects" className="mb-10">
        <ProjectList />
      </div>
      <div id="experience" className="mb-10">
        <Experience />
      </div>
      <div id="skills" className="mb-10">
        <Skills />
      </div>
      <div id="contact" className="mb-10">
        <ContactList />
      </div>
    </div>
  );
}

export default App;


