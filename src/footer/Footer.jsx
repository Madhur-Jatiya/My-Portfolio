import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Footer.css";
import {
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaHackerrank,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer_main">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="footer_container">
              <h1>Madhur Jatiya</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                natus, ipsam suscipit nihil aperiam cum culpa? Assumenda,
                officia. Officia id temporibus vitae tenetur sed sit expedita,
                mollitia excepturi illum quasi.
              </p>
            </div>
          </Col>

          <Col lg={6}>
            <div className="footer_box">
              <h1>Social</h1>
            </div>

            <div className="social_icon">
              <div className="social_icon_box">
                <FaGithub />
              </div>
              <div className="social_icon_box">
                <FaLinkedinIn />
              </div>
              <div className="social_icon_box">
                <FaTwitter />
              </div>
              <div className="social_icon_box">
                <FaInstagram />
              </div>
              <div className="social_icon_box">
                <FaFacebookSquare />
              </div>
            </div>

            <div className="coding">
              <div className="coding_platform">
                <FaHackerrank />
              </div>
              <div className="coding_platform">
                <SiLeetcode />
              </div>
              <div className="coding_platform">
                <SiGeeksforgeeks />
              </div>
            </div>
          </Col>
        </Row>

        <hr />

        <div className="copy_right">
          <p>
            Copyright 2024. Made by <a href="/">Madhur Jatiya</a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
