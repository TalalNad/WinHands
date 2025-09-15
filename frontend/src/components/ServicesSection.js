import React from "react";
import { useNavigate } from "react-router-dom"; // import navigate hook
import "./ServicesSection.css";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="services-section">
      <h2 className="section-title">
        Complete Amazon Profit <span>Optimization</span>
      </h2>
      <p className="section-subtitle">
        Use one service or both - your choice, your control. Whether you need
        reimbursement of Lost and demage or Inbound Loss or complete
        coverage, our platform adapts to your business.
      </p>

      <div className="services-container">
        <div className="service-card purple10">
          <div className="badge">New Service</div>
          <div className="icon">💰</div>
          <h3>3P/1P Amazon Reimbursement Recovery Types</h3>
          <p>Amazon sellers often lose revenue due to operational issues such as misplaced, damaged, or disposed inventory. 
            Our recovery services help identify these cases and claim reimbursements on your behalf.</p>
          <ul>
            <li>✔ Disposed</li>
            <li>✔ Lost Warehouse</li>
            <li>✔ Inbound Loss</li>
            <li>✔ Inbound</li>
            <li>✔ Inbound Retro</li>
           <li>✔ Lost Removal Order</li>
          </ul>
          <button
            className="btn"
            onClick={() => navigate("/liquidations")} 
          >
            Learn More & Calculate Potential Recovery
          </button>
        </div>

        {/* Card 2 */}
        <div className="service-card blue10">
          <div className="icon">💎</div>
          <h3>What You Get</h3>
          <p>
            Recover money Amazon owes you from FBA errors and Vendor Central
            overbillings. We audit Amazon US Seller accounts (9 months back), Amazon EU\UK account (6 months back) and
            Vendor accounts (3 years back), handling all case management from
            start to finish.
          </p>
          <ul>
            <li>✔ Free audit – no upfront costs</li>
            <li>✔ Hands-off process – we manage all Amazon cases</li>
            <li>✔ €4M+ recovered for 800+ clients</li>
            <li>✔ No fee for found inventory, only cash reimbursements</li>
            <li>✔ All reimbursement case types covered</li>
            <li>✔ Success rate 95%</li>
          </ul>
          <button
            className="btn"
            onClick={() => navigate("/reimbursements")} // navigate to reimbursements page
          >
            Learn More About Reimbursements
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
