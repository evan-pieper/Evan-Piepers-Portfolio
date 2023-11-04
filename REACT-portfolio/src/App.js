// Structural imports
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Styling imports
import './styles/App.css';
// Component imports
import { Header, Subheader, AboutMe, Work, Contact } from './components/Components';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="col" id="mainCol">
        <Router>
          <Route path="/aboutMeSection" element={AboutMe} />
          <Route path="/workSection" element={Work} />
          <Route path="/contactSection" element={Contact} />
        </Router>
      </main>
    </div>
  );
}

export default App;
