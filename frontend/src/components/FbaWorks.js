import React from "react";
import "./FbaWorks.css";
import { FaSignOutAlt, FaLink, FaClipboardCheck, FaBolt, FaDollarSign } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Start Pilot Program",
    description:
      "Begin with our 2-month risk-free pilot to test our service with real recoveries and see your exact ASIN-level potential before committing",
    icon: <FaSignOutAlt />,
    color: "#7D4EFF",
  },
  {
    id: 2,
    title: "Connect & Audit",
    description:
      "Quick account setup, then we audit your eligible inventory and show you exactly what can be recovered per ASIN",
    icon: <FaLink />,
    color: "#00C9C9",
  },
  {
    id: 3,
    title: "Processing",
    description:
      "Hands-off weekly removals on autopilot. While you focus on selling, we automatically process your returns through the most profitable liquidation channels",
    icon: <FaClipboardCheck />,
    color: "#2D6FFF",
  },
  {
    id: 4,
    title: "Private Auctions",
    description:
      "Your items are listed in exclusive vetted-buyer auctions, protecting your brand while maximizing recovery through competitive bidding",
    icon: <FaBolt />,
    color: "#FF6A00",
  },
  {
    id: 5,
    title: "Get Paid",
    description:
      "Receive monthly payments directly to your bank account with full transparency - detailed reporting shows recovery per ASIN and performance metrics",
    icon: <FaDollarSign />,
    color: "#00B86B",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works2">
      <h2>
        How FBA <span>Liquidation</span> Works
      </h2>
      <p className="subtitle">
        Simple process from removal order to payment. We handle everything after<br /> you ship.
      </p>

      <div className="steps-container2">
        {steps.map((step2) => (
          <div key={step2.id} className="step-card2">
            <div className="step-number2" style={{ backgroundColor: step2.color }}>
              {step2.id}
            </div>
            <div className="step-icon2" style={{ color: step2.color }}>
              {step2.icon}
            </div>
            <h3>{step2.title}</h3>
            <p>{step2.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
