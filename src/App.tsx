import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SimplePresent from './pages/SimplePresent';
import './App.css';
import React from 'react';
import SimplePast from './pages/SimplePast';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simple-present" element={<SimplePresent />}/>
      <Route path="/simple-past" element={<SimplePast/>}/>
    </Routes>
  );
}

export default App;
