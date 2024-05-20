import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/NavBar';
import About from './components/About';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            {/* <Route path="/technology" element={<Technology />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
