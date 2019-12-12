import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="navbar">
      <a href="#" className="logo">McGarvin</a>
      <ul className="nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
        </div>
        <div className="banner-area" id="home">
            <div className="text-part">
              <h1>Banner Area</h1>
              <p>blah</p>
              </div>
        </div>
          <div className="about-area" id="about">
            <div className="text-part">
              <h1>About Area</h1>
              <p>blah</p>
            </div>
          </div>
          <div className="port-area" id="portfolio">
            <div className="text-part">
              <h1>Port Area</h1>
              <p>blah</p>
            </div>
          </div>
          <div className="service-area" id="services">
            <div className="text-part">
              <h1>Services Area</h1>
              <p>blah</p>
            </div>
          </div>
          <div className="contact-area" id="contact">
            <div className="text-part">
              <h1>Contact Area</h1>
              <p>blah</p>
            </div>
    </div>
  </div>
  );
}

export default App;
