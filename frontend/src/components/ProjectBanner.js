import "../App.css";
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function ProjectBanner({ title, imgUrl, author, date }) {
  return (
    <Jumbotron
      fluid
      className="d-flex align-items-end bg-cover pl-0"
      style={{
        position: "relative",
        backgroundImage: `url(${imgUrl})`,
        height: 400,
      }}
      data-testid="imagen-del-proyecto"
    >
      <div
        className="px-5 py-4 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, .75)" }}
      >
        <h1>{title}</h1>
        <p>Encargado: {author}</p>
        {date ? <p className="font-weight-bold">Fecha: {date}</p> : ""}
      </div>
    </Jumbotron>
  );
}

export default ProjectBanner;
