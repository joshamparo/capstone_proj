import React, { useState, useRef, useEffect } from 'react';
import './OtpPage.css';
import { useNavigate } from 'react-router-dom';
import pghLogo from '../logo/pgh logo.png';

const OtpPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [displayEmail, setDisplayEmail] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the email that was just used to log in
    const email = localStorage.getItem('tempLoginEmail');
    if (email) setDisplayEmail(email);
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Auto-focus next input
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    // Optional: Auto-submit when last digit is entered
    if (newOtp.every(digit => digit !== "")) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = (code) => {
    // For testing, let's say "123456" is the valid code
    if (code === "123456") {
      alert("Identity Verified!");
      navigate('/dashboard'); // Final destination
    } else {
      alert("Invalid OTP code. Please try again.");
      setOtp(new Array(6).fill(""));
      inputRefs.current[0].focus();
    }
  };

  return (
    <div className="background-container">
      <div className="login-card">
        <div className="logo-container">
          <img src={pghLogo} alt="PGH Logo" className="logo" />
        </div>

        <p className="email-display">{displayEmail || "user@pgh.com"}</p>
        <h1 className="title">Approve Sign in Request</h1>
        
        <p className="instruction">
          An OTP code has been sent to your phone number. Put the z
          code that is sent to your phone number inbox.
        </p>

        <div className="otp-inputs">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              inputMode="numeric"
              pattern="\d*"
            />
          ))}
        </div>

        <div className="refresh-section">
          <p>Didn't receive a sign-in request?</p>
          <p><strong>Swipe down or refresh to refresh the content in your app.</strong></p>
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Don't ask again for 30 days</label>
        </div>

        <button className="reset-btn">Reset your password</button>
      </div>
    </div>
  );
};

export default OtpPage;