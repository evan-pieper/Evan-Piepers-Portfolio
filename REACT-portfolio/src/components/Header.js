import React from "react";
import { Navbar, Subheader } from './Components';

function Header() {
    return (
      <header class = "row" id = "header">
        <Navbar />
        <Subheader />
      </header>
    );
}

export default Header;