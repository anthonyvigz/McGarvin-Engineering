import React from 'react';

function NavBar() {
    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            delay='600'>
            {props => <div style={props}>
            <div className="navbar">
        <img src={logo} alt="logo" />
        <ul className="nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#capabilities">Capabilities</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
            </div>}
        </Spring>
    )
}

export default NavBar;