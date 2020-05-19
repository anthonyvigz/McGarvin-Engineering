import React, { useState, useEffect } from "react";
import logo from "../img/mainlog.png";
import "../css/navbar.scss";

function NavBar() {
  const [top, setNav] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY < 150) {
      setNav(true);
    } else {
      setNav(false);
    }
  });
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
}

export default NavBar;
