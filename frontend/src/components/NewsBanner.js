import "../App.css";
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function NewsBanner({ title, imgUrl, author, date }) {
  return (
    <Jumbotron
      fluid
      className="d-flex align-items-end bg-cover pl-0"
      style={{
        position: "relative",
        backgroundImage: `url(${imgUrl})`,
        height: 400,
      }}
    >
      <div
        className="px-5 py-4 text-white"
        style={{ backgroundColor: "black" }}
      >
        <h1>{title}</h1>
        <p>Encargado: {author}</p>
        <p>Fecha: {date}</p>
      </div>
    </Jumbotron>
  );
}

export default NewsBanner;
