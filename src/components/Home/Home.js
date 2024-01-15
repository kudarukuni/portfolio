import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo4.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "./Type.css"; // Import the CSS file for Type component

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏿
                </span>
              </h1>

              <h1 className="heading-name">
                MY NAME IS
                <strong className="main-name">
                  <span className="name-color"> KUDA RUKUNI</span>
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} className="name-color">
                <Type /> {/* Add style prop to specify font color */}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
