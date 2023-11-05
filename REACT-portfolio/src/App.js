// Structural imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// Styling imports
import './styles/App.css';
// Component imports
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
  <div>
    
    <Router>
      <h1>React Router DOM</h1>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<AboutMe />} />
      </Routes>
    </Router>
        {/*<Router>
        <Routes>
          <Route path="/" element={AboutMe} />
          <Route path="/aboutMeSection" element={AboutMe} />
          <Route path="/workSection" element={Work} />
          <Route path="/contactSection" element={Contact} />
          <Route path="*" element={AboutMe} />
        </Routes>
  </Router>*/}
  </div>
  );
}

export default App;
