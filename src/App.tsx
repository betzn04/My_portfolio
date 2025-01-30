import React from 'react';
import './App.css';
import Intro from './components/intro/intro';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/home/home';
// import About from './components/about/about';
// import Projects from './components/projects/projects';
// import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <Intro />
      {/* <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;