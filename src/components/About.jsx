import styled from "@emotion/styled";
import React from "react";
import { Spacing } from "../rules/index";

const About = () => {
  return (
    <Container className="view">
      <Wrap>
        <div className="content">
          <div className="content--inner">
            this is where im going wto righte a little about me
            askljfjasklf;askfa al;sjfjashfkasfnasjkfasm poasjfasf this is where
            im going wto righte a little about me askljfjasklf;askfa
            al;sjfjashfkasfnasjkfasm poasjfasf this is where im going wto righte
            a little about me askljfjasklf;askfa al;sjfjashfkasfnasjkfasm
            poasjfasf this is where im going wto righte a little about me
            askljfjasklf;askfa al;sjfjashfkasfnasjkfasm poasjfasf this is where
            im going wto righte a little about me askljfjasklf;askfa
            al;sjfjashfkasfnasjkfasm poasjfasf this is where im going wto righte
            a little about me askljfjasklf;askfa al;sjfjashfkasfnasjkfasm
            poasjfasf this is where im going wto righte a little about me
            askljfjasklf;askfa al;sjfjashfkasfnasjkfasm poasjfasf this is where
            im going wto righte a little about me askljfjasklf;askfa
            al;sjfjashfkasfnasjkfasm poasjfasf
          </div>
        </div>
      </Wrap>
    </Container>
  );
};

const Container = styled("div")`
  width: 500px;
  height: 400px;
  background: white;
  top: 97px;
  bottom: 0;
  right: 220px;
  position: absolute;
  transition: all 0.4s cubic-bezier(0.2, 0.6, 0.2, 1);
`;

const Wrap = styled("div")`
  padding: ${Spacing.md};
`;

export default About;
