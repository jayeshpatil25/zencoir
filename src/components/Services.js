import React from "react";
import {
  FaShippingFast,
  FaCertificate,
  FaHandshake,
  FaGlobe,
  FaBoxes,
  FaHeadset,
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Global Export Solutions",
      description:
        "Comprehensive export services to worldwide markets with efficient logistics and documentation support.",
      icon: FaGlobe,
      details: [
        "International Shipping",
        "Customs Clearance",
        "Documentation Support",
        "Multi-modal Transport",
      ],
    },
    {
      id: 2,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes ensuring every product meets international standards and specifications.",
      icon: FaCertificate,
      details: [
        "Quality Testing",
        "Certification Support",
        "Compliance Management",
        "Product Verification",
      ],
    },
    {
      id: 3,
      title: "Custom Packaging",
      description:
        "Tailored packaging solutions designed to protect your products during transit and meet market requirements.",
      icon: FaBoxes,
      details: [
        "Custom Design",
        "Protective Packaging",
        "Branding Options",
        "Size Optimization",
      ],
    },
    {
      id: 4,
      title: "Fast & Reliable Delivery",
      description:
        "Efficient shipping solutions with real-time tracking and guaranteed delivery timelines.",
      icon: FaShippingFast,
      details: [
        "Express Shipping",
        "Real-time Tracking",
        "Delivery Guarantee",
        "Multiple Options",
      ],
    },
    {
      id: 5,
      title: "Business Partnership",
      description:
        "Long-term business relationships with personalized service and dedicated account management.",
      icon: FaHandshake,
      details: [
        "Dedicated Support",
        "Regular Updates",
        "Flexible Terms",
        "Partnership Programs",
      ],
    },
    {
      id: 6,
      title: "24/7 Customer Support",
      description:
        "Round-the-clock customer service to address your queries and provide assistance whenever needed.",
      icon: FaHeadset,
      details: [
        "24/7 Availability",
        "Multi-language Support",
        "Quick Response",
        "Expert Guidance",
      ],
    },
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive export solutions designed to make your international
          trade seamless, efficient, and profitable.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <service.icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-details">
                {service.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-highlight">
          <div className="highlight-content">
            <h3>Why Choose Zencoir?</h3>
            <div className="highlight-features">
              <div className="highlight-feature">
                <span className="feature-number">20+</span>
                <span className="feature-text">Years of Experience</span>
              </div>
              <div className="highlight-feature">
                <span className="feature-number">50+</span>
                <span className="feature-text">Countries Served</span>
              </div>
              <div className="highlight-feature">
                <span className="feature-number">1000+</span>
                <span className="feature-text">Happy Clients</span>
              </div>
              <div className="highlight-feature">
                <span className="feature-number">24/7</span>
                <span className="feature-text">Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
