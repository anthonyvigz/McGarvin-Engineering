import React from "react";
import Home from "./views/Home";
import About from "./views/About";
import Capabilities from "./views/Capabilities";
import Industries from "./views/Industries";
import Contact from "./views/Contact";
import NavBar from "./views/NavBar";
import "./css/home.scss";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Capabilities />
      <Industries />
      <Contact />
    </>
  );
}

export default App;
