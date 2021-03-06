import { BsTrash } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import React from "react";
import {
  isLoggedIn,
  isTeacher,
  isAdmin,
  isSuperAdmin,
  isSocioComercial,
  isSocioTecnologico,
  isInvestigator,
  isStudent,
} from "./Util/auth";
import RoundedButton from "./RoundedButton";
import { useHistory } from "react-router-dom";

const CardComponent = ({
  title,
  description,
  route,
  type,
  img,
  variant,
  deleteHandler,
  id
}) => {
  let history = useHistory();

  const goToRoute = (e) => {
    e.preventDefault();
    history.push(`${route}`);
  };

  let button;
  if (
    isLoggedIn() &&
    ( isAdmin() ||
      isSuperAdmin())
  ) {
    button = (
      <RoundedButton type="redBtn" onClick={(e) => {deleteHandler(id)}}>
        <BsTrash />
      </RoundedButton>
    );
  }

  return (
    <Card
      className="border-0 card-shadow pb-2 mt-2 mr-3"
      style={{ width: "93%" }}
    >
      <Card.Img variant="top" src={img} alt="project-image" />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-top-0">
        <RoundedButton onClick={goToRoute} type="blackBtn">
          Ver {type}
        </RoundedButton>
        {variant === "delete" ? button : ""}
      </Card.Footer>
    </Card>
  );
};

export default CardComponent;
