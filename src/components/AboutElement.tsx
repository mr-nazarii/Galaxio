import React from "react";
import { Col, Image } from "react-bootstrap";

export const AboutElement = (props: any) => {
  return (
    <Col className="text-center">
      <Image className="mb-4" src="./planet.svg" />
      <p className="mb-3 about__secondaryText">Swift and fast</p>
      <p className="mb-3 about__secondaryText white">
        Deliver fast and comfortable
        <br />
        journeys
      </p>
      <p className="about__secondaryText">Details...</p>
    </Col>
  );
};
