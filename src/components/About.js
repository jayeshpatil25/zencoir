import React from "react";
import { FaAward, FaGlobe, FaHandshake, FaLeaf } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Zencoir</h2>
        <p className="section-subtitle">
          Your trusted partner in premium coir exports with decades of
          experience and commitment to quality and sustainability.
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3>Leading Coir Export Excellence</h3>
            <p>
              Zencoir has been at the forefront of coir product exports for over
              two decades. We specialize in sourcing, processing, and exporting
              the finest quality coir products to markets worldwide.
            </p>
            <p>
              Our commitment to sustainable practices and eco-friendly solutions
              has made us a preferred choice for businesses looking for natural,
              biodegradable alternatives to synthetic materials.
            </p>
            <p>
              With state-of-the-art processing facilities and a dedicated team
              of experts, we ensure that every product meets international
              quality standards and customer specifications.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <FaAward className="stat-icon" />
              <div className="stat-content">
                <h4>20+ Years</h4>
                <p>Industry Experience</p>
              </div>
            </div>
            <div className="stat-item">
              <FaGlobe className="stat-icon" />
              <div className="stat-content">
                <h4>50+ Countries</h4>
                <p>Global Reach</p>
              </div>
            </div>
            <div className="stat-item">
              <FaHandshake className="stat-icon" />
              <div className="stat-content">
                <h4>1000+ Clients</h4>
                <p>Satisfied Customers</p>
              </div>
            </div>
            <div className="stat-item">
              <FaLeaf className="stat-icon" />
              <div className="stat-content">
                <h4>100% Natural</h4>
                <p>Eco-Friendly Products</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-features">
          <div className="feature-card">
            <h4>Quality Assurance</h4>
            <p>
              Rigorous quality control processes ensure every product meets
              international standards.
            </p>
          </div>
          <div className="feature-card">
            <h4>Sustainable Sourcing</h4>
            <p>
              We work directly with local farmers to ensure ethical and
              sustainable coir production.
            </p>
          </div>
          <div className="feature-card">
            <h4>Custom Solutions</h4>
            <p>
              Tailored products and packaging solutions to meet your specific
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
