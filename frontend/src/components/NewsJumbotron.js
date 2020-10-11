import Button from "./WhiteButton";
import "./css/NewsJumbotron.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

const JumbotronComponent = ({ title, description, route, imgUrl }) => {
  const divStyle = {
    color: "white",
    backgroundImage: "url(" + imgUrl + ")",
    borderRadius: 0,
  };
  return (
    <Container fluid>
      <Row>
        <Col className="colsText">
          <div className="newsInfo">
            <h1>{title}</h1>
            <p>{description}</p>
            <Button href={route}>LEER MÁS</Button>
          </div>
        </Col>
        <Col className="colsImage" xs={8} style={divStyle}></Col>
      </Row>
    </Container>
  );
};
export default JumbotronComponent;
