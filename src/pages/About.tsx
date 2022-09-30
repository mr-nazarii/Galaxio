import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { AboutElement } from "../components/AboutElement";

export const About = () => {
  return (
    <Container>
      <Row className="text-uppercase m-5 text-center about__sectionTitle">
        <p>We offer you</p>
      </Row>
      <Row>
        <p className="mt-5 text-center about__secondaryText">
          Travel fast safe and with comfort to your loved once across light
          years away
        </p>
      </Row>
      <Row className="mt-5 mb-5">
        <AboutElement />
        <AboutElement />
        <AboutElement />
      </Row>
    </Container>
  );
};
