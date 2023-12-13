import React from "react";
import facebook_icon from "../assets/facebook.png";
import instagram_icon from "../assets/instagram.png";
import whatsapp_icon from "../assets/whatsapp.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>SHOPIO</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img
            src={instagram_icon}
            alt="instagram_icon"
            className="instagram_icon"
          />
        </div>
        <div className="footer-icons-container">
          <img
            src={facebook_icon}
            alt="facebook_icon"
            className="facebook_icon"
          />
        </div>
        <div className="footer-icons-container">
          <img
            src={whatsapp_icon}
            alt="whatsapp_icon"
            className="whatsapp_icon"
          />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2023 - All rights are reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
