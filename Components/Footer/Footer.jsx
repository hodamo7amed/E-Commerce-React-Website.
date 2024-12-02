import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footer_logo from '../Assets/logo.png'
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={footer_logo} alt="Shop logo" width={"250px"} />
          <p>ShopHub</p>
        </Link>
      </div>

      {/* Footer Navigation Links */}
      <ul className="footer-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mens">Men's</Link>
        </li>
        <li>
          <Link to="/womens">Women's</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>

      {/* Social Media Icons */}
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <a href="https://instagram.com">
            <img src={instagram_icon} alt="Instagram" />
          </a>
          <a href="https://pinterest.com">
            <img src={pintester_icon} alt="Pinterest" />
          </a>
          <a href="https://whatsapp.com">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
