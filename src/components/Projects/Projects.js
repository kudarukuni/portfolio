import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flow from "../../Assets/Projects/flow.png";
import yieldapp from "../../Assets/Projects/yieldapp.png";
import dns from "../../Assets/Projects/dns.png";
import exchange from "../../Assets/Projects/sky-token-exchange.png";
import cookies from "../../Assets/Projects/cookies.png";
import supplychain from "../../Assets/Projects/supplychain.png";
import bookstore from "../../Assets/Projects/bookstore.png";
import uas from "../../Assets/Projects/uas.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project <strong className="purple">Portfolio </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have worked in the year 2022.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exchange}
              isBlog={false}
              title="Decentralized Autonomous Tender System"
              description="This is a fully functioning decentralized autonomous organisation application or system where users can vote for a proposed tender."
              ghLink="https://github.com/kudarukuni/DATS"
              demoLink="https://dats-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supplychain}
              isBlog={false}
              title="BatPack NFT Marketplace"
              description="This is a fully functioning decentralized NFT e-commerce web-based application where users can mint NFT."
              ghLink="https://github.com/kudarukuni/BPN"
              demoLink="https://bat-pack-nft-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dns}
              isBlog={false}
              title="Blockchain Election Voters Roll"
              description="This is a fully functioning decentralized Presidential voting system that allows users to vote for their favourite Presidential candidate."
              ghLink="https://github.com/kudarukuni/BEVR"
              demoLink="https://bevr-kudarukuni.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uas}
              isBlog={false}
              title="Ultimate API Site"
              description="This is a fully functioning Real Eastate API Website, currently web scrapping available real eastate in Abu Dhabi, Dubai in preparation for the upcomming World Cup 2022."
              ghLink="https://github.com/kudarukuni/UAS"
              demoLink="https://uas-kudarukuni.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flow}
              isBlog={false}
              title="Kuda Rukuni 3D Portfolio Website"
              description="This is my personal portfolio website template made using Three.js."  
              ghLink="https://github.com/kudarukuni/kudarukuni"
              demoLink="https://kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Digital Asset Management System"
              description="This is a fully functioning decentralized digital asset managaement web-based app that stores users digital assets."
              ghLink="https://github.com/kudarukuni/DAMS"
              demoLink="https://dams-kudarukuni.vercel.app/"              
            />
          </Col>          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookies}
              isBlog={false}
              title="Kuda Rukuni 2D Portfolio Website"
              description="This is my personal portfolio website template made using Node.js."
              ghLink="https://github.com/kudarukuni/cvtemp"
              demoLink="https://cvtemp-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yieldapp}
              isBlog={false}
              title="Kuda Rukuni 3D Contact Webite"
              description="This is my personal 3D contact landing page website template made using Node.js and Vite.js."
              ghLink="https://github.com/kudarukuni/contactkuda"
              demoLink="https://contactkuda-kudarukuni.vercel.app/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
