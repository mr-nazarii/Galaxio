import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid style={{ background: "#C78365", padding: "20px 5em" }}>
      <Row className="d-flex align-items-center justify-content-between">
        <Col md="auto" className="d-flex gap-5">
          <div>
            <p>- Pricing</p>
            <p>- Plans</p>
            <p>- Referral</p>
          </div>
          <div>
            <p>- Privacy Policy</p>
            <p>- Legal Notice</p>
            <p>- Terms of Use</p>
          </div>
        </Col>
        <Col md="auto" className="text-end mb-5 mt-5">
          <p className="fw-bold fs-2">GALAXIO TRAVEL</p>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit,
            <br /> sed do eiusmod tempor.{" "}
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end">
        <Col md="auto" className="d-flex gap-2">
          <Image src="./instagram.png" />
          <Image src="./facebook.png" />
          <Image src="./linkedin.png" />
          <Image src="./twitter.png" />
        </Col>
      </Row>
      <Row className="text-center">
        <p className="m-0">Copyright © nazariikubik.com</p>
      </Row>
    </Container>
  );
};
