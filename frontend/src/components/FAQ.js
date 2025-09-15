import React from "react";
import { Link } from "react-router-dom"; 
import "./FAQ.css";

const FAQ = () => {
  return (
    <div>
      <div className="header1">
        <Link to="/" className="logo1">
                                WinHands
                              </Link>
        <Link to="/" className="back-home">
          Back to Home
        </Link>
      </div>

   
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>

        <h2 className="faq-heading">Setting Up</h2>
        <div className="faq-boxes">
          <div className="faq-box">
            <h3>How do I give permissions?</h3>
            <p>
              To grant permissions to Winhands, simply follow the steps you will need to invite one of our recovery
              specialists to your Seller Central account. This is a standard part of
              the onboarding process.
            </p>
          </div>
          <div className="faq-box">
            <h3>How do I connect my store?</h3>
            <p>
            One of my team member will connect to you and you give him a minimal permission of inventory ledger and Case log 
            </p>
          </div>
        </div>

        <h2 className="faq-heading">What Do We Offer</h2>
        <div className="faq-boxes">
          <div className="faq-box">
            <h3>What cases do you cover?</h3>
            <p>
              Winhands cover a wide range of cases. This includes damaged inventory,
              lost inventory, incorrect fees, inaccurate refunds, missing returns, and
              mishandled removals.
            </p>
          </div>
          <div className="faq-box">
            <h3>Which regions do you cover?</h3>
            <p>We cover all regions in the world.</p>
          </div>
          <div className="faq-box">
            <h3>How do Winhands stand out in the market?</h3>
            <p>
              We charge a competitive success fee, and you only pay for recovered
              funds—there is no cost for found inventory, and we credit back
              clawbacks. We are the only service that handles removals. Additionally,
              we support more European countries than most competitors and persistently
              follow up on denied cases with Amazon. Our commitment to staying
              connected with our clients ensures a transparent and responsive service.
            </p>
          </div>
          <div className="faq-box">
            <h3>What is your policy on clawbacks?</h3>
            <p>
              We address clawbacks, also known as reverse reimbursements, by crediting
              back any funds reclaimed by Amazon within that month.
            </p>
          </div>
          <div className="faq-box">
            <h3>Is Winhands TOS compliant?</h3>
            <p>
              Yes, Winhands is fully compliant with Amazon's Terms of Service. We
              continuously monitor and adhere to all updates and changes to ensure our
              services align with Amazon's policies, providing a secure and reliable
              reimbursement process.
            </p>
          </div>
          <div className="faq-box">
            <h3>Is my data secure?</h3>
            <p>
              Yes. The security of our customers' data is a priority at Winhands; we
              do not share it with any third parties.
            </p>
          </div>
        </div>

        <h2 className="faq-heading">Process & Billing</h2>
        <div className="faq-boxes">
          <div className="faq-box">
            <h3>What are Winhands charging policies?</h3>
            <p>
              Winhands charge a success fee. We only charge for recovered funds, not
              for found inventory. We also credit back any Amazon clawbacks to ensure
              you only pay for successful reimbursements.
            </p>
          </div>
          <div className="faq-box">
            <h3>How does billing work?</h3>
            <p>
              Refunded funds are transferred directly from Amazon to your account.
              Winhands then issue a bill for the success fee. Each Week, we provide a
              report outlining the recovered funds and the corresponding success fee
              charges. The fee is automatically charged to the linked card on file.
            </p>
          </div>
          <div className="faq-box">
            <h3>When can I expect to receive the recovered funds?</h3>
            <p>
              The recovered amount is paid to your bank account with regular Amazon
              payouts, usually on a bi-weekly basis. You can expect the first results
              within 2-3 days from when Winhands start auditing.
            </p>
          </div>
          <div className="faq-box">
            <h3>What is the audition process?</h3>
            <p>
              The audit process with Winhands begins by one of our expert connecting to your account. We then perform a thorough analysis of inventory movements and
              fees to identify any discrepancies. After raising found cases, we provide
              a report at the end of each Week, outlining the cases raised and funds
              reimbursed. Winhands only charge for successful cases, and this process
              is repeated monthly to ensure ongoing accuracy and compliance.
            </p>
          </div>
        </div>

        <div className="faq-more-questions">
          <h2 className="faq-heading">DO YOU HAVE MORE QUESTIONS ?</h2>
          <Link to="/contact">
            <button className="email-us-btn">Email Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
