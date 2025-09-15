import React from "react";
import { Link } from "react-router-dom";
import "./Works.css";
import { FaSignOutAlt, FaLink, FaClipboardCheck, FaBolt, FaDollarSign } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Choose your service",
    description:
      "Recover money from Disposed, Lost Warehouse, Damaged Inbound, Inbound, Inbound Retro, and Lost Removal Orders to maximize your reimbursements.",
    icon: <FaSignOutAlt />,
    color: "#7D4EFF",
  },
  {
    id: 2,
    title: "Connect Amazon",
    description:
      "Link your store for a free report, A very minimal permission you give us to moniter your ledger Report",
    icon: <FaLink />,
    color: "#00C9C9",
  },
  {
    id: 3,
    title: "We Audit",
    description:
      "We analyze your entire inventory, identify  reimbursement opportunities according to Amazon policy",
    icon: <FaClipboardCheck />,
    color: "#2D6FFF",
  },
  {
    id: 4,
    title: "Auto Processing",
    description:
      "Reimbursement cases filed with Amazon and A person from our organization will monitor cases throughout",
    icon: <FaBolt />,
    color: "#FF6A00",
  },
  {
    id: 5,
    title: "Get Paid",
    description:
      "Receive Amazon reimbursements to your account",
    icon: <FaDollarSign />,
    color: "#00B86B",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>
        How It <span>Works</span>
      </h2>
      <p className="subtitle">
        Automated dual recovery system for maximum profit. We handle every type of
        reimbursements while you focus on selling.
      </p>

      <div className="steps-container1">
        {steps.map((step1) => (
          <div key={step1.id} className="step-card1">
            <div className="step-number1" style={{ backgroundColor: step1.color }}>
              {step1.id}
            </div>
            <div className="step-icon1" style={{ color: step1.color }}>
              {step1.icon}
            </div>
            <h3>{step1.title}</h3>
            <p>{step1.description}</p>
          </div>
        ))}
      </div>

        <div className="rec-container">
      <div className="rec-card">
        <h2>Start Your Recovery Journey Today</h2>
        <p>
          Join hundreds of successful Amazon sellers recovering revenue through our
          dual-service platform
        </p>

        <div className="button-group">
          
          <button className="\btn btn-secondary">
  <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
   💬 Talk With Us First
  </Link>
</button>

        </div>

        <div className="features">
          <span>✅ Optimize Your Business</span>
          <span>✅ Recover Cash</span>
          <span>✅ Make Life Easier</span>
        </div>

        <p className="description">
          One platform. Two recovery services. Thousands in recovered revenue.
          <br />
          Start with either service or both - see results in your first month. Cancel anytime.
        </p>
      </div>
    </div>
    </section>
  );
}
