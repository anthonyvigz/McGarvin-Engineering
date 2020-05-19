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
    <div className={top ? "navBarHome" : "navBarHome movingNav"}>
      <img src={logo} alt="logo" />
      <nav className="links">
        <a href="#">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#capabilities">CAPABILITIES</a>
        <a href="#industries">INDUSTRIES</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </div>
  );
}

export default NavBar;
