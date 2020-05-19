import React from "react";
import "../css/industries.scss";
import indImg from "../img/factory2-about-pic3.jpg";

function Industries() {
  return (
    <div className="indi-area" id="industries">
      <div className="mainIndi">
        <img src={indImg} alt="indImg" />
        <div className="indiText">
          <h1>Industries Area</h1>
          <p>blah</p>
        </div>
      </div>
    </div>
  );
}

export default Industries;
