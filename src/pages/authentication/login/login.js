import React from "react";
import "./login.scss";
import loginImage from "../../../assets/images/login-fashion.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="left-login-section">
        <img src={loginImage} alt="login" className="login-fashion" />
      </div>
      <div className="right-login-section">
        <div className="header">Login</div>
        <div className="email-section">
          <label className="email-label">
            Email<sup>*</sup>
          </label>
          <input type="text" placeholder="Enter your email" className="email" />
        </div>
        <div className="password-section">
          <label className="password-label">
            Password<sup>*</sup>
          </label>
          <input
            type="text"
            placeholder="Enter your password"
            className="password"
          />
        </div>
        <div className="remember-me-section">
          <input type="checkbox" className="check" />
          <div className="remember-me">Remember me?</div>
        </div>
        <div className="login-btn">Login</div>
        <div className="forgot-password">Forgot Password?</div>
        <div className="divider-section">
          <div className="divider1"></div>
          <div className="text">OR</div>
          <div className="divider2"></div>
        </div>
        <div className="social-section">
          <div className="btn google">
            <Link to="#" className="fab fa-google"></Link>
          </div>
          <div className="btn facebook">
            <Link to="#" className="fab fa-facebook"></Link>
          </div>
          <div className="btn instagram">
            <Link to="#" className="fab fa-instagram"></Link>
          </div>
          <div className="btn linkedin">
            <Link to="#" className="fab fa-linkedin"></Link>
          </div>
        </div>
        <div className="sign-up">
          Need an account?{" "}
          <Link to="/signup" className="sign-up-link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
