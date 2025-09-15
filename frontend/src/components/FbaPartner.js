import React from "react";
import "./FbaPartner.css";

const FbaPartners= () => {
  return (
    <section className="partners-section">
      <h2 className="partners-title">
        Official <span>Amazon</span> Partners
      </h2>
      <p className="partners-subtitle">
        Official partnerships ensuring secure, compliant, and reliable service delivery
      </p>

 <div className="partners-cards">
  <div className="partner-card">
    <div className="partner-dot"></div>
    <img src="/images/amazon-selling.jpg" alt="Amazon Selling Partner" />
    <h3>Amazon Selling Partner</h3>
    <p>Certified Software Provider</p>
  </div>

  <div className="partner-card">
    <div className="partner-dot"></div>
    <img src="/images/aws-partner.jpg" alt="AWS Partner" />
    <h3>AWS Partner</h3>
    <p>Solution Provider Network</p>
  </div>
</div>


      
    </section>
  );
};

export default FbaPartners;
