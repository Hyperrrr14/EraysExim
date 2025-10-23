import React from "react";
import { useState } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../img/logo/logo.png";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* === LEFT: LOGO & TAGLINE === */}
        <div className="footer-section logo-section">
          <div className="logo-container">
            <img src={logo} alt="Erays EXIM Logo" className="footer-logo-img" />
            <div className="footer-logo-text">
              <h2 className="footer-logo">
                ERAYS <span>EXIM</span>
              </h2>
              <p className="footer-slogan">Trade Made Effortless</p>
            </div>
          </div>
        </div>

        {/* === MIDDLE: QUICK LINKS === */}
        <div className="footer-section quicklinks-section" onClick={toggleMenu}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* === RIGHT: CONTACT INFO === */}
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <p>
            📍 Gausiya Market, Plot 11, Survey 11/15, <br />
            Village Pimpri, Old Panvel Road,
            <br /> Thane, Maharashtra, India - 400612
          </p>
          <p>📞 +91 797 754 6831</p>
          <p>✉️ info@eraysexim.com</p>

          {/*<div className="social-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>*/}
        </div>
      </div>

      {/* === BOTTOM COPYRIGHT === */}
      <div className="footer-bottom">
        <p>
          © 2025 <span className="white"> ERAYS</span> <span> EXIM</span>. All
          Rights Reserved. | Made 🇮🇳 India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
