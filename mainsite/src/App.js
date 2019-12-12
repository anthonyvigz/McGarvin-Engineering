import React from 'react';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Capabilities from './views/Capabilities';
import Industries from './views/Industries';
import Contact from './views/Contact';

function App() {
  return (
    <div>
      <div className="navbar">
      <a href="#" className="logo">McGarvin</a>
      <ul className="nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#capabilities">Capabilities</a></li>
        <li><a href="#industries">Industries</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        </div>
        <Home />
        <About />
        <Capabilities />
        <Industries />
        <Contact />
    </div>
  );
}

export default App;
