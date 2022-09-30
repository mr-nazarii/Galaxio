import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

export const SignUp = () => {
  return (
    <Container>
      <Row className="mb-5 d-flex flex-column gap-5 align-items-center">
        <Col className="text-center text-uppercase deals__sectionTitle">
          <p>SIGN UP FOR GREAT OFFERS</p>
        </Col>
        <Col style={{ width: "336px", height: "49px", marginTop: "60px" }}>
          <Form.Control
            style={{ height: "49px", borderRadius: "0px" }}
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <Button className="deals__button" style={{ width: "310px" }}>
            Sign up now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
