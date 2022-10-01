import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Testemonial } from "../components/Testemonial";

export const Testemonials = () => {
  return (
    <Container id="testemonials">
      <Row className="mb-5">
        <Col className="text-center text-uppercase deals__sectionTitle">
          <p>TESTEMONIALS</p>
        </Col>
      </Row>
      <Row>
        <Testemonial
          imgSrc="alien1"
          name="Gishir Katika"
          occupation="Outsourcer"
        />
        <Testemonial
          imgSrc="alien2"
          name="Lifanta Karoblu"
          occupation="Freelancer"
        />
        <Testemonial
          imgSrc="alien3"
          name="Lilllll Kef Kar"
          occupation="Businessman"
        />
      </Row>
      <Row className="mt-5 d-flex justify-content-center gap-5">
        <Image
          src="./triangle.png"
          fluid
          style={{ width: "200px", height: "40px" }}
        />
      </Row>
    </Container>
  );
};
