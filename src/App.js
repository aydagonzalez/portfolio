import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Assuming you have an App.css for styles

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Technology />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
