import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer" id="footer">
        <Container>
          <Row>
            <Col md={4} className="footer-section">
              <div className="d-flex">
                <img
                  className=""
                  height="50"
                  src="https://drive.google.com/uc?id=1OQvgCtQFFSQV2En4mfY5rTPBT9metidy"
                  alt=""
                />
                <h1 id="company-name" className="mb-4">
                  Global Toy Sources
                </h1>
              </div>
              <p id="description">
                Global Toy Sources: Your destination for high-quality toys
                sourced from around the world. Discover a wide selection of toys
                for all ages and interests. Shop with confidence through our
                secure platform. Experience the joy of play with Global Toy
                Sources.
              </p>
            </Col>
            <Col md={4} className="footer-section">
              <h2 className="text-center mb-4" id="about">
                About Us
              </h2>
              <ul className="footer-links text-center">
                <li>
                  <a href="home">Home</a>
                </li>
                <li>
                  <a href="alltoys">All Toys</a>
                </li>
                <li>
                  <a href="blogpage">Blog</a>
                </li>
                <li>
                  <a href="login">Login</a>
                </li>
              </ul>
            </Col>
            <Col md={4} className="footer-section">
              <h2 className="text-center mb-4" id="contact">
                Contact Us
              </h2>
              <p className="text-center contact">Email: info@example.com</p>
              <p className="text-center contact">Phone: (123) 456-7890</p>
              <div></div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p className="footer-text">
                © 2023 Your Website. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
