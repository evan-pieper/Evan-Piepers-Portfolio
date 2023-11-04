import React from 'react';
import './styles/App.css';
import { Header, Subheader, Work, Contact } from './components';

function AboutMe() {
  return (
    <section className="aboutMe row" id="aboutMeSection">
      {/* placeholder for about me*/}
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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
