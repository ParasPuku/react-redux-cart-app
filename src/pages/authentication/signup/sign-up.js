import React from "react";
import "./sign-up.scss";
import signupImage from "../../../assets/images/sign-up-fashion.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signup-wrapper">
      <div className="left-signup-section">
        <img src={signupImage} alt="signup" className="signup-fashion" />
      </div>
      <div className="right-signup-section">
        <div className="header">Sign Up</div>
        <div className="name-section">
          <label className="name-label">
            Name<sup>*</sup>
          </label>
          <input type="text" placeholder="Enter your name" className="name" />
        </div>
        <div className="gender-section">
          <label className="gender-label">Gender : </label>
          <div className="male-female">
            <div className="male">
              <label className="radio-label" for="male">
                Male
              </label>
              <input
                type="radio"
                value="male"
                className="radio-input"
                name="gender"
                id="male"
              />
            </div>
            <div className="female">
              <label className="radio-label" for="female">
                Female
              </label>
              <input
                type="radio"
                value="female"
                className="radio-input"
                name="gender"
                id="female"
              />
            </div>
          </div>
        </div>
        <div className="phone-section">
          <label className="phone-label">Phone :</label>
          <div className="phone">
            <span className="country-code">+91</span>
            <input type="text" alt="number" className="phone-number" />
          </div>
        </div>
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
        <div className="terms-and-condition">
          <input type="checkbox" className="check" />
          <div className="disclaimer">
            By creating an account, you agree to the{" "}
            <Link href="#" className="condition">
              Terms & Conditions.
            </Link>
          </div>
        </div>
        <div className="sign-up-btn">Sign Up</div>
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
          Already have an account?{" "}
          <Link to="/login" className="sign-up-link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
