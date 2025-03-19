import { Routes, Route } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
import SimplePresent from './pages/SimplePresent';
import './App.css';
import React from 'react';
import SimplePast from './pages/SimplePast';
import Tenses from './pages/Tenses';
import Introduction from './pages/Introduction';
import BasicSentenceStructure from './pages/BasicSentenceStructure';


function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/basic-sentence-structure" element={<BasicSentenceStructure />} />
      <Route path="/tenses" element={<Tenses />} />
      <Route path="/simple-present" element={<SimplePresent />}/>
      <Route path="/simple-past" element={<SimplePast/>}/>
    </Routes>
  );
}

export default App;
