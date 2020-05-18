import React from "react";
import useWindowDimensions from "../helpers/WindowSize";

function Home() {
  // width of window from window component
  const { width } = useWindowDimensions();

  return (
    <div className="homeBlock">
      <div className="bannerBlock">
        <h2
          style={{
            fontSize: width < 1200 ? width / 12 : "100px",
            width: `${width * (2 / 3)}px`,
          }}
        >
          PRECISION
          <br /> SHEET METAL
          <br /> FABRICATION
        </h2>
        <button>MORE ABOUT US</button>
        <p>
          At McGarvin Engineering we are able to produce short run as well as
          long production jobs and satisfy all of our customers needs with our
          large network of subcontractors.
        </p>
      </div>
    </div>
  );
}

export default Home;
