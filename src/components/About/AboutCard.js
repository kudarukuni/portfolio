import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span>H</span>e<span>l</span>l<span>o</span> o<span>n</span>c<span>e</span> a<span>gain! Nice to see</span> y<span>o</span>u <span>m</span>a<span>d</span>e <span>i</span>t h<span>ere, as mentioned </span><span>e</span>a<span>r</span>l<span>i</span>e<span>r</span> m<span>y</span> na<span className="white">me is Kuda Rukuni, </span>
            I<span>'</span>m <span>f</span>r<span>o</span>m <span>t</span>h<span>e</span> capital city of <span>Harare, in Zimbabwe. Life has its twists and turns. My experience</span> ranges across many spectrums. 
            I’m fortunate to have a full-time <span>role as a Senior Technician working on a large Audio and</span> Visual Solutions Startup known as Netcast Systems.
            <br />
            <br />
            I’ve been an <span>NFT</span> Collector for 3 years and a <span>Full-Stack</span> Web <span className="white">Developer</span> for 8 years. 
            
            <br />
            I’ve always had a passion for <span className="white">art, economics, music, aviation and design</span>. When I discovered the power of <span>Web Development</span>, it opened a world of endless possibilities <span className="white">&</span> opportunities. 
            I <span>was</span> now able to finally blend my <span>skills</span> and passions into creating <span>awesome</span> projects that help the world. 
            From front-end<span>/</span>back-end design, global macro analysis, to <span>blockchain</span> development and on-chain analytics.
            <br />
            <br />
            Apart from <span>coding</span>, some other <span>activities</span> that I <span>love</span> to do<span>!</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Casual <span>C</span>h<span>e</span>s<span>s</span> Player
            </li>
            <li className="about-activity">
              <ImPointRight /> Football <span>/</span> Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Video <span>Games</span>
            </li>
           <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying <span>new</span> recipes
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning <span>about</span> new <span>tech</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Yesterday <span>I</span> was clever so <span>I</span> changed the world, today <span>I</span> am wise so <span>I</span> change myself"{" "}
          </p>
          <footer className="blockquote-footer"><span>Rumi</span></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
