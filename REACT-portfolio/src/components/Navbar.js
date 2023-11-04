import React from "react";
import { NavLink } from 'react-router-dom';
import { AboutMe, Work, Contact} from './Components';

function Navbar() {
    return (
        <section id = "navbar">
            {/* Navbar links to rest of document, except for resume which redirects to a separate page (linkedin as a placeholder until separate resume page is integrated)*/}
            <NavLink to="/aboutMeSection"><AboutMe /></NavLink>
            <NavLink to="/workSection"><Work /></NavLink>
            <NavLink to="/contactSection"><Contact /></NavLink>
            <a href="https://www.linkedin.com/in/evanpieper/">Resume</a>
        </section>
    );
}

export default Navbar;