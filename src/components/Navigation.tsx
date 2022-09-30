import React from "react";
import { Button, Nav } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

export const Navigation = () => {
  return (
    <>
      <Row className="p-4 mb-5 d-flex flex-column flex-lg-row align-items-center">
        <Col md="auto">
          <h1 className="navigation__logo">GALAXIO TRAVEL</h1>
        </Col>
        <Col className="d-flex justify-content-center">
          <Nav className="navigation__navItems flex-grow-1 justify-content-around ">
            <Nav.Item>Home</Nav.Item>
            <Nav.Item>About</Nav.Item>
            <Nav.Item>Testemonials</Nav.Item>
            <Nav.Item>Blogs</Nav.Item>
          </Nav>
        </Col>
        <Col md="2" className="d-flex justify-content-end">
          <Button className="navigation__button">Book Now</Button>
        </Col>
      </Row>
    </>
  );
};
