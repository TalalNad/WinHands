import React, { useState } from "react";
import "./RecoverySection2.css";

const RecoverySection2 = () => {
  const [activeTab, setActiveTab] = useState("3p");

  const data3P = [
    {
      icon: "📦",
      title: "Lost Inventory",
      desc: "Items lost during inbound processing or fulfillment",
      points: [
        "Inbound shipment discrepancies",
        "Fulfillment center losses",
        "Missing units in warehouse",
      ],
      color: "pink",
    },
    {
      icon: "⚠️",
      title: "Damaged Inventory",
      desc: "Products damaged in Amazon’s possession",
      points: [
        "Warehouse handling damage",
        "Storage-related damage",
        "Transit damage claims",
      ],
      color: "orange",
    },
    {
      icon: "💲",
      title: "FBA Fee Errors",
      desc: "Incorrect FBA and storage fees",
      points: [
        "Wrong dimension fees",
        "Overcharged storage fees",
        "Commission discrepancies",
      ],
      color: "green",
    },
    {
      icon: "↩️",
      title: "Return Processing",
      desc: "Customer return discrepancies",
      points: [
        "Items not returned to stock",
        "Damaged return claims",
        "Lost return shipments",
      ],
      color: "green",
    },
    {
      icon: "📤",
      title: "Removal Orders",
      desc: "Inventory removal issues",
      points: ["Lost removal shipments", "Damaged during removal"],
      color: "purple",
    },
    {
      icon: "🛍️",
      title: "Customer Refunds",
      desc: "Refund and return errors",
      points: [
        "Wrong item returned",
        "Empty package returns",
        "Reimbursement delays",
      ],
      color: "blue",
    },
  ];

  const data1P = [
    {
      icon: "📦",
      title: "Shortages & Overages",
      desc: "Quantity discrepancies",
      points: [
        "Inbound shortage claims",
        "Receiving discrepancies",
        "Invoice mismatches",
      ],
      color: "pink",
    },
    {
      icon: "⚠️",
      title: "Damaged Goods",
      desc: "Vendor damage claims",
      points: ["Transit damage claims", "Warehouse damage", "Defective disposal"],
      color: "orange",
    },
    {
      icon: "💲",
      title: "Price & Terms",
      desc: "Pricing discrepancies",
      points: [
        "Wrong wholesale prices",
        "Unauthorized deductions",
        "Promotional disputes",
      ],
      color: "green",
    },
    {
      icon: "📦",
      title: "Aged Inventory",
      desc: "Write-off disputes",
      points: [
        "Premature disposal",
        "Sellable write-offs",
        "Aging disputes",
      ],
      color: "purple",
    },
    {
      icon: "📢",
      title: "Co-op & Marketing",
      desc: "Marketing fund disputes",
      points: [
        "Unearned deductions",
        "Marketing fund errors",
        "Advertising disputes",
      ],
      color: "blue",
    },
    {
      icon: "⚡",
      title: "Chargebacks",
      desc: "Operational penalties",
      points: [
        "ASIN setup fees",
        "Compliance violations",
        "Operational penalties",
      ],
      color: "pink",
    },
  ];

  const activeData = activeTab === "3p" ? data3P : data1P;

  return (
    <div className="recover-container">
      <h2>
        What We <span className="highlight">Recover For You</span>
      </h2>
      <p className="subtitle">
        Different account types have unique reimbursement opportunities. Choose
        your account type to see specific recovery categories.
      </p>

      <div className="tab-buttons">
        <button
          className={activeTab === "3p" ? "tab active" : "tab"}
          onClick={() => setActiveTab("3p")}
        >
          3P Seller Central
        </button>
        <button
          className={activeTab === "1p" ? "tab active" : "tab"}
          onClick={() => setActiveTab("1p")}
        >
          1P Vendor Central
        </button>
      </div>

      <div className="card-grid">
        {activeData.map((item, index) => (
          <div className="recover-card" key={index}>
            <div className={`icon ${item.color}`}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="desc">{item.desc}</p>
            <ul>
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecoverySection2;
