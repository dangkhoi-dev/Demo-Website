// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Layout và Pages
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProjectPage from './pages/Project';
import DemoPage from './pages/Demo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="demo" element={<DemoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;