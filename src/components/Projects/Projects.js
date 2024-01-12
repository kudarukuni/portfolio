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
import bams from "../../Assets/Projects/bams.png";
import ocmf from "../../Assets/Projects/ocmf.png";
import grtui from "../../Assets/Projects/grtui.png";
import nre from "../../Assets/Projects/nre.png";
import padhen from "../../Assets/Projects/padhen.png";
import ssis from "../../Assets/Projects/ssis.png";
import smr from "../../Assets/Projects/smr.png";
import zadzadama from "../../Assets/Projects/zadzadama.png";
import cnft from "../../Assets/cnft.png";
import tumra from "../../Assets/Projects/tumra.png";
import nes from "../../Assets/nes.png";
import wchw from "../../Assets/wchw.png";
import vnft from "../../Assets/vnft.png";
import soldapp from "../../Assets/soldapp.png";
import shmdapp from "../../Assets/shmdapp.png";
import pidapp from "../../Assets/pidapp.png";
import maclouds from "../../Assets/maclouds.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong><b><font color="#27cbee">My</font> <font color="#fff">Project</font> <font color="#27cbee">Portfolio</font></b></strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have developed in the year 2023.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", color: #fff }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maclouds}
              isBlog={false}
              title="Maclouds Money Remittance"
              description="A money remittance application designed for sending money in FIAT Currencies."
              ghLink="https://github.com/kudarukuni/MACLOUDS"
              demoLink="http://maclouds.co.uk:8000"
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
              imgPath={zadzadama}
              isBlog={false}
              title="Goromonzi - Dama RaZara"
              description="My Solana Based Blockchain NFT Application Used To Buy and Sell the MaZadza Dama NFT which can be used to Redeem $SUG - Sugar Blocks."
              ghLink="https://github.com/kudarukuni/ZADZADAMA"
              demoLink="https://zadzadama-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tumra}
              isBlog={false}
              title="T U M R A | Tumira Mari Padhen Pako Uri Kwauri"
              description="A money remittance application designed for sending money in FIAT Currencies. A blockchain version will be introduced once the Zim Cyber City Project is Complete !!."
              ghLink="https://github.com/kudarukuni/tumra"
              demoLink="https://tumra-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cnft}
              isBlog={false}
              title="Chipoko NFT Minting Website (No Staking)"
              description="The much anticipated Chipoko NFT minting website deployed on the Solana Blockchain using Metaplex's Candy Machine."
              ghLink="https://github.com/kudarukuni/CNFT"
              demoLink="https://cnft-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grtui}
              isBlog={false}
              title="Chipoko NFT"
              description="The long awaited Chipoko NFT Collection on the Solana Blockchain, with NFT Staking capabilities to Redeem $GRC (GoritotoCoins) that can be used to purchase Lootboxes and Gears or Skins for your NFT"
              ghLink="https://github.com/kudarukuni/CHIPOKO"
              demoLink="https://chipoko-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vnft}
              isBlog={false}
              title="Valeny's First Words NFT Collection"
              description="The much anticipated Valeny's First Words NFT Collection website deployed on the Ethereum Blockchain using IPFS & Solidity."
              ghLink="https://github.com/kudarukuni/VNFT"
              demoLink="https://vnft.kudarukuni.repl.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nes}
              isBlog={false}
              title="The SME Online Store 2.0"
              description="An E-Commerce website designed for a clothing store in Harare"
              ghLink="https://github.com/kudarukuni/NES"
              demoLink="https://nes-kudarukuni.vercel.app/"
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
              imgPath={wchw}
              isBlog={false}
              title="Welding Company HTML Website"
              description="A SME company approached me saying they only needed a static website with all their infomation online"
              ghLink="https://github.com/kudarukuni/WCHW"
              demoLink="https://wchw-kudarukuni.vercel.app/"              
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
              imgPath={bams}
              isBlog={false}
              title="Blockchain Asset Management System"
              description="A Blockchain Asset Management System Used To Connect Crypto Wallets Built on top of the Solana Blockchain."
              ghLink="https://github.com/kudarukuni/BAMS"
              demoLink="https://bams-kudarukuni.vercel.app/"
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
              imgPath={ssis}
              isBlog={false}
              title="Solana Student Introduction System"
              description="The Solana Student Introduction System. Get some Solana Devnet Tokens and Leave Your Intro on the Solana Blockchain."
              ghLink="https://github.com/kudarukuni/ssis"
              demoLink="https://ssis-kudarukuni.vercel.app/"
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
              imgPath={smr}
              isBlog={false}
              title="Solana Movie Reviewer System"
              description="Solana Movie Reviwer System. Get some Solana Devnet Tokens and Leave Your favourite Movie review on the Solana Blockchain."
              ghLink="https://github.com/kudarukuni/smr"
              demoLink="https://smr-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nre}
              isBlog={false}
              title="Nawillow's Real Asstate System"
              description="A Blockchain NFT System Used To Buy and Sell NFT Crypto Listed Real Eastate and Buildings."
              ghLink="https://github.com/kudarukuni/NRE"
              demoLink="https://nre-kudarukuni.vercel.app/"
            />
          </Col>          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={padhen}
              isBlog={false}
              title="Padhen | Perekedza Mwana"
              description="A Web-2.0 Carpooling And Rideshare Management System"
              ghLink="https://github.com/kudarukuni/padhen"
              demoLink="https://padhen-kudarukuni.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocmf}
              isBlog={false}
              title="On-Chain Movies Forum System"
              description="An On-Chain Movies Forum System Used For Reviewing Movies. Project was built on top of the Solana Blockchain."
              ghLink="https://github.com/kudarukuni/ocmf"
              demoLink="https://ocmf-kudarukuni.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soldapp}
              isBlog={false}
              title="Solana Decentralized Application Boilerplate"
              description="A boiler plate code for building DApps on the Solana Blockchain"
              ghLink="https://github.com/kudarukuni/SPDAC"
              demoLink="https://spdac-kudarukuni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shmdapp}
              isBlog={false}
              title="Shardeum Decentralized Application Boilerplate"
              description="A boiler plate code for building DApps on the Shardeum Blockchain"
              ghLink="https://github.com/kudarukuni/njema-dapp"
              demoLink="https://njema-dapp-kudarukuni.vercel.app/"              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pidapp}
              isBlog={false}
              title="Pi Network Decentralized Application Boilerplate"
              description="A boiler plate code for building DApps on the Pi Network Blockchain"
              ghLink="https://github.com/kudarukuni/PICIRCLE_FRONTEND"
              demoLink="https://picircle-frontend-kudarukuni.vercel.app/"              
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
