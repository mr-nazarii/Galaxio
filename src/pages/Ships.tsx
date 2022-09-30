import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export const Ships = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="text-start d-flex flex-column justify-content-center align-items-start">
          <p className="text-uppercase aboutUs__title2 pb-1">
            OUR <span>Ships</span>
          </p>

          <p className="aboutUs__secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />- Lorem ipsum dolor sit amet, consectetur <br />
            <br />- Lorem ipsum dolor sit amet, consectetur <br />
            <br />- Lorem ipsum dolor sit amet, consecteturs
          </p>
          <Button className="mt-5 about__button">Order a trip</Button>
        </Col>
        <Col>
          <Image src="Ship.png" />
        </Col>
      </Row>
    </Container>
  );
};
