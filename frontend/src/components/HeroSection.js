import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>
          Turn Amazon FBA <br />
          Losses <span className="highlight">Into Revenue</span>
        </h1>
         <p>
        No upfront cost—just a weekly invoice for   <span className="up-front">15% </span>of recovered funds, 
        payable only when you get paid, with the freedom to cancel anytime.
        </p>

        <div className="clients">
          <span className="checkmark">✔</span> 800+ trusted clients and counting.
        </div>
        <div class="hero-buttons">
        <a href="#services" class="btn explore-btn">Explore Our Services</a>
        
  </div>
      </div>

      <div className="hero-right">
        <div className="dashboard">
          <div className="dashboard-header">
            <h3>Performance Dashboard</h3>
            <span className="live-data">● Live Data</span>
          </div>

          <div className="top-cards">
            <div className="card green-card1">
              <p>This Month</p>
              <h2>$12.8M</h2>
              <span>+24% vs last month</span>
            </div>
            <div className="card purple-card1">
              <p>Total Recovered</p>
              <h2>$8.2M</h2>
              <span>+$1.2M pending</span>
            </div>
          </div>

          <h4 className="section-title purple5">Liquidations</h4>
          
          <div className="mini-cards">
            <div className="mini-card red">1.2M <span>Units Removed</span></div>
            <div className="mini-card yellow">184 <span>Processing</span></div>
            <div className="mini-card green9">847 <span>Units Sold</span></div>
          </div>

          <h4 className="section-title blue7">Reimbursements</h4>
        
          <div className="mini-cards">
            <div className="mini-card purple5">$3.5M <span>Open Claims</span></div>
            <div className="mini-card blue7">23 <span>Active Cases</span></div>
            <div className="mini-card violet8">97% <span>Success Rate</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


