import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { About } from "./pages/About";
import { AboutUs } from "./pages/AboutUs";
import { Deals } from "./pages/Deals";
import { Footer } from "./pages/Footer";
import { Header } from "./pages/Header";
import { Ships } from "./pages/Ships";
import { SignUp } from "./pages/SignUp";
import { Testemonials } from "./pages/Testemonials";

function App() {
  return (
    <div className="d-flex flex-column" style={{ gap: "200px" }}>
      <Header />
      <About />
      <AboutUs />
      <Deals />
      <Ships />
      <Testemonials />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
