import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { DealsElement } from "../components/DealsElement";

export const Deals = () => {
  return (
    <Container>
      <Row className="mb-5">
        <Col className="text-center text-uppercase deals__sectionTitle">
          <p>Hot deals</p>
        </Col>
      </Row>
      <Row className="d-flex gap-5">
        <DealsElement
          firstP="Vacations on Uranus"
          secondP="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          imgSrc="uranus"
        />
        <DealsElement
          firstP="Visit Grandparents
            on Saturn"
          secondP="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          imgSrc="saturn"
        />
      </Row>
    </Container>
  );
};
