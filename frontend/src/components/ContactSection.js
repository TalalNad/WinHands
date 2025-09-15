import React, { useRef } from "react";
import { Link } from "react-router-dom";

import emailjs from "emailjs-com";
import "./ContactSection.css";

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1k54ek8",    
        "template_h64h7q9",  
        form.current,
        "F1XbOWSk6VYOCr4oG"  
      )
      .then(
        (result) => {
          console.log("✅ Message Sent!", result.text);
          alert("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("❌ Error:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="left-side">
          <h1>Let's Transform Your Amazon Business</h1>
          <p>
            Our expert team is ready to analyze your account and identify immediate
            recovery opportunities. Most sellers discover thousands in untapped
            revenue within hours.
          </p>

          <div className="info-card">
            <div className="icon purple">📧</div>
            <div>
              <h3>Direct Email Support</h3>
              <p>Get personalized assistance from our recovery experts</p>
              <span className="email">winhandsno1@gmail.com</span>
            </div>
          </div>

          <div className="info-card">
            <div className="icon blue">⏱️</div>
            <div>
              <h3>Lightning Fast Response</h3>
              <p>Our team responds to all inquiries as soon as possible</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon green">🛡️</div>
            <div>
              <h3>100% Risk-Free Assessment</h3>
              <p>No upfront costs, no obligations, no hidden fees</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <ul>
              <li>
                <li>
  <Link to="/faqs">Browse FAQs <span>›</span></Link>
</li>

              </li>
              <li>
                <a href="#" className="highlight">Explore Services <span>›</span></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="form-container" id="contact-form">
          <h2>📩 Get in Touch</h2>
          <p>
            Send us a message and we'll get back to you as soon as possible.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <label>Full Name *</label>
            <input type="text" name="user_name" placeholder="Your full name" required />

            <label>Company Name *</label>
            <input type="text" name="company" placeholder="Your company name" required />

            <label>Email *</label>
            <input type="email" name="user_email" placeholder="your.email@example.com" required />

            <label>📞 Phone Number (Optional)</label>
            <input type="text" name="phone" placeholder="+1 (555) 123-4567" />

            <label>💳 Merchant ID (Optional)</label>
            <input type="text" name="merchant_id" placeholder="Your Amazon Merchant ID" />

            <label>Message *</label>
            <textarea name="message" placeholder="Tell us how we can help you..." required />

            <button type="submit">📩 Send Message</button>
          </form>
        </div>
      </div>

      <div className="privacy-note">
        <span className="shield">🛡️</span>
        <p>
          Your information is secure and protected by our{" "}
          <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
