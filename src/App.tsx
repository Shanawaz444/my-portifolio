import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import MyServices from './sections/MyServices';
import './App.css';
import Experience from './sections/Experience';
import HireMe from './sections/HireMe';
import LetsConnect from './sections/LetsConnect';
import Projects from './sections/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Future routes like About, Services, etc. */}
      </Routes>
      <MyServices/>
      <Experience/>
      <HireMe/>
      <Projects/>
      <LetsConnect/>
    </Router>
  );
}

export default App;
