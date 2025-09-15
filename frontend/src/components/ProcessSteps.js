import React from "react";
import "./ProcessSteps.css";

const ProcessSteps = () => {
  return (
    <div className="process-container">
      <h2 className="process-title">
        Simple <span className="green">4-Step</span> Process
      </h2>
      <p className="process-subtitle">
        From setup to recovery in days, not months. Our automated system works
        24/7 to maximize your reimbursements.
      </p>

      {/* Steps */}
      <div className="steps">
        <div className="step-card cyan">
          <div className="step-number">1</div>
          <div className="step-icon">🔗</div>
          <h3>Quick Setup</h3>
          <p>Connect your account in under 10 minutes </p>
        </div>

        <div className="step-card purple">
          <div className="step-number">2</div>
          <div className="step-icon">📋</div>
          <h3>Deep Audit</h3>
          <p>Comprehensive audit of your complete account history for maximum recovery</p>
        </div>

        <div className="step-card green">
          <div className="step-number">3</div>
          <div className="step-icon">⏱</div>
          <h3>Expert Filing</h3>
          <p>Our team files & manages cases with Amazon until resolution</p>
        </div>

        <div className="step-card orange">
          <div className="step-number">4</div>
          <div className="step-icon">💰</div>
          <h3>Get Paid</h3>
          <p>Recovered funds deposited directly to your Amazon account</p>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bottom-stats">
        <div className="stat-card cyan">
          <div className="stat-icon">🎯</div>
          <h3>24/7</h3>
          <p>Continuous Monitoring</p>
        </div>

        <div className="stat-card green">
          <div className="stat-icon">✔</div>
          <h3>97%</h3>
          <p>Success Rate</p>
        </div>

        <div className="stat-card purple">
          <div className="stat-icon">💎</div>
          <h3>15%</h3>
          <p>Success-Only Fee</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
