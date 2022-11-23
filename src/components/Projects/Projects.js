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
import ls from "../../Assets/Projects/ls.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project Portfolio
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have worked in the year 2022.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exchange}
              isBlog={false}
              title="Blockchain Asset Management System"
              description="A Blockchain Asset Management System Used To Connect Crypto Wallets Built on top of the Solana Blockchain."
              ghLink="https://github.com/kudarukuni/BAMS"
              demoLink="https://bams-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exchange}
              isBlog={false}
              title="On-Chain Movies Forum System"
              description="An On-Chain Movies Forum System Used For Reviewing Movies. Project was built on top of the Solana Blockchain."
              ghLink="https://github.com/kudarukuni/ocmf"
              demoLink="https://ocmf-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exchange}
              isBlog={false}
              title="Goritoto NFT Minting Website"
              description="The much Anticipated Goritoto NFT deployed on the Solana Blockchain using Metaplex's Candy Machine."
              ghLink="https://github.com/kudarukuni/grt-ui"
              demoLink="https://grt-ui-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exchange}
              isBlog={false}
              title="Decentralized Autonomous Tender System"
              description="A Decentralized Autonomous Organisation Application were users can vote for a proposed tender."
              ghLink="https://github.com/kudarukuni/DATS"
              demoLink="https://dats-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supplychain}
              isBlog={false}
              title="BatPack NFT Marketplace"
              description="A Decentralized NFT E-Commerce Web 3.0 Application were users can mint my Bat-Pack NFT."
              ghLink="https://github.com/kudarukuni/BPN"
              demoLink="https://bat-pack-nft-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dns}
              isBlog={false}
              title="Blockchain Election Voters Roll"
              description="A Decentralized Voting Application were users vote for their favourite Presidential candidate."
              ghLink="https://github.com/kudarukuni/BEVR"
              demoLink="https://bevr-kudarukuni.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uas}
              isBlog={false}
              title="Ultimate API Site"
              description="A Real Eastate Application were users can buy or rent available Real Eastate in Abu Dhabi."
              ghLink="https://github.com/kudarukuni/UAS"
              demoLink="https://uas-kudarukuni.vercel.app/"              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ls}
              isBlog={false}
              title="JS Login System"
              description="This is a fully functioning Javascript Login System."
              ghLink="https://github.com/kudarukuni/Login_System"
              demoLink="https://login-system-kudarukuni.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Digital Asset Management System"
              description="A Decentralized Digital Asset Managaement Application were users can store Digital Assets."
              ghLink="https://github.com/kudarukuni/DAMS"
              demoLink="https://dams-kudarukuni.vercel.app/"              
            />
          </Col>          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flow}
              isBlog={false}
              title="Kuda Rukuni 3D Portfolio Website"
              description="This is my personal Portfolio 3D Website that I made using a JS Framework called Three.js."  
              ghLink="https://github.com/kudarukuni/kudarukuni"
              demoLink="https://kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookies}
              isBlog={false}
              title="Kuda Rukuni 2D Portfolio Website"
              description="This is my personal Portfolio 2D Website that I made using a JS Framework called Node.js."
              ghLink="https://github.com/kudarukuni/cvtemp"
              demoLink="https://cvtemp-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yieldapp}
              isBlog={false}
              title="Kuda Rukuni 3D Contact Webite"
              description="This is my personal Portfolio 3D Contact Landing Page that I made using Node.js and Vite.js."
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
