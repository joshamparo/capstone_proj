
import React from "react";
import "./HomePage.css";
import {
  Phone,
  Search,
  FlaskConical,
  TestTube,
  Activity,
  Bone, // For X-Ray (closest approximation or use simple icon)
  Waves, // Ultrasound
  Stethoscope,
  PersonStanding, // Physical Therapy
  Hospital,
  Menu // For mobile maybe, but we'll stick to desktop layout first
} from "lucide-react";

const services = [
  {
    icon: <FlaskConical size={48} />,
    title: "Blood Chemistry",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <TestTube size={48} />,
    title: "Urinalysis",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <Activity size={48} />,
    title: "ECG",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <Bone size={48} />,
    title: "X-Ray",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <Waves size={48} />,
    title: "Ultrasound",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <Stethoscope size={48} />,
    title: "Clinic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <PersonStanding size={48} />,
    title: "Physical Therapy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  // Empty slots to match grid or fill it up. The image shows 7 items plus empty space or maybe 8?
  // Image shows 3 columns. 7 items. So last row has 1 item.
  // Actually looking at image: 
  // Row 1: Blood, Urinalysis, ECG
  // Row 2: X-Ray, Ultrasound, Clinic
  // Row 3: Physical Therapy, [Empty], [Empty]
  // We'll just render them as is.
];

function HomePage() {
  return (
    <div className="homepage">
      {/* Top Orange Bar */}
      <div className="top-bar">
        <span>Emergency? Dial</span>
        <Phone size={16} fill="white" />
        <span>123456789</span>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo-section">
            <img 
              src={process.env.PUBLIC_URL + "/images/pgh logo.png"} 
              alt="Pascual General Hospital Logo" 
              className="logo-img"
              onError={(e) => {
                // If logo fails to load, keep the img tag but make it look like a placeholder or use icon
                // For now, let's just hide it and show the icon as before, but with a border to indicate missing
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'block'; 
              }}
            />
            {/* Fallback Icon if Image is Missing */}
            <div style={{ display: 'none', border: '2px dashed #ea580c', padding: '10px', borderRadius: '50%' }}>
               <Hospital size={48} color="#ea580c" />
            </div>
            
            <div className="logo-text">
              <h1>PascualCare</h1>
              <span>Pascual General Hospital</span>
            </div>
          </div>

          <div className="nav-section">
            <div className="top-links">
              <a href="#about">About Us</a>
              <a href="#news">News</a>
              <a href="#contact">Contact Us</a>
            </div>
            <nav className="main-nav">
              <a href="#services">Our Services</a>
              <a href="#doctors">Our Doctors</a>
              <a href="#login">Login</a>
              <button className="btn-find-doctor">Find a Doctor</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero_bg.jpg)` }}
      >
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">PascualCare</h1>
            <p className="hero-subtitle">Trusted care, guided by compassion and innovation.</p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" style={{ backgroundColor: '#ea580c' }}>Discover More</button>
              <button className="btn btn-primary" style={{ backgroundColor: '#ea580c' }}>Book Now!</button>
            </div>
          </div>
        </div>

        {/* Info Boxes Overlapping */}
        <div className="info-overlay-container">
          <div className="info-box-wrapper">
            <div className="info-box">
              <h3>Pascual General Hospital's Emergency Hotline</h3>
              <p>For emergency cases, you can call our hotline:</p>
              <div className="hotline-row">
                <Phone size={24} fill="white" />
                <span>123456789</span>
              </div>
            </div>
            <div className="info-box">
              <h3>For Walk In's,</h3>
              <p>Please always wear your mask and keep pocket sanitizers or alcohol when you visit a doctor to keep the environment healthy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <h2 className="section-title">Our Services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon text-orange">
                {service.icon}
              </div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
          {/* Empty placeholders to maintain grid if needed, or just let CSS grid handle it */}
          <div className="service-card" style={{ visibility: 'hidden', height: 0, padding: 0, margin: 0, boxShadow: 'none' }}></div>
          <div className="service-card" style={{ visibility: 'hidden', height: 0, padding: 0, margin: 0, boxShadow: 'none' }}></div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
