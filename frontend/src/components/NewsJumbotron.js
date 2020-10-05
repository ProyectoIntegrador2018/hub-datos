import Button from "./WhiteButton";
import "./css/NewsJumbotron.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import React from "react";

const JumbotronComponent = ({ title, description, route, imgUrl }) => {
  const divStyle = {
    color: "white",
    backgroundImage: "url(" + imgUrl + ")",
    borderRadius:0,
  };
  return (
    <Jumbotron className="jmbHome" style={divStyle}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>
        <Button href={route}>LEER MÁS</Button>
      </p>
    </Jumbotron>
  );
};
export default JumbotronComponent;
