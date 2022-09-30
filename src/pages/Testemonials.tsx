import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Testemonial } from "../components/Testemonial";

export const Testemonials = () => {
  return (
    <Container>
      <Row className="mb-5">
        <Col className="text-center text-uppercase deals__sectionTitle">
          <p>TESTEMONIALS</p>
        </Col>
      </Row>
      <Row>
        <Testemonial />
        <Testemonial />
        <Testemonial />
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
