import React from "react";
import Home from "./views/Home";
import About from "./views/About";
import Capabilities from "./views/Capabilities";
import Industries from "./views/Industries";
import Contact from "./views/Contact";
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";
import useWindowDimensions from "./helpers/WindowSize";
import "./css/home.scss";

function App() {
  // width of window from window component
  const { width, height } = useWindowDimensions();

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Capabilities />
      <Industries />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
