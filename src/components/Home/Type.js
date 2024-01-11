import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IoT and Robotics Specialist",
          "Software Engineer",
          "Full-Stack Web 3.0 Developer",
          "Smart Contract Developer",
          "AutoDiagnosis Specialist",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      style={{ color: "#27BCEE" }}
    />
  );
}

export default Type;
