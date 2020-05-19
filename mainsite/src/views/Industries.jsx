import React from "react";
import "../css/industries.scss";
import indImg from "../img/factory2-about-pic3.jpg";
import manual from "../img/quality_mannual.pdf";

function Industries() {
  return (
    <div className="indi-area" id="industries">
      <div className="mainIndi">
        <img data-aos="fade-in" src={indImg} alt="indImg" />
        <div data-aos="fade-right" className="indiText">
          <h1>Industries Area</h1>
          <h4>
            McGarvin Engineering is equipped to service all major industries as
            well as job shops. Here is a partial list of industries we serve.
          </h4>
          <div className="listAndMan">
            <ul data-aos="fade-right">
              <li>Aerospace</li>
              <li>Medical</li>
              <li>Automotive</li>
              <li>Job & Machine Shops</li>
              <li>Marine Industries</li>
              <li>Communications</li>
              <li>Computer</li>
              <li>Defense</li>
              <li>Electronics</li>
              <li>Homeland Security</li>
            </ul>
            <div data-aos="flip-down" className="manual">
              <a target="_blank" rel="noopener noreferrer" href={manual}>
                Quality Control Manual <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
