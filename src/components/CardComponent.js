import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

const CardComponent = ({ title, description, route }) => {
  return (
    <Card className="w-75">
      <Card.Img variant="top" src="https://picsum.photos/300/170" />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="dark" href={route} block>
          Ver Proyecto
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardComponent;
