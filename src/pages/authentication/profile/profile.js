import React from "react";
import signupImage from "../../../assets/images/profile.png";
import "./profile.scss";
const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="left-profile-section">
        <img src={signupImage} alt="profile" className="profile-fashion" />
      </div>
      <div className="right-profile-section">
        <div className="header">My Profile</div>
        <div className="name-section">
          <label className="name-label">
            Name<sup>*</sup>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="name"
            value="Paras Mahto"
          />
        </div>
        <div className="gender-section">
          <label className="gender-label">Gender : </label>
          <div className="gender-value">Male</div>
        </div>
        <div className="phone-section">
          <label className="phone-label">Phone :</label>
          <div className="phone">
            <span className="country-code">+91</span>
            <input
              type="text"
              alt="number"
              className="phone-number"
              value="9940494245"
            />
          </div>
        </div>
        <div className="email-section">
          <label className="email-label">
            Email<sup>*</sup>
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="email"
            value="paraspuru143@gmail.com"
          />
        </div>
        <div className="password-section">
          <label className="password-label">
            Password<sup>*</sup>
          </label>
          <input
            type="text"
            placeholder="Enter your password"
            className="password"
            value="************"
          />
        </div>
        <div className="sign-up-btn">Edit Profile</div>
      </div>
    </div>
  );
};

export default Profile;
