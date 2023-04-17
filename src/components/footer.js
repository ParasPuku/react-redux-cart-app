import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
export default function Footer() {
  return (
    <>
      <section id="footer">
        <div className="main-footer">
          <div className="logoinfo" data-aos="fade-up">
            <h2>Shopping Kart Pvt Ltd</h2>
            <p>By Paras Puru</p>

            <div className="contact-details">
              <h1>Contact Us</h1>
              <li>
                <div className="fa fa-phone"></div>
                <Link to="tel:+919940494245">+91-9940494245</Link>
              </li>
              <li>
                <div className="fa fa-envelope"></div>
                <Link to="mailto:paraspuru143@gmail.com">
                  paraspuru143@gmail.com
                </Link>
              </li>
              <li className="address-wrapper">
                <div className="fa fa-address-card"></div>
                <div className="address">
                  #23 1st Cross, L.B. Nagar, Kasturi Nagar, Bengaluru - 560043
                </div>
              </li>
            </div>
          </div>
          <div className="com " data-aos="fade-up">
            <h1>About</h1>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Projects</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="info" data-aos="fade-up">
            <h1>Social Media</h1>
            <div className="sociallogos">
              <div className="logobox">
                <Link to="#" className="fab fa-instagram"></Link>
                <Link to="#" className="fab fa-linkedin"></Link>
                <Link to="#" className="fab fa-facebook"></Link>
                <Link to="#" className="fab fa-youtube"></Link>
              </div>
            </div>
          </div>
        </div>
        <footer>© Your Copyright 2023 All Rights Reserved</footer>
      </section>
      ;
    </>
  );
}
