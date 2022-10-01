import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

export const Navigation = () => {
  return (
    <>
      <Navbar className="mb-5" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="navigation__logo fs-1" href="#home">
            GALAXIO TRAVEL
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ border: "none" }}
          />
          <Navbar.Collapse
            className="d-lg-flex justify-content-between"
            id="responsive-navbar-nav"
          >
            <Nav className="me-3 text-center flex-grow-1 justify-content-around">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#testemonials">Testemonials</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
            </Nav>
            <Nav>
              <Button className="fs-5 navigation__button">Book Now</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
