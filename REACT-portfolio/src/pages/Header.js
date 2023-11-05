import Navbar from "../components/Navbar";
import Subheader from "../components/Subheader";
import React from "react";

function Header() {
    return (
      <header className = "col" id = "header">
        {/* Header element, contains navbar and subheader */}
        <Navbar />
        <Subheader />
      </header>
    );
}

export default Header;