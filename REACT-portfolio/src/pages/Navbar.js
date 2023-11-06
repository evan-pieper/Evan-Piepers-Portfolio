import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <section className='row' id = "navbar">
            {/* Navbar links to rest of document, except for resume which redirects to a separate page (linkedin as a placeholder until separate resume page is integrated)*/}
            <h1 className = "title">Evan Pieper</h1>
            <NavLink to="/about-me" activeClassName="active">About me</NavLink>
            <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <NavLink to='/resume' activeClassName="active">Resume</NavLink>
        </section>
    );
}

export default Navbar;