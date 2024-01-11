import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "4.0em" }}>
              <strong>ALLOW <span>ME</span> TO <span> INTRODUCE </span> MYSELF</strong>
            </h1>
            <p className="home-about-body">
              My journey as a <span>Software Engineer</span> started way back in the year <span>2012</span> when I was introduced to <span>Linux terminal</span> for the first time. I began with the ambition of becoming an <span>unethical-hacker</span>. I advanced my Kali Linux <span>skills</span> to the point were I decided to <span>develop</span> an unhackable solution (<span>website</span>). At this very moment I realized I was an <span>IT Solutions Expert</span>. 
              <br />
              <br />I am fluent in all programming languages. Below is a  list of my favourite programming languages.
              <i>
                <b> Python, PHP, C++, Javascript, Typescript, Java, Rust and Solidity. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b>Web Technologies and Products </b> and
                also in areas related to{" "}
                <b>
                  IoT, Blockchain, Robotics, Quantum Computing, Nueral Science, Extra Terestrial Exploration and Deep Learning.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products
              with <b>Node.js</b> and
              <i>
                <b>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND <span>ME</span> ON</h1>
            <p>
              Feel free to <span>connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kudarukuni"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Naswillow"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kudarukuni/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
{/*              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>*/}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
