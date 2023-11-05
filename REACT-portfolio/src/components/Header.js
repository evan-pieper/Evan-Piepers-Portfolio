import AboutMe from "./AboutMe";
import Work from "./Work";
import Contact from "./Contact";
import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className = "row" id = "header">
            <section id = "navbar">
                {/* Navbar links to rest of document, except for resume which redirects to a separate page (linkedin as a placeholder until separate resume page is integrated)*/}
                <Link to="/aboutMeSection">About me</Link>
                <Link to="/workSection">Work</Link>
                <Link to="/contactSection">Contact</Link>
                <a href="https://www.linkedin.com/in/evanpieper/">Resume</a>
            </section>
      </header>
    );
}

export default Header;