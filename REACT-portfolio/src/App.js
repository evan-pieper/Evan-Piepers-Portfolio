// Structural imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Styling imports
import './styles/App.css';
// Component imports
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Router>
      <div className="App col">
        <Navbar/>
        <Routes> {/* Routes are the different pages of the website, each with their own path and element. Header is included in pages to keep it separate from other components */}
          <Route path="/" element={<AboutMe />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
