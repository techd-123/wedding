import React from 'react';
import './style/components/Connect.css'; // You'll need to create this CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Are You Planning To Tie The Knot?</h1>
        <p className="hero-subtext">
          Give us a missed call, sit back, and enjoy—We handle the plans, so you can focus on your preparation
        </p>
        <button className="cta-button">CONNECT WITH US</button>
      </div>
    </section>
  );
};

export default HeroSection;