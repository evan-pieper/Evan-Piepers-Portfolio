import React from "react";
import { Link } from 'react-router-dom';
import githubLogo from '../styles/images/github/github-logo.png';
import linkedinLogo from '../styles/images/linkedIn/LI-logo.png';
//import stackOverflowLogo from '.styles/images/logo-stackoverflow.glyph.png';

function Footer() {
    return (
        <section className='row' id = "footer">
            {/* Footer has 3 png logos that link to corresponding external pages*/}
            <Link to=""><img src={githubLogo} alt="Github logo" className="logo" /></Link>
            <Link to=""><img src={linkedinLogo} alt="Linkedin logo" className="logo" /></Link>
        </section>
    );
}

export default Footer;