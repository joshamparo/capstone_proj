import React from 'react';
import './PatientRegistration.css';

const PatientRegistration = () => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="form-container">
      <header className="form-header">
        <h1>Register a New Patient</h1>
      </header>

      <form className="patient-form" onSubmit={(e) => e.preventDefault()}>

        <section className="form-section">
          <div className="main-content">
            <h2 className="section-title">Personal Information</h2>
            <div className="input-grid">
              <div className="field"><label>First Name</label><input type="text" /></div>
              <div className="field"><label>Last Name</label><input type="text" /></div>
              <div className="field"><label>Middle Name</label><input type="text" /></div>

              <div className="field">
                <label>Date of Birth</label>
                <input 
                  type="date" 
                  max={today} 
                  onKeyDown={(e) => e.preventDefault()}
                />
              </div>

              <div className="field">
                <label>Gender</label>
                <select className="form-select">
                  <option value="" disabled selected>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="field"><label>Employee ID</label><input type="text" /></div>

              <div className="field">
                <label>Civil Status</label>
                <select className="form-select">
                  <option value="" disabled selected>Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="widowed">Widowed</option>
                  <option value="separated">Separated</option>
                </select>
              </div>

              <div className="field"><label>Nationality</label><input type="text" /></div>
            </div>
          </div>
          <aside className="sidebar-box">
            <h3>Profile Picture</h3>
            <div className="avatar-circle">👤</div>
            <button type="button" className="btn-orange">Insert Image</button>
          </aside>
        </section>

        <hr className="divider" />

        <section className="form-section">
          <div className="main-content">
            <h2 className="section-title">Contact Information</h2>
            <div className="input-grid">
              <div className="field"><label>Phone Number</label><input type="text" /></div>
              <div className="field"><label>Street Address</label><input type="text" /></div>
              <div className="field"><label>City / Municipality</label><input type="text" /></div>
              <div className="field"><label>Province</label><input type="text" /></div>
              <div className="field"><label>Postal Code</label><input type="text" /></div>
              <div className="field"><label>Country</label><input type="text" /></div>
            </div>
          </div>
          <aside className="sidebar-box">
            <h3>Generate Scanner</h3>
            <p className="scanner-text">Instead manually inserting a patient's information. Input information through a scanner.</p>
            <button type="button" className="btn-orange">Open Scanner</button>
          </aside>
        </section>

        <hr className="divider" />

        <h2 className="section-title">Emergency Contact</h2>
        <div className="triple-grid">
          {[1, 2, 3].map((item) => (
            <div key={item} className="column">
              <div className="field"><label>Emergency Contact Name</label><input type="text" /></div>
              <div className="field"><label>Relationship</label><input type="text" /></div>
              <div className="field"><label>Emergency Contact</label><input type="text" /></div>
            </div>
          ))}
        </div>

        <hr className="divider" />

        <h2 className="section-title">Medical Record (Optional)</h2>
        <div className="triple-grid">
          <div className="field"><label>Blood Type</label><input type="text" /></div>
          <div className="field"><label>Allergies</label><input type="text" /></div>
          <div className="field"><label>PhilHealth Number</label><input type="text" /></div>
        </div>

        <hr className="divider" />

        <h2 className="section-title">Account Credentials</h2>
        <div className="triple-grid">
          <div className="field"><label>Email</label><input type="email" /></div>
          <div className="field"><label>Create a Password</label><input type="password" /></div>
          <div className="field"><label>Confirm Password</label><input type="password" /></div>
        </div>

        <div className="form-footer">
          <button type="submit" className="btn-submit">Create Patient Account</button>
        </div>
      </form>
    </div>
  );
};

export default PatientRegistration;