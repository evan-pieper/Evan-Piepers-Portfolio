import React from 'react';
import './App.css';

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

function Subheader() {
  return (
    <section className="row" id="subheader">
      {/* sets up the subheader element*/}
      <h4 id = "subheader_subtitle">Cool Subtitle Here!</h4>
    </section>
  );
}

function AboutMe() {
  return (
    <section className="aboutMe row" id="aboutMeSection">
      {/* ... */}
    </section>
  );
}

function Work() {
  return (
    <section className="work row" id="workSection">
      {/* ... */}
    </section>
  );
}

function Contact() {
  return (
    <section className="contact row" id="contactSection">
      {/* ... */}
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Subheader />
      <main className="col" id="mainCol">
        <AboutMe />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
