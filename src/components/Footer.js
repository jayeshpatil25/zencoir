import React from "react";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Zencoir</h3>
              <p>Export Excellence</p>
            </div>
            <p className="footer-description">
              Leading exporter of premium coir products with over two decades of
              experience in serving global markets with sustainable,
              eco-friendly solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="products" smooth={true} duration={500}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Products</h4>
            <ul className="footer-links">
              <li>Coir Fiber</li>
              <li>Coir Pith</li>
              <li>Coir Mats</li>
              <li>Coir Rope</li>
              <li>Coir Bricks</li>
              <li>Coir Pots</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>info@zencoir.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>123 Export Street, Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Zencoir. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
