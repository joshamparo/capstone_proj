import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Recovery from './components/Recovery';

function App() {
  return (
    <Router>
      <Routes>
        {/* Automatically redirects from base URL to Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/recovery" element={<Recovery />} />
      </Routes>
    </Router>
  );
}

export default App;