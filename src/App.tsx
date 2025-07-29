import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './sections/Hero';
import MyServices from './sections/MyServices';
import './App.css';
import Experience from './sections/Experience';
import HireMe from './sections/HireMe';
import LetsConnect from './sections/LetsConnect';
import Projects from './sections/Projects';
import Footer from './sections/Footer';

function App() {
  return (
    <Router>
      <Hero />
      <MyServices/>
      <Experience/>
      <HireMe/>
      <Projects/>
      <LetsConnect/>
      <Footer/>
    </Router>
  );
}

export default App;
