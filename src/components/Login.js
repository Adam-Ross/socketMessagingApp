import React, { useRef } from "react";
import { Container, Form } from "react-bootstrap";

const Login = () => {
  const idRef = useRef("");

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form className="w-100">
        <Form.Group>
          <Form.Label>Enter your id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
