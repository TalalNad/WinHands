import React from "react";
import "./PricingHero.css";

const PricingHero = () => {
  return (
    <section className="pricing-hero">
      <h1 className="pricing-title">Simple Pricing</h1>
      <p className="pricing-subtitle">
        Pay as you go, and cancel at anytime. You only pay if we're successful!
      </p>

      <div className="pricing-cards">
        <div className="pricing-card">
          <h2 className="pricing-percent">15%</h2>
          <p className="pricing-note">of successful reimbursements</p>
          <ul className="pricing-list">
            <li>Daily Data Updates</li>
            <li>Software Assisted Human Research</li>
            <li>Maximum Recovery</li>
            <li>Personal Case Manager</li>
            <li>Full-Time Support</li>
          </ul>
          <button className="pricing-btn">Start Reimbursement Recovery</button>
        </div>

        <div className="pricing-card1">
          <span className="pricing-badge">Annual Revenues over $5M?</span>
          <h2 className="pricing-ask">Ask Us</h2>
          <p className="pricing-note">about discounts &amp; options</p>
          <ul className="pricing-list">
            <li>Volume Based Pricing</li>
            <li>White Glove Support</li>
          </ul>
        </div>
      </div>

      <div className="pricing-footer">
        <p>
          Have questions about pricing?{" "}
          <a href="/contact" className="learn-more">
            Learn More
          </a>
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
