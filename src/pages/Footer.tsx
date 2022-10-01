import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid style={{ background: "#C78365", padding: "20px 5em" }}>
      <Row className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between">
        <Col
          xs="auto"
          className="d-flex flex-column flex-sm-row gap-sm-5 text-center text-sm-start"
        >
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
        <Col xs="auto" className="text-center text-md-end mb-3 mb-md-5 mt-3">
          <p className="fw-bold fs-2">GALAXIO TRAVEL</p>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit,
            <br /> sed do eiusmod tempor.{" "}
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center justify-content-md-end my-4">
        <Col xs="auto" className="d-flex gap-2">
          <Image src="./socialMedia/instagram.png" />
          <Image src="./socialMedia/facebook.png" />
          <Image src="./socialMedia/linkedin.png" />
          <Image src="./socialMedia/twitter.png" />
        </Col>
      </Row>
      <Row className="text-center">
        <p className="m-0">Copyright © nazariikubik.com</p>
      </Row>
    </Container>
  );
};
