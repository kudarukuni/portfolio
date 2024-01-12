import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/logo.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <font color="#27cbee">Kuda</font>
            </h2>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h2 className="project-heading">
          Familiar <font color="#27cbee">Technologies </font>
        </h2>

        <Techstack />

        <h2 className="project-heading">
          <font color="#27cbee">Favourite</font> Tools
        </h2>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
