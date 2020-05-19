import React from "react";
import useWindowDimensions from "../helpers/WindowSize";

function Home() {
  // width of window from window component
  const { width, height } = useWindowDimensions();

  return (
    <div className="home">
      <div style={{ height: height + 200 }} className="bannerBlock">
        <div className="banner">
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
          <button>SEE MORE INFO ABOUT US</button>
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
