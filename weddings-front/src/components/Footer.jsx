import React from 'react';
import './style/components/Footer.css'; // You'll need to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="company-info">
          <h2>XYZ Company.com</h2>
          <p>
            XYZ Company is a dynamic and innovative organization that leverages.
          </p>
          <div className="social-media">
          <a href="" className="social-media-icons">f</a>
          <a href="" className="social-media-icons">d</a>
          <a href="" className="social-media-icons">i</a>
          <a href="" className="social-media-icons">t</a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h3>Company</h3>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/releases">Releases</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="/documentation">Documentation</a></li>
              <li><a href="/papers">Papers</a></li>
              <li><a href="/press">Press Conferences</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="/data-processing">Data Processing</a></li>
              <li><a href="/help-center">Help Center</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of service</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          © 2023 XYZ Company. All rights reserved
        </div>
        <div className="legal-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of use</a>
          <a href="/sales-refunds">Sales and Refunds</a>
          <a href="/legal">Legal</a>
          <a href="/sitemap">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;