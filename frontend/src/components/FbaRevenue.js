import React from "react";
import "./FbaRevenue.css";

const FbaRevenue = () => {
  return (
    <div className="revenue-section">
      <h2>
        Transform Losses Into <span className="highlight">Revenue</span>
      </h2>
      <p className="subtitle">
        Below example based on 60 units disposed of monthly | 1.5kg per unit
        weight | €50 retail value
      </p>

      <div className="revenue-grid">
        <div className="revenue-card revenue-red">
          <div className="icon">💲</div>
          <h4>Current</h4>
          <h2>-€1,966</h2>
          <p>Annual</p>
          <span>Disposal Costs</span>
        </div>

        <div className="revenue-card revenue-green">
          <div className="icon">✔️</div>
          <h4>Recovery</h4>
          <h2>€1,944</h2>
          <p>Annual</p>
          <span>Potential Recovery</span>
          <small>
            *Final recovery depends on item condition, auction performance and
            other factors.
          </small>
        </div>

        <div className="revenue-card revenue-blue">
          <div className="icon">📈</div>
          <h4>Advantage</h4>
          <h2>€742</h2>
          <p>Annual</p>
          <span>Disposal→Return Savings</span>
          <small>Savings for returning instead of disposing</small>
        </div>

        <div className="revenue-card revenue-orange">
          <div className="icon">📊</div>
          <h4>Total</h4>
          <h2>+€720</h2>
          <p>Annual</p>
          <span>Total Annual Benefit</span>
          <small>Recovery + fee savings exceed disposal costs</small>
        </div>
      </div>
    </div>
  );
};

export default FbaRevenue;
