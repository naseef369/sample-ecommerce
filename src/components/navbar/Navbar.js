import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Navbar.Module.css";
export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const count = cartItems.reduce((s, it) => s + (it.quantity || 0), 0);

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: "#a5947cff", position:"fixed",top:"0px",width:"100%",zIndex:"999"}}
    >
      <div className="container-fluid px-4">

        <Link className="navbar-brand fw-bold text-white fs-4" to="/">
          <span style={{ color: "#E8D8B9" }}>Shop</span>Seller
        </Link>

        <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NavLinks */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Search bar */}
          <form className="d-flex me-3">
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
              style={{ width: "230px" }}
            />
            <button className="btn btn-outline-light rounded-pill" type="submit">
              Search
            </button>
          </form>

          {/* Cart Icon */}
          <NavLink to="/cart" className="nav-link position-relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              fill="white"
              className="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 
              0 0 1 .491.592l-1.5 8A.5.5 
              0 0 1 13 12H4a.5.5 
              0 0 1-.491-.408L2.01 3.607 
              1.61 2H.5a.5.5 0 0 1-.5-.5M5 
              12a2 2 0 1 0 0 4 2 2 0 
              0 0 0-4m7 0a2 2 0 1 0 0 4 
              2 2 0 0 0 0-4m-7 
              1a1 1 0 1 1 0 2 1 1 0 
              0 1 0-2m7 0a1 1 0 1 1 0 
              2 1 1 0 0 1 0-2" />
            </svg>
            {count > 0 && (
              <span
                className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle"
                style={{ fontSize: "0.7rem" }}
              >
                {count}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
