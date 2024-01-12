import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong><b><font color="#fff">My</font> <font color="#27cbee">Coding</font> <font color="#fff">Statistics</font></b></strong>
      </h1>
      <GitHubCalendar
        username="kudarukuni"
        blockSize={15}
        blockMargin={5}
        color="#27cbee"
        fontSize={14}
      />
    </Row>
  );
}

export default Github;
