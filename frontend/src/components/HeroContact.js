import React from "react";
import "./HeroContact.css";
import { FaCheckCircle } from "react-icons/fa";

const HeroContact = () => {
  return (
    <div className="hero">
      <h1>
        Ready to <span className="highlight">Unlock Hidden Profits</span>?
      </h1>
      <p>
        Join hundreds of successful Amazon sellers recovering thousands in lost
        revenue through our dual-service platform. Let us show you what's
        possible with a free assessment.
      </p>

      <div className="benefits">
        <span><FaCheckCircle /> Optimize Your Business</span>
        <span><FaCheckCircle /> Recover Cash</span>
        <span><FaCheckCircle /> Make Life Easier</span>
      </div>

      <div className="cta">
        <a href="#contact-form">
          <button className="onboard-btn">Onboard Now →</button>
        </a>
      </div>
    </div>
  );
};

export default HeroContact;
