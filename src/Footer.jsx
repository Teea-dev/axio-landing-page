import React from "react";
import "./Footer.css";
import logoImg from "./images/AXIO Icon.png";
import Android from "./images/playstore.svg";
import Ios from "./images/appstore.svg";
import logo from "./images/Axio.svg";
import Line from "./images/Line.svg";
import Phoneline from "./images/Mobileline.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container-1">
        <div className="footer-1">
          <div className="footer-1-1">
            <img src={logo} alt="axio-logo" />
          </div>
        </div>
        <div className="container-2-3">
          <h3>Contact</h3>
          <a href="mailto:support@axiotech.io">support@axiotech.io</a>
        </div>
      </div>
      <div className="container-2">
        <div className="container-2-2 download-icons-footer">
          <a className="download-section-icon" href="/">
            <img src="Android" />
          </a>
          <a className="download-section-icon" href="/">
            <img src="Ios" />
          </a>
        </div>

        <div className="container-2-1 footer-2-3">
          <ul>
            <li className="socials-icon">
              <a
                href="https://facebook.com/axiohq/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaFacebookF className="socials" />
              </a>
            </li>
            <li className="socials-icon">
              <a
                href="https://twitter.com/axiohq/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaTwitter className="socials" />
              </a>
            </li>
            <li className="socials-icon">
              <a
                href="https://instagram.com/axiohq/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaInstagram className="socials" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img className="d-none d-md-block" src={Line} alt="line" />
      <img className="d-block d-md-none" src={Phoneline} alt="line" />
      <div className="container-2">
        <div className="container-2-2">
          <p>Copyright 2022 Axio tech.</p>
        </div>

        <div className="container-2-1">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
