import React, { useState, useEffect } from "react";
import logo from "../img/mainlog.png";
import "../css/navbar.scss";
import useWindowDimensions from "../helpers/WindowSize";

function NavBar() {
  const [top, setNav] = useState(true);

  // width of window from window component
  const { width, height } = useWindowDimensions();

  // this is for the mobile side nav
  const [sidenav, showNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY < 150) {
      setNav(true);
    } else {
      setNav(false);
    }
  });

  // show side nav
  const openNav = (event) => {
    showNav(!sidenav);
  };

  if (width > 1150) {
    return (
      <div className={top ? "navBarHome" : "movingNav"}>
        <img src={logo} alt="logo" />
        <nav className="links">
          <a href="#">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#capabilities">CAPABILITIES</a>
          <a href="#industries">INDUSTRIES</a>
        </nav>
        <a id="contactButton" href="#contact">
          CONTACT <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    );
  } else {
    return (
      <div className="movingNav">
        <img src={logo} alt="logo" />
        <button onClick={openNav}>
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="mobileLanNav"
          style={!sidenav ? { right: "-200px" } : null}
        >
          <nav onClick={openNav}>
            <a id="contactButton" href="#contact">
              CONTACT <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#capabilities">CAPABILITIES</a>
            <a href="#industries">INDUSTRIES</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
