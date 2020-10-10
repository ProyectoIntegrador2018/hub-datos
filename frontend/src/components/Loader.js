import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Spinner animation="grow" variant="dark" />
      </Row>
    </Container>
  );
};

export default Loading;
