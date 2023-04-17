import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.scss";

const Navbar = () => {
  const { data } = useSelector((state) => state.cart);
  return (
    <div className="navbar-container">
      <div className="navbar-section">
        <div className="main-section">
          <div className="title">
            <Link to="/">Shopping Kart</Link>
          </div>
          <Link to="/" className="pagetitle home">
            Home
          </Link>
          <Link to="/cart" className="pagetitle cart">
            Cart
          </Link>
        </div>
        <div className="sub-main-section">
          <Link to="/contact-us" className="pagetitle contact">
            Contact Us
          </Link>
          <Link to="/about-us" className="pagetitle about">
            About Us
          </Link>
          <Link to="/wishlist" className="navbar wishlist">
            <i className="fa fa-heart" />
          </Link>
          <div className="pagetitle total-cart">
            <span className="fas fa-shopping-cart"></span>
            <Link to="/cart" className="total-items">
              {data && data.length > 0 ? data.length : 0}
            </Link>
          </div>
          <Link to="/singup" className="signup">
            <i className="fa fa-user"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
