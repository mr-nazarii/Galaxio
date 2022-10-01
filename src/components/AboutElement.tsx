import React from "react";
import { Col, Image } from "react-bootstrap";

export const AboutElement = (props: any) => {
  return (
    <Col className="text-center">
      <Image className="mb-4" src={`./${props.imgSrc}.svg`} />
      <p className="mb-3 about__secondaryText">{props.firstP}</p>
      <p className="mb-3  about__secondaryText white text-center">
        {props.secondP}
      </p>
      <p className="about__secondaryText">Details...</p>
    </Col>
  );
};
