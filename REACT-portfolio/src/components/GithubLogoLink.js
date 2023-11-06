import React from "react";
import { Link } from 'react-router-dom';
import githubLogo from '../styles/images/github/github-logo.png';

function githubLogoLink() {
    return (
        <Link to=""><img src={githubLogo} alt="Github logo" className="logo" /></Link>
    );
}

export default githubLogoLink;