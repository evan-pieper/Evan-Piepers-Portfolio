import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <section className='row' id = "navbar">
            {/* Navbar links to rest of document, except for resume which redirects to a separate page (linkedin as a placeholder until separate resume page is integrated)*/}
            <h1 className = "title">Evan Pieper</h1>
            <Link to="/about-me">About me</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <Link to='/resume'>Resume</Link>
        </section>
    );
}

export default Navbar;