import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "<span style='color: white; font-size: 16px'>Here are a few projects I have developed in the year 2023</span>",
          "<span style='color: white; font-size: 16px'>Please note that some projects were not included due the explicity of the content</span>",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
