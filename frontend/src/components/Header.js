import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen, FaMoneyCheckAlt } from "react-icons/fa"; 
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo">
        WinHands
      </Link>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div className="dropdown">
          <span className="dropbtn">Services ▾</span>
          <div className="dropdown-content">
          
            <Link to="/reimbursements" onClick={() => setMenuOpen(false)}>
              <FaMoneyCheckAlt className="dropdown-icon" /> Reimbursements
            </Link>
          </div>
        </div>

        <Link to="/works" onClick={() => setMenuOpen(false)}>Works</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
      </nav>
    </header>
  );
};

export default Header;
