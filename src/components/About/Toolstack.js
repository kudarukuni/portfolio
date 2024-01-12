import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiSublimetext,
  SiHeroku,
  SiVercel,
  SiFigma,
  SiIpfs,
  SiReplit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux style={{ color: "#27cbee" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext style={{ color: "#27cbee" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel style={{ color: "#27cbee" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReplit style={{ color: "#27cbee" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIpfs />
      </Col>
    </Row>
  );
}

export default Toolstack;
