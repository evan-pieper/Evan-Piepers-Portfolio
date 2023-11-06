import React from "react";
import { Link } from 'react-router-dom';
import githubLogo from './styles/images/github/github-logo.png';
import linkedinLogo from '../assets/images/LI-In-Bug.png';
import stackOverflowLogo from '../assets/images/logo-stackoverflow.glyph.png';

function Footer() {
    return (
        <section className='row' id = "footer">
            {/* Footer has 3 png logos that link to corresponding external pages*/}
            <Link to=""><img src={githubLogo} alt="Github logo" className="logo" /></Link>
            <Link to=""><img src={linkedinLogo} alt="Linkedin logo" className="logo" /></Link>
            <Link to=""><img src={stackOverflowLogo} alt="Stack Overflow logo" className="logo" /></Link>
        </section>
    );
}

export default Footer;