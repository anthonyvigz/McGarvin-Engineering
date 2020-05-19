import React, { useEffect } from "react";
import useWindowDimensions from "../helpers/WindowSize";
import Aos from "aos";
import "aos/dist/aos.css";
import logo1 from "../img/mainlog.png";

function Home() {
  // width of window from window component
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home">
      <div
        data-aos="fade-right"
        style={width > 765 ? { height: height + 200 } : { height: "90%" }}
        className="bannerBlock"
      >
        <div className="banner">
          <img src={logo1} alt="mobileLogo" width="300px" />
          <h2
            style={{
              fontSize: width < 1500 ? width / 15 : "100px",
              width: `${width * (2 / 3)}px`,
            }}
          >
            PRECISION
            <br /> SHEET METAL
            <br /> FABRICATION
          </h2>
          <a href="#about">SEE MORE INFO ABOUT US</a>
          <p>
            At McGarvin Engineering we are able to produce short run as well as
            long production jobs and satisfy all of our customers needs with our
            large network of subcontractors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
