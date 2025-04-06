import React from "react";
import "./style/components/WeddingStyles.css";
import wed from "../assets/img/wed1.png";

const WeddingStyles = () => {
  return (
    <section className="wedding-styles-section">
      <div className="styles-container">
      <div className="style-card">
          <img src={wed} alt="ffg" />
          <div className="style-content">
            <h3>NORTH INDIAN STYLE</h3>
            <div className="themes-section">
              <h2>Creative Themes for Unforgettable Memories</h2>
              <p className="theme-description">
                Discover expert advice and creative ideas to help you plan
                unforgettable wedding
              </p>
              <button className="trans-btn">see more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingStyles;
