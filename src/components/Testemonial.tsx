import React from "react";
import { Col, Image } from "react-bootstrap";

export const Testemonial = () => {
  return (
    <Col className="deals__wrapper p-3 white m-3">
      <div className="d-flex gap-3 m-2">
        <Image src="./alien.png" style={{ width: "60px", height: "60px" }} />
        <div>
          <p className="m-0 fw-bolder">Gishir Katika</p>
          <p className="m-0">Outsourcer</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
    </Col>
  );
};
