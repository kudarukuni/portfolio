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
            <h2 style={{ fontSize: "4.0em" }}>
              <strong>ALLOW <span><font color="#27CBEE">ME</font></span> TO <span> <font color="#27CBEE">RE-INTRODUCE</font> </span> MYSELF</strong>
            </h2>
            <p className="home-about-body">
              My journey as a <span>Software Engineer</span> started way back in the year <span>2012</span> when I was introduced to <span>Linux terminal</span> for the first time. I began with the ambition of becoming a quote on quote <span>"unethical-hacker"</span>. I advanced my Kali Linux <span>skills</span> to the point were I decided to <span>develop</span> an unhackable solution (<span><font color="#27BCEE">website</font></span>). At this very moment I realized I was an <span>IT Solutions Expert</span>. 
              <br />
              <br />I am fluent in all programming languages. Below is a  list of my favourite programming languages.
              <i>
                <b><font color="#27CBEE"> Python, PHP, C++, Javascript, Typescript, Java, Rust and Solidity</font>. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <font color="#27CBEE"><b>Web Technologies and Products </b></font> and
                also in areas related to{" "}
                <b>
                  <font color="#27CBEE">IoT, Blockchain, Robotics, Quantum Computing, Nueral Science, Extra Terestrial Exploration and Deep Learning</font>.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products
              with <font color="#27CBEE"><b>Node.js</b></font> and
              <i>
                <font color="#27CBEE"><b>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b></font>
              </i>
              &nbsp; like
              <i>
                <font color="#27CBEE"><b> React.js and Next.js</b></font>
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
            <h2>FIND <span>ME</span> ON</h2>
            <p>
              Feel free to <span>connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons"><font color = "#27CBEE">
                <a
                  href="https://github.com/kudarukuni"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a></font>
              </li>
              <li className="social-icons"><font color = "#27CBEE">
                <a
                  href="https://twitter.com/Naswillow"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a></font>
              </li>
              <li className="social-icons"><font color = "#27CBEE">
                <a
                  href="https://www.linkedin.com/in/kudarukuni/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a></font>
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
