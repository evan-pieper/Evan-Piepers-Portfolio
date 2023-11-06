import React from "react";
import { Link } from 'react-router-dom';
import githubLogo from '../styles/images/github/github-logo.png';
import linkedinLogo from '../styles/images/linkedIn/LI-logo.png';
import stackOverflowLogo from '../styles/images/stackOverflowLogo.png';

function Footer() {
    return (
        <section className='row' id = "footer">
            {/* Footer has 3 png logos that link to corresponding external pages*/}
            <Link to="https://github.com/evan-pieper"><img src={githubLogo} alt="Github logo" className="logo" id="githubFooter"/></Link>
            <Link to="https://www.linkedin.com/in/evanpieper/"><img src={linkedinLogo} alt="Linkedin logo" className="logo" /></Link>
            <Link to="https://www.linkedin.com/in/evanpieper/"><img src={stackOverflowLogo} alt="Stack Overflow logo" className="logo" /></Link>
        </section>
    );
}

export default Footer;