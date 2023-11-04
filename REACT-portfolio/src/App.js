import React from 'react';
import './App.css';
import 'link-react' ;

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
      {/* placeholder for about me*/}
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </section>
  );
}

function Work() {
  return (
    <section className="work row" id="workSection">
      <h1 class = "leftCol col">Work</h1>
            
      <section class = "rightCol row">
        <a href = "https://aaronh-o.github.io/tier-ranker/">
          <section class = "card" id = "firstCard">
            <h1 class = "cardTag">First Project</h1>
          </section>
        </a>
        <a href = "https://powerful-stream-45360-1940a41a4b54.herokuapp.com/login">
          <section class = "card">
            <h1 class = "cardTag">Second Project</h1>
          </section>
        </a>
        <a href = "https://evan-pieper.github.io/Code-Quiz/">
          <section class = "card">
            <h5 class = "cardTag">Third Project</h5>
          </section>
        </a>
      </section>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact row" id="contactSection">
      <h1 class = "leftCol col">Contact Me</h1>

      <section class = "rightCol row">
        <a href = "tel:661-993-2502">(661)-993-2502</a>
        <a href = "mailto:evanjpieper@gmail.com">evanjpieper@gmail.com</a>
        <a href = "https://github.com/evan-pieper">https://github.com/evan-pieper</a>
        <a href = "https://www.linkedin.com/in/evanpieper/">https://www.linkedin.com/in/evanpieper/</a>
      </section>
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
