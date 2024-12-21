import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import profile_img from "../../public/assets/profile.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar_container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">
            <img className="brand-logo" src={profile_img} alt=" Logo" />
          </Link>
          <Link className="profile_name">MADHUR JATIYA</Link>
        </div>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link className="nav-link" to="#why-choose-us">
            HOME
          </Link>
          <Link className="nav-link" to="#gallery">
            ABOUT
          </Link>
          <Link className="nav-link" to="#about">
            PROJECTS
          </Link>
          <Link className="nav-link" to="#testimonials">
            CONTACT
          </Link>
        </div>

        {/* Menu Toggle Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
