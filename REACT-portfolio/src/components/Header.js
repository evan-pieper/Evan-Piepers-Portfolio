function Header() {
    return (
      <header class = "row" id = "header">
          <section id = "header-name">Evan Pieper</section>
          <section id = "navbar">
              {/* Navbar links to rest of document, except for resume which redirects to a separate page (linkedin as a placeholder until separate resume page is integrated)*/}
              <a href="#aboutMeSection">About Me</a>
              <a href="#workSection">Work</a>
              <a href="#contactSection">Contact</a>
              <a href="https://www.linkedin.com/in/evanpieper/">Resume</a>
          </section>
      </header>
    );
}

export default Header;