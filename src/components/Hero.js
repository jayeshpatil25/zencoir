import React from "react";
import { Link } from "react-scroll";
import { FaGlobe, FaShippingFast, FaLeaf } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Premium Coir Products for Global Markets</h1>
            <p>
              Leading exporter of high-quality coir and coir-based products.
              Sustainable, eco-friendly solutions for industries worldwide.
            </p>
            <div className="hero-buttons">
              <Link to="products" smooth={true} duration={500} className="btn">
                Explore Products
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn btn-secondary"
              >
                Get Quote
              </Link>
            </div>
          </div>

          <div className="hero-features">
            <div className="feature">
              <FaGlobe className="feature-icon" />
              <h3>Global Export</h3>
              <p>Serving markets worldwide with reliable shipping</p>
            </div>
            <div className="feature">
              <FaShippingFast className="feature-icon" />
              <h3>Fast Delivery</h3>
              <p>Efficient logistics and timely delivery</p>
            </div>
            <div className="feature">
              <FaLeaf className="feature-icon" />
              <h3>Eco-Friendly</h3>
              <p>Sustainable and natural coir products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
