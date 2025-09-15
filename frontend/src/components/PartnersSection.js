import React from "react";
import "./PartnersSection.css";

const PartnersSection = () => {
  return (
    <section className="partners-section1">
      <h2 className="partners-title1">
        Official <span>Amazon</span> Partners
      </h2>
      <p className="partners-subtitle1">
        Official partnerships ensuring secure, compliant, and reliable service delivery
      </p>

 <div className="partners-cards1">
  <div className="partner-card1">
    <div className="partner-dot"></div>
    <img src="/images/amazon-selling.jpg" alt="Amazon Selling Partner" />
    <h3>Amazon Selling Partner</h3>
    <p>Certified Software Provider</p>
  </div>

  <div className="partner-card1">
    <div className="partner-dot"></div>
    <img src="/images/aws-partner.jpg" alt="AWS Partner" />
    <h3>AWS Partner</h3>
    <p>Solution Provider Network</p>
  </div>
</div>


      <div className="stats-cards">
        <div className="stat-card stat-success">
          <div className="stat-icon">📈</div>
          <h3>99%</h3>
          <p>Reimbursement Success Rate</p>
        </div>

        <div className="stat-card stat-warning">
          <div className="stat-icon">🏆</div>
          <h3>500K+</h3>
          <p>
            Units reimbursement daily
          </p>
        </div>

        <div className="stat-card stat-info">
          <div className="stat-icon">🔐</div>
          <h3>Full</h3>
          <p>
            Service Access<br />
            Complete Platform Features
          </p>
        </div>

        <div className="stat-card stat-purple">
          <div className="stat-icon">💰</div>
          <h3>€4M+</h3>
          <p>
            Total Recovered<br />
            from Reimbursements
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
