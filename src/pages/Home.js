import React from "react";
import "./Home.css";
import products from "../data/Product";
import certificates from "../data/Certificates";

const Home = () => {
  return (
    <div className="home-container">
      {/* === Hero Section === */}
      <section className="hero-section">
        <img
          src="/img/home/HomeBanner.jpeg"
          alt="ERAYS EXIM Banner"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1>Bringing Nature’s Goodness to Your Plate</h1>
          <p>
            Premium dehydrated onion, garlic, ginger and other vegetable powders
            — sustainably sourced and naturally preserved.
          </p>
          <a href="/product" className="hero-btn">
            Explore Our Products
          </a>
        </div>
      </section>

      {/* === About Preview === */}
      <section className="about-preview">
        <h2>About ERAYS EXIM</h2>
        <p>
          At ERAYS EXIM, we take pride in delivering the finest dehydrated
          onion, garlic, ginger and other vegetable powders. With sustainable
          sourcing and state-of-the-art drying technology, we bring you nature’s
          best — preserved with care.
        </p>
        <a href="/about" className="read-more-btn">
          Read More
        </a>
      </section>

      {/* === Product Highlights (reused from Product.js) === */}
      <section className="product-highlight">
        <h2>Our Best Products</h2>
        <div className="product-grid">
          {products.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/*{/* === Certificates } */}
      <section className="certificate-highlight">
        <h2>Below are the certificate</h2>
        <div className="certificate-grid">
          {certificates.map((item, index) => (
            <div className="certificate-item" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* === Why Choose Us === */}
      <section className="why-choose">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div className="feature-card">
            🌱
            <h3>Sustainably Sourced</h3>
            <p>
              We work directly with local farmers for pure, traceable produce.
            </p>
          </div>
          <div className="feature-card">
            🧪
            <h3>Quality Assured</h3>
            <p>Every batch is lab-tested for freshness, flavor, and safety.</p>
          </div>
          <div className="feature-card">
            🚚
            <h3>Global Shipping</h3>
            <p>
              Supplying partners across 20+ countries efficiently and safely.
            </p>
          </div>
          <div className="feature-card">
            ⭐<h3>Trusted by Clients</h3>
            <p>Known for long-term reliability and customer satisfaction.</p>
          </div>
        </div>
      </section>

      {/* === Contact CTA === */}
      <section className="contact-cta">
        <h2>Let’s Work Together</h2>
        <p>
          Partner with us for high-quality, natural dehydrated vegetable and
          powders.
        </p>
        <a href="/contact" className="contact-btn">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Home;
