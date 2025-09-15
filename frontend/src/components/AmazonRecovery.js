import React from "react";
import "./AmazonRecovery.css";

const AmazonRecovery = () => {
  return (
    <div className="recovery-container">
      {/* LEFT SIDE */}
      <div className="recovery-left">
        <h1>
          Get Back What <br />
          <span className="highlight">Amazon Owes You</span>
        </h1>
        <p>
          Professional reimbursement recovery for both{" "}
          <span className="blue-1">3P Seller Central<br /></span> and{" "}
          <span className="purple-2">1P Vendor Central</span> accounts. We
          identify and recover money<br /> from FBA errors, Inbound Loss, lost n demage inventory, and
          incorrect fees with a{" "}
          <span className="green-3">99% success rate.</span>
        </p>

        <div className="checkpoints">
          <span>✔ Success Fee Based</span>
          <span>✔ Free Audit</span>
          <span>✔ No Commitment</span>
        </div>

        <button className="how-btn">How It Works</button>
      </div>

      {/* RIGHT SIDE */}
      <div className="recovery-right">
        <div className="card">
          <h3>3P Seller Central</h3>
          <div className="row">
            <span>Monthly Recovery</span>
            <span className="value">$90K</span>
          </div>
          <div className="progress cyan" style={{ width: "75%" }}></div>

          <div className="row">
            <span>Open Opportunities</span>
            <span className="value">$40K</span>
          </div>
          <div className="progress magenta" style={{ width: "40%" }}></div>

          <div className="row">
            <span>Open Cases</span>
            <span className="value">47</span>
          </div>
          <div className="progress orange" style={{ width: "60%" }}></div>
        </div>

        <div className="card">
          <h3>1P Vendor Central</h3>
          <div className="row">
            <span>Monthly Recovery</span>
            <span className="value">$68K</span>
          </div>
          <div className="progress purple" style={{ width: "80%" }}></div>

          <div className="row">
            <span>Open Opportunities</span>
            <span className="value">$53K</span>
          </div>
          <div className="progress pink" style={{ width: "65%" }}></div>

          <div className="row">
            <span>Open Disputes</span>
            <span className="value">29</span>
          </div>
          <div className="progress orange" style={{ width: "55%" }}></div>
        </div>
      </div>

    </div>
  );
};

export default AmazonRecovery;
