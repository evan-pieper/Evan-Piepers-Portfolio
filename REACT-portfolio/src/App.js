// Structural imports
import React from 'react';
import { NavLink } from 'react-router-dom';
// Styling imports
import './styles/App.css';
// Component imports
import { Header, Subheader, AboutMe, Work, Contact } from './components';

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
