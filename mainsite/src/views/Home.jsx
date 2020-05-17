import React from 'react';
import { Spring } from 'react-spring/renderprops';


function Home() {
    return (
        <div className="homeBlock">
            <div className="bannerBlock">
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    delay='1100'>
                    {props => <div className="bannerText" style={props}>
                    <h2>PRECISION<br/> SHEET METAL<br/> FABRICATION</h2>
                    <button>MORE ABOUT US</button>
                    <p>
                        At McGarvin Engineering we are able to 
                        produce short run as well as long 
                        production jobs and satisfy all of our 
                        customers needs with our large network 
                        of subcontractors.
                    </p>
                    </div>}
                </Spring>
            </div>
        </div>
    )
}

export default Home;