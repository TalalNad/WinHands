import React from "react";
import "./RecoverySection.css";
import { Link } from "react-router-dom";

function RecoverySection() {
  return (
    <div className="re-container">
      <div className="re-card">
        <h2>Start Your FBA Liquidation Journey</h2>
        <p>
          Transform your unsellable FBA returns into revenue.{" "}
          <strong>Calculate your recovery potential</strong> and see the
          difference liquidation makes.
        </p>

        <div className="button-group">
          <button className="btn btn-secondary">  <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
  💬 Talk With Us First
  </Link></button>
        </div>



        <p className="sub-text">
          Risk-free • 10-minute setup • Brand protection guaranteed
        </p>

        <div className="features">
          <span>✅ Private buyer network</span>
          <span>✅ Up to 10% recovery rate</span>
          <span>✅ Monthly payouts</span>
        </div>

        <p className="description">
          Official Amazon Partner • 500K+ units liquidated monthly
          <br />
          Turn disposal costs into revenue streams. Start your pilot today.
        </p>
      </div>
    </div>
  );
}

export default RecoverySection;
