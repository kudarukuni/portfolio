import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello once a<span className="purple">gain! Nice to see</span> you made i<span className="purple">t here, as mentioned </span>earlier my na<span className="purple">me is Kuda Rukuni, </span>
            I'm from <span className="purple"> th<span className="purple">e capital city of</span> Harare, in Zim<span className="purple">babwe.</span>
            <br />
            <br />Life has its t<span className="purple">wists and turns. My</span> experience r<span className="purple">anges across many </span>spectrums. 
            I’<span className="purple">m fortunate to have</span> a full-time <span className="purple">role as a Senior </span>Technician w<span className="purple">orking on a large</span> Audio and Visual Solutions <span className="purple">Startup</span> known as <span className="purple">Netcast</span> Systems.
            <br />
            <br />
            I’ve been an <span className="purple">NFT</span> Collector for 3 years and a <span className="purple">Full-Stack</span> Web <span className="purple">Developer</span> for 8 years. 
            <br />
            <br />
            I’ve always had a passion for <span className="purple">art, economics, music, aviation and design</span>. When I discovered the power of <span className="purple">Web Development</span>, it opened a world of endless possibilities <span className="purple">&</span> opportunities. 
            I <span className="purple">was</span> now able to finally blend my <span className="purple">skills</span> and passions into creating <span className="purple">awesome</span> projects that help the world. 
            From front-end<span className="purple">/</span>back-end design, global macro analysis, to <span className="purple">blockchain</span> development and on-chain analytics.
            <br />
            <br />
            Apart from <span className="purple">coding</span>, some other <span className="purple">activities</span> that I <span className="purple">love</span> to do<span className="purple">!</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Casual <span className="purple">C</span>h<span className="purple">e</span>s<span className="purple">s</span> Player
            </li>
            <li className="about-activity">
              <ImPointRight /> Football <span className="purple">/</span> Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Video <span className="purple">Games</span>
            </li>
           <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying <span className="purple">new</span> recipes
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning <span className="purple">about</span> new <span className="purple">tech</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Yesterday <span className="purple">I</span> was clever so <span className="purple">I</span> changed the world, today <span className="purple">I</span> am wise so <span className="purple">I</span> change myself"{" "}
          </p>
          <footer className="blockquote-footer"><span className="purple">Rumi</span></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
