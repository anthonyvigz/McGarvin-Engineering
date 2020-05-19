import React, { useEffect } from "react";
import "../css/capabilities.scss";
import img1 from "../img/fac1.png";
import img2 from "../img/fac2.png";
import img3 from "../img/fac3.png";
import img4 from "../img/fac4.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Capabilities() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="capabilities" className="capa-area">
      <div className="capaBlocks">
        <div data-aos="fade-up" className="cBlock">
          <img src={img3} alt="img3" />
          <h4>Materials We Work</h4>
          <ul>
            <li>Aluminum (all types)</li>
            <li>Stainless Steel (all types)</li>
            <li>Steel & Titanium</li>
            <li>Copper & Brass</li>
            <li>Nickle & Bronze</li>
            <li>
              Plastics:
              <ul>
                <li>Lexan</li>
                <li>G-10</li>
                <li>Acrylic</li>
                <li>PVC</li>
              </ul>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up" className="cBlock">
          <img src={img1} alt="img1" />
          <h4>Capabilities</h4>
          <ul>
            <li>CNC Punching</li>
            <li>CNC Forming</li>
            <li>Certified Welding</li>
            <li>Water Jet Cutting</li>
            <li>Laser Cutting</li>
            <li>Laser Engraving</li>
            <li>Shearing & Rolling</li>
            <li>Sanding & Grinding</li>
            <li>Designing from samples</li>
            <li>Assembly</li>
            <li>Rework off the shelf parts</li>
          </ul>
        </div>
        <div data-aos="fade-up" className="cBlock">
          <img src={img2} alt="img2" />
          <h4>Additional Services</h4>
          <ul>
            <li>Chromate Conversions</li>
            <li>Anodize Finishes</li>
            <li>Zinc Plating</li>
            <li>Tin Plating</li>
            <li>Painting</li>
            <li>Silk Screening</li>
          </ul>
        </div>
      </div>
      <div data-aos="flip-down" className="qualControl">
        <h3>Quality Control</h3>
        <p>
          McGarvin Engineering is{" "}
          <span>
            committed to continuous improvement and customer satisfaction.
          </span>{" "}
          Our Quality Objectives are two fold: To improve the percentages of our
          on-time deliveries and to work with our customers to help reduce
          defects and improve conformance.
        </p>
      </div>
    </div>
  );
}

export default Capabilities;
