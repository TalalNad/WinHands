
import React from "react";
import "./Rform.css";

function Rform() {
  return (
    <div className="r-container">
      <div className="r-card">
        <h2>
          Start Recovering Your <span className="highlight">Lost Revenue Today</span>
        </h2>
        <p>
          Join hundreds of Amazon sellers who've recovered millions with our
          professional reimbursement service.
        </p>

        <div className="button-group">
          <button className="btn btn-primary">💰 Get Your Money Back →</button>
          <button className="btn btn-secondary">💬 Talk to an Expert</button>
        </div>

        <p className="sub-text">Risk-free • Full service access</p>

        <div className="features">
          <span>✅ Free Audit</span>
          <span>✅ Success Fee Based</span>
          <span>✅ €4M+ recovered</span>
        </div>
      </div>
    </div>
  );
}

export default Rform;
