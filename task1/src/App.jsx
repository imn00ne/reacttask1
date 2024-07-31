import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import About from './components/About';



const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;