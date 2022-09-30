import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export const DealsElement = () => {
  return (
    <Col className="d-flex mt-5 p-5 gap-5 deals__wrapper">
      <div className="">
        <p className="deals__sectionTitle">Vacations on Uranus</p>
        <p className="deals__secondaryText">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit, sed do eiusmod tempor.
        </p>
        <Button className="deals__button">Order Now</Button>
      </div>
      <Image src="./pluto.png" />
    </Col>
  );
};
