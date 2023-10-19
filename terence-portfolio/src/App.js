// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to My Portfolio</h2>;
}

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <Project
        title="Project 1"
        description="Description of Project 1..."
        image="project1.png"
        technologies={['React', 'Node.js', 'Express', 'MongoDB']}
        projectLink="/project1"
        repoLink="https://github.com/turrence/project1"
        date="October 2022"
      />
      {/* Add more Project components here */}
    </div>
  );
}

export default App;
