import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Particlejs from "./Particlejs";

const Textanimate = () => {
  return (
    <div className="ff_cherryBomb position-relative min-vh-100 bg-danger justify-content-center align-items-center d-flex">
      <Particlejs />
      <Container>
        <h1 className="fs_72 text-white heroHeading headingSame ">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              deleteSpeed: true,
              skipAddStyles: true,
              // delay: 90,
              // typeSpeed: 100,
              // backSpeed: 5,
              repeat: { Infinity },
              strings: ["I am a web developer and you?"],
            }}
          />
        </h1>
      </Container>
    </div>
  );
};

export default Textanimate;
