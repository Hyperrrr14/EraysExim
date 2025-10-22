import React from "react";
import "./Product.css";
import products from "../data/Product";

const Product = () => {
  return (
    <div className="product-tab">
      {/* === Banner Section === */}
      <div className="product-banner">
        <img src="/img/product/ProductBanner.JPG" alt="Contact Us" />
        <h1 className="productHead-title">Product</h1>
      </div>

      <div>
        {/* Main Title */}
        <h2 className="product-title"></h2>
        {/* Company / Product Description */}
        <p className="product-description">
          We're dedicated to delivering the highest-quality products that meet
          your expectations. We prioritize environmentally friendly practices
          and sustainable sourcing. Your happiness is our top priority; we're
          committed to building long-term relationships. Explore our range of
          dehydrated vegetable powders and experience the convenience, flavor,
          and nutrition that our products have to offer. Contact us today to
          learn more about how we can help you create delicious, wholesome
          dishes.
        </p>
        <div className="product-tab">
          <h2 className="product-title">Our Product Range Includes</h2>
          <div className="product-menu">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-img"
                />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
