import React from "react";
import "./Features.css";
import { FaCheckCircle, FaArrowUp, FaUsers, FaShieldAlt, FaBookmark, FaFileAlt } from "react-icons/fa";

function Features() {
  return (
    <section className="features-section">
      <h2 className="features-title">
        Why Choose WinHands for FBA <span className="highlight">Liquidation</span>
      </h2>
      <p className="features-subtitle">
        The most trusted liquidation service for Amazon sellers
      </p>

      <div className="features-grid">
        <div className="feature-card purple25">
          <FaCheckCircle className="feature-icon" />
          <h3>2-Month Pilot</h3>
          <p>
            2-month pilot with actual recoveries. See exactly what we can recover
            per ASIN – then decide to continue only if we've proven our value.
          </p>
        </div>

        <div className="feature-card green26">
          <FaArrowUp className="feature-icon" />
          <h3>Higher Recovery Rates</h3>
          <p>
            Up to 10% recovery rate on retail value through our private auction
            network.
          </p>
        </div>

        <div className="feature-card blue27">
          <FaUsers className="feature-icon" />
          <h3>Private Buyer Network</h3>
          <p>
            Vetted bargain hunters who buy for personal use, protecting your
            brand from resale competition.
          </p>
        </div>

        <div className="feature-card purple25">
          <FaShieldAlt className="feature-icon" />
          <h3>Brand Protection</h3>
          <p>
            No competition with your active listings through controlled home use
            buyers and distribution channels.
          </p>
        </div>

        <div className="feature-card orange28">
          <FaBookmark className="feature-icon" />
          <h3>Same or Lower Removal Costs</h3>
          <p>
            No extra fees – you would pay same or lower removal fees instead of
            disposal fees.
          </p>
        </div>

        <div className="feature-card cyan29">
          <FaFileAlt className="feature-icon" />
          <h3>Detailed Reporting</h3>
          <p>
            Full transparency with item-level tracking and monthly performance
            reports.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
