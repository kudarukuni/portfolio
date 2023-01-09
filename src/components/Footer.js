import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed <span className="purple">and</span> Developed by <span className="purple">Kuda</span> Rukuni</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>All Rights Reserved <span className="purple">®</span>. Copyright <span className="purple">©</span> Kuda Rukuni {year}<span className="purple">™</span></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/kudarukuni"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li><span className="purple">
            <li className="social-icons">
              <a
                href="https://twitter.com/Naswillow"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li></span>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kudarukuni/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
{/*            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>*/}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
