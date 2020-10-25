import { BsTrash } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import React from "react";
import RoundedButton from "./RoundedButton";
import { useHistory } from "react-router-dom";

const CardComponent = ({ title, description, route, type, img, variant }) => {
  let history = useHistory();

  const goToRoute = (e) => {
    e.preventDefault();
    history.push(`${route}`);
  };

  return (
    <Card
      className="border-0 card-shadow pb-2 mt-2 mr-3"
      style={{ width: "93%" }}
    >
      <Card.Img variant="top" src={img} alt="project-image"/>
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-top-0">
        <RoundedButton onClick={goToRoute} type="blackBtn">
          Ver {type}
        </RoundedButton>
        {variant === "delete" ? (
          <RoundedButton type="redBtn">
            <BsTrash />
          </RoundedButton>
        ) : (
          ""
        )}
      </Card.Footer>
    </Card>
  );
};

export default CardComponent;
