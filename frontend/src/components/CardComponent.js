import RoundedButton from "./RoundedButton";
import Card from "react-bootstrap/Card";
import React from "react";
import { useHistory } from "react-router-dom";

const CardComponent = ({ title, description, route }) => {
  let history = useHistory();

  const goToRoute = (e) => {
    e.preventDefault();
    history.push(`${route}`);
  };

  return (
    <Card className="border-0 card-shadow pb-2 mt-2" style={{ width: "93%" }}>
      <Card.Img variant="top" src="https://picsum.photos/300/170" />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-top-0">
        <RoundedButton onClick={goToRoute}>Ver Proyecto</RoundedButton>
      </Card.Footer>
    </Card>
  );
};

export default CardComponent;
