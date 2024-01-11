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
          <h3>Designed <span><font color = "#27CBEE">and</font></span> Developed by <span><font color = "#27CBEE">Kuda</font></span> Rukuni</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>All Rights Reserved <span><font color = "#27CBEE">®</font></span>. Copyright <span><font color = "#27CBEE">©</font></span> Kuda Rukuni {year}<span><font color = "#27CBEE">™</font></span></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/kudarukuni"
                style={{ color: "#27cbee" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li><span className="purple">
            <li className="social-icons">
              <a
                href="https://twitter.com/Naswillow"
                style={{ color: "#27cbee" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li></span>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kudarukuni/"
                style={{ color: "#27cbee" }}
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
