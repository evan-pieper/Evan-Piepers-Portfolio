// Structural imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Styling imports
import './styles/App.css';
// Component imports
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './pages/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App col">
        <Navbar/>
        <div className="mainContent col" id="mainContent">
          <Routes> {/* Routes are the different pages of the website, each with their own path and element. Header is included in pages to keep it separate from other components */}
            <Route path="/" element={<AboutMe />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<AboutMe />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
