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
      <Row className="mt-5 d-flex flex-column flex-md-row gap-5">
        <AboutElement
          imgSrc={"planet"}
          firstP={"Swift and fast"}
          secondP={"Deliver fast and comfortable journeys"}
        />
        <AboutElement
          imgSrc={"rocket"}
          firstP={"Your life is safe with us"}
          secondP={"Your security and comfort are our number one priority"}
        />
        <AboutElement
          imgSrc={"money"}
          firstP={"Affordable great deals"}
          secondP={"Great and convenient prices on trips you want"}
        />
      </Row>
    </Container>
  );
};
