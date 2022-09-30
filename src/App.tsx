import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { About } from "./pages/About";
import { AboutUs } from "./pages/AboutUs";
import { Deals } from "./pages/Deals";
import { Header } from "./pages/Header";

function App() {
  return (
    <div className="d-flex flex-column" style={{ gap: "200px" }}>
      <Header />
      <About />
      <AboutUs />
      <Deals />
    </div>
  );
}

export default App;
