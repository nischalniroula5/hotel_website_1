import React from "react";
import "./header.css";

// Font Awesome React imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import logoSrc from "../../assets/hotellogo.png";

const Header = () => {
  return (
    <header className="site-header">
      {/* Topbar 
      <div className="topbar">
        <div className="topbar-left">
          <span className="badge">Notice</span>
          <span className="topbar-msg">
            Complimentary late checkout this week for members.
          </span>
        </div>
        <div className="topbar-right">
          <span className="item">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>256 B Street, Melbourne</span>
          </span>
          <span className="item">
            <FontAwesomeIcon icon={faPhone} />
            <span>+61 400 123 456</span>
          </span>
        </div>
      </div>
      */}

      {/* Mainbar */}
      <div className="mainbar">
        <div className="left">
          <a href="/" className="brand">
            <img className="brand-logo" src={logoSrc} alt="Clayton Hotels" />
          </a>
          <nav className="nav">
            <a href="/" className="active">Home</a>
            <a href="/about">About Us</a>
            <a href="/projects">Projects</a>
            <a href="/career">Career</a>
          </nav>
        </div>

        <div className="socials">
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span>
          </a>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebookF} /> <span>Facebook</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
