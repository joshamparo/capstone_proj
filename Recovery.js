import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import pghLogo from '../assets/pgh logo.png';

const Recovery = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRecovery = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("No empty field should be left out.");
      return;
    }
    alert("Instruction sent to your email!");
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <img src={pghLogo} alt="PGH Logo" className="hospital-logo" />
        
        <div className="login-card">
          <h1 className="login-title">Account Recovery</h1>
          <p className="recovery-description">
            Forgot your password? Enter your email address and we will send an instruction to you to recover your account.
          </p>
          <form onSubmit={handleRecovery}>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Enter your email here" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="didnt-receive">Didn't receive an Email?</div>
            </div>
            <button type="submit" className="login-submit-btn">Reset your password</button>
          </form>
        </div>

        <div className="back-home-container">
          <span className="back-home-link" onClick={() => navigate('/login')}>
            Go back to Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Recovery;