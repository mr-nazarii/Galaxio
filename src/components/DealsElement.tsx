import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export const DealsElement = (props: any) => {
  return (
    <Col className="d-flex flex-column flex-lg-row mt-5 mx-4 px-4 py-5 gap-5 deals__wrapper text-center text-lg-start align-items-center">
      <div>
        <p className="deals__sectionTitle fs-3">{props.firstP}</p>
        <p className="deals__secondaryText fs-5">{props.secondP}</p>
        <Button className="deals__button">Order Now</Button>
      </div>
      <div>
        <Image fluid className="p-1" src={`./${props.imgSrc}.png`} />
      </div>
    </Col>
  );
};
