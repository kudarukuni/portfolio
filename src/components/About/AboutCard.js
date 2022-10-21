import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello once again! Nice to see you made here, as mentioned earlier my name is <span className="purple">Kuda Rukuni, </span>
            I'm from <span className="purple"> the capital city of Harare, in Zimbabwe.</span>
            <br />
            <br />Life has its twists and turns. My experience ranges across many spectrums. 
            I’m fortunate to have a full-time role as a Senior Technician working on a large Audio and Visual Solutions company known as Netcast Systems.
            <br />
            <br />
            I’ve been an NFT Collector for 3 years and a Full-Stack Web Developer for 8 years. 
            <br />
            <br />
            I’ve always had a passion for art, economics, music, aviation and design. When I discovered the power of Web Development, it opened a world of opportunities for me. 
            I’m able to finally blend my skills and passions into creating awesome projects that help the world. 
            From front-end/back-end design, global macro analysis, to blockchain development and on-chain analytics.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Casual Chess Player
            </li>
            <li className="about-activity">
              <ImPointRight /> Football / Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
           <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying new recipes
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about new tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Yesterday I was clever so I changed the world, today I am wise so I change myself"{" "}
          </p>
          <footer className="blockquote-footer">Rumi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
