import React from "react";
import gemLogo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gem__footer section__padding">
      <div className="gem__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gem__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gem__footer-links">
        <div className="gem__footer-links_logo">
          <img src={gemLogo} alt="logo" />
        </div>
        <div className="gem__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gem__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gem__footer-links_div">
          <h4>Get in touch</h4>
          <p>adress</p>
          <p>tel. number</p>
          <p>email</p>
        </div>
      </div>
      <div className="gem__footer-copyright">
        <p>c 2023 Viki. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
