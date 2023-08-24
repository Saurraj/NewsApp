import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container style={{ marginTop: "90px" }}>
      <Row>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Hello Everyone, My Name is Saurabh Raj ,This WebApp is made with
            Help of React js which can be used to read News from Various
            Categories.
          </p>
        </Col>
        {/* <Col md={6}>
          <Image
            src="https://via.placeholder.com/500x300"
            alt="placeholder"
            fluid
          />
        </Col> */}
      </Row>
      <hr />
      <Row>
        <Col md={4}>
          <h3>Our Mission</h3>
          <p>
            My mission is to make this website more useful by appyling all the
            things that i learn in React js.
          </p>
        </Col>
        <Col md={4}>
          <h3>Our Vision</h3>
          <p>
            To make this App UI so good that from a small project it can be used
            a useful News Website.
          </p>
        </Col>
        <Col md={4}>
          <h3>Our Values</h3>
          <ul>
            <li>Any Suggestions Please write to us</li>
            <li>Any type of feedback is Appreciated</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
