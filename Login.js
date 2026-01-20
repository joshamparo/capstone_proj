import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import pghLogo from '../assets/pgh logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("No empty field should be left out.");
      return;
    }

    if (email === "admin@pgh.com" && password === "12345") {
      alert("Login Successful!");
    } else {
      alert("Invalid Email or Password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <img src={pghLogo} alt="PGH Logo" className="hospital-logo" />
        
        <div className="login-card">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Enter your email here" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Enter your password here" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="forgot-container">
              <span className="forgot-password-link" onClick={() => navigate('/recovery')}>
                Forgot password?
              </span>
            </div>
            <button type="submit" className="login-submit-btn">Login</button>
          </form>
        </div>

        <div className="back-home-container">
          <a href="/" className="back-home-link">Go back to Home Page</a>
        </div>
      </div>
    </div>
  );
};

export default Login;