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
            I<span>'</span>m <span>f</span>r<span>o</span>m <span>t</span>h<span>e</span> capital city of <span>Zimbabwe, Harare. Life has its twists and turns and some of my experiences</span> ranges across many spectrums. <br/><br/><font color="#27cbee">Currently I am working for ZESA's Subsidiary ZETDC located at No. 25 Samora Machel Ave, ZESA Holdings Head Office. My role at the company is post graduate systems analyst and software engineer trainee.
            I’m fortunate to have a full-time <span>role as a Senior Technician working on a small Audio and</span> Visual Solutions Startup known as <a href="https://www.netcast.co.zw" target="_blank">Netcast Systems</a>.</font>
            <br />
            <br />
            I’ve been an <span>NFT</span> Collector for 3 years and a <span>Full-Stack</span> Web <span className="white">Developer</span> for 8 years. 
            <br />
            <br />
            <font color="#27cbee">I’ve always had a passion for <span className="white">art, economics, music, aviation and design</span>. When I discovered the power of <span>Web Development</span>, it opened a world of endless possibilities <span className="#27cbee">&</span> opportunities. 
            I <span>was</span> now able to finally blend my <span>skills</span> and passions into creating <span>awesome</span> projects that help change the world. 
            From front-end<span>/</span>back-end design, global macro analysis, to <span>blockchain</span> development and on-chain analytics.</font>
            <br />
            <br />
            Apart from <span>coding</span>, some other <span>activities</span> that I <span>love</span> to do<span>!</span>
          </p>
          <ul>
            <li className="about-activity">
              <font color="#27cbee"><ImPointRight /></font> Casual <span>C</span>h<span>e</span>s<span>s</span> Player
            </li>
            <li className="about-activity">
              <font color="#fff"><ImPointRight /></font> Football <span>/</span> Soccer
            </li>
            <li className="about-activity">
              <font color="#27cbee"><ImPointRight /></font> Video <span>Games</span>
            </li>
           <li className="about-activity">
              <font color="#fff"><ImPointRight /></font> Travelling
            </li>
            <li className="about-activity">
              <font color="#27cbee"><ImPointRight /></font> Trying <span>new</span> recipes
            </li>
            <li className="about-activity">
              <font color="#fff"><ImPointRight /></font> Learning <span>about</span> new <span>tech</span>
            </li>
          </ul>

          <p style={{ color: "rgb(39 203 239)" }}>
            "Yesterday I was clever so I changed the world, today I am wise so I change myself"{"  "}
          </p>
          <footer className="blockquote-footer"><p style={{ color: "rgb(39 203 239)" }}>Rumi</p></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
