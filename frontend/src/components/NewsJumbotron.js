import "./css/NewsJumbotron.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React from "react";
import RoundedButton from "./RoundedButton";
import Row from "react-bootstrap/Row";

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
            <RoundedButton type="whiteBtn">LEER MÁS</RoundedButton>
          </div>
        </Col>
        <Col className="colsImage" xs={8} style={divStyle}></Col>
      </Row>
    </Container>
  );
};
export default JumbotronComponent;
