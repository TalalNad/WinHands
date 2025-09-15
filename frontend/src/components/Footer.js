import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2 className="logo"> WinHands</h2>
          <p>
            Maximize your Amazon profits through our reimbursement recovery services. 
            Official Amazon Partner with enterprise-grade security.
          </p>

          <div className="footer-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
          </div>

          <div className="partner-buttons">
            <button className="amazon-btn">Amazon Partner</button>
            <button className="aws-btn">AWS Partner</button>
          </div>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <a href="#services">All Services</a>
          <a href="#services">FBA Liquidations</a>
          <a href="#services">Reimbursements</a>
          <a href="#services">3P Recovery</a>
          <a href="#services">1P Recovery</a>
        </div>

        
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#howitworks">How It Works</a>
          <Link to="/faqs">FAQ <span>›</span></Link>
          {/* 👇 Contact should go to /contact page */}
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          {/* 👇 Email Support scrolls to form in ContactSection */}
          <a href="#contact-form">Email Support</a>
          <Link to="/login">Login Portal</Link>
        </div>
      </div>


      <div className="footer-bottom">
        <p>© 2025 WinHands All rights reserved.</p>
        <div className="footer-links">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faqs">FAQ <span>›</span></Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
