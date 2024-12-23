import React, { useState } from "react";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import profile_img from "../../public/assets/profile.png";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { IoLanguage } from "react-icons/io5";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("LANGUAGE");

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Navbar expand="lg" className="navbar_container">
      <Navbar.Brand href="/" className="profile_name">
        <img alt="" src={profile_img} width="45" height="45" />
        <span>MADHUR JATIYA</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto navbar_items">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/about">ABOUT</Nav.Link>
          <Nav.Link href="/project">PROJECTS</Nav.Link>
          <Nav.Link href="/contact">CONTACT</Nav.Link>
          <DropdownButton
            title={
              <span>
                <IoLanguage style={{ marginRight: "8px", fontSize: "120%" }} />
                {selectedLanguage}
              </span>
            }
          >
            <Dropdown.Item onClick={() => changeLanguage("English")}>
              English
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage("Hindi")}>
              Hindi
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage("German")}>
              German
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage("French")}>
              French
            </Dropdown.Item>
          </DropdownButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
