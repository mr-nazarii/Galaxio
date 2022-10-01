import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <Container id="about">
      <Row className="mt-5 d-flex flex-column-reverse gap-5 flex-lg-row">
        <Col>
          <Image src="graph.png" fluid />
        </Col>
        <Col className="text-end d-flex flex-column justify-content-center">
          <p className="text-uppercase text-center text-lg-right aboutUs__title2 pb-1">
            About <span>us</span>
          </p>

          <p className="aboutUs__secondaryText text-center text-lg-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};
