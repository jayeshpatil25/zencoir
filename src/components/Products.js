import React from "react";
import { FaLeaf, FaRecycle, FaSeedling, FaIndustry } from "react-icons/fa";
import "./Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Coir Fiber",
      description:
        "High-quality natural coir fiber for various industrial applications including rope making, mattresses, and upholstery.",
      icon: FaLeaf,
      features: [
        "Natural & Biodegradable",
        "High Tensile Strength",
        "Moisture Resistant",
        "Eco-Friendly",
      ],
    },
    {
      id: 2,
      name: "Coir Pith",
      description:
        "Premium coir pith/peat for horticulture, gardening, and agricultural applications.",
      icon: FaSeedling,
      features: [
        "Excellent Water Retention",
        "Natural pH Balance",
        "Disease Resistant",
        "Sustainable",
      ],
    },
    {
      id: 3,
      name: "Coir Mats",
      description:
        "Durable coir mats and rugs perfect for home decor, commercial spaces, and erosion control.",
      icon: FaRecycle,
      features: [
        "Durable & Long-lasting",
        "Natural Texture",
        "Erosion Control",
        "Versatile Design",
      ],
    },
    {
      id: 4,
      name: "Coir Rope",
      description:
        "Strong and reliable coir rope for marine, agricultural, and industrial applications.",
      icon: FaIndustry,
      features: [
        "High Strength",
        "Salt Water Resistant",
        "Natural Material",
        "Multiple Uses",
      ],
    },
    {
      id: 5,
      name: "Coir Bricks",
      description:
        "Compressed coir bricks for gardening, hydroponics, and soil conditioning applications.",
      icon: FaSeedling,
      features: [
        "Easy to Use",
        "Compact Storage",
        "Rich in Nutrients",
        "Organic",
      ],
    },
    {
      id: 6,
      name: "Coir Pots",
      description:
        "Biodegradable coir pots for nursery and transplanting applications.",
      icon: FaLeaf,
      features: [
        "100% Biodegradable",
        "Root Friendly",
        "Easy Transplanting",
        "Sustainable",
      ],
    },
  ];

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Premium quality coir products sourced from the finest coconut
          plantations and processed to meet international standards.
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-icon">
                <product.icon />
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-features">
                {product.features.map((feature, index) => (
                  <span key={index} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <h3>Custom Products Available</h3>
          <p>
            We also offer custom coir products tailored to your specific
            requirements. Contact us to discuss your needs and get a
            personalized quote.
          </p>
          <a href="#contact" className="btn">
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
