import React from "react";
import "./About.css";
import AboutBanner from "../img/about/AboutBanner.jpeg";

const About = () => {
  return (
    <div className="about-page">
      {/* === Banner Section === */}
      <div className="about-banner">
        <img src={AboutBanner} alt="Contact Us" />
        <h1 className="aboutHead-title">About</h1>
      </div>
      <div>
        {/* === Header Section === */}
        <section className="about-header">
          <h1>
            Welcome to <span className="highlight">ERAYS EXIM</span>
          </h1>
          <p>
            Bringing the goodness of nature to your plate with the finest
            dehydrated onion, ginger, garlic, and vegetable powders.
          </p>
        </section>

        {/* === Company Story Section === */}
        <section className="about-section">
          <h2>Our Journey</h2>
          <p>
            At <strong>ERAYS</strong>, we're passionate about making wholesome,
            nutritious food accessible to everyone. Our journey began with a
            simple yet profound idea — to harness the power of dehydration to
            preserve the natural flavors and nutrients of vegetables. Since
            then, we’ve been perfecting our craft to ensure that every product
            we deliver meets the highest standards of quality.
          </p>
        </section>

        {/* === Mission Section === */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We aim to provide the finest dehydrated vegetable and powders that
            inspire culinary creativity and nourish your body. Our dedication
            extends beyond taste — we focus on sustainability, safety, and
            freshness in every step.
          </p>
          <ul className="mission-list">
            <li>
              🌿 Sourcing the freshest, highest-quality vegetables from trusted
              local farmers.
            </li>
            <li>
              ⚙️ Using advanced dehydration techniques to preserve natural
              goodness.
            </li>
            <li>
              🍽️ Delivering products that are healthy, flavorful, and
              convenient.
            </li>
          </ul>
        </section>

        {/* === Closing Note === */}
        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <p>
            Because at ERAYS EXIM, your satisfaction is our top priority. We’re
            not just supplying products — we’re building lasting relationships
            through quality, trust, and commitment.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
