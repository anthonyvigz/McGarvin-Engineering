import React, { useEffect } from "react";
import "../css/about.scss";
import sidePic from "../img/factory2-howwework-pic1.png";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about-area" id="about">
      <div className="aboutBlock">
        <div data-aos="fade-right" className="aboutText">
          <h1>About Us</h1>
          <p>
            We are a small precision sheet metal parts manufacturing company
            established in Lowell Massachusetts 1969. In 1995, we outgrew our
            original location so we purchased a large industrial condominium
            allowing us to expand our capabilities to meet our customers growing
            needs.
          </p>
          <p>
            McGarvin has been supplying low tech and high tech companies with
            quality precision-parts for over 40 years.
          </p>
        </div>
        <img src={sidePic} alt="aboutPic" />
      </div>
      <div data-aos="flip-down" className="custService">
        <h3>Customer Service Guarantee</h3>
        <p>
          Seamless customer service is <span>our #1 goal.</span> McGarvins'
          philosophy is to develop a working partnership with our customers and
          to promote mutually beneficial business relationships. We not only
          offer design assistance, but work with our customers on redevelopment
          strategies to increase the profitability of existing projects. <br />
          <br />
          <span>
            Our customers expect the best quality products and uncompromising
            service and we deliver!
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
