import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.scss";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data } = useSelector((state) => state.cart);
  const { wishlistData } = useSelector((state) => state.wishlist);
  const handleUserAuthentication = () => {
    console.log("Called");
    setIsLoggedIn(!isLoggedIn);
  };
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
          <div className="pagetitle total-wishlist">
            <i className="fa fa-heart" />
            <Link to="/wishlist" className="navbar wishlist">
              {wishlistData && wishlistData.length > 0
                ? wishlistData.length
                : 0}
            </Link>
          </div>
          <div className="pagetitle total-cart">
            <span className="fas fa-shopping-cart"></span>
            <Link to="/cart" className="total-items">
              {data && data.length > 0 ? data.length : 0}
            </Link>
          </div>
          <Link className="signup">
            <i className="fa fa-user" onClick={handleUserAuthentication}></i>
          </Link>
          {isLoggedIn ? (
            <div className="login">
              <div className="login-btn">
                <Link to="/login">Login</Link>
              </div>
            </div>
          ) : (
            <div className="signout">
              <div className="user-name">Hey! Paras</div>
              <div className="my-profile">
                <Link to="/profile">My Profile</Link>
              </div>
              <div className="signout-btn">
                <Link to="/login">Sign Out</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
