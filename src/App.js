import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* El wildcard * asegura que las subrutas sean manejadas por el Dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

