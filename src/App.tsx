import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function App() {
  return (
    <>
      <Container>
        <Row className="p-4 d-flex align-items-center">
          <Col md="auto">
            <h1 className="header__logo">GALAXIO TRAVEL</h1>
          </Col>

          <Col className="d-flex justify-content-center">
            <Nav className="header__navItems flex-grow-1 justify-content-around ">
              <Nav.Item>Home</Nav.Item>
              <Nav.Item>About</Nav.Item>
              <Nav.Item>Testemonials</Nav.Item>
              <Nav.Item>Blogs</Nav.Item>
            </Nav>
          </Col>
          <Col md="2" className="d-flex justify-content-end">
            <Button className="header__button">Book Now</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
