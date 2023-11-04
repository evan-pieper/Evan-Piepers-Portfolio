// Structural imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Styling imports
import './styles/App.css';
// Component imports
import { Header, Subheader, AboutMe, Work, Contact } from './components/Components';

function App() {
  return (
    <div className="App">
      <Header />
      <Subheader />
      <main className="col" id="mainCol">
        <Router>
          <NavLink to="/aboutMeSection">
            <AboutMe />
          </NavLink>
          <NavLink to="/workSection">
            <Work />
          </NavLink>
          <NavLink to="/contactSection">
            <Contact />
          </NavLink>
        </Router>
      </main>
    </div>
  );
}

export default App;
