import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Navigation } from "../components/Navigation";

export const Header = () => {
  return (
    <Container>
      <Navigation />
      <Row className="d-flex flex-column header  flex-md-row">
        <Col>
          <Image src="./Mars.png" fluid />
        </Col>
        <Col className="d-flex flex-column justify-content-center  text-center text-md-end mt-5 mt-md-5 ">
          <p className="fw-bolder mb-0 header__title1 text-uppercase">
            Travel through
          </p>
          <p className="fw-bolder mb-0 header__title2 text-uppercase">
            Galaxies
          </p>
          <p className="fw-bolder mb-0 header__title3 pb-1 text-uppercase">
            Cheap
          </p>
          <p className="header__secondaryText mt-4">
            When it comes to inter-cosmic travels, than we are <br />
            your safest and best choice
          </p>
        </Col>
      </Row>
    </Container>
  );
};
