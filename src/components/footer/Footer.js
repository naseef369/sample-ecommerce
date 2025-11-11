import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-center text-white py-4 mt-"
      style={{
        background: "linear-gradient(135deg, #a5947cff 0%, #8c7b6bff 100%)",
      }}
    >
      <div className="container">
        {/* Brand */}
        <h4 className="fw-bold mb-3" style={{ color: "#E8D8B9" }}>
          <span style={{ color: "#E8D8B9" }}>Shop</span>Seller
        </h4>

        {/* Links */}
        <div className="d-flex justify-content-center mb-3 flex-wrap">
          <a
            href="/"
            className="text-white mx-3 text-decoration-none"
            style={{ transition: "color 0.3s" }}
          >
            Home
          </a>
          <a
            href="/products"
            className="text-white mx-3 text-decoration-none"
          >
            Products
          </a>
          <a
            href="/about"
            className="text-white mx-3 text-decoration-none"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-white mx-3 text-decoration-none"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="mb-3">
          <a
            href="/"
            className="text-white mx-2"
            style={{ fontSize: "1.2rem" }}
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="/"
            className="text-white mx-2"
            style={{ fontSize: "1.2rem" }}
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="/"
            className="text-white mx-2"
            style={{ fontSize: "1.2rem" }}
          >
            <i className="bi bi-twitter"></i>
          </a>
        </div>

       
        <p className="mb-0" style={{ color: "#E8D8B9", fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} ShopSeller. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
